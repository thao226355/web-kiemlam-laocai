# WEBSITE CHI CỤC KIỂM LÂM TỈNH LÀO CAI
## HỆ THỐNG THÔNG TIN ĐIỀU HÀNH & CÔNG KHAI DỮ LIỆU LÂM NGHIỆP
### TỈNH LÀO CAI (SÁP NHẬP LÀO CAI + YÊN BÁI)

[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Online-22c55e?style=for-the-badge&logo=github)](https://thao226355.github.io/web-kiemlam-laocai/)
[![Streamlit App](https://img.shields.io/badge/Streamlit_Cloud-Online-FF4B4B?style=for-the-badge&logo=streamlit)](https://share.streamlit.io/)
[![Python](https://img.shields.io/badge/Python-3.12-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![QĐ 537/QĐ-UBND](https://img.shields.io/badge/C%C6%A1_s%E1%BB%9F_ph%C3%A1p_l%C3%BD-Q%C4%90_537/Q%C4%90--UBND-0284c7?style=for-the-badge)](file:///C:/Drive_20260210/OneDrive/0_Document/03_VBPL/_V%C4%83n%20b%E1%BA%A3n%20t%E1%BB%89nh,%20s%E1%BB%91%20li%E1%BB%87u/_260227_537_QD-UBND_Quy%E1%BA%BFt%20%C4%91%E1%BB%8Bnh%20v%E1%BB%81%20vi%E1%BB%87c%20c%C3%B4ng%20b%E1%BB%91%20hi%E1%BB%87n%20tr%E1%BA%A1ng%20r%E1%BB%ABng%20t%E1%BB%89nh%20L%C3%A0o%20Cai%20n%C4%83m%202025.md)

---

### 1. Kiến trúc hệ thống đa nền tảng (Hybrid Architecture)
Dự án được thiết kế đồng bộ theo mô hình kiến trúc kép, tối ưu cho việc lưu trữ và triển khai trên GitHub:

```text
Web_CCKL/
│
├── .streamlit/                   # Cấu hình giao diện Streamlit Cloud
│   └── config.toml               # Định dạng màu xanh Kiểm lâm (#15803d), font chuẩn
│
├── css/                          # Định dạng giao diện Web tĩnh
│   └── style.css                 # Giao diện responsive, nhận diện ngành Kiểm lâm
│
├── js/                           # Mã kịch bản điều khiển Web tĩnh
│   ├── app.js                    # Điều phối sự kiện giao diện, bộ lọc, modal
│   ├── charts.js                 # Bản đồ hành chính SVG Lào Cai mới & biểu đồ Canvas
│   └── data.js                   # Cơ sở dữ liệu JSON cho 99 xã, 11 Hạt KL, 49 TTHC
│
├── images/                       # Tài nguyên bản đồ và hình ảnh dùng chung
│   └── ban_do_hien_trang.png     # Bản đồ hiện trạng lâm nghiệp mới nhất (QĐ 537)
│
├── app_streamlit.py              # File chạy chính của Web Trực tuyến (Python Streamlit Dashboard)
├── data_forestry.py              # Cơ sở dữ liệu lâm nghiệp QĐ 537 dùng cho Python
├── index.html                    # File chạy chính của Web Tĩnh (GitHub Pages / Local)
├── requirements.txt              # Danh mục thư viện Python cho Streamlit Cloud
├── run_streamlit.bat             # File click đúp khởi chạy nhanh Streamlit trên máy tính
├── sync_github.bat               # File click đúp tự động đồng bộ thay đổi lên GitHub
├── .gitignore                    # Bộ lọc tệp rác, file tạm và video
└── README.md                     # Tài liệu hướng dẫn sử dụng và vận hành
```

---

### 2. Hai phương thức vận hành hệ thống

#### 2.1. Nền tảng 1: Web Tĩnh (GitHub Pages & Chạy Local Offline)
- **Công nghệ:** HTML5, CSS3 hiện đại, Vanilla JavaScript (Không yêu cầu cài đặt Node.js hay máy chủ).
- **Chạy offline trên máy:** Nhấp đúp trực tiếp vào tệp [`index.html`](index.html).
- **Chạy trực tuyến trên GitHub Pages:** Truy cập địa chỉ:  
  👉 **`https://thao226355.github.io/web-kiemlam-laocai/`**

#### 2.2. Nền tảng 2: Dashboard Trực tuyến (Streamlit Community Cloud)
- **Công nghệ:** Python 3.12, Streamlit, Pandas, Plotly GIS Map.
- **Chạy trên máy tính:** Nhấp đúp vào tệp [`run_streamlit.bat`](run_streamlit.bat) hoặc chạy lệnh:
  ```powershell
  python -m streamlit run app_streamlit.py
  ```
- **Triển khai trên Streamlit Community Cloud (Miễn phí 24/7):**
  1. Truy cập [share.streamlit.io](https://share.streamlit.io/) và đăng nhập GitHub `thao226355`.
  2. Bấm **Create app** và chọn kho: `thao226355/web-kiemlam-laocai`.
  3. Chỉ định nhánh `main` và file khởi chạy: `app_streamlit.py`.
  4. Bấm **Deploy!**.

---

### 3. Hướng dẫn đồng bộ thay đổi lên GitHub

Mỗi khi bạn chỉnh sửa số liệu, hình ảnh hay mã nguồn trên máy tính:

#### Cách 1: Đồng bộ bằng 1 click chuột (Khuyên dùng trên Windows)
- Nhấp đúp vào tệp [`sync_github.bat`](sync_github.bat).
- Nhập ghi chú thay đổi (hoặc nhấn **Enter** để dùng mặc định).
- Hệ thống sẽ tự động thực hiện `git add`, `git commit` và `git push origin main`.

#### Cách 2: Đồng bộ bằng dòng lệnh PowerShell / CMD
```powershell
cd "C:\Drive_20260210\OneDrive\0_Document\01_Cong_van\Thiết kế web\Web_CCKL"
git add .
git commit -m "Cap nhat noi dung website Chi cuc Kiem lam Lao Cai"
git push origin main
```

Sau khi đẩy code lên, cả **GitHub Pages** và **Streamlit Cloud** sẽ tự động làm mới và cập nhật dữ liệu mới nhất trong vòng 1-2 phút!

---

### 4. Dữ liệu chuẩn hóa theo Quyết định số 537/QĐ-UBND
- **Tổng diện tích tự nhiên:** 1.325.675,0 ha.
- **Diện tích đất có rừng:** 860.494,3 ha (gồm 581.442,8 ha rừng tự nhiên và 279.051,5 ha rừng trồng).
- **Tỷ lệ che phủ rừng:** 61,50% trên toàn bộ 99 xã/phường hợp nhất.
- **Tổ chức bộ máy:** 11 Hạt Kiểm lâm khu vực, 4 Phòng nghiệp vụ, 2 Đội cơ động, 5 BQL Khu bảo tồn, 461 cán bộ CCVC.
- **Dịch vụ công:** 49 Thủ tục hành chính (41 cấp tỉnh, 8 cấp xã) và hệ thống tra cứu mã hồ sơ theo thời gian thực.
