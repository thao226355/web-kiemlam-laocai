"""
MODULE DỮ LIỆU LÂM NGHIỆP TỈNH LÀO CAI
Căn cứ:
- Quyết định số 537/QĐ-UBND ngày 27/02/2026 của UBND tỉnh Lào Cai
- Quyết định số 15/QĐ-CCKL ngày 05/02/2026 của Chi cục Kiểm lâm Lào Cai
- Quyết định số 2336/QĐ-UBND ngày 12/12/2025 giao chỉ tiêu KT-XH năm 2026
- Quyết định số 1382/QĐ-UBND ngày 23/04/2026 về Đề án Du lịch sinh thái
- Báo cáo ngành lâm nghiệp cập nhật tháng 5/2026
"""

# 1. Chỉ số tổng quan toàn tỉnh
TONG_QUAN = {
    "nam_du_lieu": 2025,
    "can_cu": "Quyết định số 537/QĐ-UBND ngày 27/02/2026 của UBND tỉnh Lào Cai",
    "tong_dien_tich_tu_nhien": 1325675.0,
    "tong_dien_tich_dat_co_rung": 860494.3,
    "rung_tu_nhien": 466715.6,
    "ty_le_rung_tu_nhien": 54.24,
    "rung_trong_tong": 393778.7,
    "rung_trong_da_thanh_rung": 347919.6,
    "rung_trong_chua_thanh_rung": 45859.1,
    "dien_tich_du_tieu_chi_che_phu": 814635.2,
    "ty_le_che_phu": 61.5,
    "so_xa_phuong": 99,
    "so_hat_kiem_lam": 11,
    "bien_che_thuc_te": 461,
    "bien_che_giao": 472
}

# 2. Biểu 1: Cơ cấu theo mục đích sử dụng
MUC_DICH_SU_DUNG = [
    {
        "loai_rung": "Rừng sản xuất",
        "tong_dien_tich": 414558.8,
        "ty_le": 48.18,
        "rung_tu_nhien": 129869.2,
        "da_thanh_rung": 251722.3,
        "chua_thanh_rung": 32967.3,
        "color": "#ffc107"
    },
    {
        "loai_rung": "Rừng phòng hộ",
        "tong_dien_tich": 279401.7,
        "ty_le": 32.47,
        "rung_tu_nhien": 237153.0,
        "da_thanh_rung": 36578.1,
        "chua_thanh_rung": 5670.6,
        "color": "#0d6efd"
    },
    {
        "loai_rung": "Rừng đặc dụng",
        "tong_dien_tich": 94212.3,
        "ty_le": 10.95,
        "rung_tu_nhien": 88187.0,
        "da_thanh_rung": 5596.7,
        "chua_thanh_rung": 428.6,
        "color": "#198754"
    },
    {
        "loai_rung": "Mục đích khác",
        "tong_dien_tich": 72321.5,
        "ty_le": 8.40,
        "rung_tu_nhien": 11506.3,
        "da_thanh_rung": 54022.5,
        "chua_thanh_rung": 6792.7,
        "color": "#fd7e14"
    }
]

# 3. Biểu 2: Cơ cấu theo 8 nhóm chủ quản lý
CHU_QUAN_LY = [
    {"stt": 1, "chu_quan_ly": "Ban Quản lý Rừng đặc dụng", "tong_dien_tich": 94099.0, "rung_tu_nhien": 88074.3, "rung_trong": 6024.7, "ty_le": 10.94},
    {"stt": 2, "chu_quan_ly": "Ban Quản lý Rừng phòng hộ", "tong_dien_tich": 211221.7, "rung_tu_nhien": 161724.5, "rung_trong": 49497.2, "ty_le": 24.55},
    {"stt": 3, "chu_quan_ly": "Tổ chức kinh tế (Công ty lâm nghiệp)", "tong_dien_tich": 38614.2, "rung_tu_nhien": 17414.3, "rung_trong": 21199.9, "ty_le": 4.49},
    {"stt": 4, "chu_quan_ly": "Lực lượng vũ trang (Công an, Quân đội)", "tong_dien_tich": 1040.1, "rung_tu_nhien": 364.4, "rung_trong": 675.7, "ty_le": 0.12},
    {"stt": 5, "chu_quan_ly": "Tổ chức KH&CN, Đào tạo giáo dục", "tong_dien_tich": 3374.1, "rung_tu_nhien": 2819.8, "rung_trong": 3282.0, "ty_le": 0.39},
    {"stt": 6, "chu_quan_ly": "Hộ gia đình, cá nhân trong nước", "tong_dien_tich": 182358.9, "rung_tu_nhien": 30347.4, "rung_trong": 152011.5, "ty_le": 21.19},
    {"stt": 7, "chu_quan_ly": "Cộng đồng dân cư thôn, bản", "tong_dien_tich": 7264.1, "rung_tu_nhien": 3546.5, "rung_trong": 3717.6, "ty_le": 0.84},
    {"stt": 8, "chu_quan_ly": "UBND cấp xã tạm quản lý", "tong_dien_tich": 322522.1, "rung_tu_nhien": 165152.1, "rung_trong": 157370.1, "ty_le": 37.48}
]

# 4. Hạt Kiểm lâm khu vực kèm tọa độ địa lý & địa bàn phụ trách (các xã, phường theo QĐ 15/QĐ-CCKL)
HAT_KIEM_LAM = [
    {"id": "bat_xat", "ten": "Hạt KL khu vực Bát Xát", "dia_ban": "13 xã, phường: Xã Bát Xát, Bản Xèo, Trịnh Tường, A Mú Sung, Tả Phìn, Ngũ Chỉ Sơn, Hợp Thành, Cốc San, Tả Van, Bản Hồ; Phường Sa Pa, Lào Cai, Cam Đường", "so_xa": 13, "tong_dt": 55236.0, "tu_nhien": 37964.0, "trong": 16669.0, "chua_thanh_rung": 602.0, "che_phu": 57.4, "bien_che": 41, "cap_chay": "Cao", "fwi": 36.4, "lat": 22.56, "lon": 103.78, "tru_so": "Xã Bát Xát"},
    {"id": "bao_yen", "ten": "Hạt KL khu vực Bảo Yên", "dia_ban": "8 xã: Xã Bảo Yên, Bảo Hà, Nghĩa Đô, Phúc Khánh, Xuân Hòa, Thượng Hà, Lâm Giang, Khánh Hòa", "so_xa": 8, "tong_dt": 85779.6, "tu_nhien": 23941.2, "trong": 52726.0, "chua_thanh_rung": 9111.9, "che_phu": 65.5, "bien_che": 29, "cap_chay": "Trung bình", "fwi": 27.2, "lat": 22.25, "lon": 104.34, "tru_so": "Xã Bảo Yên"},
    {"id": "bao_thang", "ten": "Hạt KL khu vực Bảo Thắng", "dia_ban": "8 xã: Xã Bảo Thắng, Xuân Quang, Phong Hải, Gia Phú, Tằng Loỏng, Cốc Lầu, Bảo Nhai, Mường Bo", "so_xa": 8, "tong_dt": 70821.3, "tu_nhien": 25941.1, "trong": 41420.2, "chua_thanh_rung": 3460.2, "che_phu": 64.7, "bien_che": 28, "cap_chay": "Trung bình", "fwi": 28.4, "lat": 22.38, "lon": 104.16, "tru_so": "Xã Bảo Thắng"},
    {"id": "bac_ha", "ten": "Hạt KL khu vực Bắc Hà", "dia_ban": "10 xã: Xã Bắc Hà, Bản Liền, Tả Củ Tỷ, Lùng Phình, Pha Long, Cao Sơn, Bản Lầu, Mường Khương, Si Ma Cai, Sín Chéng", "so_xa": 10, "tong_dt": 49223.5, "tu_nhien": 31253.8, "trong": 15589.5, "chua_thanh_rung": 2380.1, "che_phu": 52.8, "bien_che": 39, "cap_chay": "Trung bình", "fwi": 26.5, "lat": 22.54, "lon": 104.28, "tru_so": "Xã Bắc Hà"},
    {"id": "van_ban", "ten": "Hạt KL khu vực Văn Bàn", "dia_ban": "7 xã: Xã Văn Bàn, Khánh Yên, Võ Lao, Chiềng Ken, Dương Quỳ, Nậm Chày, Châu Quế", "so_xa": 7, "tong_dt": 81895.0, "tu_nhien": 56645.8, "trong": 20262.7, "chua_thanh_rung": 4986.7, "che_phu": 66.8, "bien_che": 38, "cap_chay": "Cao", "fwi": 38.6, "lat": 22.05, "lon": 104.05, "tru_so": "Xã Khánh Yên"},
    {"id": "tran_yen", "ten": "Hạt KL khu vực Trấn Yên", "dia_ban": "16 xã, phường: Xã Trấn Yên, Hưng Khánh, Lương Thịnh, Việt Hồng, Quy Mông, Xuân Ái, Phong Dụ Hạ, Phong Dụ Thượng, Đông Cuông, Tân Hợp, Mậu A, Mỏ Vàng; Phường Yên Bái, Âu Lâu, Nam Cường, Văn Phú", "so_xa": 16, "tong_dt": 140016.5, "tu_nhien": 43301.6, "trong": 86720.8, "chua_thanh_rung": 9994.1, "che_phu": 68.2, "bien_che": 49, "cap_chay": "Trung bình", "fwi": 25.4, "lat": 21.72, "lon": 104.85, "tru_so": "Xã Trấn Yên"},
    {"id": "luc_yen", "ten": "Hạt KL khu vực Lục Yên", "dia_ban": "10 xã: Xã Lâm Thượng, Tân Lĩnh, Lục Yên, Mường Lai, Phúc Lợi, Bảo Ái, Yên Bình, Thác Bà, Yên Thành, Cảm Nhân", "so_xa": 10, "tong_dt": 89998.9, "tu_nhien": 25274.0, "trong": 59175.9, "chua_thanh_rung": 5549.2, "che_phu": 62.4, "bien_che": 34, "cap_chay": "Trung bình", "fwi": 24.8, "lat": 22.12, "lon": 104.72, "tru_so": "Xã Lục Yên"},
    {"id": "nghia_lo", "ten": "Hạt KL khu vực Nghĩa Lộ", "dia_ban": "15 xã, phường: Xã Hạnh Phúc, Tà Xi Láng, Phình Hồ, Trạm Tấu, Gia Hội, Sơn Lương, Liên Sơn, Văn Chấn, Cát Thịnh, Thượng Bằng La, Nghĩa Tâm, Chấn Thịnh; Phường Trung Tâm, Cầu Thia, Nghĩa Lộ", "so_xa": 15, "tong_dt": 117977.2, "tu_nhien": 74384.5, "trong": 35713.0, "chua_thanh_rung": 7879.8, "che_phu": 58.6, "bien_che": 42, "cap_chay": "Cao", "fwi": 37.8, "lat": 21.60, "lon": 104.50, "tru_so": "Phường Nghĩa Lộ"},
    {"id": "mu_cang_chai", "ten": "Hạt KL khu vực Mù Cang Chải", "dia_ban": "7 xã: Xã Mù Cang Chải, Chế Tạo, Lao Chải, Khao Mang, Púng Luông, Nậm Có, Tú Lệ", "so_xa": 7, "tong_dt": 81918.8, "tu_nhien": 62764.6, "trong": 18160.7, "chua_thanh_rung": 993.6, "che_phu": 69.4, "bien_che": 25, "cap_chay": "Rất cao", "fwi": 41.5, "lat": 21.85, "lon": 104.08, "tru_so": "Xã Mù Cang Chải"},
    {"id": "kbt_hoang_lien_van_ban", "ten": "Hạt KL KBT Hoàng Liên – Văn Bàn", "dia_ban": "3 xã: Xã Minh Lương, Nậm Xé (và rừng đặc dụng xã Khánh Yên)", "so_xa": 3, "tong_dt": 28998.5, "tu_nhien": 28237.5, "trong": 294.0, "chua_thanh_rung": 467.0, "che_phu": 88.7, "bien_che": 11, "cap_chay": "Cao", "fwi": 38.6, "lat": 22.02, "lon": 103.95, "tru_so": "Xã Nậm Xé"},
    {"id": "kbt_bat_xat", "ten": "Hạt KL Khu bảo tồn Bát Xát", "dia_ban": "3 xã: Xã Mường Hum, Dền Sáng, Y Tý", "so_xa": 3, "tong_dt": 34316.4, "tu_nhien": 33339.0, "trong": 574.0, "chua_thanh_rung": 403.4, "che_phu": 86.2, "bien_che": 9, "cap_chay": "Cao", "fwi": 37.2, "lat": 22.62, "lon": 103.62, "tru_so": "Xã Y Tý"}
]

# 5. Biểu 3: 99 Xã/Phường toàn tỉnh
DANH_SACH_99_XA = [
    {"stt": 1, "ten": "A Mú Sung", "tong_dt": 10445, "dt_rung": 4543.9, "tu_nhien": 3563.5, "thanh_rung": 777.3, "chua_thanh_rung": 203.1, "dac_dung": 0, "phong_ho": 2423.3, "san_xuat": 1644.5, "che_phu": 41.6, "khu_vuc": "Bát Xát"},
    {"stt": 2, "ten": "Bản Hồ", "tong_dt": 16633, "dt_rung": 11887.3, "tu_nhien": 11680.5, "thanh_rung": 188.2, "chua_thanh_rung": 18.5, "dac_dung": 9141.9, "phong_ho": 1636.2, "san_xuat": 852.8, "che_phu": 71.4, "khu_vuc": "Sa Pa"},
    {"stt": 3, "ten": "Bản Lầu", "tong_dt": 12528, "dt_rung": 4569.0, "tu_nhien": 2837.6, "thanh_rung": 1428.4, "chua_thanh_rung": 303.0, "dac_dung": 0, "phong_ho": 2279.5, "san_xuat": 1839.7, "che_phu": 34.1, "khu_vuc": "Mường Khương"},
    {"stt": 4, "ten": "Bản Liền", "tong_dt": 7669, "dt_rung": 4307.5, "tu_nhien": 2994.7, "thanh_rung": 1174.0, "chua_thanh_rung": 138.7, "dac_dung": 0, "phong_ho": 2726.3, "san_xuat": 951.0, "che_phu": 54.4, "khu_vuc": "Bắc Hà"},
    {"stt": 5, "ten": "Bản Xèo", "tong_dt": 7834, "dt_rung": 4103.5, "tu_nhien": 3630.5, "thanh_rung": 358.0, "chua_thanh_rung": 115.0, "dac_dung": 0, "phong_ho": 2909.5, "san_xuat": 740.7, "che_phu": 50.9, "khu_vuc": "Bát Xát"},
    {"stt": 6, "ten": "Bảo Ái", "tong_dt": 16341, "dt_rung": 9056.0, "tu_nhien": 1048.9, "thanh_rung": 7604.1, "chua_thanh_rung": 403.1, "dac_dung": 0, "phong_ho": 0, "san_xuat": 7837.7, "che_phu": 53.0, "khu_vuc": "Yên Bình"},
    {"stt": 7, "ten": "Bảo Hà", "tong_dt": 24300, "dt_rung": 16062.3, "tu_nhien": 1427.2, "thanh_rung": 11826.5, "chua_thanh_rung": 2808.1, "dac_dung": 0, "phong_ho": 1515.8, "san_xuat": 11542.3, "che_phu": 54.5, "khu_vuc": "Bảo Yên"},
    {"stt": 8, "ten": "Bảo Nhai", "tong_dt": 15601, "dt_rung": 8491.8, "tu_nhien": 1933.7, "thanh_rung": 6252.1, "chua_thanh_rung": 306.1, "dac_dung": 0, "phong_ho": 2497.0, "san_xuat": 3459.5, "che_phu": 52.5, "khu_vuc": "Bắc Hà"},
    {"stt": 9, "ten": "Bảo Thắng", "tong_dt": 16044, "dt_rung": 11722.3, "tu_nhien": 59.5, "thanh_rung": 10328.1, "chua_thanh_rung": 1334.8, "dac_dung": 0, "phong_ho": 0, "san_xuat": 9838.7, "che_phu": 64.7, "khu_vuc": "Bảo Thắng"},
    {"stt": 10, "ten": "Bảo Yên", "tong_dt": 11915, "dt_rung": 8705.2, "tu_nhien": 1771.5, "thanh_rung": 6038.0, "chua_thanh_rung": 895.8, "dac_dung": 0, "phong_ho": 718.9, "san_xuat": 7478.4, "che_phu": 65.5, "khu_vuc": "Bảo Yên"},
    {"stt": 11, "ten": "Bát Xát", "tong_dt": 18954, "dt_rung": 11016.6, "tu_nhien": 6447.7, "thanh_rung": 4429.1, "chua_thanh_rung": 139.7, "dac_dung": 0, "phong_ho": 5938.9, "san_xuat": 3789.1, "che_phu": 57.4, "khu_vuc": "Bát Xát"},
    {"stt": 12, "ten": "Bắc Hà", "tong_dt": 17972, "dt_rung": 6884.9, "tu_nhien": 3816.3, "thanh_rung": 2845.1, "chua_thanh_rung": 223.5, "dac_dung": 0, "phong_ho": 3208.6, "san_xuat": 2320.1, "che_phu": 37.1, "khu_vuc": "Bắc Hà"},
    {"stt": 13, "ten": "Cảm Nhân", "tong_dt": 15177, "dt_rung": 12064.0, "tu_nhien": 2699.3, "thanh_rung": 8685.3, "chua_thanh_rung": 679.4, "dac_dung": 0, "phong_ho": 1713.4, "san_xuat": 9402.5, "che_phu": 75.0, "khu_vuc": "Yên Bình"},
    {"stt": 14, "ten": "Cao Sơn", "tong_dt": 16456, "dt_rung": 5813.8, "tu_nhien": 4991.3, "thanh_rung": 792.0, "chua_thanh_rung": 30.4, "dac_dung": 0, "phong_ho": 4173.9, "san_xuat": 1509.5, "che_phu": 35.1, "khu_vuc": "Mường Khương"},
    {"stt": 15, "ten": "Cát Thịnh", "tong_dt": 16912, "dt_rung": 12094.7, "tu_nhien": 9015.7, "thanh_rung": 2456.0, "chua_thanh_rung": 623.0, "dac_dung": 0, "phong_ho": 3686.5, "san_xuat": 8163.5, "che_phu": 67.8, "khu_vuc": "Văn Chấn"},
    {"stt": 16, "ten": "Cốc Lầu", "tong_dt": 13581, "dt_rung": 9234.3, "tu_nhien": 2753.8, "thanh_rung": 6218.0, "chua_thanh_rung": 262.5, "dac_dung": 0, "phong_ho": 3381.1, "san_xuat": 2785.9, "che_phu": 66.1, "khu_vuc": "Bắc Hà"},
    {"stt": 17, "ten": "Cốc San", "tong_dt": 5719, "dt_rung": 3433.3, "tu_nhien": 1655.1, "thanh_rung": 1755.0, "chua_thanh_rung": 23.2, "dac_dung": 0, "phong_ho": 587.5, "san_xuat": 2160.3, "che_phu": 59.6, "khu_vuc": "TP Lào Cai"},
    {"stt": 18, "ten": "Chấn Thịnh", "tong_dt": 12053, "dt_rung": 6774.3, "tu_nhien": 2592.7, "thanh_rung": 3235.1, "chua_thanh_rung": 946.7, "dac_dung": 0, "phong_ho": 967.3, "san_xuat": 5283.5, "che_phu": 48.3, "khu_vuc": "Văn Chấn"},
    {"stt": 19, "ten": "Châu Quế", "tong_dt": 16232, "dt_rung": 10908.1, "tu_nhien": 1549.9, "thanh_rung": 8275.4, "chua_thanh_rung": 1082.8, "dac_dung": 0, "phong_ho": 777.7, "san_xuat": 9142.9, "che_phu": 60.5, "khu_vuc": "Văn Yên"},
    {"stt": 20, "ten": "Chế Tạo", "tong_dt": 23444, "dt_rung": 19424.8, "tu_nhien": 18691.1, "thanh_rung": 733.7, "chua_thanh_rung": 0, "dac_dung": 13781.3, "phong_ho": 3482.8, "san_xuat": 2063.4, "che_phu": 82.9, "khu_vuc": "Mù Cang Chải"},
    {"stt": 21, "ten": "Chiềng Ken", "tong_dt": 19125, "dt_rung": 15582.6, "tu_nhien": 11587.1, "thanh_rung": 2766.4, "chua_thanh_rung": 1229.2, "dac_dung": 0, "phong_ho": 8042.8, "san_xuat": 7072.3, "che_phu": 75.0, "khu_vuc": "Văn Bàn"},
    {"stt": 22, "ten": "Dền Sáng", "tong_dt": 14823, "dt_rung": 9461.8, "tu_nhien": 9079.6, "thanh_rung": 162.0, "chua_thanh_rung": 220.2, "dac_dung": 4039.8, "phong_ho": 3817.8, "san_xuat": 860.2, "che_phu": 62.3, "khu_vuc": "Bát Xát"},
    {"stt": 23, "ten": "Dương Quỳ", "tong_dt": 15711, "dt_rung": 11060.2, "tu_nhien": 10055.7, "thanh_rung": 992.4, "chua_thanh_rung": 12.1, "dac_dung": 0, "phong_ho": 7098.8, "san_xuat": 3570.3, "che_phu": 70.3, "khu_vuc": "Văn Bàn"},
    {"stt": 24, "ten": "Đông Cuông", "tong_dt": 14630, "dt_rung": 8866.5, "tu_nhien": 2999.5, "thanh_rung": 5097.1, "chua_thanh_rung": 769.9, "dac_dung": 0, "phong_ho": 2031.4, "san_xuat": 5277.4, "che_phu": 55.3, "khu_vuc": "Văn Yên"},
    {"stt": 25, "ten": "Gia Hội", "tong_dt": 21326, "dt_rung": 16036.3, "tu_nhien": 11721.1, "thanh_rung": 3880.4, "chua_thanh_rung": 434.8, "dac_dung": 0, "phong_ho": 3745.9, "san_xuat": 11570.4, "che_phu": 73.2, "khu_vuc": "Văn Chấn"},
    {"stt": 26, "ten": "Gia Phú", "tong_dt": 10233, "dt_rung": 5403.3, "tu_nhien": 1889.0, "thanh_rung": 3428.0, "chua_thanh_rung": 86.3, "dac_dung": 0, "phong_ho": 1896.5, "san_xuat": 2684.6, "che_phu": 52.0, "khu_vuc": "Bảo Thắng"},
    {"stt": 27, "ten": "Hạnh Phúc", "tong_dt": 19385, "dt_rung": 13643.6, "tu_nhien": 8501.1, "thanh_rung": 4087.0, "chua_thanh_rung": 1055.5, "dac_dung": 0, "phong_ho": 10525.3, "san_xuat": 2710.8, "che_phu": 64.9, "khu_vuc": "Trạm Tấu"},
    {"stt": 28, "ten": "Hợp Thành", "tong_dt": 11631, "dt_rung": 7892.6, "tu_nhien": 5840.7, "thanh_rung": 2051.9, "chua_thanh_rung": 0, "dac_dung": 0, "phong_ho": 4679.2, "san_xuat": 2005.3, "che_phu": 67.9, "khu_vuc": "TP Lào Cai"},
    {"stt": 29, "ten": "Hưng Khánh", "tong_dt": 12218, "dt_rung": 9995.0, "tu_nhien": 3436.1, "thanh_rung": 5976.1, "chua_thanh_rung": 582.7, "dac_dung": 0, "phong_ho": 4229.4, "san_xuat": 5106.6, "che_phu": 77.0, "khu_vuc": "Trấn Yên"},
    {"stt": 30, "ten": "Khánh Hòa", "tong_dt": 14976, "dt_rung": 12501.0, "tu_nhien": 4183.2, "thanh_rung": 7205.0, "chua_thanh_rung": 1112.8, "dac_dung": 0, "phong_ho": 2458.9, "san_xuat": 8949.9, "che_phu": 76.0, "khu_vuc": "Lục Yên"},
    {"stt": 31, "ten": "Khánh Yên", "tong_dt": 17358, "dt_rung": 13583.3, "tu_nhien": 11558.8, "thanh_rung": 1353.0, "chua_thanh_rung": 671.5, "dac_dung": 299.6, "phong_ho": 8940.6, "san_xuat": 4064.4, "che_phu": 74.4, "khu_vuc": "Văn Bàn"},
    {"stt": 32, "ten": "Khao Mang", "tong_dt": 12003, "dt_rung": 6522.5, "tu_nhien": 5257.9, "thanh_rung": 1253.0, "chua_thanh_rung": 11.6, "dac_dung": 0, "phong_ho": 4847.9, "san_xuat": 1571.4, "che_phu": 54.2, "khu_vuc": "Mù Cang Chải"},
    {"stt": 33, "ten": "Lao Chải", "tong_dt": 15799, "dt_rung": 8702.1, "tu_nhien": 6069.5, "thanh_rung": 2497.0, "chua_thanh_rung": 135.7, "dac_dung": 2823.6, "phong_ho": 3567.9, "san_xuat": 2263.3, "che_phu": 54.2, "khu_vuc": "Mù Cang Chải"},
    {"stt": 34, "ten": "Lâm Giang", "tong_dt": 17948, "dt_rung": 9451.1, "tu_nhien": 3776.4, "thanh_rung": 4776.0, "chua_thanh_rung": 898.7, "dac_dung": 0, "phong_ho": 1444.2, "san_xuat": 7535.7, "che_phu": 47.6, "khu_vuc": "Văn Yên"},
    {"stt": 35, "ten": "Lâm Thượng", "tong_dt": 12799, "dt_rung": 9150.6, "tu_nhien": 5132.9, "thanh_rung": 3625.4, "chua_thanh_rung": 392.4, "dac_dung": 0, "phong_ho": 2960.0, "san_xuat": 4863.1, "che_phu": 68.4, "khu_vuc": "Lục Yên"},
    {"stt": 36, "ten": "Liên Sơn", "tong_dt": 2358, "dt_rung": 598.2, "tu_nhien": 6.9, "thanh_rung": 572.0, "chua_thanh_rung": 19.4, "dac_dung": 0, "phong_ho": 0, "san_xuat": 445.6, "che_phu": 24.6, "khu_vuc": "Văn Chấn"},
    {"stt": 37, "ten": "Lục Yên", "tong_dt": 7993, "dt_rung": 4621.3, "tu_nhien": 1684.5, "thanh_rung": 2570.0, "chua_thanh_rung": 366.8, "dac_dung": 0, "phong_ho": 318.5, "san_xuat": 3189.1, "che_phu": 53.2, "khu_vuc": "Lục Yên"},
    {"stt": 38, "ten": "Lùng Phình", "tong_dt": 10101, "dt_rung": 4109.3, "tu_nhien": 1842.4, "thanh_rung": 2091.2, "chua_thanh_rung": 175.7, "dac_dung": 0, "phong_ho": 1789.4, "san_xuat": 1877.9, "che_phu": 38.9, "khu_vuc": "Bắc Hà"},
    {"stt": 39, "ten": "Lương Thịnh", "tong_dt": 9421, "dt_rung": 7001.6, "tu_nhien": 475.2, "thanh_rung": 6228.0, "chua_thanh_rung": 298.4, "dac_dung": 0, "phong_ho": 0, "san_xuat": 6156.6, "che_phu": 71.2, "khu_vuc": "Trấn Yên"},
    {"stt": 40, "ten": "Mậu A", "tong_dt": 14452, "dt_rung": 9909.3, "tu_nhien": 1699.4, "thanh_rung": 7570.0, "chua_thanh_rung": 639.9, "dac_dung": 0, "phong_ho": 0, "san_xuat": 9197.8, "che_phu": 64.1, "khu_vuc": "Văn Yên"},
    {"stt": 41, "ten": "Minh Lương", "tong_dt": 20658, "dt_rung": 13761.2, "tu_nhien": 13196.6, "thanh_rung": 167.0, "chua_thanh_rung": 397.6, "dac_dung": 9695.2, "phong_ho": 2476.2, "san_xuat": 615.0, "che_phu": 64.7, "khu_vuc": "Văn Bàn"},
    {"stt": 42, "ten": "Mỏ Vàng", "tong_dt": 16755, "dt_rung": 14089.2, "tu_nhien": 5145.3, "thanh_rung": 8374.4, "chua_thanh_rung": 569.6, "dac_dung": 1349.8, "phong_ho": 2480.5, "san_xuat": 8896.9, "che_phu": 80.7, "khu_vuc": "Văn Yên"},
    {"stt": 43, "ten": "Mù Cang Chải", "tong_dt": 14703, "dt_rung": 9646.2, "tu_nhien": 6232.6, "thanh_rung": 3378.0, "chua_thanh_rung": 35.6, "dac_dung": 0, "phong_ho": 8047.3, "san_xuat": 1556.9, "che_phu": 65.4, "khu_vuc": "Mù Cang Chải"},
    {"stt": 44, "ten": "Mường Bo", "tong_dt": 14830, "dt_rung": 10806.8, "tu_nhien": 10573.2, "thanh_rung": 207.0, "chua_thanh_rung": 26.7, "dac_dung": 54.7, "phong_ho": 9025.8, "san_xuat": 1366.0, "che_phu": 72.7, "khu_vuc": "Sa Pa"},
    {"stt": 45, "ten": "Mường Hum", "tong_dt": 21280, "dt_rung": 17024.1, "tu_nhien": 16856.5, "thanh_rung": 84.0, "chua_thanh_rung": 83.6, "dac_dung": 10989.1, "phong_ho": 3633.1, "san_xuat": 1109.8, "che_phu": 79.6, "khu_vuc": "Bát Xát"},
    {"stt": 46, "ten": "Mường Khương", "tong_dt": 16921, "dt_rung": 6542.6, "tu_nhien": 4914.5, "thanh_rung": 1582.3, "chua_thanh_rung": 45.8, "dac_dung": 0, "phong_ho": 4599.9, "san_xuat": 1773.5, "che_phu": 38.4, "khu_vuc": "Mường Khương"},
    {"stt": 47, "ten": "Mường Lai", "tong_dt": 14384, "dt_rung": 9196.4, "tu_nhien": 3339.6, "thanh_rung": 5322.0, "chua_thanh_rung": 534.9, "dac_dung": 0, "phong_ho": 592.3, "san_xuat": 7298.8, "che_phu": 60.2, "khu_vuc": "Lục Yên"},
    {"stt": 48, "ten": "Nậm Có", "tong_dt": 20175, "dt_rung": 12590.6, "tu_nhien": 9120.0, "thanh_rung": 2748.0, "chua_thanh_rung": 722.6, "dac_dung": 0, "phong_ho": 9560.9, "san_xuat": 2796.1, "che_phu": 58.8, "khu_vuc": "Mù Cang Chải"},
    {"stt": 49, "ten": "Nậm Chày", "tong_dt": 14214, "dt_rung": 9473.1, "tu_nhien": 8987.4, "thanh_rung": 275.1, "chua_thanh_rung": 210.7, "dac_dung": 0, "phong_ho": 6875.0, "san_xuat": 2186.7, "che_phu": 65.2, "khu_vuc": "Văn Bàn"},
    {"stt": 50, "ten": "Nậm Xé", "tong_dt": 17094, "dt_rung": 15237.3, "tu_nhien": 15040.9, "thanh_rung": 127.0, "chua_thanh_rung": 69.4, "dac_dung": 13042.0, "phong_ho": 761.1, "san_xuat": 845.1, "che_phu": 88.7, "khu_vuc": "Văn Bàn"},
    {"stt": 51, "ten": "Nghĩa Đô", "tong_dt": 15937, "dt_rung": 11519.5, "tu_nhien": 5095.3, "thanh_rung": 5724.0, "chua_thanh_rung": 700.1, "dac_dung": 0, "phong_ho": 2349.7, "san_xuat": 8306.4, "che_phu": 67.9, "khu_vuc": "Bảo Yên"},
    {"stt": 52, "ten": "Nghĩa Tâm", "tong_dt": 13310, "dt_rung": 8213.7, "tu_nhien": 2738.4, "thanh_rung": 4956.0, "chua_thanh_rung": 519.2, "dac_dung": 0, "phong_ho": 1669.7, "san_xuat": 5584.7, "che_phu": 57.8, "khu_vuc": "Văn Chấn"},
    {"stt": 53, "ten": "Ngũ Chỉ Sơn", "tong_dt": 8277, "dt_rung": 4868.8, "tu_nhien": 4654.5, "thanh_rung": 214.3, "chua_thanh_rung": 0, "dac_dung": 0, "phong_ho": 3906.4, "san_xuat": 729.9, "che_phu": 58.8, "khu_vuc": "Sa Pa"},
    {"stt": 54, "ten": "Púng Luông", "tong_dt": 25324, "dt_rung": 17702.5, "tu_nhien": 10749.8, "thanh_rung": 6895.0, "chua_thanh_rung": 57.7, "dac_dung": 2820.3, "phong_ho": 10539.7, "san_xuat": 3831.4, "che_phu": 69.7, "khu_vuc": "Mù Cang Chải"},
    {"stt": 55, "ten": "Pha Long", "tong_dt": 10556, "dt_rung": 4483.7, "tu_nhien": 2845.5, "thanh_rung": 1270.2, "chua_thanh_rung": 368.0, "dac_dung": 0, "phong_ho": 2880.1, "san_xuat": 1027.8, "che_phu": 39.0, "khu_vuc": "Mường Khương"},
    {"stt": 56, "ten": "Phình Hồ", "tong_dt": 22602, "dt_rung": 14357.8, "tu_nhien": 10177.3, "thanh_rung": 3236.2, "chua_thanh_rung": 944.3, "dac_dung": 0, "phong_ho": 9507.8, "san_xuat": 4508.8, "che_phu": 59.3, "khu_vuc": "Trạm Tấu"},
    {"stt": 57, "ten": "Phong Dụ Hạ", "tong_dt": 13840, "dt_rung": 12359.1, "tu_nhien": 4272.8, "thanh_rung": 7505.2, "chua_thanh_rung": 581.1, "dac_dung": 0, "phong_ho": 4132.4, "san_xuat": 7679.3, "che_phu": 85.1, "khu_vuc": "Văn Yên"},
    {"stt": 58, "ten": "Phong Dụ Thượng", "tong_dt": 19521, "dt_rung": 16060.2, "tu_nhien": 10346.2, "thanh_rung": 5280.0, "chua_thanh_rung": 434.0, "dac_dung": 4419.5, "phong_ho": 4178.8, "san_xuat": 5402.3, "che_phu": 80.0, "khu_vuc": "Văn Yên"},
    {"stt": 59, "ten": "Phong Hải", "tong_dt": 12095, "dt_rung": 7325.9, "tu_nhien": 2904.3, "thanh_rung": 3875.0, "chua_thanh_rung": 546.5, "dac_dung": 0, "phong_ho": 2745.4, "san_xuat": 3707.4, "che_phu": 56.1, "khu_vuc": "Bảo Thắng"},
    {"stt": 60, "ten": "Phúc Khánh", "tong_dt": 11404, "dt_rung": 9115.9, "tu_nhien": 3922.2, "thanh_rung": 4701.1, "chua_thanh_rung": 492.6, "dac_dung": 0, "phong_ho": 2517.2, "san_xuat": 6431.0, "che_phu": 75.6, "khu_vuc": "Bảo Yên"},
    {"stt": 61, "ten": "Phúc Lợi", "tong_dt": 16071, "dt_rung": 13745.2, "tu_nhien": 5376.0, "thanh_rung": 7151.3, "chua_thanh_rung": 1217.9, "dac_dung": 0, "phong_ho": 2860.7, "san_xuat": 9082.6, "che_phu": 77.9, "khu_vuc": "Lục Yên"},
    {"stt": 62, "ten": "P. Âu Lâu", "tong_dt": 6617, "dt_rung": 2677.3, "tu_nhien": 49.8, "thanh_rung": 2064.1, "chua_thanh_rung": 563.4, "dac_dung": 0, "phong_ho": 0, "san_xuat": 1744.2, "che_phu": 31.9, "khu_vuc": "TP Yên Bái"},
    {"stt": 63, "ten": "P. Cam Đường", "tong_dt": 5998, "dt_rung": 1584.0, "tu_nhien": 256.1, "thanh_rung": 1327.9, "chua_thanh_rung": 0, "dac_dung": 0, "phong_ho": 329.0, "san_xuat": 731.6, "che_phu": 26.4, "khu_vuc": "TP Lào Cai"},
    {"stt": 64, "ten": "P. Cầu Thia", "tong_dt": 3184, "dt_rung": 917.5, "tu_nhien": 248.2, "thanh_rung": 582.2, "chua_thanh_rung": 87.0, "dac_dung": 0, "phong_ho": 0, "san_xuat": 603.9, "che_phu": 26.1, "khu_vuc": "TX Nghĩa Lộ"},
    {"stt": 65, "ten": "P. Lào Cai", "tong_dt": 7231, "dt_rung": 3754.1, "tu_nhien": 1107.9, "thanh_rung": 2596.4, "chua_thanh_rung": 49.8, "dac_dung": 0, "phong_ho": 390.6, "san_xuat": 2659.4, "che_phu": 51.2, "khu_vuc": "TP Lào Cai"},
    {"stt": 66, "ten": "P. Nam Cường", "tong_dt": 4609, "dt_rung": 2720.6, "tu_nhien": 179.8, "thanh_rung": 2127.0, "chua_thanh_rung": 413.7, "dac_dung": 0, "phong_ho": 265.2, "san_xuat": 2077.9, "che_phu": 50.0, "khu_vuc": "TP Lào Cai"},
    {"stt": 67, "ten": "P. Nghĩa Lộ", "tong_dt": 2988, "dt_rung": 1233.5, "tu_nhien": 114.3, "thanh_rung": 870.0, "chua_thanh_rung": 249.2, "dac_dung": 0, "phong_ho": 0, "san_xuat": 1097.1, "che_phu": 32.9, "khu_vuc": "TX Nghĩa Lộ"},
    {"stt": 68, "ten": "P. Sa Pa", "tong_dt": 6002, "dt_rung": 2036.5, "tu_nhien": 1032.6, "thanh_rung": 997.0, "chua_thanh_rung": 6.9, "dac_dung": 8.0, "phong_ho": 974.3, "san_xuat": 1020.1, "che_phu": 33.8, "khu_vuc": "Sa Pa"},
    {"stt": 69, "ten": "P. Trung Tâm", "tong_dt": 4315, "dt_rung": 1150.1, "tu_nhien": 80.4, "thanh_rung": 772.0, "chua_thanh_rung": 297.7, "dac_dung": 0, "phong_ho": 0, "san_xuat": 738.6, "che_phu": 19.8, "khu_vuc": "TX Nghĩa Lộ"},
    {"stt": 70, "ten": "P. Văn Phú", "tong_dt": 5145, "dt_rung": 3008.4, "tu_nhien": 0, "thanh_rung": 2693.4, "chua_thanh_rung": 315.0, "dac_dung": 0, "phong_ho": 0, "san_xuat": 2383.8, "che_phu": 52.4, "khu_vuc": "TP Yên Bái"},
    {"stt": 71, "ten": "P. Yên Bái", "tong_dt": 1692, "dt_rung": 534.8, "tu_nhien": 0, "thanh_rung": 497.2, "chua_thanh_rung": 37.6, "dac_dung": 0, "phong_ho": 0, "san_xuat": 471.6, "che_phu": 29.4, "khu_vuc": "TP Yên Bái"},
    {"stt": 72, "ten": "Quy Mông", "tong_dt": 14917, "dt_rung": 12149.8, "tu_nhien": 2931.1, "thanh_rung": 8085.0, "chua_thanh_rung": 1133.7, "dac_dung": 0, "phong_ho": 2123.5, "san_xuat": 9292.5, "che_phu": 73.8, "khu_vuc": "Trấn Yên"},
    {"stt": 73, "ten": "Si Ma Cai", "tong_dt": 10900, "dt_rung": 5120.6, "tu_nhien": 2777.7, "thanh_rung": 1739.1, "chua_thanh_rung": 603.9, "dac_dung": 0, "phong_ho": 3075.3, "san_xuat": 1660.8, "che_phu": 41.4, "khu_vuc": "Si Ma Cai"},
    {"stt": 74, "ten": "Sín Chéng", "tong_dt": 8805, "dt_rung": 4232.0, "tu_nhien": 2350.8, "thanh_rung": 1460.0, "chua_thanh_rung": 421.2, "dac_dung": 0, "phong_ho": 2585.8, "san_xuat": 1286.2, "che_phu": 43.3, "khu_vuc": "Si Ma Cai"},
    {"stt": 75, "ten": "Sơn Lương", "tong_dt": 12377, "dt_rung": 7987.4, "tu_nhien": 3991.9, "thanh_rung": 3478.0, "chua_thanh_rung": 517.5, "dac_dung": 0, "phong_ho": 873.3, "san_xuat": 6755.3, "che_phu": 60.4, "khu_vuc": "Văn Chấn"},
    {"stt": 76, "ten": "Tả Củ Tỷ", "tong_dt": 6929, "dt_rung": 3160.1, "tu_nhien": 1883.0, "thanh_rung": 1207.2, "chua_thanh_rung": 69.9, "dac_dung": 0, "phong_ho": 1702.9, "san_xuat": 655.0, "che_phu": 44.6, "khu_vuc": "Bắc Hà"},
    {"stt": 77, "ten": "Tả Phìn", "tong_dt": 7228, "dt_rung": 4056.3, "tu_nhien": 3661.0, "thanh_rung": 395.3, "chua_thanh_rung": 0, "dac_dung": 0, "phong_ho": 3305.9, "san_xuat": 553.1, "che_phu": 56.1, "khu_vuc": "Sa Pa"},
    {"stt": 78, "ten": "Tả Van", "tong_dt": 15534, "dt_rung": 12426.0, "tu_nhien": 11988.2, "thanh_rung": 425.0, "chua_thanh_rung": 12.9, "dac_dung": 10426.7, "phong_ho": 406.1, "san_xuat": 1432.1, "che_phu": 79.9, "khu_vuc": "Sa Pa"},
    {"stt": 79, "ten": "Tà Xi Láng", "tong_dt": 8854, "dt_rung": 6455.0, "tu_nhien": 4803.0, "thanh_rung": 1348.0, "chua_thanh_rung": 304.0, "dac_dung": 0, "phong_ho": 5353.5, "san_xuat": 1017.3, "che_phu": 69.5, "khu_vuc": "Trạm Tấu"},
    {"stt": 80, "ten": "Tằng Loỏng", "tong_dt": 12578, "dt_rung": 9044.3, "tu_nhien": 4978.8, "thanh_rung": 4013.0, "chua_thanh_rung": 52.5, "dac_dung": 0, "phong_ho": 4700.6, "san_xuat": 3107.0, "che_phu": 71.5, "khu_vuc": "Bảo Thắng"},
    {"stt": 81, "ten": "Tân Hợp", "tong_dt": 20045, "dt_rung": 17104.9, "tu_nhien": 8190.0, "thanh_rung": 7255.0, "chua_thanh_rung": 1659.9, "dac_dung": 8685.2, "phong_ho": 0, "san_xuat": 8229.2, "che_phu": 77.0, "khu_vuc": "Văn Yên"},
    {"stt": 82, "ten": "Tân Lĩnh", "tong_dt": 14735, "dt_rung": 9911.0, "tu_nhien": 4307.6, "thanh_rung": 5023.2, "chua_thanh_rung": 580.1, "dac_dung": 0, "phong_ho": 1853.4, "san_xuat": 6315.7, "che_phu": 63.3, "khu_vuc": "Lục Yên"},
    {"stt": 83, "ten": "Tú Lệ", "tong_dt": 11535, "dt_rung": 7330.1, "tu_nhien": 6643.7, "thanh_rung": 656.0, "chua_thanh_rung": 30.4, "dac_dung": 0, "phong_ho": 5092.7, "san_xuat": 2142.3, "che_phu": 63.3, "khu_vuc": "Văn Chấn"},
    {"stt": 84, "ten": "Thác Bà", "tong_dt": 14254, "dt_rung": 6959.2, "tu_nhien": 578.8, "thanh_rung": 5713.3, "chua_thanh_rung": 667.1, "dac_dung": 0, "phong_ho": 0, "san_xuat": 6183.0, "che_phu": 44.1, "khu_vuc": "Yên Bình"},
    {"stt": 85, "ten": "Thượng Bằng La", "tong_dt": 11161, "dt_rung": 6642.4, "tu_nhien": 3970.7, "thanh_rung": 2017.0, "chua_thanh_rung": 654.7, "dac_dung": 0, "phong_ho": 2013.9, "san_xuat": 4300.1, "che_phu": 53.6, "khu_vuc": "Văn Chấn"},
    {"stt": 86, "ten": "Thượng Hà", "tong_dt": 14384, "dt_rung": 11247.4, "tu_nhien": 1841.1, "thanh_rung": 8005.0, "chua_thanh_rung": 1401.3, "dac_dung": 0, "phong_ho": 1043.4, "san_xuat": 9252.7, "che_phu": 68.5, "khu_vuc": "Bảo Yên"},
    {"stt": 87, "ten": "Trạm Tấu", "tong_dt": 23829, "dt_rung": 14918.8, "tu_nhien": 11942.9, "thanh_rung": 1913.1, "chua_thanh_rung": 1062.8, "dac_dung": 0, "phong_ho": 9848.6, "san_xuat": 4793.8, "che_phu": 58.1, "khu_vuc": "Trạm Tấu"},
    {"stt": 88, "ten": "Trấn Yên", "tong_dt": 11072, "dt_rung": 7437.8, "tu_nhien": 253.1, "thanh_rung": 6527.0, "chua_thanh_rung": 657.7, "dac_dung": 0, "phong_ho": 0, "san_xuat": 6419.8, "che_phu": 61.2, "khu_vuc": "Trấn Yên"},
    {"stt": 89, "ten": "Trịnh Tường", "tong_dt": 14671, "dt_rung": 7946.0, "tu_nhien": 6114.7, "thanh_rung": 1767.0, "chua_thanh_rung": 64.3, "dac_dung": 0, "phong_ho": 5318.6, "san_xuat": 1991.9, "che_phu": 53.7, "khu_vuc": "Bát Xát"},
    {"stt": 90, "ten": "Văn Bàn", "tong_dt": 15675, "dt_rung": 9611.3, "tu_nhien": 5624.0, "thanh_rung": 2832.4, "chua_thanh_rung": 1154.9, "dac_dung": 0, "phong_ho": 1709.9, "san_xuat": 7144.4, "che_phu": 53.9, "khu_vuc": "Văn Bàn"},
    {"stt": 91, "ten": "Văn Chấn", "tong_dt": 14025, "dt_rung": 6953.9, "tu_nhien": 4479.9, "thanh_rung": 2310.0, "chua_thanh_rung": 164.0, "dac_dung": 0, "phong_ho": 915.7, "san_xuat": 5498.0, "che_phu": 48.4, "khu_vuc": "Văn Chấn"},
    {"stt": 92, "ten": "Việt Hồng", "tong_dt": 10137, "dt_rung": 7387.4, "tu_nhien": 2016.9, "thanh_rung": 5045.3, "chua_thanh_rung": 325.2, "dac_dung": 0, "phong_ho": 1787.6, "san_xuat": 4635.2, "che_phu": 69.7, "khu_vuc": "Trấn Yên"},
    {"stt": 93, "ten": "Võ Lao", "tong_dt": 15283, "dt_rung": 11676.4, "tu_nhien": 7282.9, "thanh_rung": 3768.0, "chua_thanh_rung": 625.5, "dac_dung": 0, "phong_ho": 6554.5, "san_xuat": 4786.1, "che_phu": 72.3, "khu_vuc": "Văn Bàn"},
    {"stt": 94, "ten": "Xuân Ái", "tong_dt": 12393, "dt_rung": 8714.6, "tu_nhien": 1306.4, "thanh_rung": 6396.0, "chua_thanh_rung": 1012.3, "dac_dung": 0, "phong_ho": 0, "san_xuat": 8522.2, "che_phu": 62.1, "khu_vuc": "Văn Yên"},
    {"stt": 95, "ten": "Xuân Hòa", "tong_dt": 10778, "dt_rung": 7177.2, "tu_nhien": 1924.3, "thanh_rung": 4450.4, "chua_thanh_rung": 802.5, "dac_dung": 85.2, "phong_ho": 1435.0, "san_xuat": 5214.8, "che_phu": 59.1, "khu_vuc": "Bảo Yên"},
    {"stt": 96, "ten": "Xuân Quang", "tong_dt": 13771, "dt_rung": 8792.6, "tu_nhien": 848.8, "thanh_rung": 7099.0, "chua_thanh_rung": 844.8, "dac_dung": 0, "phong_ho": 0, "san_xuat": 6672.3, "che_phu": 57.7, "khu_vuc": "Bảo Thắng"},
    {"stt": 97, "ten": "Y Tý", "tong_dt": 12758, "dt_rung": 7830.5, "tu_nhien": 7402.9, "thanh_rung": 328.0, "chua_thanh_rung": 99.6, "dac_dung": 2550.3, "phong_ho": 3207.4, "san_xuat": 1697.3, "che_phu": 60.6, "khu_vuc": "Bát Xát"},
    {"stt": 98, "ten": "Yên Bình", "tong_dt": 15083, "dt_rung": 7674.0, "tu_nhien": 0, "thanh_rung": 7297.3, "chua_thanh_rung": 376.7, "dac_dung": 0, "phong_ho": 0, "san_xuat": 6055.7, "che_phu": 48.4, "khu_vuc": "Yên Bình"},
    {"stt": 99, "ten": "Yên Thành", "tong_dt": 14132, "dt_rung": 7621.2, "tu_nhien": 1106.4, "thanh_rung": 6184.0, "chua_thanh_rung": 330.8, "dac_dung": 0, "phong_ho": 176.6, "san_xuat": 6902.5, "che_phu": 51.6, "khu_vuc": "Yên Bình"}
]

# 6. Vùng trọng điểm kinh tế lâm nghiệp
VUNG_TRONG_DIEM = [
    {"ten": "Vùng Quế hữu cơ", "dien_tich": 147600, "san_luong": "47.000 tấn vỏ quế khô, 110.000 tấn cành lá/năm", "dia_ban": "Văn Yên (Phong Dụ, Mậu A, Viễn Sơn), Bảo Yên, Bắc Hà, Trấn Yên, Lục Yên, Văn Bàn", "loai_cay": "Quế Việt Nam xuất khẩu (Cinnamomum cassia)"},
    {"ten": "Vùng nguyên liệu gỗ rừng trồng", "dien_tich": 296000, "san_luong": "1,13 triệu m³ gỗ/năm", "dia_ban": "Bảo Thắng, Bảo Yên, Văn Bàn, Bát Xát, Lục Yên, Yên Bình, Trấn Yên, Văn Yên, Văn Chấn", "loai_cay": "Keo, mỡ, bồ đề, bạch đàn, sa mộc, thông"},
    {"ten": "Vùng Măng tre Bát Độ & nứa", "dien_tich": 8000, "san_luong": "130.000 tấn măng tươi/năm", "dia_ban": "Trấn Yên (Kiên Thành, Lương Thịnh, Hưng Khánh), Văn Yên, Văn Bàn, Lục Yên, Văn Chấn", "loai_cay": "Tre Bát Độ, bương, vầu, măng nứa"},
    {"ten": "Vùng Sơn Tra (Táo mèo)", "dien_tich": 7300, "san_luong": "4.000 tấn quả tươi/năm", "dia_ban": "Mù Cang Chải (Chế Tạo, Lao Chải, Nậm Có, Púng Luông), Trạm Tấu, Sa Pa, Bắc Hà", "loai_cay": "Cây Sơn Tra vùng cao (Docynia indica)"},
    {"ten": "Vùng Dược liệu dưới tán rừng", "dien_tich": 9930.75, "san_luong": "29 dự án phát triển dược liệu", "dia_ban": "VQG Hoàng Liên, VQG Bát Xát, KBT Nà Hẩu, KBT Mù Cang Chải, Bắc Hà, Trạm Tấu", "loai_cay": "Tam thất hoang, Sâm Fansipan, Sa nhân tím, Thảo quả, Khôi tía, Lan kim tuyến"}
]

# 7. Danh mục 49 TTHC chuẩn hóa (41 cấp tỉnh + 8 cấp xã)
DANH_MUC_TTHC = [
    {"stt": 1, "ma": "1.014836.H38", "ten": "Điều chỉnh ranh giới, diện tích khu rừng đặc dụng thuộc thẩm quyền Chủ tịch UBND cấp tỉnh", "cap": "Cấp tỉnh", "thoi_han": "30 ngày", "muc_do": "Một phần"},
    {"stt": 2, "ma": "1.014837.H38", "ten": "Điều chỉnh ranh giới, diện tích khu rừng phòng hộ thuộc thẩm quyền Chủ tịch UBND cấp tỉnh", "cap": "Cấp tỉnh", "thoi_han": "30 ngày", "muc_do": "Một phần"},
    {"stt": 3, "ma": "1.014838.H38", "ten": "Chuyển loại rừng đối với khu rừng thuộc thẩm quyền của Chủ tịch UBND cấp tỉnh", "cap": "Cấp tỉnh", "thoi_han": "30 ngày", "muc_do": "Một phần"},
    {"stt": 4, "ma": "1.014605.H38", "ten": "Cấp, cấp lại mã số rừng sản xuất là rừng trồng", "cap": "Cấp tỉnh", "thoi_han": "15 ngày", "muc_do": "Một phần"},
    {"stt": 5, "ma": "3.000501.H38", "ten": "Thẩm định, phê duyệt phương án nuôi, trồng cây dược liệu trong rừng đối với chủ rừng là tổ chức", "cap": "Cấp tỉnh", "thoi_han": "20 ngày", "muc_do": "Một phần"},
    {"stt": 6, "ma": "3000179", "ten": "Cấp Giấy phép xuất khẩu, nhập khẩu giống cây trồng lâm nghiệp", "cap": "Cấp tỉnh", "thoi_han": "10 ngày", "muc_do": "Một phần"},
    {"stt": 7, "ma": "1.012921.H38", "ten": "Thanh lý rừng trồng thuộc thẩm quyền quyết định của Chủ tịch UBND cấp tỉnh", "cap": "Cấp tỉnh", "thoi_han": "30 ngày", "muc_do": "Một phần"},
    {"stt": 8, "ma": "1.011470.H38", "ten": "Phê duyệt Phương án khai thác gỗ, thực vật rừng ngoài gỗ loài thông thường", "cap": "Cấp tỉnh", "thoi_han": "10 ngày", "muc_do": "Một phần"},
    {"stt": 9, "ma": "3.000198.H38", "ten": "Công nhận nguồn giống cây trồng lâm nghiệp (cây trội, rừng giống)", "cap": "Cấp tỉnh", "thoi_han": "15 ngày", "muc_do": "Một phần"},
    {"stt": 10, "ma": "1007916", "ten": "Nộp tiền trồng rừng thay thế về Quỹ Bảo vệ và Phát triển rừng tỉnh", "cap": "Cấp tỉnh", "thoi_han": "05 ngày", "muc_do": "Một phần"},
    {"stt": 11, "ma": "1.000055.H38", "ten": "Phê duyệt hoặc điều chỉnh phương án quản lý rừng bền vững của chủ rừng là tổ chức", "cap": "Cấp tỉnh", "thoi_han": "30 ngày", "muc_do": "Một phần"},
    {"stt": 12, "ma": "1.000084.H38", "ten": "Phê duyệt Đề án du lịch sinh thái, nghỉ dưỡng, giải trí trong rừng đặc dụng", "cap": "Cấp tỉnh", "thoi_han": "30 ngày", "muc_do": "Một phần"},
    {"stt": 13, "ma": "1.000081.H38", "ten": "Phê duyệt Đề án du lịch sinh thái, nghỉ dưỡng, giải trí trong rừng phòng hộ", "cap": "Cấp tỉnh", "thoi_han": "30 ngày", "muc_do": "Một phần"},
    {"stt": 14, "ma": "1.004819.H38", "ten": "Đăng ký mã số cơ sở nuôi, trồng các loài động vật, thực vật thuộc Phụ lục CITES", "cap": "Cấp tỉnh", "thoi_han": "15 ngày", "muc_do": "Một phần"},
    {"stt": 15, "ma": "3.000159.H38", "ten": "Xác nhận nguồn gốc gỗ trước khi xuất khẩu", "cap": "Cấp tỉnh", "thoi_han": "03 ngày", "muc_do": "Một phần"},
    {"stt": 16, "ma": "1.012689.H38", "ten": "Quyết định chuyển mục đích sử dụng rừng sang mục đích khác đối với tổ chức", "cap": "Cấp tỉnh", "thoi_han": "30 ngày", "muc_do": "Một phần"},
    {"stt": 17, "ma": "1000045", "ten": "Xác nhận bảng kê lâm sản", "cap": "Cấp tỉnh/huyện", "thoi_han": "03 ngày", "muc_do": "Một phần"},
    {"stt": 18, "ma": "CARBON-01", "ten": "Đăng ký, điều chỉnh dự án các-bon rừng", "cap": "Cấp tỉnh", "thoi_han": "30 ngày", "muc_do": "Một phần"},
    {"stt": 19, "ma": "CARBON-02", "ten": "Cấp tín chỉ các-bon rừng", "cap": "Cấp tỉnh", "thoi_han": "30 ngày", "muc_do": "Một phần"},
    {"stt": 20, "ma": "1.014832.H38", "ten": "Giao rừng, cho thuê rừng thuộc thẩm quyền của Chủ tịch UBND cấp xã", "cap": "Cấp xã", "thoi_han": "30 ngày", "muc_do": "Một phần"},
    {"stt": 21, "ma": "3.000502.H38", "ten": "Phê duyệt phương án trồng cây dược liệu trong rừng đối với hộ gia đình, cá nhân", "cap": "Cấp xã", "thoi_han": "15 ngày", "muc_do": "Một phần"},
    {"stt": 22, "ma": "1.012922.H38", "ten": "Kiểm tra hiện trường rừng trồng bị thiệt hại do thiên tai, dịch bệnh", "cap": "Cấp xã", "thoi_han": "05 ngày", "muc_do": "Một phần"},
    {"stt": 23, "ma": "1.012531.H38", "ten": "Hỗ trợ lãi suất vốn vay ngân hàng để trồng rừng gỗ lớn đối với hộ gia đình", "cap": "Cấp xã", "thoi_han": "15 ngày", "muc_do": "Một phần"},
    {"stt": 24, "ma": "1.011471.H38", "ten": "Phê duyệt Phương án khai thác gỗ, lâm sản loài thông thường thuộc thẩm quyền UBND xã", "cap": "Cấp xã", "thoi_han": "07 ngày", "muc_do": "Một phần"},
    {"stt": 25, "ma": "1.012694.H38", "ten": "Chuyển mục đích sử dụng rừng sang mục đích khác đối với cá nhân", "cap": "Cấp xã", "thoi_han": "20 ngày", "muc_do": "Một phần"}
]

# 8. Số liệu quản lý điều hành (Cập nhật chuẩn theo dữ liệu công bố)
SO_LIEU_DIEU_HANH = {
    "tthc": {
        "tiep_nhan": 20,
        "da_giai_quyet": 18,
        "dang_giai_quyet": 2,
        "qua_han": 0
    },
    "canh_bao_chay": {
        "cap_v": 14,
        "cap_iv": 15,
        "cap_iii": 60,
        "cap_ii": 10,
        "cap_i": 0
    },
    "san_xuat_lam_nghiep": {
        "trong_rung": "500 ha",
        "khai_thac_go": "1.000 m³",
        "san_xuat_giong": "1 triệu cây",
        "co_so_che_bien": "100 cơ sở",
        "co_so_gay_nuoi": "100 cơ sở",
        "gia_tri_san_xuat": "10 tỷ đồng"
    },
    "dich_vu_mtr": {
        "dien_tich_cung_ung": "800.000 ha",
        "so_tien_chi_tra": "150 tỷ đồng"
    },
    "vi_pham_phap_luat": {
        "tong_so_vu": "20 vụ",
        "thu_nop_ngan_sach": "1 tỷ đồng"
    }
}
