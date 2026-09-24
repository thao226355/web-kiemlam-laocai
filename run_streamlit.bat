@echo off
title Khoi chay Web Chi cuc Kiem lam Lao Cai (Streamlit)
cd /d "%~dp0"
echo ========================================================
echo   CHI CUC KIEM LAM TINH LAO CAI (LAO CAI + YEN BAI)
echo   He thong thong tin dieu hanh & du lieu lam nghiep
echo   Dang khoi dong may chu Streamlit...
echo ========================================================
echo.
python -m streamlit run app_streamlit.py
pause
