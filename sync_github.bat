@echo off
chcp 65001 > nul
echo ==============================================================================
echo   ĐỒNG BỘ DỰ ÁN WEBSITE LÊN GITHUB: thao226355/web-kiemlam-laocai
echo ==============================================================================
cd /d "%~dp0"

echo.
echo [1/3] Kiểm tra trạng thái thay đổi...
git status -s

echo.
set /p msg="Nhập nội dung ghi chú thay đổi (Nhấn Enter để dùng mặc định): "
if "%msg%"=="" set msg=Cap nhat noi dung website Chi cuc Kiem lam Lao Cai

echo.
echo [2/3] Đang ghi nhận các thay đổi (git add & commit)...
git add .
git commit -m "%msg%"

echo.
echo [3/3] Đang đẩy dữ liệu lên GitHub (git push origin main)...
git push origin main

echo.
if %errorlevel% equ 0 (
    echo ==============================================================================
    echo   ✓ ĐỒNG BỘ THÀNH CÔNG LÊN GITHUB!
    echo   Kho lưu trữ: https://github.com/thao226355/web-kiemlam-laocai
    echo   GitHub Pages: https://thao226355.github.io/web-kiemlam-laocai/
    echo ==============================================================================
) else (
    echo [LỖI]: Không thể đẩy lên GitHub. Vui lòng kiểm tra lại kết nối mạng hoặc thông tin đăng nhập!
)
pause
