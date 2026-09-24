"""
WEBSITE ĐIỀU HÀNH & CÔNG KHAI DỮ LIỆU LÂM NGHIỆP - CHI CỤC KIỂM LÂM LÀO CAI
Tỉnh Lào Cai
Chạy trên nền tảng Streamlit
Căn cứ: Quyết định số 537/QĐ-UBND ngày 27/02/2026 của UBND tỉnh Lào Cai
"""

import json
import streamlit as st
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from pathlib import Path
from data_forestry import (
    TONG_QUAN,
    MUC_DICH_SU_DUNG,
    CHU_QUAN_LY,
    HAT_KIEM_LAM,
    DANH_SACH_99_XA,
    VUNG_TRONG_DIEM,
    DANH_MUC_TTHC
)

# Cấu hình trang Streamlit
st.set_page_config(
    page_title="Chi Cục Kiểm Lâm Lào Cai - Hệ Thống Điều Hành & Dữ Liệu Lâm Nghiệp",
    page_icon="🌲",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS cho phong cách Kiểm lâm hiện đại
st.markdown("""
<style>
    /* Ẩn bớt footer mặc định của Streamlit */
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    
    /* Header & Branding */
    .main-header {
        background: linear-gradient(135deg, #0d3b1e 0%, #1b5e20 100%);
        padding: 24px;
        border-radius: 12px;
        color: white;
        margin-bottom: 20px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .main-header h1 {
        color: #ffffff;
        font-size: 1.85rem;
        font-weight: 800;
        margin-bottom: 4px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    .main-header p {
        color: #bbf7d0;
        font-size: 1rem;
        margin: 0;
    }
    
    /* Thẻ KPI */
    .metric-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        padding: 16px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        text-align: center;
    }
    .metric-val {
        font-size: 1.8rem;
        font-weight: 800;
        color: #1b5e20;
        line-height: 1.1;
    }
    .metric-lbl {
        font-size: 0.9rem;
        font-weight: 700;
        color: #334155;
        margin-top: 6px;
    }
    .metric-sub {
        font-size: 0.78rem;
        color: #64748b;
        margin-top: 2px;
    }
    
    /* Box thông báo */
    .info-box {
        background: #f0fdf4;
        border-left: 4px solid #16a34a;
        padding: 12px 16px;
        border-radius: 6px;
        font-size: 0.9rem;
        color: #14532d;
        margin-bottom: 16px;
    }
</style>
""", unsafe_allow_html=True)

# SIDEBAR: Điều hướng và bộ lọc toàn hệ thống
with st.sidebar:
    logo_file = Path(__file__).parent / "images" / "logo_kiem_lam.png"
    if logo_file.exists():
        st.image(str(logo_file), width=75)
    st.title("CHI CỤC KIỂM LÂM")
    st.markdown("**Tỉnh Lào Cai**")
    st.markdown("---")
    
    menu = st.radio(
        "CHỌN PHÂN HỆ ĐIỀU HÀNH:",
        [
            "🏠 1. Tổng quan điều hành",
            "🌲 2. Dữ liệu rừng (99 Xã/Phường)",
            "🔥 3. Cảnh cháy rừng & Vi phạm",
            "🏛️ 4. Tổ chức & 11 Hạt Kiểm lâm",
            "📑 5. Thủ tục hành chính (49 TTHC)",
            "⚖️ 6. Văn bản pháp luật & QĐ 537"
        ]
    )
    
    st.markdown("---")
    st.markdown("### 📌 Thông tin dữ liệu")
    st.markdown("- **Căn cứ:** QĐ 537/QĐ-UBND (27/02/2026)")
    st.markdown("- **Năm số liệu:** 2025 (Cập nhật T5/2026)")
    st.markdown("- **Diện tích tự nhiên:** 1.325.675 ha")
    st.markdown("- **Diện tích rừng:** 860.494,3 ha")
    st.markdown("- **Độ che phủ toàn tỉnh:** **61,5%**")
    
    st.markdown("---")
    st.markdown("📞 **Đường dây nóng:**  \n**0214.3820.130** (Trực ban 24/7)")

# HEADER CHUNG
st.markdown("""
<div class="main-header">
    <h1>Hệ Thống Thông Tin Điều Hành & Dữ Liệu Lâm Nghiệp</h1>
    <p>Chi cục Kiểm lâm Lào Cai(Quản lý 99 Xã, Phường & 11 Hạt Kiểm lâm)</p>
</div>
""", unsafe_allow_html=True)

# ==============================================================================
# PHÂN HỆ 1: TỔNG QUAN ĐIỀU HÀNH (DASHBOARD)
# ==============================================================================
if menu == "🏠 1. Tổng quan điều hành":
    st.markdown("### 📊 Số liệu lâm nghiệp toàn tỉnh(Căn cứ Quyết định số 537/QĐ-UBND)")
    
    kpi1, kpi2, kpi3, kpi4 = st.columns(4)
    with kpi1:
        st.markdown("""
        <div class="metric-card">
            <div class="metric-val">860.494,3 ha</div>
            <div class="metric-lbl">Diện tích đất có rừng</div>
            <div class="metric-sub">DT tự nhiên: 1.325.675 ha</div>
        </div>
        """, unsafe_allow_html=True)
    with kpi2:
        st.markdown("""
        <div class="metric-card">
            <div class="metric-val">466.715,6 ha</div>
            <div class="metric-lbl">Rừng tự nhiên (54,24%)</div>
            <div class="metric-sub">Rừng gỗ: 387.846,5 ha</div>
        </div>
        """, unsafe_allow_html=True)
    with kpi3:
        st.markdown("""
        <div class="metric-card">
            <div class="metric-val">393.778,7 ha</div>
            <div class="metric-lbl">Rừng trồng</div>
            <div class="metric-sub">Đã thành rừng: 347.919,6 ha</div>
        </div>
        """, unsafe_allow_html=True)
    with kpi4:
        st.markdown("""
        <div class="metric-card">
            <div class="metric-val" style="color:#15803d;">61,5%</div>
            <div class="metric-lbl">Tỷ lệ che phủ rừng</div>
            <div class="metric-sub">Đủ tiêu chí: 814.635,2 ha</div>
        </div>
        """, unsafe_allow_html=True)
        
    st.markdown("<br>", unsafe_allow_html=True)
    
    col_map, col_gauge = st.columns([1.3, 0.7])
    
    with col_map:
        st.markdown("#### 🗺️ Bản đồ chuyên đề lâm nghiệp tỉnh Lào Cai")
        sub_tab_img, sub_tab_thematic, sub_tab_gis = st.tabs([
            "🗺️ BĐ Hiện trạng rừng",
            "📊 BĐ Chuyên đề",
            "🛰️ BĐ Tương tác 99 Xã/Phường"
        ])
        
        with sub_tab_img:
            map_file = Path(__file__).parent / "images" / "ban_do_hien_trang.png"
            if map_file.exists():
                st.image(str(map_file), caption="Bản đồ Hiện trạng Lâm nghiệp tỉnh Lào Cai - Năm 2025 theo QĐ 537/QĐ-UBND", use_container_width=True)
                with st.expander("📌 Xem Chú giải & Cơ cấu hiện trạng rừng"):
                    st.markdown("""
                    - **Rừng tự nhiên (Xanh đậm):** 466.715,6 ha (chiếm 54,24% diện tích có rừng).
                    - **Rừng trồng (Xanh mạ):** 393.807,9 ha (chiếm 45,76% diện tích có rừng).
                    - **Đất lâm nghiệp khác (Vàng nhạt):** 133.926 ha.
                    - **Ranh giới xã phường:** Phân định ranh giới 99 xã, phường toàn tỉnh.
                    - **Ranh giới tỉnh:** Tiếp giáp các tỉnh Lai Châu, Điện Biên, Sơn La, Phú Thọ, Tuyên Quang, Hà Giang và Trung Quốc.
                    """)
            else:
                st.warning("Chưa tìm thấy tệp ảnh `images/ban_do_hien_trang.png`.")
                
        with sub_tab_thematic:
            opt_thematic = st.radio("Chọn bản đồ chuyên đề:", ["🏛️ Địa bàn 11 Hạt Kiểm lâm", "🌲 Tỷ lệ che phủ rừng (%)", "🔥 Dự báo nguy cơ cháy rừng (FWI)"], horizontal=True)
            if opt_thematic == "🏛️ Địa bàn 11 Hạt Kiểm lâm":
                f_hat = Path(__file__).parent / "images" / "ban_do_11_hat_kl.png"
                if f_hat.exists():
                    st.image(str(f_hat), caption="Bản đồ Phân bổ Địa bàn 11 Hạt Kiểm lâm (99 Xã, Phường theo QĐ 15/QĐ-CCKL)", use_container_width=True)
            elif opt_thematic == "🌲 Tỷ lệ che phủ rừng (%)":
                f_cp = Path(__file__).parent / "images" / "ban_do_che_phu_rung.png"
                if f_cp.exists():
                    st.image(str(f_cp), caption="Bản đồ Phân hạng Tỷ lệ Che phủ Rừng theo 99 Xã, Phường", use_container_width=True)
            else:
                f_fire = Path(__file__).parent / "images" / "ban_do_chay_rung.png"
                if f_fire.exists():
                    st.image(str(f_fire), caption="Bản đồ Dự báo Nguy cơ Cháy rừng Hôm nay theo 5 Cấp (Quy chuẩn FWI)", use_container_width=True)

        with sub_tab_gis:
            geojson_file = Path(__file__).parent / "data" / "ranh_gioi_99_xa.geojson"
            if geojson_file.exists():
                try:
                    with open(geojson_file, encoding='utf-8') as f:
                        gj_data = json.load(f)
                    
                    df_99_gis = pd.DataFrame(DANH_SACH_99_XA)
                    
                    # Assigned Hạt KL lookup
                    assigned_hat_map = {
                        'Hạt KL Bảo Yên': ['Bảo Yên', 'Bảo Hà', 'Nghĩa Đô', 'Phúc Khánh', 'Xuân Hòa', 'Thượng Hà', 'Lâm Giang', 'Khánh Hòa'],
                        'Hạt KL Bảo Thắng': ['Bảo Thắng', 'Xuân Quang', 'Phong Hải', 'Gia Phú', 'Tằng Loỏng', 'Cốc Lầu', 'Bảo Nhai', 'Mường Bo'],
                        'Hạt KL Bắc Hà': ['Bắc Hà', 'Bản Liền', 'Tả Củ Tỷ', 'Lùng Phình', 'Pha Long', 'Cao Sơn', 'Bản Lầu', 'Mường Khương', 'Si Ma Cai', 'Sín Chéng'],
                        'Hạt KL Bát Xát': ['Bát Xát', 'Bản Xèo', 'Trịnh Tường', 'A Mú Sung', 'Tả Phìn', 'Ngũ Chỉ Sơn', 'P. Sa Pa', 'Hợp Thành', 'P. Lào Cai', 'Cốc San', 'P. Cam Đường', 'Tả Van', 'Bản Hồ'],
                        'Hạt KL Văn Bàn': ['Văn Bàn', 'Khánh Yên', 'Võ Lao', 'Chiềng Ken', 'Dương Quỳ', 'Nậm Chày', 'Châu Quế'],
                        'Hạt KL Trấn Yên': ['Trấn Yên', 'Hưng Khánh', 'Lương Thịnh', 'Việt Hồng', 'Quy Mông', 'Xuân Ái', 'Phong Dụ Hạ', 'Phong Dụ Thượng', 'Đông Cuông', 'Tân Hợp', 'Mậu A', 'Mỏ Vàng', 'P. Yên Bái', 'P. Âu Lâu', 'P. Nam Cường', 'P. Văn Phú'],
                        'Hạt KL Lục Yên': ['Lâm Thượng', 'Tân Lĩnh', 'Lục Yên', 'Mường Lai', 'Phúc Lợi', 'Bảo Ái', 'Yên Bình', 'Thác Bà', 'Yên Thành', 'Cảm Nhân'],
                        'Hạt KL Nghĩa Lộ': ['Hạnh Phúc', 'Tà Xi Láng', 'Phình Hồ', 'Trạm Tấu', 'Gia Hội', 'Sơn Lương', 'Liên Sơn', 'Văn Chấn', 'Cát Thịnh', 'Thượng Bằng La', 'Nghĩa Tâm', 'Chấn Thịnh', 'P. Trung Tâm', 'P. Cầu Thia', 'P. Nghĩa Lộ'],
                        'Hạt KL Mù Cang Chải': ['Mù Cang Chải', 'Chế Tạo', 'Lao Chải', 'Khao Mang', 'Púng Luông', 'Nậm Có', 'Tú Lệ'],
                        'Hạt KL KBT Hoàng Liên - Văn Bàn': ['Minh Lương', 'Nậm Xé'],
                        'Hạt KL Khu bảo tồn Bát Xát': ['Mường Hum', 'Dền Sáng', 'Y Tý'],
                    }
                    xa_to_hat_gis = {x: h for h, lst in assigned_hat_map.items() for x in lst}
                    df_99_gis['hat_kl'] = df_99_gis['ten'].map(xa_to_hat_gis).fillna('Khác')
                    
                    cap_v_set = {'Tả Van', 'Chế Tạo', 'Lao Chải', 'Khao Mang', 'Púng Luông', 'Nậm Có', 'Tú Lệ', 'Tà Xi Láng', 'Phình Hồ', 'Trạm Tấu', 'Bản Hồ', 'Nậm Xé', 'Y Tý', 'Dền Sáng'}
                    cap_iv_set = {'Mù Cang Chải', 'Hạnh Phúc', 'Gia Hội', 'Sơn Lương', 'Liên Sơn', 'Văn Chấn', 'Cát Thịnh', 'Thượng Bằng La', 'Nghĩa Tâm', 'Chấn Thịnh', 'Minh Lương', 'Mường Hum', 'Dương Quỳ', 'Nậm Chày', 'Khánh Yên'}
                    cap_ii_set = {'P. Lào Cai', 'P. Cam Đường', 'P. Yên Bái', 'P. Nam Cường', 'P. Âu Lâu', 'P. Văn Phú', 'P. Sa Pa', 'P. Nghĩa Lộ', 'P. Cầu Thia', 'P. Trung Tâm'}
                    
                    def get_fire_level(name):
                        if name in cap_v_set: return 'Cấp V (Cực kỳ nguy hiểm)'
                        elif name in cap_iv_set: return 'Cấp IV (Nguy hiểm)'
                        elif name in cap_ii_set: return 'Cấp II (Trung bình)'
                        else: return 'Cấp III (Cao)'
                    
                    df_99_gis['cap_chay'] = df_99_gis['ten'].apply(get_fire_level)
                    
                    map_mode = st.radio("Chế độ tô màu bản đồ:", ["🏛️ 11 Hạt Kiểm lâm", "🌲 Tỷ lệ che phủ rừng (%)", "🔥 Nguy cơ cháy rừng"], horizontal=True)
                    
                    choro_fn = getattr(px, 'choropleth_map', getattr(px, 'choropleth_mapbox', None))
                    
                    if map_mode == "🏛️ 11 Hạt Kiểm lâm":
                        hat_color_map = {
                            'Hạt KL Bát Xát': '#2563eb',
                            'Hạt KL Khu bảo tồn Bát Xát': '#06b6d4',
                            'Hạt KL KBT Hoàng Liên - Văn Bàn': '#ec4899',
                            'Hạt KL Bảo Thắng': '#f97316',
                            'Hạt KL Bắc Hà': '#a855f7',
                            'Hạt KL Văn Bàn': '#10b981',
                            'Hạt KL Bảo Yên': '#eab308',
                            'Hạt KL Trấn Yên': '#0284c7',
                            'Hạt KL Lục Yên': '#84cc16',
                            'Hạt KL Mù Cang Chải': '#ef4444',
                            'Hạt KL Nghĩa Lộ': '#8b5cf6'
                        }
                        fig_map = choro_fn(
                            df_99_gis, geojson=gj_data, locations="ten", featureidkey="properties.xa",
                            color="hat_kl",
                            color_discrete_map=hat_color_map,
                            hover_name="ten",
                            hover_data={"hat_kl": True, "che_phu": ":.1f%", "dt_rung": ":,.1f", "cap_chay": True},
                            zoom=7.1, center={"lat": 22.05, "lon": 104.30},
                            height=460
                        )
                    elif map_mode == "🌲 Tỷ lệ che phủ rừng (%)":
                        fig_map = choro_fn(
                            df_99_gis, geojson=gj_data, locations="ten", featureidkey="properties.xa",
                            color="che_phu", color_continuous_scale="Greens",
                            hover_name="ten",
                            hover_data={"hat_kl": True, "che_phu": ":.1f%", "dt_rung": ":,.1f", "cap_chay": True},
                            zoom=7.1, center={"lat": 22.05, "lon": 104.30},
                            height=460
                        )
                    else:
                        fig_map = choro_fn(
                            df_99_gis, geojson=gj_data, locations="ten", featureidkey="properties.xa",
                            color="cap_chay",
                            color_discrete_map={
                                "Cấp V (Cực kỳ nguy hiểm)": "#dc2626",
                                "Cấp IV (Nguy hiểm)": "#ea580c",
                                "Cấp III (Cao)": "#eab308",
                                "Cấp II (Trung bình)": "#16a34a"
                            },
                            hover_name="ten",
                            hover_data={"hat_kl": True, "che_phu": ":.1f%", "dt_rung": ":,.1f", "cap_chay": True},
                            zoom=7.1, center={"lat": 22.05, "lon": 104.30},
                            height=460
                        )
                    
                    if hasattr(fig_map.layout, 'mapbox'):
                        fig_map.update_layout(mapbox_style="carto-positron", margin={"r":0,"t":0,"l":0,"b":0})
                    elif hasattr(fig_map.layout, 'map'):
                        fig_map.update_layout(map_style="carto-positron", margin={"r":0,"t":0,"l":0,"b":0})
                    else:
                        fig_map.update_layout(margin={"r":0,"t":0,"l":0,"b":0})
                    st.plotly_chart(fig_map, use_container_width=True)
                    st.caption("* Bản đồ phân vùng tương tác 99 xã, phường. Nhấp rê chuột để xem Hạt KL quản lý, độ che phủ và cấp cháy.")
                except Exception as e:
                    st.error(f"Lỗi tải bản đồ tương tác: {e}")
            else:
                st.info("Đang nạp dữ liệu không gian 99 xã...")
        
    with col_gauge:
        st.markdown("#### 🔥 Chỉ số cảnh báo cháy rừng (Hôm nay)")
        
        # Vẽ đồng hồ Gauge FWI
        fig_gauge = go.Figure(go.Indicator(
            mode = "gauge+number",
            value = 36.8,
            domain = {'x': [0, 1], 'y': [0, 1]},
            title = {'text': "FWI Toàn Tỉnh: 36.8 (CẤP CAO)", 'font': {'size': 16, 'color': '#ea580c'}},
            gauge = {
                'axis': {'range': [None, 60], 'tickwidth': 1, 'tickcolor': "darkblue"},
                'bar': {'color': "#1e293b"},
                'bgcolor': "white",
                'borderwidth': 2,
                'bordercolor': "gray",
                'steps': [
                    {'range': [0, 10], 'color': '#2e7d32'},
                    {'range': [10, 20], 'color': '#689f38'},
                    {'range': [20, 30], 'color': '#fbc02d'},
                    {'range': [30, 40], 'color': '#f57c00'},
                    {'range': [40, 60], 'color': '#d32f2f'}
                ]
            }
        ))
        fig_gauge.update_layout(height=260, margin={"r":10,"t":40,"l":10,"b":10})
        st.plotly_chart(fig_gauge, use_container_width=True)
        
        st.markdown("""
        **Phân bố 99 xã theo 5 cấp nguy cơ:**
        - 🔴 **Cấp V (Cực kỳ nguy hiểm):** **14 xã** (*Tả Van, Chế Tạo, Nậm Có, Púng Luông...*)
        - 🟠 **Cấp IV (Nguy hiểm):** **15 xã** (*Bản Hồ, Nậm Xé, Gia Hội, Sơn Lương...*)
        - 🟡 **Cấp III (Cao):** **60 xã**
        - 🟢 **Cấp II (Trung bình):** **10 xã** (*Các phường nội thị*)
        - 🔵 **Cấp I (Thấp):** **00 xã**
        """)
        
    st.markdown("---")
    
    col_bar, col_pie = st.columns(2)
    with col_bar:
        st.markdown("#### 📊 Cơ cấu 4 loại rừng theo mục đích sử dụng (Biểu 1)")
        df_mdsd = pd.DataFrame(MUC_DICH_SU_DUNG)
        fig_bar = px.bar(
            df_mdsd,
            x="tong_dien_tich",
            y="loai_rung",
            orientation="h",
            text="tong_dien_tich",
            color="loai_rung",
            color_discrete_map={"Rừng sản xuất": "#ffc107", "Rừng phòng hộ": "#0d6efd", "Rừng đặc dụng": "#198754", "Mục đích khác": "#fd7e14"}
        )
        fig_bar.update_traces(texttemplate='%{text:,.1f} ha', textposition='outside')
        fig_bar.update_layout(showlegend=False, height=290, margin={"r":40,"t":20,"l":10,"b":20}, xaxis_title="Diện tích (ha)", yaxis_title="")
        st.plotly_chart(fig_bar, use_container_width=True)
        
    with col_pie:
        st.markdown("#### 🥧 Tỷ trọng diện tích theo chủ quản lý (Biểu 2)")
        df_cql = pd.DataFrame(CHU_QUAN_LY)
        fig_pie = px.pie(
            df_cql,
            values="tong_dien_tich",
            names="chu_quan_ly",
            hole=0.45,
            color_discrete_sequence=px.colors.qualitative.Pastel
        )
        fig_pie.update_layout(height=290, margin={"r":10,"t":10,"l":10,"b":10})
        st.plotly_chart(fig_pie, use_container_width=True)

# ==============================================================================
# PHÂN HỆ 2: DỮ LIỆU RỪNG (TRA CỨU 99 XÃ & VÙNG KINH TẾ TRỌNG ĐIỂM)
# ==============================================================================
elif menu == "🌲 2. Dữ liệu rừng (99 Xã/Phường)":
    st.markdown("### 🌲 Cơ Sở Dữ Liệu Lâm Nghiệp Toàn Diện")
    
    subtab1, subtab2, subtab3, subtab4 = st.tabs([
        "📋 Biểu 3: Toàn bộ 99 Xã/Phường",
        "📊 Biểu 1 & 2: Mục đích sử dụng & Chủ rừng",
        "🌿 Vùng kinh tế trọng điểm (Quế, Gỗ, Măng)",
        "🏞️ 11 Hạt Kiểm lâm & Đề án Du lịch sinh thái"
    ])
    
    with subtab1:
        st.markdown("#### 🏘️ Tra cứu số liệu hiện trạng rừng 99 xã, phường (Biểu 3 - QĐ 537)")
        df_xa = pd.DataFrame(DANH_SACH_99_XA)
        
        c_filter1, c_filter2 = st.columns([1, 2])
        with c_filter1:
            khu_vuc_list = ["-- Tất cả địa bàn --"] + sorted(list(df_xa["khu_vuc"].unique()))
            selected_kv = st.selectbox("Lọc theo địa bàn huyện/thị:", khu_vuc_list)
        with c_filter2:
            search_name = st.text_input("Tìm kiếm theo tên xã:", placeholder="Gõ tên xã (ví dụ: Tả Van, Chế Tạo, Mậu A, Phong Dụ...)")
            
        filtered_df = df_xa.copy()
        if selected_kv != "-- Tất cả địa bàn --":
            filtered_df = filtered_df[filtered_df["khu_vuc"] == selected_kv]
        if search_name:
            filtered_df = filtered_df[filtered_df["ten"].str.contains(search_name, case=False, na=False)]
            
        st.dataframe(
            filtered_df.rename(columns={
                "stt": "STT",
                "ten": "Tên Xã/Phường",
                "khu_vuc": "Địa bàn",
                "tong_dt": "DT Tự nhiên (ha)",
                "dt_rung": "DT Có rừng (ha)",
                "tu_nhien": "Rừng tự nhiên (ha)",
                "thanh_rung": "Rừng trồng (ha)",
                "chua_thanh_rung": "Chưa thành rừng (ha)",
                "dac_dung": "Rừng đặc dụng (ha)",
                "phong_ho": "Rừng phòng hộ (ha)",
                "san_xuat": "Rừng sản xuất (ha)",
                "che_phu": "Độ che phủ (%)"
            }),
            use_container_width=True,
            height=420
        )
        
        # Nút xuất file CSV
        csv_data = filtered_df.to_csv(index=False).encode('utf-8-sig')
        st.download_button(
            label="📥 Tải xuống dữ liệu bảng này (File CSV/Excel)",
            data=csv_data,
            file_name="Hien_Trang_Rung_Lao_Cai_99_Xa.csv",
            mime="text/csv"
        )
        
    with subtab2:
        st.markdown("#### 📑 Biểu 1: Phân loại theo mục đích sử dụng (QĐ 537)")
        st.dataframe(pd.DataFrame(MUC_DICH_SU_DUNG).rename(columns={
            "loai_rung": "Loại rừng",
            "tong_dien_tich": "Tổng diện tích (ha)",
            "ty_le": "Tỷ lệ (%)",
            "rung_tu_nhien": "Rừng tự nhiên (ha)",
            "da_thanh_rung": "Đã thành rừng (ha)",
            "chua_thanh_rung": "Chưa thành rừng (ha)"
        }), use_container_width=True)
        
        st.markdown("#### 👥 Biểu 2: Phân bố theo 8 nhóm chủ quản lý")
        st.dataframe(pd.DataFrame(CHU_QUAN_LY).rename(columns={
            "stt": "STT",
            "chu_quan_ly": "Chủ quản lý / Đối tượng",
            "tong_dien_tich": "Tổng diện tích (ha)",
            "rung_tu_nhien": "Rừng tự nhiên (ha)",
            "rung_trong": "Rừng trồng (ha)",
            "ty_le": "Tỷ lệ (%)"
        }), use_container_width=True)

    with subtab3:
        st.markdown("#### 🌿 5 Vùng kinh tế sinh thái lâm nghiệp trọng điểm toàn tỉnh")
        for v in VUNG_TRONG_DIEM:
            with st.expander(f"📌 {v['ten']} - Quy mô: {v['dien_tich']:,.0f} ha ({v['san_luong']})", expanded=True):
                st.markdown(f"- **Địa bàn tập trung:** {v['dia_ban']}")
                st.markdown(f"- **Cơ cấu giống cây trồng:** {v['loai_cay']}")
                st.markdown(f"- **Sản lượng hàng năm:** **{v['san_luong']}**")

    with subtab4:
        st.markdown("#### 🏢 Thông số Hạt Kiểm lâm khu vực")
        st.dataframe(pd.DataFrame(HAT_KIEM_LAM)[["id", "ten", "dia_ban", "tong_dt", "tu_nhien", "trong", "che_phu", "bien_che", "tru_so"]].rename(columns={
            "id": "Mã hạt",
            "ten": "Tên Hạt Kiểm lâm",
            "dia_ban": "Địa bàn phụ trách",
            "tong_dt": "DT Rừng (ha)",
            "tu_nhien": "Rừng tự nhiên (ha)",
            "trong": "Rừng trồng (ha)",
            "che_phu": "Độ che phủ (%)",
            "bien_che": "Biên chế CCVC",
            "tru_so": "Trụ sở"
        }), use_container_width=True)
        
        st.markdown("#### 🏞️ Đề án Du lịch sinh thái trong rừng đặc dụng & phòng hộ (QĐ 1382/QĐ-UBND)")
        st.markdown("- **Tổng số dự án phê duyệt:** **74 Dự án** với tổng diện tích cho thuê môi trường rừng **5.723,0 ha**.")
        st.markdown("- **Dự án cáp treo Fansipan (VQG Hoàng Liên):** Tiền thuê môi trường rừng đạt **9,871 tỷ đồng/năm**.")
        st.markdown("- **Dự án trọng điểm:** Khu DLST Thác Bạc - Đỉnh Đèo, Cột cờ Lũng Pô - Y Tý, Nậm Xé - Văn Bàn, Ruộng bậc thang Mù Cang Chải, hồ Thác Bà.")

# ==============================================================================
# PHÂN HỆ 3: Cảnh cháy rừng & Vi phạm
# ==============================================================================
elif menu == "🔥 3. Cảnh cháy rừng & Vi phạm":
    st.markdown("### 🔥 Cảnh cháy rừng & Vi phạm")
    
    col_hot, col_forecast = st.columns([1.2, 0.8])
    with col_hot:
        st.markdown("#### ⚠️ Các điểm nóng nguy cơ cháy rừng cao cần trực 24/24h")
        hotspots = [
            {"stt": 1, "xa": "Tả Van", "hat": "Hạt KL Sa Pa", "fwi": 42.1, "cap": "Cấp V - Rất cao", "nhiet_do": "28°C", "gio": "Tây Nam cấp 3"},
            {"stt": 2, "xa": "Chế Tạo", "hat": "Hạt KL Mù Cang Chải", "fwi": 41.5, "cap": "Cấp V - Rất cao", "nhiet_do": "29°C", "gio": "Tây cấp 3"},
            {"stt": 3, "xa": "Bản Hồ", "hat": "Hạt KL Sa Pa", "fwi": 40.5, "cap": "Cấp V - Rất cao", "nhiet_do": "29°C", "gio": "Tây Nam cấp 2"},
            {"stt": 4, "xa": "Nậm Xé", "hat": "Hạt KL KBT HL-VB", "fwi": 38.6, "cap": "Cấp IV - Cao", "nhiet_do": "31°C", "gio": "Đông Nam cấp 2"},
            {"stt": 5, "xa": "Púng Luông", "hat": "Hạt KL Mù Cang Chải", "fwi": 38.2, "cap": "Cấp IV - Cao", "nhiet_do": "27°C", "gio": "Cấp 2"},
            {"stt": 6, "xa": "Trạm Tấu", "hat": "Hạt KL Nghĩa Lộ", "fwi": 37.8, "cap": "Cấp IV - Cao", "nhiet_do": "30°C", "gio": "Cấp 2"},
            {"stt": 7, "xa": "Y Tý", "hat": "Hạt KL KBT Bát Xát", "fwi": 37.2, "cap": "Cấp IV - Cao", "nhiet_do": "25°C", "gio": "Đông Bắc cấp 2"}
        ]
        st.dataframe(pd.DataFrame(hotspots).rename(columns={
            "stt": "STT", "xa": "Xã/Phường", "hat": "Hạt KL phụ trách", "fwi": "Chỉ số FWI", "cap": "Cấp nguy cơ", "nhiet_do": "Nhiệt độ", "gio": "Gió"
        }), use_container_width=True)
        
    with col_forecast:
        st.markdown("#### ⛅ Dự báo FWI 3 ngày tới")
        st.info("📅 **25/09/2026:** FWI 37.5 (Cấp IV - Cao) - Mù Cang Chải, Sa Pa nắng hanh.")
        st.info("📅 **26/09/2026:** FWI 35.0 (Cấp IV - Cao) - Văn Bàn, Trạm Tấu cảnh giác cao độ.")
        st.success("📅 **27/09/2026:** FWI 24.2 (Cấp III - Trung bình) - Mưa rào diện rộng lưu vực sông Hồng.")
        
    st.markdown("---")
    st.markdown("#### ⚖️ Kết quả điều tra, xử lý vi phạm lâm nghiệp (5 tháng đầu năm 2026)")
    st.markdown("- **Tổng số vụ phát hiện và xử lý:** **53 vụ việc** (Chi cục Kiểm lâm xử lý 35 vụ; UBND cấp xã xử lý 18 vụ).")
    st.markdown("- **Phân loại hành vi:** Khai thác rừng trái phép: 11 vụ | Phá rừng, lấn chiếm rừng: 22 vụ | Vận chuyển lâm sản trái phép: 05 vụ.")
    st.markdown("- **Tang vật thu nộp:** Tịch thu **8,325 m³ gỗ**, 07 cưa xăng, 04 dao phát. Tổng số tiền nộp ngân sách: **274,85 triệu đồng**.")
    st.markdown("- **Giám định tư pháp:** Đã hoàn thành 04 vụ án hình sự về lâm nghiệp tại Mù Cang Chải, Mường Lai, Púng Luông.")

# ==============================================================================
# PHÂN HỆ 4: TỔ CHỨC & 11 HẠT KIỂM LÂM
# ==============================================================================
elif menu == "🏛️ 4. Tổ chức & 11 Hạt Kiểm lâm":
    st.markdown("### 🏛️ Sơ đồ cơ cấu tổ chức Chi cục Kiểm lâm Lào Cai")
    
    st.info("📌 **Tổng biên chế toàn tỉnh:** Giao **472 biên chế** (427 Công chức, 17 Viên chức, 28 Hợp đồng). Thực tế đang làm việc: **461 CCVC** (Trình độ Thạc sỹ 17,1%, Đại học 76,6%).")
    
    c_root1, c_root2, c_root3 = st.columns([1, 2, 1])
    with c_root2:
        st.success("👑 **LÃNH ĐẠO CHI CỤC KIỂM LÂM TỈNH LÀO CAI**  \n01 Chi cục trưởng: Nguyễn Việt Hà\n02 Phó Chi cục trưởng  \n*Số 333, đường Điện Biên, phường Yên Bái, tỉnh Lào Cai*")
        
    st.markdown("---")
    
    col_p, col_d, col_h = st.columns(3)
    with col_p:
        st.markdown("#### 📂 Các phòng nghiệp vụ")
        st.markdown("1. **Phòng Hành chính - Tổng hợp:** 19 biên chế (01 TP, 05 PP, 13 CC, 05 HĐ)")
        st.markdown("2. **Phòng Quản lý, bảo vệ rừng & BTTN:** 14 biên chế (01 TP, 04 PP, 09 CC)")
        st.markdown("3. **Phòng Sử dụng & Phát triển rừng:** 11 biên chế (01 TP, 03 PP, 07 CC)")
        st.markdown("4. **Phòng Điều tra, xử lý vi phạm:** 08 biên chế (01 TP, 07 CC)")
        
    with col_d:
        st.markdown("#### 🛡️ Đội Kiểm lâm cơ động, Ban quản lý rừng")
        st.markdown("1. **Đội KLCĐ & PCCCR số 1:** 13 biên chế (phụ trách khu vực phía Bắc)")
        st.markdown("2. **Đội KLCĐ & PCCCR số 2:** 10 biên chế (phụ trách khu vực phía Nam)")
        st.markdown("3. **VQG Hoàng Liên & VQG Bát Xát**")
        st.markdown("4. **Khu BTTN Hoàng Liên - Văn Bàn**")
        st.markdown("5. **Khu BTTN Nà Hẩu & KBT loài Mù Cang Chải**")
        
    with col_h:
        st.markdown("#### 🌲 Hạt Kiểm lâm khu vực")
        st.markdown("- Hạt KL Bát Xát (41 BC) ; Hạt KL Sa Pa")
        st.markdown("- Hạt KL Bảo Yên (29 BC) ; Hạt KL Bảo Thắng (28 BC)")
        st.markdown("- Hạt KL Bắc Hà (39 BC) ; Hạt KL Văn Bàn (38 BC)")
        st.markdown("- Hạt KL Trấn Yên (49 BC) ; Hạt KL Nghĩa Lộ (42 BC)")
        st.markdown("- Hạt KL Lục Yên (34 BC) ; Hạt KL Mù Cang Chải (25 BC)")
        st.markdown("- Hạt KL KBT Bát Xát (09 BC) | KBT HL-VB (11 BC)")

# ==============================================================================
# PHÂN HỆ 5: THỦ TỤC HÀNH CHÍNH (49 TTHC)
# ==============================================================================
elif menu == "📑 5. Thủ tục hành chính (49 TTHC)":
    st.markdown("### 📑 Theo dõi thủ tục hành chính")
    
    t1, t2, t3, t4 = st.columns(4)
    t1.metric("Hồ sơ tiếp nhận", "20 hồ sơ")
    t2.metric("Đã giải quyết", "18 hồ sơ", "90%")
    t3.metric("Đang giải quyết", "02 hồ sơ")
    t4.metric("Quá hạn", "00 hồ sơ", "0%")
    
    st.markdown("---")
    
    tab_lookup, tab_list = st.tabs(["🔍 Tra cứu hồ sơ đang giải quyết", "📋 Danh mục 49 TTHC tập trung cấp Bộ"])
    
    with tab_lookup:
        c_search, c_btn = st.columns([3, 1])
        with c_search:
            code = st.text_input("Nhập mã hồ sơ TTHC để tra cứu tiến độ:", value="HSC123456", placeholder="Ví dụ: HSC123456, HSC123457...")
        with c_btn:
            st.markdown("<br>", unsafe_allow_html=True)
            st.button("Tra cứu hồ sơ")
            
        if code.upper() == "HSC123456":
            st.success("✅ **Tìm thấy hồ sơ:** `HSC123456`")
            st.markdown("- **Tên thủ tục:** Quyết định chuyển mục đích sử dụng rừng sang mục đích khác đối với tổ chức")
            st.markdown("- **Đơn vị nộp:** Công ty Cổ phần Thủy điện Nậm Xé - Văn Bàn")
            st.markdown("- **Ngày nhận:** 10/05/2026 | **Hạn giải quyết:** 25/05/2026")
            st.markdown("- **Trạng thái:** 🟡 `Đang thẩm định hồ sơ thực địa`")
            st.markdown("- **Cán bộ thụ lý:** Vũ Văn Việt (Phòng Quản lý bảo vệ rừng và Bảo tồn thiên nhiên)")
        elif code.upper() == "HSC123457":
            st.success("✅ **Tìm thấy hồ sơ:** `HSC123457`")
            st.markdown("- **Tên thủ tục:** Phê duyệt Phương án khai thác gỗ rừng trồng sản xuất")
            st.markdown("- **Đơn vị nộp:** Hợp tác xã Lâm nghiệp Kiên Thành (Trấn Yên)")
            st.markdown("- **Trạng thái:** 🔵 `Đang xử lý`")
        else:
            st.info("Hệ thống hiển thị kết quả mẫu cho mã `HSC123456` hoặc `HSC123457`.")
            
    with tab_list:
        st.markdown("#### Danh mục 49 TTHC Lâm nghiệp (Ban hành theo công văn T9/2026)")
        df_tthc = pd.DataFrame(DANH_MUC_TTHC)
        st.dataframe(df_tthc.rename(columns={
            "stt": "STT", "ma": "Mã TTHC", "ten": "Tên thủ tục hành chính", "cap": "Cấp thẩm quyền", "thoi_han": "Thời hạn", "muc_do": "Mức độ dịch vụ công"
        }), use_container_width=True, height=400)

# ==============================================================================
# PHÂN HỆ 6: VĂN BẢN PHÁP LUẬT & QĐ 537
# ==============================================================================
elif menu == "⚖️ 6. Văn bản pháp luật & QĐ 537":
    st.markdown("### ⚖️ Các quy định pháp luật, văn bản cấp tỉnh")
    
    docs = [
        {"so_hieu": "537/QĐ-UBND", "ngay": "27/02/2026", "co_quan": "UBND tỉnh Lào Cai", "ten": "Công bố hiện trạng rừng tỉnh Lào Cai năm 2025 (diện tích đất có rừng 860.494,3 ha, tỷ lệ che phủ 61,5%)"},
        {"so_hieu": "15/QĐ-CCKL", "ngay": "05/02/2026", "co_quan": "Chi cục Kiểm lâm Lào Cai", "ten": "Quy định chức năng nhiệm vụ và phân công địa bàn 11 Hạt Kiểm lâm phụ trách 99 xã, phường"},
        {"so_hieu": "2336/QĐ-UBND", "ngay": "12/12/2025", "co_quan": "UBND tỉnh Lào Cai", "ten": "Giao chỉ tiêu Kế hoạch phát triển KT-XH năm 2026 (trồng mới 14.000 ha rừng, khai thác 1,13 triệu m³ gỗ, giá trị 4.437,5 tỷ đồng)"},
        {"so_hieu": "1382/QĐ-UBND", "ngay": "23/04/2026", "co_quan": "UBND tỉnh Lào Cai", "ten": "Phê duyệt Đề án du lịch sinh thái, nghỉ dưỡng, giải trí (74 dự án thuê môi trường rừng với diện tích 5.723 ha)"},
        {"so_hieu": "42/2026/NĐ-CP", "ngay": "26/01/2026", "co_quan": "Chính phủ", "ten": "Sửa đổi, bổ sung một số điều của Nghị định 156/2018/NĐ-CP quy định chi tiết thi hành Luật Lâm nghiệp"},
        {"so_hieu": "521/QĐ-UBND", "ngay": "15/03/2026", "co_quan": "UBND tỉnh Lào Cai", "ten": "Kế hoạch thu chi Dịch vụ môi trường rừng năm 2026 toàn tỉnh (tổng thu 276,29 tỷ đồng cho 545.160 ha rừng)"}
    ]
    
    for d in docs:
        with st.expander(f"📜 {d['so_hieu']} ({d['ngay']}) - {d['ten']}", expanded=True):
            st.markdown(f"- **Cơ quan ban hành:** {d['co_quan']}")
            st.markdown(f"- **Ngày ký:** {d['ngay']}")
            st.markdown(f"- **Nội dung:** {d['ten']}")
            st.download_button(
                label=f"📥 Tải văn bản mẫu {d['so_hieu']}",
                data=f"CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\nĐộc lập - Tự do - Hạnh phúc\n\nCHI CỤC KIỂM LÂM LÀO CAI\nVăn bản: {d['so_hieu']}\n{d['ten']}".encode('utf-8'),
                file_name=f"{d['so_hieu'].replace('/', '_')}.txt",
                mime="text/plain",
                key=d['so_hieu']
            )

# Footer
st.markdown("---")
st.markdown("""
<div style="text-align: center; color: #64748b; font-size: 0.85rem;">
    © 2026 Chi cục Kiểm lâm Lào Cai. Hệ thống thông tin điều hành và công khai dữ liệu lâm nghiệp.<br>
    Ứng dụng Streamlit Cloud & Online Dashboard.
</div>
""", unsafe_allow_html=True)
