/**
 * DỮ LIỆU HỆ THỐNG THÔNG TIN ĐIỀU HÀNH & CÔNG KHAI DỮ LIỆU LÂM NGHIỆP
 * CHI CỤC KIỂM LÂM TỈNH LÀO CAI
 * Căn cứ:
 * - Quyết định số 537/QĐ-UBND ngày 27/02/2026 của UBND tỉnh Lào Cai
 * - Quyết định số 2336/QĐ-UBND ngày 12/12/2025 giao chỉ tiêu KT-XH năm 2026
 * - Quyết định số 1382/QĐ-UBND ngày 23/04/2026 về Đề án Du lịch sinh thái
 * - Báo cáo tổng hợp ngành lâm nghiệp cập nhật tháng 5/2026
 */

const CCKL_DATA = {
    // 1. Chỉ số tổng quan toàn tỉnh Lào Cai
    tongQuan: {
        namDuLieu: 2025,
        thoiDiemCapNhat: "Tháng 05/2026",
        canCuPhapLy: "Quyết định số 537/QĐ-UBND ngày 27/02/2026 của UBND tỉnh Lào Cai",
        tongDienTichTuNhien: 1325675.0, // ha
        tongDienTichDatCoRung: 860494.3, // ha
        bienDongDienTich: -4565.6, // biến động ròng kỳ 2025
        rungTuNhien: {
            dienTich: 466715.6, // ha
            tyLe: 54.24 // %
        },
        rungTrong: {
            tongDienTich: 393778.7, // ha
            daThanhRung: 347919.6, // ha
            chuaThanhRung: 45859.1 // ha
        },
        dienTichDuTieuChiChePhu: 814635.2, // ha (RTN + RT đã thành rừng)
        tyLeChePhuRung: 61.5, // %
        tongSoXaPhuong: 99,
        tongSoHatKiemLam: 11,
        tongSoBQLRung: 10, // 5 BQL Rừng đặc dụng + 5 BQL Rừng phòng hộ
        soLieuDieuHanh: {
            tthc: { tongTiepNhan: 20, daGiaiQuyet: 18, dangXuLy: 2, quaHan: 0 },
            chayRung: { capV: 14, capIV: 15, capIII: 60, capII: 10, capI: 0 }
        }
    },

    // 2. Cơ cấu rừng theo mục đích sử dụng (Biểu 1 - QĐ 537)
    mucDichSuDung: [
        {
            id: "dac_dung",
            ten: "Rừng đặc dụng",
            dienTich: 94212.3,
            tyLe: 10.95,
            color: "#198754",
            tuNhien: 88187.0,
            daThanhRung: 5596.7,
            chuaThanhRung: 428.6,
            chiTiet: "VQG Hoàng Liên (19.632,2 ha), Khu BTTN Bát Xát, Nà Hẩu, HL-Văn Bàn (55.069,7 ha), KBT loài Mù Cang Chải (19.425,2 ha), Khu NC thực nghiệm (85,2 ha)"
        },
        {
            id: "phong_ho",
            ten: "Rừng phòng hộ",
            dienTich: 279401.7,
            tyLe: 32.47,
            color: "#0d6efd",
            tuNhien: 237153.0,
            daThanhRung: 36578.1,
            chuaThanhRung: 5670.6,
            chiTiet: "Phòng hộ đầu nguồn sông Hồng, sông Chảy (243.473,8 ha); Rừng bảo vệ nguồn nước sinh hoạt, thủy điện (35.927,9 ha)"
        },
        {
            id: "san_xuat",
            ten: "Rừng sản xuất",
            dienTich: 414558.8,
            tyLe: 48.18,
            color: "#ffc107",
            tuNhien: 129869.2,
            daThanhRung: 251722.3,
            chuaThanhRung: 32967.3,
            chiTiet: "Vùng quế trọng điểm (Bảo Yên, Văn Yên, Trấn Yên), vùng gỗ keo, mỡ, bồ đề, tre bát độ, sa mộc, thông"
        },
        {
            id: "khac",
            ten: "Mục đích khác",
            dienTich: 72321.5,
            tyLe: 8.40,
            color: "#fd7e14",
            tuNhien: 11506.3,
            daThanhRung: 54022.5,
            chuaThanhRung: 6792.7,
            chiTiet: "Đất lâm nghiệp tạm giao và quy hoạch dự trữ phát triển hạ tầng sinh thái"
        }
    ],

    // 3. Cơ cấu diện tích theo chủ quản lý (Biểu 2 - QĐ 537)
    chuQuanLy: [
        { id: 1, loai: "Ban Quản lý Rừng đặc dụng", dienTich: 94099.0, tuNhien: 88074.3, trong: 6024.7, tyLe: 10.94 },
        { id: 2, loai: "Ban Quản lý Rừng phòng hộ", dienTich: 211221.7, tuNhien: 161724.5, trong: 49497.2, tyLe: 24.55 },
        { id: 3, loai: "Tổ chức kinh tế (Công ty lâm nghiệp)", dienTich: 38614.2, tuNhien: 17414.3, trong: 21199.9, tyLe: 4.49 },
        { id: 4, loai: "Lực lượng vũ trang (Công an, Quân đội)", dienTich: 1040.1, tuNhien: 364.4, trong: 675.7, tyLe: 0.12 },
        { id: 5, loai: "Tổ chức KH&CN, Đào tạo giáo dục", dienTich: 3374.1, tuNhien: 2819.8, trong: 3282.0, tyLe: 0.39 },
        { id: 6, loai: "Hộ gia đình, cá nhân trong nước", dienTich: 182358.9, tuNhien: 30347.4, trong: 152011.5, tyLe: 21.19 },
        { id: 7, loai: "Cộng đồng dân cư thôn, bản", dienTich: 7264.1, tuNhien: 3546.5, trong: 3717.6, tyLe: 0.84 },
        { id: 8, loai: "UBND cấp xã tạm quản lý", dienTich: 322522.1, tuNhien: 165152.1, trong: 157370.1, tyLe: 37.48 }
    ],

    // 4. Số liệu 11 Hạt Kiểm lâm khu vực toàn tỉnh Lào Cai (QĐ số 15/QĐ-CCKL ngày 05/02/2026)
    hatKiemLam: [
        { id: "bat_xat", ten: "Hạt KL khu vực Bát Xát", diaBan: "13 xã, phường: Bát Xát, A Mú Sung, A Lù, Bản Qua, Bản Xèo, Cốc Mỳ, Dền Thàng, Mường Vi, Nậm Chạc, Nậm Pung, Phìn Ngan, Quang Kim, Trịnh Tường", tongDT: 55236.0, tuNhien: 37964.0, trong: 16669.0, chuaThanhRung: 602.0, chePhu: 57.4, bienChe: 41, capChay: "Cao", fwi: 36.4, truSo: "Xã Bát Xát" },
        { id: "bao_yen", ten: "Hạt KL khu vực Bảo Yên", diaBan: "8 xã: Bảo Yên, Bảo Hà, Điện Quan, Nghĩa Đô, Tân Dương, Vĩnh Yên, Xuân Hòa, Kim Sơn", tongDT: 85779.6, tuNhien: 23941.2, trong: 52726.0, chuaThanhRung: 9111.9, chePhu: 65.5, bienChe: 29, capChay: "Trung bình", fwi: 27.2, truSo: "Xã Phố Ràng" },
        { id: "bao_thang", ten: "Hạt KL khu vực Bảo Thắng", diaBan: "8 xã: Bảo Thắng, Phong Niên, Phố Lu, Bản Phiệt, Bản Cầm, Xuân Giao, Phú Nhuận, Gia Phú", tongDT: 70821.3, tuNhien: 25941.1, trong: 41420.2, chuaThanhRung: 3460.2, chePhu: 64.7, bienChe: 28, capChay: "Trung bình", fwi: 28.4, truSo: "Xã Phố Lu" },
        { id: "bac_ha", ten: "Hạt KL khu vực Bắc Hà", diaBan: "10 xã: Bắc Hà, Bản Liền, Bảo Nhai, Cốc Lầu, Hoàng Thu Phố, Lùng Phình, Nậm Đét, Tả Củ Tỷ, Tả Van Chư, Thải Giàng Phố", tongDT: 49223.5, tuNhien: 31253.8, trong: 15589.5, chuaThanhRung: 2380.1, chePhu: 52.8, bienChe: 39, capChay: "Trung bình", fwi: 26.5, truSo: "Xã Bắc Hà" },
        { id: "van_ban", ten: "Hạt KL khu vực Văn Bàn", diaBan: "7 xã: Văn Bàn, Chiềng Ken, Dần Thàng, Dương Quỳ, Hòa Mạc, Liêm Phú, Thẩm Dương", tongDT: 81895.0, tuNhien: 56645.8, trong: 20262.7, chuaThanhRung: 4986.7, chePhu: 66.8, bienChe: 38, capChay: "Cao", fwi: 38.6, truSo: "Xã Khánh Yên" },
        { id: "tran_yen", ten: "Hạt KL khu vực Trấn Yên", diaBan: "16 xã, phường: Trấn Yên, Cổ Phúc, Hưng Khánh, Kiên Thành, Lương Thịnh, Minh Quán, Quy Mông, Y Can, Nam Cường, Bắc Cường, Duyên Hải, Kim Tân, Lào Cai, Pom Hán, Bình Minh, Cốc San", tongDT: 140016.5, tuNhien: 43301.6, trong: 86720.8, chuaThanhRung: 9994.1, chePhu: 68.2, bienChe: 49, capChay: "Trung bình", fwi: 25.4, truSo: "Xã Cổ Phúc, Trấn Yên" },
        { id: "nghia_lo", ten: "Hạt KL khu vực Nghĩa Lộ", diaBan: "15 xã, phường: Cát Thịnh, Chấn Thịnh, Gia Hội, Nghĩa Lộ, Sơn Thịnh, Suối Giàng, Thượng Bằng La, Tú Lệ, Bản Công, Bản Mù, Hát Lừu, Pá Hu, Pá Lau, Phình Hồ, Xà Hồ", tongDT: 117977.2, tuNhien: 74384.5, trong: 35713.0, chuaThanhRung: 7879.8, chePhu: 58.6, bienChe: 42, capChay: "Cao", fwi: 37.8, truSo: "Phường Tân An, Nghĩa Lộ" },
        { id: "luc_yen", ten: "Hạt KL khu vực Lục Yên", diaBan: "10 xã: Lục Yên, Cảm Nhân, Khánh Hòa, Lâm Thượng, Mai Sơn, Mường Lai, Tân Lĩnh, Tân Phượng, Tô Mậu, Vĩnh Lạc", tongDT: 89998.9, tuNhien: 25274.0, trong: 59175.9, chuaThanhRung: 5549.2, chePhu: 62.4, bienChe: 34, capChay: "Trung bình", fwi: 24.8, truSo: "Xã Yên Thế, Lục Yên" },
        { id: "mu_cang_chai", ten: "Hạt KL khu vực Mù Cang Chải", diaBan: "7 xã: Mù Cang Chải, Chế Tạo, Khao Mang, Lao Chải, Mồ Dề, Nậm Có, Púng Luông", tongDT: 81918.8, tuNhien: 62764.6, trong: 18160.7, chuaThanhRung: 993.6, chePhu: 69.4, bienChe: 25, capChay: "Rất cao", fwi: 41.5, truSo: "Xã Mù Cang Chải" },
        { id: "kbt_hoang_lien_van_ban", ten: "Hạt KL KBT Hoàng Liên – Văn Bàn", diaBan: "2 xã: Minh Lương, Nậm Xé (và rừng đặc dụng thuộc xã Khánh Yên)", tongDT: 28998.5, tuNhien: 28237.5, trong: 294.0, chuaThanhRung: 467.0, chePhu: 88.7, bienChe: 11, capChay: "Cao", fwi: 38.6, truSo: "Xã Nậm Xé, Văn Bàn" },
        { id: "kbt_bat_xat", ten: "Hạt KL Khu bảo tồn Bát Xát", diaBan: "3 xã: Mường Hum, Dền Sáng, Y Tý", tongDT: 34316.4, tuNhien: 33339.0, trong: 574.0, chuaThanhRung: 403.4, chePhu: 86.2, bienChe: 9, capChay: "Cao", fwi: 37.2, truSo: "Xã Y Tý, Bát Xát" }
    ],

    // 5. Toàn bộ 99 Xã/Phường theo Biểu 3 - Quyết định 537/QĐ-UBND
    danhSach99XaPhuong: [
        { stt: 1, ten: "A Mú Sung", tongDT: 10445, dtRung: 4543.9, tuNhien: 3563.5, thanhRung: 777.3, chuaThanhRung: 203.1, dacDung: 0, phongHo: 2423.3, sanXuat: 1644.5, khac: 476.0, chePhu: 41.6, khuVuc: "Bát Xát" },
        { stt: 2, ten: "Bản Hồ", tongDT: 16633, dtRung: 11887.3, tuNhien: 11680.5, thanhRung: 188.2, chuaThanhRung: 18.5, dacDung: 9141.9, phongHo: 1636.2, sanXuat: 852.8, khac: 256.5, chePhu: 71.4, khuVuc: "Sa Pa" },
        { stt: 3, ten: "Bản Lầu", tongDT: 12528, dtRung: 4569.0, tuNhien: 2837.6, thanhRung: 1428.4, chuaThanhRung: 303.0, dacDung: 0, phongHo: 2279.5, sanXuat: 1839.7, khac: 449.9, chePhu: 34.1, khuVuc: "Mường Khương" },
        { stt: 4, ten: "Bản Liền", tongDT: 7669, dtRung: 4307.5, tuNhien: 2994.7, thanhRung: 1174.0, chuaThanhRung: 138.7, dacDung: 0, phongHo: 2726.3, sanXuat: 951.0, khac: 630.2, chePhu: 54.4, khuVuc: "Bắc Hà" },
        { stt: 5, ten: "Bản Xèo", tongDT: 7834, dtRung: 4103.5, tuNhien: 3630.5, thanhRung: 358.0, chuaThanhRung: 115.0, dacDung: 0, phongHo: 2909.5, sanXuat: 740.7, khac: 453.3, chePhu: 50.9, khuVuc: "Bát Xát" },
        { stt: 6, ten: "Bảo Ái", tongDT: 16341, dtRung: 9056.0, tuNhien: 1048.9, thanhRung: 7604.1, chuaThanhRung: 403.1, dacDung: 0, phongHo: 0, sanXuat: 7837.7, khac: 1218.4, chePhu: 53.0, khuVuc: "Yên Bình" },
        { stt: 7, ten: "Bảo Hà", tongDT: 24300, dtRung: 16062.3, tuNhien: 1427.2, thanhRung: 11826.5, chuaThanhRung: 2808.1, dacDung: 0, phongHo: 1515.8, sanXuat: 11542.3, khac: 3004.2, chePhu: 54.5, khuVuc: "Bảo Yên" },
        { stt: 8, ten: "Bảo Nhai", tongDT: 15601, dtRung: 8491.8, tuNhien: 1933.7, thanhRung: 6252.1, chuaThanhRung: 306.1, dacDung: 0, phongHo: 2497.0, sanXuat: 3459.5, khac: 2535.3, chePhu: 52.5, khuVuc: "Bắc Hà" },
        { stt: 9, ten: "Bảo Thắng", tongDT: 16044, dtRung: 11722.3, tuNhien: 59.5, thanhRung: 10328.1, chuaThanhRung: 1334.8, dacDung: 0, phongHo: 0, sanXuat: 9838.7, khac: 1883.6, chePhu: 64.7, khuVuc: "Bảo Thắng" },
        { stt: 10, ten: "Bảo Yên", tongDT: 11915, dtRung: 8705.2, tuNhien: 1771.5, thanhRung: 6038.0, chuaThanhRung: 895.8, dacDung: 0, phongHo: 718.9, sanXuat: 7478.4, khac: 507.9, chePhu: 65.5, khuVuc: "Bảo Yên" },
        { stt: 11, ten: "Bát Xát", tongDT: 18954, dtRung: 11016.6, tuNhien: 6447.7, thanhRung: 4429.1, chuaThanhRung: 139.7, dacDung: 0, phongHo: 5938.9, sanXuat: 3789.1, khac: 1288.6, chePhu: 57.4, khuVuc: "Bát Xát" },
        { stt: 12, ten: "Bắc Hà", tongDT: 17972, dtRung: 6884.9, tuNhien: 3816.3, thanhRung: 2845.1, chuaThanhRung: 223.5, dacDung: 0, phongHo: 3208.6, sanXuat: 2320.1, khac: 1356.2, chePhu: 37.1, khuVuc: "Bắc Hà" },
        { stt: 13, ten: "Cảm Nhân", tongDT: 15177, dtRung: 12064.0, tuNhien: 2699.3, thanhRung: 8685.3, chuaThanhRung: 679.4, dacDung: 0, phongHo: 1713.4, sanXuat: 9402.5, khac: 948.1, chePhu: 75.0, khuVuc: "Yên Bình" },
        { stt: 14, ten: "Cao Sơn", tongDT: 16456, dtRung: 5813.8, tuNhien: 4991.3, thanhRung: 792.0, chuaThanhRung: 30.4, dacDung: 0, phongHo: 4173.9, sanXuat: 1509.5, khac: 130.4, chePhu: 35.1, khuVuc: "Mường Khương" },
        { stt: 15, ten: "Cát Thịnh", tongDT: 16912, dtRung: 12094.7, tuNhien: 9015.7, thanhRung: 2456.0, chuaThanhRung: 623.0, dacDung: 0, phongHo: 3686.5, sanXuat: 8163.5, khac: 244.6, chePhu: 67.8, khuVuc: "Văn Chấn" },
        { stt: 16, ten: "Cốc Lầu", tongDT: 13581, dtRung: 9234.3, tuNhien: 2753.8, thanhRung: 6218.0, chuaThanhRung: 262.5, dacDung: 0, phongHo: 3381.1, sanXuat: 2785.9, khac: 3067.3, chePhu: 66.1, khuVuc: "Bắc Hà" },
        { stt: 17, ten: "Cốc San", tongDT: 5719, dtRung: 3433.3, tuNhien: 1655.1, thanhRung: 1755.0, chuaThanhRung: 23.2, dacDung: 0, phongHo: 587.5, sanXuat: 2160.3, khac: 685.6, chePhu: 59.6, khuVuc: "TP Lào Cai" },
        { stt: 18, ten: "Chấn Thịnh", tongDT: 12053, dtRung: 6774.3, tuNhien: 2592.7, thanhRung: 3235.1, chuaThanhRung: 946.7, dacDung: 0, phongHo: 967.3, sanXuat: 5283.5, khac: 523.6, chePhu: 48.3, khuVuc: "Văn Chấn" },
        { stt: 19, ten: "Châu Quế", tongDT: 16232, dtRung: 10908.1, tuNhien: 1549.9, thanhRung: 8275.4, chuaThanhRung: 1082.8, dacDung: 0, phongHo: 777.7, sanXuat: 9142.9, khac: 987.6, chePhu: 60.5, khuVuc: "Văn Yên" },
        { stt: 20, ten: "Chế Tạo", tongDT: 23444, dtRung: 19424.8, tuNhien: 18691.1, thanhRung: 733.7, chuaThanhRung: 0, dacDung: 13781.3, phongHo: 3482.8, sanXuat: 2063.4, khac: 97.3, chePhu: 82.9, khuVuc: "Mù Cang Chải" },
        { stt: 21, ten: "Chiềng Ken", tongDT: 19125, dtRung: 15582.6, tuNhien: 11587.1, thanhRung: 2766.4, chuaThanhRung: 1229.2, dacDung: 0, phongHo: 8042.8, sanXuat: 7072.3, khac: 467.5, chePhu: 75.0, khuVuc: "Văn Bàn" },
        { stt: 22, ten: "Dền Sáng", tongDT: 14823, dtRung: 9461.8, tuNhien: 9079.6, thanhRung: 162.0, chuaThanhRung: 220.2, dacDung: 4039.8, phongHo: 3817.8, sanXuat: 860.2, khac: 743.9, chePhu: 62.3, khuVuc: "Bát Xát" },
        { stt: 23, ten: "Dương Quỳ", tongDT: 15711, dtRung: 11060.2, tuNhien: 10055.7, thanhRung: 992.4, chuaThanhRung: 12.1, dacDung: 0, phongHo: 7098.8, sanXuat: 3570.3, khac: 391.1, chePhu: 70.3, khuVuc: "Văn Bàn" },
        { stt: 24, ten: "Đông Cuông", tongDT: 14630, dtRung: 8866.5, tuNhien: 2999.5, thanhRung: 5097.1, chuaThanhRung: 769.9, dacDung: 0, phongHo: 2031.4, sanXuat: 5277.4, khac: 1557.7, chePhu: 55.3, khuVuc: "Văn Yên" },
        { stt: 25, ten: "Gia Hội", tongDT: 21326, dtRung: 16036.3, tuNhien: 11721.1, thanhRung: 3880.4, chuaThanhRung: 434.8, dacDung: 0, phongHo: 3745.9, sanXuat: 11570.4, khac: 720.0, chePhu: 73.2, khuVuc: "Văn Chấn" },
        { stt: 26, ten: "Gia Phú", tongDT: 10233, dtRung: 5403.3, tuNhien: 1889.0, thanhRung: 3428.0, chuaThanhRung: 86.3, dacDung: 0, phongHo: 1896.5, sanXuat: 2684.6, khac: 822.2, chePhu: 52.0, khuVuc: "Bảo Thắng" },
        { stt: 27, ten: "Hạnh Phúc", tongDT: 19385, dtRung: 13643.6, tuNhien: 8501.1, thanhRung: 4087.0, chuaThanhRung: 1055.5, dacDung: 0, phongHo: 10525.3, sanXuat: 2710.8, khac: 407.5, chePhu: 64.9, khuVuc: "Trạm Tấu" },
        { stt: 28, ten: "Hợp Thành", tongDT: 11631, dtRung: 7892.6, tuNhien: 5840.7, thanhRung: 2051.9, chuaThanhRung: 0, dacDung: 0, phongHo: 4679.2, sanXuat: 2005.3, khac: 1208.1, chePhu: 67.9, khuVuc: "TP Lào Cai" },
        { stt: 29, ten: "Hưng Khánh", tongDT: 12218, dtRung: 9995.0, tuNhien: 3436.1, thanhRung: 5976.1, chuaThanhRung: 582.7, dacDung: 0, phongHo: 4229.4, sanXuat: 5106.6, khac: 658.9, chePhu: 77.0, khuVuc: "Trấn Yên" },
        { stt: 30, ten: "Khánh Hòa", tongDT: 14976, dtRung: 12501.0, tuNhien: 4183.2, thanhRung: 7205.0, chuaThanhRung: 1112.8, dacDung: 0, phongHo: 2458.9, sanXuat: 8949.9, khac: 1092.2, chePhu: 76.0, khuVuc: "Lục Yên" },
        { stt: 31, ten: "Khánh Yên", tongDT: 17358, dtRung: 13583.3, tuNhien: 11558.8, thanhRung: 1353.0, chuaThanhRung: 671.5, dacDung: 299.6, phongHo: 8940.6, sanXuat: 4064.4, khac: 278.8, chePhu: 74.4, khuVuc: "Văn Bàn" },
        { stt: 32, ten: "Khao Mang", tongDT: 12003, dtRung: 6522.5, tuNhien: 5257.9, thanhRung: 1253.0, chuaThanhRung: 11.6, dacDung: 0, phongHo: 4847.9, sanXuat: 1571.4, khac: 103.2, chePhu: 54.2, khuVuc: "Mù Cang Chải" },
        { stt: 33, ten: "Lao Chải", tongDT: 15799, dtRung: 8702.1, tuNhien: 6069.5, thanhRung: 2497.0, chuaThanhRung: 135.7, dacDung: 2823.6, phongHo: 3567.9, sanXuat: 2263.3, khac: 47.3, chePhu: 54.2, khuVuc: "Mù Cang Chải" },
        { stt: 34, ten: "Lâm Giang", tongDT: 17948, dtRung: 9451.1, tuNhien: 3776.4, thanhRung: 4776.0, chuaThanhRung: 898.7, dacDung: 0, phongHo: 1444.2, sanXuat: 7535.7, khac: 471.2, chePhu: 47.6, khuVuc: "Văn Yên" },
        { stt: 35, ten: "Lâm Thượng", tongDT: 12799, dtRung: 9150.6, tuNhien: 5132.9, thanhRung: 3625.4, chuaThanhRung: 392.4, dacDung: 0, phongHo: 2960.0, sanXuat: 4863.1, khac: 1327.5, chePhu: 68.4, khuVuc: "Lục Yên" },
        { stt: 36, ten: "Liên Sơn", tongDT: 2358, dtRung: 598.2, tuNhien: 6.9, thanhRung: 572.0, chuaThanhRung: 19.4, dacDung: 0, phongHo: 0, sanXuat: 445.6, khac: 152.7, chePhu: 24.6, khuVuc: "Văn Chấn" },
        { stt: 37, ten: "Lục Yên", tongDT: 7993, dtRung: 4621.3, tuNhien: 1684.5, thanhRung: 2570.0, chuaThanhRung: 366.8, dacDung: 0, phongHo: 318.5, sanXuat: 3189.1, khac: 1113.7, chePhu: 53.2, khuVuc: "Lục Yên" },
        { stt: 38, ten: "Lùng Phình", tongDT: 10101, dtRung: 4109.3, tuNhien: 1842.4, thanhRung: 2091.2, chuaThanhRung: 175.7, dacDung: 0, phongHo: 1789.4, sanXuat: 1877.9, khac: 442.0, chePhu: 38.9, khuVuc: "Bắc Hà" },
        { stt: 39, ten: "Lương Thịnh", tongDT: 9421, dtRung: 7001.6, tuNhien: 475.2, thanhRung: 6228.0, chuaThanhRung: 298.4, dacDung: 0, phongHo: 0, sanXuat: 6156.6, khac: 845.1, chePhu: 71.2, khuVuc: "Trấn Yên" },
        { stt: 40, ten: "Mậu A", tongDT: 14452, dtRung: 9909.3, tuNhien: 1699.4, thanhRung: 7570.0, chuaThanhRung: 639.9, dacDung: 0, phongHo: 0, sanXuat: 9197.8, khac: 711.6, chePhu: 64.1, khuVuc: "Văn Yên" },
        { stt: 41, ten: "Minh Lương", tongDT: 20658, dtRung: 13761.2, tuNhien: 13196.6, thanhRung: 167.0, chuaThanhRung: 397.6, dacDung: 9695.2, phongHo: 2476.2, sanXuat: 615.0, khac: 974.8, chePhu: 64.7, khuVuc: "Văn Bàn" },
        { stt: 42, ten: "Mỏ Vàng", tongDT: 16755, dtRung: 14089.2, tuNhien: 5145.3, thanhRung: 8374.4, chuaThanhRung: 569.6, dacDung: 1349.8, phongHo: 2480.5, sanXuat: 8896.9, khac: 1361.9, chePhu: 80.7, khuVuc: "Văn Yên" },
        { stt: 43, ten: "Mù Cang Chải", tongDT: 14703, dtRung: 9646.2, tuNhien: 6232.6, thanhRung: 3378.0, chuaThanhRung: 35.6, dacDung: 0, phongHo: 8047.3, sanXuat: 1556.9, khac: 42.0, chePhu: 65.4, khuVuc: "Mù Cang Chải" },
        { stt: 44, ten: "Mường Bo", tongDT: 14830, dtRung: 10806.8, tuNhien: 10573.2, thanhRung: 207.0, chuaThanhRung: 26.7, dacDung: 54.7, phongHo: 9025.8, sanXuat: 1366.0, khac: 360.4, chePhu: 72.7, khuVuc: "Sa Pa" },
        { stt: 45, ten: "Mường Hum", tongDT: 21280, dtRung: 17024.1, tuNhien: 16856.5, thanhRung: 84.0, chuaThanhRung: 83.6, dacDung: 10989.1, phongHo: 3633.1, sanXuat: 1109.8, khac: 1292.0, chePhu: 79.6, khuVuc: "Bát Xát" },
        { stt: 46, ten: "Mường Khương", tongDT: 16921, dtRung: 6542.6, tuNhien: 4914.5, thanhRung: 1582.3, chuaThanhRung: 45.8, dacDung: 0, phongHo: 4599.9, sanXuat: 1773.5, khac: 169.3, chePhu: 38.4, khuVuc: "Mường Khương" },
        { stt: 47, ten: "Mường Lai", tongDT: 14384, dtRung: 9196.4, tuNhien: 3339.6, thanhRung: 5322.0, chuaThanhRung: 534.9, dacDung: 0, phongHo: 592.3, sanXuat: 7298.8, khac: 1305.3, chePhu: 60.2, khuVuc: "Lục Yên" },
        { stt: 48, ten: "Nậm Có", tongDT: 20175, dtRung: 12590.6, tuNhien: 9120.0, thanhRung: 2748.0, chuaThanhRung: 722.6, dacDung: 0, phongHo: 9560.9, sanXuat: 2796.1, khac: 233.6, chePhu: 58.8, khuVuc: "Mù Cang Chải" },
        { stt: 49, ten: "Nậm Chày", tongDT: 14214, dtRung: 9473.1, tuNhien: 8987.4, thanhRung: 275.1, chuaThanhRung: 210.7, dacDung: 0, phongHo: 6875.0, sanXuat: 2186.7, khac: 411.5, chePhu: 65.2, khuVuc: "Văn Bàn" },
        { stt: 50, ten: "Nậm Xé", tongDT: 17094, dtRung: 15237.3, tuNhien: 15040.9, thanhRung: 127.0, chuaThanhRung: 69.4, dacDung: 13042.0, phongHo: 761.1, sanXuat: 845.1, khac: 589.2, chePhu: 88.7, khuVuc: "Văn Bàn (KBT)" },
        { stt: 51, ten: "Nghĩa Đô", tongDT: 15937, dtRung: 11519.5, tuNhien: 5095.3, thanhRung: 5724.0, chuaThanhRung: 700.1, dacDung: 0, phongHo: 2349.7, sanXuat: 8306.4, khac: 863.3, chePhu: 67.9, khuVuc: "Bảo Yên" },
        { stt: 52, ten: "Nghĩa Tâm", tongDT: 13310, dtRung: 8213.7, tuNhien: 2738.4, thanhRung: 4956.0, chuaThanhRung: 519.2, dacDung: 0, phongHo: 1669.7, sanXuat: 5584.7, khac: 959.3, chePhu: 57.8, khuVuc: "Văn Chấn" },
        { stt: 53, ten: "Ngũ Chỉ Sơn", tongDT: 8277, dtRung: 4868.8, tuNhien: 4654.5, thanhRung: 214.3, chuaThanhRung: 0, dacDung: 0, phongHo: 3906.4, sanXuat: 729.9, khac: 232.5, chePhu: 58.8, khuVuc: "Sa Pa" },
        { stt: 54, ten: "Púng Luông", tongDT: 25324, dtRung: 17702.5, tuNhien: 10749.8, thanhRung: 6895.0, chuaThanhRung: 57.7, dacDung: 2820.3, phongHo: 10539.7, sanXuat: 3831.4, khac: 511.2, chePhu: 69.7, khuVuc: "Mù Cang Chải" },
        { stt: 55, ten: "Pha Long", tongDT: 10556, dtRung: 4483.7, tuNhien: 2845.5, thanhRung: 1270.2, chuaThanhRung: 368.0, dacDung: 0, phongHo: 2880.1, sanXuat: 1027.8, khac: 575.7, chePhu: 39.0, khuVuc: "Mường Khương" },
        { stt: 56, ten: "Phình Hồ", tongDT: 22602, dtRung: 14357.8, tuNhien: 10177.3, thanhRung: 3236.2, chuaThanhRung: 944.3, dacDung: 0, phongHo: 9507.8, sanXuat: 4508.8, khac: 341.2, chePhu: 59.3, khuVuc: "Trạm Tấu" },
        { stt: 57, ten: "Phong Dụ Hạ", tongDT: 13840, dtRung: 12359.1, tuNhien: 4272.8, thanhRung: 7505.2, chuaThanhRung: 581.1, dacDung: 0, phongHo: 4132.4, sanXuat: 7679.3, khac: 547.4, chePhu: 85.1, khuVuc: "Văn Yên" },
        { stt: 58, ten: "Phong Dụ Thượng", tongDT: 19521, dtRung: 16060.2, tuNhien: 10346.2, thanhRung: 5280.0, chuaThanhRung: 434.0, dacDung: 4419.5, phongHo: 4178.8, sanXuat: 5402.3, khac: 2059.5, chePhu: 80.0, khuVuc: "Văn Yên (KBT)" },
        { stt: 59, ten: "Phong Hải", tongDT: 12095, dtRung: 7325.9, tuNhien: 2904.3, thanhRung: 3875.0, chuaThanhRung: 546.5, dacDung: 0, phongHo: 2745.4, sanXuat: 3707.4, khac: 873.1, chePhu: 56.1, khuVuc: "Bảo Thắng" },
        { stt: 60, ten: "Phúc Khánh", tongDT: 11404, dtRung: 9115.9, tuNhien: 3922.2, thanhRung: 4701.1, chuaThanhRung: 492.6, dacDung: 0, phongHo: 2517.2, sanXuat: 6431.0, khac: 167.8, chePhu: 75.6, khuVuc: "Bảo Yên" },
        { stt: 61, ten: "Phúc Lợi", tongDT: 16071, dtRung: 13745.2, tuNhien: 5376.0, thanhRung: 7151.3, chuaThanhRung: 1217.9, dacDung: 0, phongHo: 2860.7, sanXuat: 9082.6, khac: 1801.9, chePhu: 77.9, khuVuc: "Lục Yên" },
        { stt: 62, ten: "P. Âu Lâu", tongDT: 6617, dtRung: 2677.3, tuNhien: 49.8, thanhRung: 2064.1, chuaThanhRung: 563.4, dacDung: 0, phongHo: 0, sanXuat: 1744.2, khac: 933.1, chePhu: 31.9, khuVuc: "TP Yên Bái" },
        { stt: 63, ten: "P. Cam Đường", tongDT: 5998, dtRung: 1584.0, tuNhien: 256.1, thanhRung: 1327.9, chuaThanhRung: 0, dacDung: 0, phongHo: 329.0, sanXuat: 731.6, khac: 523.4, chePhu: 26.4, khuVuc: "TP Lào Cai" },
        { stt: 64, ten: "P. Cầu Thia", tongDT: 3184, dtRung: 917.5, tuNhien: 248.2, thanhRung: 582.2, chuaThanhRung: 87.0, dacDung: 0, phongHo: 0, sanXuat: 603.9, khac: 313.5, chePhu: 26.1, khuVuc: "TX Nghĩa Lộ" },
        { stt: 65, ten: "P. Lào Cai", tongDT: 7231, dtRung: 3754.1, tuNhien: 1107.9, thanhRung: 2596.4, chuaThanhRung: 49.8, dacDung: 0, phongHo: 390.6, sanXuat: 2659.4, khac: 704.1, chePhu: 51.2, khuVuc: "TP Lào Cai" },
        { stt: 66, ten: "P. Nam Cường", tongDT: 4609, dtRung: 2720.6, tuNhien: 179.8, thanhRung: 2127.0, chuaThanhRung: 413.7, dacDung: 0, phongHo: 265.2, sanXuat: 2077.9, khac: 377.4, chePhu: 50.0, khuVuc: "TP Lào Cai" },
        { stt: 67, ten: "P. Nghĩa Lộ", tongDT: 2988, dtRung: 1233.5, tuNhien: 114.3, thanhRung: 870.0, chuaThanhRung: 249.2, dacDung: 0, phongHo: 0, sanXuat: 1097.1, khac: 136.4, chePhu: 32.9, khuVuc: "TX Nghĩa Lộ" },
        { stt: 68, ten: "P. Sa Pa", tongDT: 6002, dtRung: 2036.5, tuNhien: 1032.6, thanhRung: 997.0, chuaThanhRung: 6.9, dacDung: 8.0, phongHo: 974.3, sanXuat: 1020.1, khac: 34.2, chePhu: 33.8, khuVuc: "TX Sa Pa" },
        { stt: 69, ten: "P. Trung Tâm", tongDT: 4315, dtRung: 1150.1, tuNhien: 80.4, thanhRung: 772.0, chuaThanhRung: 297.7, dacDung: 0, phongHo: 0, sanXuat: 738.6, khac: 411.5, chePhu: 19.8, khuVuc: "TX Nghĩa Lộ" },
        { stt: 70, ten: "P. Văn Phú", tongDT: 5145, dtRung: 3008.4, tuNhien: 0, thanhRung: 2693.4, chuaThanhRung: 315.0, dacDung: 0, phongHo: 0, sanXuat: 2383.8, khac: 624.6, chePhu: 52.4, khuVuc: "TP Yên Bái" },
        { stt: 71, ten: "P. Yên Bái", tongDT: 1692, dtRung: 534.8, tuNhien: 0, thanhRung: 497.2, chuaThanhRung: 37.6, dacDung: 0, phongHo: 0, sanXuat: 471.6, khac: 63.1, chePhu: 29.4, khuVuc: "TP Yên Bái" },
        { stt: 72, ten: "Quy Mông", tongDT: 14917, dtRung: 12149.8, tuNhien: 2931.1, thanhRung: 8085.0, chuaThanhRung: 1133.7, dacDung: 0, phongHo: 2123.5, sanXuat: 9292.5, khac: 733.8, chePhu: 73.8, khuVuc: "Trấn Yên" },
        { stt: 73, ten: "Si Ma Cai", tongDT: 10900, dtRung: 5120.6, tuNhien: 2777.7, thanhRung: 1739.1, chuaThanhRung: 603.9, dacDung: 0, phongHo: 3075.3, sanXuat: 1660.8, khac: 384.5, chePhu: 41.4, khuVuc: "Si Ma Cai" },
        { stt: 74, ten: "Sín Chéng", tongDT: 8805, dtRung: 4232.0, tuNhien: 2350.8, thanhRung: 1460.0, chuaThanhRung: 421.2, dacDung: 0, phongHo: 2585.8, sanXuat: 1286.2, khac: 360.0, chePhu: 43.3, khuVuc: "Si Ma Cai" },
        { stt: 75, ten: "Sơn Lương", tongDT: 12377, dtRung: 7987.4, tuNhien: 3991.9, thanhRung: 3478.0, chuaThanhRung: 517.5, dacDung: 0, phongHo: 873.3, sanXuat: 6755.3, khac: 358.8, chePhu: 60.4, khuVuc: "Văn Chấn" },
        { stt: 76, ten: "Tả Củ Tỷ", tongDT: 6929, dtRung: 3160.1, tuNhien: 1883.0, thanhRung: 1207.2, chuaThanhRung: 69.9, dacDung: 0, phongHo: 1702.9, sanXuat: 655.0, khac: 802.2, chePhu: 44.6, khuVuc: "Bắc Hà" },
        { stt: 77, ten: "Tả Phìn", tongDT: 7228, dtRung: 4056.3, tuNhien: 3661.0, thanhRung: 395.3, chuaThanhRung: 0, dacDung: 0, phongHo: 3305.9, sanXuat: 553.1, khac: 197.3, chePhu: 56.1, khuVuc: "Sa Pa" },
        { stt: 78, ten: "Tả Van", tongDT: 15534, dtRung: 12426.0, tuNhien: 11988.2, thanhRung: 425.0, chuaThanhRung: 12.9, dacDung: 10426.7, phongHo: 406.1, sanXuat: 1432.1, khac: 161.2, chePhu: 79.9, khuVuc: "Sa Pa" },
        { stt: 79, ten: "Tà Xi Láng", tongDT: 8854, dtRung: 6455.0, tuNhien: 4803.0, thanhRung: 1348.0, chuaThanhRung: 304.0, dacDung: 0, phongHo: 5353.5, sanXuat: 1017.3, khac: 84.2, chePhu: 69.5, khuVuc: "Trạm Tấu" },
        { stt: 80, ten: "Tằng Loỏng", tongDT: 12578, dtRung: 9044.3, tuNhien: 4978.8, thanhRung: 4013.0, chuaThanhRung: 52.5, dacDung: 0, phongHo: 4700.6, sanXuat: 3107.0, khac: 1236.7, chePhu: 71.5, khuVuc: "Bảo Thắng" },
        { stt: 81, ten: "Tân Hợp", tongDT: 20045, dtRung: 17104.9, tuNhien: 8190.0, thanhRung: 7255.0, chuaThanhRung: 1659.9, dacDung: 8685.2, phongHo: 0, sanXuat: 8229.2, khac: 190.5, chePhu: 77.0, khuVuc: "Văn Yên" },
        { stt: 82, ten: "Tân Lĩnh", tongDT: 14735, dtRung: 9911.0, tuNhien: 4307.6, thanhRung: 5023.2, chuaThanhRung: 580.1, dacDung: 0, phongHo: 1853.4, sanXuat: 6315.7, khac: 1741.9, chePhu: 63.3, khuVuc: "Lục Yên" },
        { stt: 83, ten: "Tú Lệ", tongDT: 11535, dtRung: 7330.1, tuNhien: 6643.7, thanhRung: 656.0, chuaThanhRung: 30.4, dacDung: 0, phongHo: 5092.7, sanXuat: 2142.3, khac: 95.1, chePhu: 63.3, khuVuc: "Văn Chấn" },
        { stt: 84, ten: "Thác Bà", tongDT: 14254, dtRung: 6959.2, tuNhien: 578.8, thanhRung: 5713.3, chuaThanhRung: 667.1, dacDung: 0, phongHo: 0, sanXuat: 6183.0, khac: 776.2, chePhu: 44.1, khuVuc: "Yên Bình" },
        { stt: 85, ten: "Thượng Bằng La", tongDT: 11161, dtRung: 6642.4, tuNhien: 3970.7, thanhRung: 2017.0, chuaThanhRung: 654.7, dacDung: 0, phongHo: 2013.9, sanXuat: 4300.1, khac: 328.5, chePhu: 53.6, khuVuc: "Văn Chấn" },
        { stt: 86, ten: "Thượng Hà", tongDT: 14384, dtRung: 11247.4, tuNhien: 1841.1, thanhRung: 8005.0, chuaThanhRung: 1401.3, dacDung: 0, phongHo: 1043.4, sanXuat: 9252.7, khac: 951.3, chePhu: 68.5, khuVuc: "Bảo Yên" },
        { stt: 87, ten: "Trạm Tấu", tongDT: 23829, dtRung: 14918.8, tuNhien: 11942.9, thanhRung: 1913.1, chuaThanhRung: 1062.8, dacDung: 0, phongHo: 9848.6, sanXuat: 4793.8, khac: 276.4, chePhu: 58.1, khuVuc: "Trạm Tấu" },
        { stt: 88, ten: "Trấn Yên", tongDT: 11072, dtRung: 7437.8, tuNhien: 253.1, thanhRung: 6527.0, chuaThanhRung: 657.7, dacDung: 0, phongHo: 0, sanXuat: 6419.8, khac: 1018.0, chePhu: 61.2, khuVuc: "Trấn Yên" },
        { stt: 89, ten: "Trịnh Tường", tongDT: 14671, dtRung: 7946.0, tuNhien: 6114.7, thanhRung: 1767.0, chuaThanhRung: 64.3, dacDung: 0, phongHo: 5318.6, sanXuat: 1991.9, khac: 635.5, chePhu: 53.7, khuVuc: "Bát Xát" },
        { stt: 90, ten: "Văn Bàn", tongDT: 15675, dtRung: 9611.3, tuNhien: 5624.0, thanhRung: 2832.4, chuaThanhRung: 1154.9, dacDung: 0, phongHo: 1709.9, sanXuat: 7144.4, khac: 757.0, chePhu: 53.9, khuVuc: "Văn Bàn" },
        { stt: 91, ten: "Văn Chấn", tongDT: 14025, dtRung: 6953.9, tuNhien: 4479.9, thanhRung: 2310.0, chuaThanhRung: 164.0, dacDung: 0, phongHo: 915.7, sanXuat: 5498.0, khac: 540.3, chePhu: 48.4, khuVuc: "Văn Chấn" },
        { stt: 92, ten: "Việt Hồng", tongDT: 10137, dtRung: 7387.4, tuNhien: 2016.9, thanhRung: 5045.3, chuaThanhRung: 325.2, dacDung: 0, phongHo: 1787.6, sanXuat: 4635.2, khac: 964.7, chePhu: 69.7, khuVuc: "Trấn Yên" },
        { stt: 93, ten: "Võ Lao", tongDT: 15283, dtRung: 11676.4, tuNhien: 7282.9, thanhRung: 3768.0, chuaThanhRung: 625.5, dacDung: 0, phongHo: 6554.5, sanXuat: 4786.1, khac: 335.7, chePhu: 72.3, khuVuc: "Văn Bàn" },
        { stt: 94, ten: "Xuân Ái", tongDT: 12393, dtRung: 8714.6, tuNhien: 1306.4, thanhRung: 6396.0, chuaThanhRung: 1012.3, dacDung: 0, phongHo: 0, sanXuat: 8522.2, khac: 192.5, chePhu: 62.1, khuVuc: "Văn Yên" },
        { stt: 95, ten: "Xuân Hòa", tongDT: 10778, dtRung: 7177.2, tuNhien: 1924.3, thanhRung: 4450.4, chuaThanhRung: 802.5, dacDung: 85.2, phongHo: 1435.0, sanXuat: 5214.8, khac: 442.2, chePhu: 59.1, khuVuc: "Bảo Yên" },
        { stt: 96, ten: "Xuân Quang", tongDT: 13771, dtRung: 8792.6, tuNhien: 848.8, thanhRung: 7099.0, chuaThanhRung: 844.8, dacDung: 0, phongHo: 0, sanXuat: 6672.3, khac: 2120.3, chePhu: 57.7, khuVuc: "Bảo Thắng" },
        { stt: 97, ten: "Y Tý", tongDT: 12758, dtRung: 7830.5, tuNhien: 7402.9, thanhRung: 328.0, chuaThanhRung: 99.6, dacDung: 2550.3, phongHo: 3207.4, sanXuat: 1697.3, khac: 375.4, chePhu: 60.6, khuVuc: "Bát Xát (KBT)" },
        { stt: 98, ten: "Yên Bình", tongDT: 15083, dtRung: 7674.0, tuNhien: 0, thanhRung: 7297.3, chuaThanhRung: 376.7, dacDung: 0, phongHo: 0, sanXuat: 6055.7, khac: 1618.4, chePhu: 48.4, khuVuc: "Yên Bình" },
        { stt: 99, ten: "Yên Thành", tongDT: 14132, dtRung: 7621.2, tuNhien: 1106.4, thanhRung: 6184.0, chuaThanhRung: 330.8, dacDung: 0, phongHo: 176.6, sanXuat: 6902.5, khac: 542.2, chePhu: 51.6, khuVuc: "Yên Bình" }
    ],

    // 6. Cảnh báo cháy rừng & Chỉ số FWI
    canhBaoChayRung: {
        ngayCapNhat: "Hôm nay, 24/09/2026",
        fwiTrungBinh: 36.8,
        capNguyCo: "CAO",
        mauCap: "#e65100",
        thongKeCap: [
            { cap: "Cấp V (Rất cao)", fwi: "≥ 40", soXa: 14, color: "#d32f2f", bg: "#ffebee" },
            { cap: "Cấp IV (Cao)", fwi: "30 - 39", soXa: 15, color: "#f57c00", bg: "#fff3e0" },
            { cap: "Cấp III (Trung bình)", fwi: "20 - 29", soXa: 60, color: "#fbc02d", bg: "#fffde7" },
            { cap: "Cấp II (Thấp)", fwi: "10 - 19", soXa: 10, color: "#689f38", bg: "#f1f8e9" },
            { cap: "Cấp I (Rất thấp)", fwi: "< 10", soXa: 0, color: "#2e7d32", bg: "#e8f5e9" }
        ],
        diaBanNguyCoCao: [
            { stt: 1, xa: "Tả Van", hat: "Hạt KL khu vực Bát Xát", fwi: 42.1, cap: "Rất cao", nhietDo: "28°C", doAm: "42%" },
            { stt: 2, xa: "Chế Tạo", hat: "Hạt KL khu vực Mù Cang Chải", fwi: 41.5, cap: "Rất cao", nhietDo: "29°C", doAm: "39%" },
            { stt: 3, xa: "Bản Hồ", hat: "Hạt KL khu vực Bát Xát", fwi: 40.5, cap: "Rất cao", nhietDo: "29°C", doAm: "41%" },
            { stt: 4, xa: "Nậm Xé", hat: "Hạt KL KBT Hoàng Liên – Văn Bàn", fwi: 38.6, cap: "Cao", nhietDo: "31°C", doAm: "45%" },
            { stt: 5, xa: "Púng Luông", hat: "Hạt KL khu vực Mù Cang Chải", fwi: 38.2, cap: "Cao", nhietDo: "27°C", doAm: "47%" },
            { stt: 6, xa: "Xà Hồ", hat: "Hạt KL khu vực Nghĩa Lộ", fwi: 37.8, cap: "Cao", nhietDo: "30°C", doAm: "48%" },
            { stt: 7, xa: "Y Tý", hat: "Hạt KL Khu bảo tồn Bát Xát", fwi: 37.2, cap: "Cao", nhietDo: "25°C", doAm: "50%" }
        ],
        duBao3Ngay: [
            { ngay: "25/09/2026", fwi: 37.5, cap: "Cao", nhietDo: "30°C", khaNangMua: "10%" },
            { ngay: "26/09/2026", fwi: 35.0, cap: "Cao", nhietDo: "29°C", khaNangMua: "25%" },
            { ngay: "27/09/2026", fwi: 24.2, cap: "Trung bình", nhietDo: "26°C", khaNangMua: "70% (Mưa rào)" }
        ]
    },

    // 7. Vùng trọng điểm kinh tế lâm nghiệp (Cập nhật T5/2026)
    vungTrongDiem: [
        {
            ten: "Vùng nguyên liệu gỗ rừng trồng",
            dienTich: 296000, // ha
            sanLuong: "1,13 triệu m³ gỗ/năm",
            diaBan: "Bảo Thắng, Bảo Yên, Văn Bàn, Bát Xát, Lục Yên, Yên Bình, Trấn Yên, Văn Yên, Văn Chấn",
            loaiCay: "Keo, mỡ, bồ đề, bạch đàn, sa mộc, thông"
        },
        {
            ten: "Vùng chuyên canh Quế hữu cơ",
            dienTich: 147600, // ha
            sanLuong: "47.000 tấn vỏ quế khô, 110.000 tấn cành lá/năm",
            diaBan: "Văn Yên (thủ phủ quế Phong Dụ, Mậu A, Viễn Sơn), Bảo Yên, Bắc Hà, Trấn Yên, Lục Yên, Văn Bàn",
            loaiCay: "Cinnamomum cassia (Quế Việt Nam xuất khẩu)"
        },
        {
            ten: "Vùng Măng tre Bát Độ & nứa",
            dienTich: 8000, // ha
            sanLuong: "130.000 tấn măng tươi/năm",
            diaBan: "Trấn Yên (Kiên Thành, Lương Thịnh, Hưng Khánh), Văn Yên, Văn Bàn, Lục Yên, Văn Chấn",
            loaiCay: "Tre Bát Độ, bương, vầu, măng nứa"
        },
        {
            ten: "Vùng Sơn Tra (Táo mèo)",
            dienTich: 7300, // ha
            sanLuong: "4.000 tấn quả tươi/năm",
            diaBan: "Mù Cang Chải (Chế Tạo, Lao Chải, Nậm Có, Púng Luông), Trạm Tấu (Bản Mù, Bản Công), Sa Pa, Bắc Hà",
            loaiCay: "Docynia indica (Cây Sơn Tra vùng cao)"
        },
        {
            ten: "Vùng phát triển Dược liệu dưới tán rừng",
            dienTich: 9930.75, // ha
            sanLuong: "29 dự án phát triển dược liệu",
            diaBan: "VQG Hoàng Liên, VQG Bát Xát, KBT Nà Hẩu, KBT Mù Cang Chải, Bắc Hà, Trạm Tấu",
            loaiCay: "Tam thất hoang, Sâm Fansipan, Sa nhân tím, Thảo quả, Khôi tía, Lan kim tuyến"
        }
    ],

    // 8. Đề án Du lịch sinh thái theo QĐ 1382/QĐ-UBND (23/04/2026)
    duLichSinhThai: {
        tongSoDuAn: 74,
        tongDienTichThue: 5723.0, // ha
        duAnThucHien: [
            { ten: "Khu du lịch cáp treo Fansipan", viTri: "VQG Hoàng Liên", dienTich: 729.94, tienThue: "9,871 tỷ đồng/năm", trangThai: "Đang hoạt động" },
            { ten: "Khu DLST nghỉ dưỡng Thác Bạc - Đỉnh Đèo", viTri: "VQG Hoàng Liên", trangThai: "Cấp GCN đầu tư, hoàn thiện cấp phép XD" },
            { ten: "Khu DLST Cột cờ Lũng Pô - Y Tý", viTri: "VQG Bát Xát", trangThai: "Rà soát điều tra hiện trạng bàn giao" },
            { ten: "Khu du lịch sinh thái Nậm Xé - Văn Bàn", viTri: "KBT Thiên nhiên HL-VB", trangThai: "Đang thẩm định 04 điểm tuyến" },
            { ten: "Khu DLST Danh thắng Ruộng bậc thang Mù Cang Chải", viTri: "KBT Mù Cang Chải", trangThai: "Khai thác du lịch cộng đồng & dù lượn Khau Phạ" },
            { ten: "Khu DLST Quốc gia Hồ Thác Bà", viTri: "Yên Bình, Thác Bà", trangThai: "Phát triển du lịch đảo hồ sinh thái" }
        ]
    },

    // 9. Cơ cấu tổ chức Chi cục Kiểm lâm tỉnh Lào Cai mới (Số liệu T5/2026)
    toChucMoi: {
        lanhDaoChiCuc: {
            chucVu: "Lãnh đạo Chi cục Kiểm lâm tỉnh Lào Cai",
            chiCucTruong: "01 Chi cục trưởng",
            phoChiCucTruong: "02 Phó Chi cục trưởng",
            bienCheToanTinh: "Tổng biên chế giao: 472 (427 CC, 17 VC, 28 HĐ) • Thực tế: 461 CCVC",
            trinhDo: "Thạc sỹ: 79 (17,1%) • Đại học: 353 (76,6%) • Lý luận CC, CN: 23 • Trung cấp LLCT: 177",
            diaChi: "Số 333, đường Điện Biên, phường Yên Bái, tỉnh Lào Cai",
            hotline: "0214.3820.130"
        },
        phongChucNang: [
            { ten: "Phòng Hành chính - Tổng hợp (HC-TH)", bienChe: 19, lanhDao: "01 TP, 05 PP, 13 CC, 05 HĐ", nhiemVu: "Tham mưu công tác tổ chức cán bộ, hành chính, quản trị, chuyển đổi số, ngân sách, thi đua" },
            { ten: "Phòng Quản lý, bảo vệ rừng và Bảo tồn thiên nhiên (QLBVR & BTTN)", bienChe: 14, lanhDao: "01 TP, 04 PP, 09 CC", nhiemVu: "Tham mưu công tác QLBVR, chỉ đạo PCCCR, theo dõi cảnh báo FWI, đa dạng sinh học và các VQG, KBT" },
            { ten: "Phòng Sử dụng và Phát triển rừng (SD & PTR)", bienChe: 11, lanhDao: "01 TP, 03 PP, 07 CC", nhiemVu: "Tham mưu trồng rừng, phát triển rừng gỗ lớn, chuỗi giá trị quế, măng tre, cấp mã số vùng trồng, DVMTR" },
            { ten: "Phòng Điều tra, xử lý vi phạm về lâm nghiệp (ĐT, XLVP)", bienChe: 8, lanhDao: "01 TP, 07 CC", nhiemVu: "Thanh tra chuyên ngành, điều tra các vụ án hủy hoại rừng, giám định tư pháp, xử lý tịch thu lâm sản" }
        ],
        doiKiemLamCoDong: [
            { ten: "Đội Kiểm lâm cơ động và PCCCR số 1", bienChe: 13, lanhDao: "01 Đội trưởng, 02 Phó Đội trưởng, 10 CC, 02 HĐ", phuTrach: "Địa bàn các huyện khu vực phía Bắc (Bát Xát, Sa Pa, TP Lào Cai, Bảo Thắng, Bảo Yên, Bắc Hà)" },
            { ten: "Đội Kiểm lâm cơ động và PCCCR số 2", bienChe: 10, lanhDao: "01 Đội trưởng, 02 Phó Đội trưởng, 07 CC, 01 HĐ", phuTrach: "Địa bàn các huyện khu vực phía Nam (Văn Bàn, Trấn Yên, Nghĩa Lộ, Lục Yên, Mù Cang Chải, Văn Yên)" }
        ],
        cacBanQuanLyKhuBaoTon: [
            { ten: "VQG Hoàng Liên", viTri: "TX Sa Pa", dienTich: "21.383,3 ha tại Lào Cai", loaiHinh: "Vườn Quốc gia" },
            { ten: "VQG Bát Xát", viTri: "Huyện Bát Xát (Y Tý, Dền Sáng)", dienTich: "18.751,0 ha", loaiHinh: "08 viên chức chuyên trách" },
            { ten: "KBT Thiên nhiên Hoàng Liên – Văn Bàn", viTri: "Huyện Văn Bàn (Nậm Xé)", dienTich: "24.694,7 ha", loaiHinh: "09 viên chức chuyên trách" },
            { ten: "KBT Thiên nhiên Nà Hẩu", viTri: "Văn Yên (Mỏ Vàng, Phong Dụ Thượng)", dienTich: "16.017,5 ha", loaiHinh: "Kiêm nhiệm" },
            { ten: "KBT loài và sinh cảnh Mù Cang Chải", viTri: "Mù Cang Chải (Chế Tạo, Lao Chải)", dienTich: "20.126,0 ha", loaiHinh: "Kiêm nhiệm" }
        ]
    },

    // 10. Danh mục TTHC chuẩn hoá theo Phụ lục công văn tháng 9/2026 (41 cấp tỉnh + 8 cấp xã)
    danhMucTTHCChuan: [
        // Cấp tỉnh
        { ma: "1.014836.H38", ten: "Điều chỉnh ranh giới, diện tích khu rừng đặc dụng thuộc thẩm quyền Chủ tịch UBND cấp tỉnh", cap: "Cấp tỉnh", dvctt: "Một phần", thoiHan: "30 ngày" },
        { ma: "1.014837.H38", ten: "Điều chỉnh ranh giới, diện tích khu rừng phòng hộ thuộc thẩm quyền Chủ tịch UBND cấp tỉnh", cap: "Cấp tỉnh", dvctt: "Một phần", thoiHan: "30 ngày" },
        { ma: "1.014838.H38", ten: "Chuyển loại rừng đối với khu rừng thuộc thẩm quyền của Chủ tịch UBND cấp tỉnh", cap: "Cấp tỉnh", dvctt: "Một phần", thoiHan: "30 ngày" },
        { ma: "1.014605.H38", ten: "Cấp, cấp lại mã số rừng sản xuất là rừng trồng", cap: "Cấp tỉnh", dvctt: "Một phần", thoiHan: "15 ngày" },
        { ma: "3.000501.H38", ten: "Thẩm định, phê duyệt hoặc điều chỉnh phương án nuôi, trồng, phát triển cây dược liệu trong rừng", cap: "Cấp tỉnh", dvctt: "Một phần", thoiHan: "20 ngày" },
        { ma: "3000179", ten: "Cấp Giấy phép xuất khẩu, nhập khẩu giống cây trồng lâm nghiệp", cap: "Cấp tỉnh", dvctt: "Một phần", thoiHan: "10 ngày" },
        { ma: "1.012921.H38", ten: "Thanh lý rừng trồng thuộc thẩm quyền quyết định của Chủ tịch UBND cấp tỉnh", cap: "Cấp tỉnh", dvctt: "Một phần", thoiHan: "30 ngày" },
        { ma: "1.011470.H38", ten: "Phê duyệt Phương án khai thác gỗ, thực vật rừng ngoài gỗ loài thông thường", cap: "Cấp tỉnh", dvctt: "Một phần", thoiHan: "10 ngày" },
        { ma: "3.000198.H38", ten: "Công nhận nguồn giống cây trồng lâm nghiệp (cây trội, rừng giống)", cap: "Cấp tỉnh", dvctt: "Một phần", thoiHan: "15 ngày" },
        { ma: "1007916", ten: "Nộp tiền trồng rừng thay thế về Quỹ Bảo vệ và Phát triển rừng tỉnh", cap: "Cấp tỉnh", dvctt: "Một phần", thoiHan: "05 ngày" },
        { ma: "1.000055.H38", ten: "Phê duyệt hoặc điều chỉnh phương án quản lý rừng bền vững của chủ rừng là tổ chức", cap: "Cấp tỉnh", dvctt: "Một phần", thoiHan: "30 ngày" },
        { ma: "1.000084.H38", ten: "Phê duyệt Đề án du lịch sinh thái, nghỉ dưỡng, giải trí trong rừng đặc dụng", cap: "Cấp tỉnh", dvctt: "Một phần", thoiHan: "30 ngày" },
        { ma: "1.000081.H38", ten: "Phê duyệt Đề án du lịch sinh thái, nghỉ dưỡng, giải trí trong rừng phòng hộ", cap: "Cấp tỉnh", dvctt: "Một phần", thoiHan: "30 ngày" },
        { ma: "1.004819.H38", ten: "Đăng ký mã số cơ sở nuôi, trồng các loài động vật, thực vật thuộc Phụ lục CITES", cap: "Cấp tỉnh", dvctt: "Một phần", thoiHan: "15 ngày" },
        { ma: "3.000159.H38", ten: "Xác nhận nguồn gốc gỗ trước khi xuất khẩu", cap: "Cấp tỉnh", dvctt: "Một phần", thoiHan: "03 ngày" },
        { ma: "1.012689.H38", ten: "Quyết định chuyển mục đích sử dụng rừng sang mục đích khác đối với tổ chức", cap: "Cấp tỉnh", dvctt: "Một phần", thoiHan: "30 ngày" },
        { ma: "1000045", ten: "Xác nhận bảng kê lâm sản", cap: "Cấp tỉnh/huyện", dvctt: "Một phần", thoiHan: "03 ngày" },
        { ma: "CARBON-01", ten: "Đăng ký, điều chỉnh dự án các-bon rừng", cap: "Cấp tỉnh", dvctt: "Một phần", thoiHan: "30 ngày" },
        { ma: "CARBON-02", ten: "Cấp tín chỉ các-bon rừng", cap: "Cấp tỉnh", dvctt: "Một phần", thoiHan: "30 ngày" },
        // Cấp xã
        { ma: "1.014832.H38", ten: "Giao rừng, cho thuê rừng thuộc thẩm quyền của Chủ tịch UBND cấp xã", cap: "Cấp xã", dvctt: "Một phần", thoiHan: "30 ngày" },
        { ma: "3.000502.H38", ten: "Phê duyệt phương án trồng cây dược liệu trong rừng đối với hộ gia đình, cá nhân", cap: "Cấp xã", dvctt: "Một phần", thoiHan: "15 ngày" },
        { ma: "1.012922.H38", ten: "Kiểm tra hiện trường rừng trồng bị thiệt hại do thiên tai, dịch bệnh", cap: "Cấp xã", dvctt: "Một phần", thoiHan: "05 ngày" },
        { ma: "1.012531.H38", ten: "Hỗ trợ lãi suất vốn vay ngân hàng để trồng rừng gỗ lớn đối với hộ gia đình", cap: "Cấp xã", dvctt: "Một phần", thoiHan: "15 ngày" },
        { ma: "1.011471.H38", ten: "Phê duyệt Phương án khai thác gỗ, lâm sản loài thông thường thuộc thẩm quyền UBND xã", cap: "Cấp xã", dvctt: "Một phần", thoiHan: "07 ngày" },
        { ma: "1.012694.H38", ten: "Chuyển mục đích sử dụng rừng sang mục đích khác đối với cá nhân", cap: "Cấp xã", dvctt: "Một phần", thoiHan: "20 ngày" }
    ],

    // 11. Các hồ sơ thực tế đang thụ lý (Cập nhật mã số)
    hoSoThucTe: [
        {
            stt: 1,
            maHoSo: "HSC123456",
            tenThuTuc: "Quyết định chuyển mục đích sử dụng rừng sang mục đích khác đối với tổ chức",
            toChuc: "Công ty Cổ phần Thủy điện Nậm Xé - Văn Bàn",
            ngayTiepNhan: "10/05/2026",
            tinhTrang: "Đang thẩm định",
            hanXuLy: "25/05/2026",
            canBoThuLy: "Nguyễn Văn Tuấn (Phòng SD & PTR)",
            statusClass: "badge-warning"
        },
        {
            stt: 2,
            maHoSo: "HSC123457",
            tenThuTuc: "Phê duyệt Phương án khai thác gỗ rừng trồng sản xuất",
            toChuc: "Hợp tác xã Lâm nghiệp Kiên Thành (Trấn Yên)",
            ngayTiepNhan: "12/05/2026",
            tinhTrang: "Đang xử lý",
            hanXuLy: "26/05/2026",
            canBoThuLy: "Trần Thị Mai (Hạt KL Trấn Yên)",
            statusClass: "badge-info"
        },
        {
            stt: 3,
            maHoSo: "HSC123458",
            tenThuTuc: "Xác nhận bảng kê lâm sản xuất xưởng gỗ quế",
            toChuc: "Công ty TNHH Chế biến Quế Văn Yên",
            ngayTiepNhan: "15/05/2026",
            tinhTrang: "Đã quá hạn",
            hanXuLy: "18/05/2026",
            canBoThuLy: "Lê Hoàng Long (Đội KLCĐ & PCCCR số 2)",
            statusClass: "badge-danger"
        },
        {
            stt: 4,
            maHoSo: "HSC123459",
            tenThuTuc: "Đăng ký mã số cơ sở nuôi động vật rừng CITES (Gấu ngựa)",
            toChuc: "Hộ kinh doanh Hoàng Seo Pao (Bắc Hà)",
            ngayTiepNhan: "18/05/2026",
            tinhTrang: "Đang xử lý",
            hanXuLy: "02/06/2026",
            canBoThuLy: "Vũ Đình Trọng (Phòng ĐT, XLVP)",
            statusClass: "badge-info"
        },
        {
            stt: 5,
            maHoSo: "HSC123460",
            tenThuTuc: "Phê duyệt phương án quản lý rừng bền vững",
            toChuc: "Ban Quản lý Rừng phòng hộ Trạm Tấu",
            ngayTiepNhan: "05/05/2026",
            tinhTrang: "Đã trả kết quả",
            hanXuLy: "19/05/2026",
            canBoThuLy: "Nguyễn Tiến Đạt (Phòng QLBVR)",
            statusClass: "badge-success"
        }
    ]
};

window.CCKL_DATA = CCKL_DATA;
