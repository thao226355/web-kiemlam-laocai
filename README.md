# WEBSITE CHI CỤC KIỂM LÂM TỈNH LÀO CAI
## HỆ THỐNG THÔNG TIN ĐIỀU HÀNH & CÔNG KHAI DỮ LIỆU LÂM NGHIỆP
### TỈNH LÀO CAI (SÁP NHẬP LÀO CAI + YÊN BÁI)

Hệ thống được phát triển với 2 phiên bản song song:
1. **Phiên bản Web Local (HTML5/CSS3/Vanilla JS):** Chạy trực tiếp 100% offline không cần cài đặt máy chủ, nhấp đúp file `index.html` để sử dụng ngay.
2. **Phiên bản Web Trực Tuyến Streamlit (Python):** Ứng dụng dashboard tương tác hiện đại, hỗ trợ phân tích dữ liệu, bản đồ hiện trạng lâm nghiệp mới nhất và sẵn sàng đưa lên môi trường trực tuyến (Online Cloud / Server).

---

### 1. Cấu trúc thư mục mã nguồn
```text
Web_CCKL/
│
├── app_streamlit.py      # Ứng dụng Web Streamlit chính (Python Dashboard)
├── data_forestry.py      # Module cơ sở dữ liệu lâm nghiệp chuẩn theo QĐ 537/QĐ-UBND
├── requirements.txt      # Danh mục thư viện Python (streamlit, pandas, plotly)
├── run_streamlit.bat     # File khởi chạy nhanh Streamlit chỉ bằng 1 click đúp chuột
├── .gitignore            # Bỏ qua các file rác, file tạm khi đẩy Git
│
├── index.html            # Phiên bản Web Local SPA (HTML5/CSS3/Vanilla JS)
├── README.md             # Hướng dẫn chi tiết sử dụng và vận hành
│
├── images/
│   └── ban_do_hien_trang.png  # Bản đồ hiện trạng lâm nghiệp tỉnh Lào Cai mới nhất
│
├── css/
│   └── style.css         # Giao diện responsive, nhận diện ngành Kiểm lâm
│
└── js/
    ├── data.js           # Dữ liệu JSON cho phiên bản web tĩnh
    ├── charts.js         # Bản đồ hành chính SVG tỉnh Lào Cai mới & biểu đồ Canvas
    └── app.js            # Logic điều phối giao diện web tĩnh & tương tác bản đồ
```

---

### 2. Hướng dẫn khởi chạy ứng dụng Streamlit trên máy tính (Local)

#### Cách 1: Khởi chạy nhanh bằng File Batch (Khuyên dùng trên Windows)
1. Mở thư mục: `C:\Drive_20260210\OneDrive\0_Document\01_Cong_van\Thiết kế web\Web_CCKL`
2. Nhấp đúp chuột vào tệp [`run_streamlit.bat`](file:///C:/Drive_20260210/OneDrive/0_Document/01_Cong_van/Thi%E1%BA%BFt%20k%E1%BA%BF%20web/Web_CCKL/run_streamlit.bat).
3. Ứng dụng sẽ tự động mở trên trình duyệt tại địa chỉ: `http://localhost:8501`.

#### Cách 2: Khởi chạy bằng lệnh PowerShell / CMD
```powershell
cd "C:\Drive_20260210\OneDrive\0_Document\01_Cong_van\Thiết kế web\Web_CCKL"
python -m streamlit run app_streamlit.py
```

---

### 3. Hướng dẫn từng bước đẩy dự án lên GitHub

#### Bước 3.1: Tạo Repository mới trên GitHub
1. Truy cập [https://github.com](https://github.com) và đăng nhập.
2. Bấm nút **New** (hoặc dấu `+` ở góc trên bên phải -> **New repository**).
3. Đặt tên kho lưu trữ (Repository name), ví dụ: `web-kiemlam-laocai`.
4. Chọn chế độ **Public** (để dễ dàng deploy lên Streamlit Cloud miễn phí) hoặc **Private**.
5. **Lưu ý:** Không tích chọn "Add a README file" hay ".gitignore" (vì dự án đã có sẵn).
6. Bấm **Create repository**. Copy đường dẫn URL của kho, ví dụ: `https://github.com/<tai-khoan-cua-ban>/web-kiemlam-laocai.git`.

#### Bước 3.2: Thực hiện các lệnh Git trên máy tính
Mở **PowerShell** hoặc **CMD** (Command Prompt), chạy lần lượt các lệnh sau:

```powershell
# 1. Di chuyển vào thư mục dự án
cd "C:\Drive_20260210\OneDrive\0_Document\01_Cong_van\Thiết kế web\Web_CCKL"

# 2. Khởi tạo Git repository local
git init

# 3. Thêm toàn bộ tệp tin vào staging
git add .

# 4. Tạo commit đầu tiên
git commit -m "Khoi tao Website Chi cuc Kiem lam Lao Cai - Ban do hien trang QD 537"

# 5. Đổi tên nhánh mặc định thành main
git branch -M main

# 6. Liên kết với kho GitHub của bạn (thay URL bằng link repo thật của bạn)
git remote add origin https://github.com/<tai-khoan-cua-ban>/web-kiemlam-laocai.git

# 7. Đẩy mã nguồn lên GitHub
git push -u origin main
```

*(Lần đầu push, Git sẽ hiển thị cửa sổ yêu cầu đăng nhập GitHub hoặc nhập Personal Access Token).*

---

### 4. Hướng dẫn đưa Website lên Online miễn phí (Streamlit Community Cloud)

Sau khi đã đẩy code lên GitHub ở Bước 3:
1. Truy cập trang: [https://share.streamlit.io/](https://share.streamlit.io/) và bấm **Sign in with GitHub**.
2. Bấm nút **Create app** (hoặc **New app**).
3. Điền các trường:
   - **Repository:** Chọn repository vừa tạo (vd: `<tai-khoan-cua-ban>/web-kiemlam-laocai`).
   - **Branch:** `main`
   - **Main file path:** `app_streamlit.py`
   - **App URL (tùy chọn):** Có thể đặt tên miền phụ dễ nhớ, ví dụ `kiemlam-laocai.streamlit.app`.
4. Bấm **Deploy!**.
5. Chờ 1-2 phút, hệ thống Cloud của Streamlit sẽ tự động đọc `requirements.txt`, cài đặt môi trường và cấp đường link website trực tuyến hoạt động 24/7.

---

### 5. Các tính năng nổi bật của hệ thống
- **🗺️ Bản đồ Hiện trạng Thực tế:** Tích hợp đầy đủ không gian địa lý tỉnh Lào Cai mới sau sáp nhập (gồm Yên Bái + Lào Cai), thể hiện phân định rõ ranh giới xã, huyện, rừng tự nhiên, rừng trồng và các Vườn Quốc gia, Khu Bảo tồn.
- **📊 Đồng bộ số liệu QĐ số 537/QĐ-UBND:** Tổng diện tích tự nhiên 1.325.675,0 ha; Diện tích có rừng 860.494,3 ha; Độ che phủ 61,50%.
- **📑 Tra cứu 99 Xã/Phường & 49 TTHC:** Lọc theo Hạt Kiểm lâm, xuất file Excel/CSV chuẩn báo cáo.
- **🔥 Giám sát Cháy rừng FWI:** Theo dõi cấp nguy cơ cháy theo từng vùng địa bàn.
