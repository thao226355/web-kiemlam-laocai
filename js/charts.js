/**
 * CHARTS & INTERACTIVE MAP MODULE
 * BẢN ĐỒ HÀNH CHÍNH & LÂM NGHIỆP TỈNH LÀO CAI
 * Cập nhật số liệu QĐ số 537/QĐ-UBND & Báo cáo tháng 5/2026
 * Hoạt động 100% Offline (Vanilla JS + HTML5 Canvas + SVG Vector)
 */

const ForestCharts = {
    /**
     * Vẽ đồng hồ Gauge FWI (Cảnh báo cháy rừng)
     */
    drawFireGauge(canvasId, value) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;

        const width = 220;
        const height = 130;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        ctx.scale(dpr, dpr);

        const centerX = width / 2;
        const centerY = height - 15;
        const radius = 85;
        const barWidth = 18;

        const segments = [
            { min: 0, max: 10, color: '#2e7d32' },  // Cấp I
            { min: 10, max: 20, color: '#689f38' }, // Cấp II
            { min: 20, max: 30, color: '#fbc02d' }, // Cấp III
            { min: 30, max: 40, color: '#f57c00' }, // Cấp IV
            { min: 40, max: 60, color: '#d32f2f' }  // Cấp V
        ];

        const startAngle = Math.PI;
        const totalRange = 60;

        segments.forEach(seg => {
            const segStartAngle = startAngle + (seg.min / totalRange) * Math.PI;
            const segEndAngle = startAngle + (seg.max / totalRange) * Math.PI;

            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, segStartAngle, segEndAngle, false);
            ctx.lineWidth = barWidth;
            ctx.strokeStyle = seg.color;
            ctx.lineCap = 'butt';
            ctx.stroke();
        });

        const clampedVal = Math.min(Math.max(value, 0), totalRange);
        const needleAngle = startAngle + (clampedVal / totalRange) * Math.PI;

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(needleAngle);

        ctx.beginPath();
        ctx.moveTo(0, -4);
        ctx.lineTo(radius - 10, 0);
        ctx.lineTo(0, 4);
        ctx.fillStyle = '#1e293b';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(0, 0, 7, 0, 2 * Math.PI);
        ctx.fillStyle = '#1e293b';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(0, 0, 3, 0, 2 * Math.PI);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.restore();
    },

    /**
     * Vẽ biểu đồ tròn Donut (Cơ cấu 4 loại rừng theo mục đích sử dụng)
     */
    drawDonutChart(canvasId, data, centerText) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;

        const size = 260;
        canvas.width = size * dpr;
        canvas.height = size * dpr;
        canvas.style.width = size + 'px';
        canvas.style.height = size + 'px';
        ctx.scale(dpr, dpr);

        const centerX = size / 2;
        const centerY = size / 2;
        const outerRadius = 110;
        const innerRadius = 66;

        const total = data.reduce((sum, item) => sum + item.dienTich, 0);
        let currentAngle = -0.5 * Math.PI;

        data.forEach(slice => {
            const sliceAngle = (slice.dienTich / total) * (2 * Math.PI);

            ctx.beginPath();
            ctx.arc(centerX, centerY, outerRadius, currentAngle, currentAngle + sliceAngle);
            ctx.arc(centerX, centerY, innerRadius, currentAngle + sliceAngle, currentAngle, true);
            ctx.closePath();
            ctx.fillStyle = slice.color;
            ctx.fill();

            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2.5;
            ctx.stroke();

            currentAngle += sliceAngle;
        });

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#0f172a';
        ctx.font = 'bold 15px -apple-system, sans-serif';
        ctx.fillText(centerText || '860.494,3 ha', centerX, centerY - 8);

        ctx.fillStyle = '#64748b';
        ctx.font = '11px -apple-system, sans-serif';
        ctx.fillText('Đất có rừng (2025)', centerX, centerY + 12);
    },

    /**
     * Khởi tạo BẢN ĐỒ HÀNH CHÍNH TỈNH LÀO CAI MỚI (LÀO CAI + YÊN BÁI)
     * Thể hiện địa giới 11 khu vực Hạt Kiểm lâm và các Vườn quốc gia, Khu bảo tồn
     * @param {string} containerId ID của thẻ chứa bản đồ
     * @param {string} mode 'status' (Tỷ lệ che phủ) hoặc 'fire' (Cảnh báo cháy rừng)
     */
    renderLaoCaiMap(containerId, mode = 'status') {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Định nghĩa 11 khu vực quản lý Hạt Kiểm lâm trên bản đồ tỉnh Lào Cai
        const regions = [
            // --- KHU VỰC PHÍA BẮC & TÂY BẮC ---
            {
                id: "kbt_bat_xat",
                hatId: "kbt_bat_xat",
                name: "VQG & KBT Bát Xát (Y Tý)",
                path: "M 80,40 L 140,25 L 155,75 L 110,95 L 60,70 Z",
                labelX: 105, labelY: 60
            },
            {
                id: "bat_xat",
                hatId: "bat_xat",
                name: "Khu vực Bát Xát",
                path: "M 140,25 L 210,20 L 235,70 L 195,115 L 155,75 Z",
                labelX: 185, labelY: 65
            },
            {
                id: "sa_pa",
                hatId: "kbt_hoang_lien_van_ban",
                name: "TX Sa Pa (VQG Hoàng Liên)",
                path: "M 110,95 L 195,115 L 205,175 L 145,190 L 95,145 Z",
                labelX: 150, labelY: 150
            },
            {
                id: "bao_thang",
                hatId: "bao_thang",
                name: "TP Lào Cai & Bảo Thắng",
                path: "M 210,20 L 290,15 L 320,65 L 295,145 L 205,175 L 195,115 L 235,70 Z",
                labelX: 255, labelY: 95
            },
            {
                id: "bac_ha",
                hatId: "bac_ha",
                name: "Bắc Hà - Si Ma Cai - Mường Khương",
                path: "M 290,15 L 410,10 L 440,75 L 375,130 L 320,65 Z",
                labelX: 365, labelY: 65
            },
            {
                id: "bao_yen",
                hatId: "bao_yen",
                name: "Khu vực Bảo Yên",
                path: "M 375,130 L 440,75 L 485,145 L 420,210 L 345,175 L 295,145 Z",
                labelX: 410, labelY: 155
            },
            {
                id: "van_ban",
                hatId: "van_ban",
                name: "Văn Bàn & KBT HL-VB",
                path: "M 145,190 L 205,175 L 295,145 L 345,175 L 315,255 L 230,270 L 160,245 Z",
                labelX: 235, labelY: 220
            },

            // --- KHU VỰC PHÍA NAM & ĐÔNG NAM ---
            {
                id: "tran_yen",
                hatId: "tran_yen",
                name: "Văn Yên - Trấn Yên - TP Yên Bái",
                path: "M 345,175 L 420,210 L 450,285 L 380,360 L 315,310 L 315,255 Z",
                labelX: 380, labelY: 270
            },
            {
                id: "luc_yen",
                hatId: "luc_yen",
                name: "Lục Yên & Yên Bình (Hồ Thác Bà)",
                path: "M 420,210 L 485,145 L 565,190 L 540,310 L 450,285 Z",
                labelX: 495, labelY: 240
            },
            {
                id: "nghia_lo",
                hatId: "nghia_lo",
                name: "Văn Chấn - TX Nghĩa Lộ - Trạm Tấu",
                path: "M 230,270 L 315,255 L 315,310 L 380,360 L 340,435 L 255,420 L 195,350 Z",
                labelX: 285, labelY: 355
            },
            {
                id: "mu_cang_chai",
                hatId: "mu_cang_chai",
                name: "Khu vực Mù Cang Chải",
                path: "M 160,245 L 230,270 L 195,350 L 255,420 L 220,470 L 140,410 L 125,300 Z",
                labelX: 180, labelY: 375
            }
        ];

        let svgHtml = `
            <svg class="map-svg" viewBox="0 0 620 500" xmlns="http://www.w3.org/2000/svg" style="background:#f1f5f9; border-radius:8px;">
                <!-- Ranh giới và nhãn các tỉnh giáp ranh -->
                <text x="180" y="25" font-size="11" fill="#64748b" font-weight="700">VÂN NAM (TRUNG QUỐC)</text>
                <text x="20" y="160" font-size="11" fill="#64748b" font-weight="700">LAI CHÂU</text>
                <text x="35" y="440" font-size="11" fill="#64748b" font-weight="700">SƠN LA</text>
                <text x="510" y="70" font-size="11" fill="#64748b" font-weight="700">HÀ GIANG</text>
                <text x="535" y="150" font-size="11" fill="#64748b" font-weight="700">TUYÊN QUANG</text>
                <text x="460" y="420" font-size="11" fill="#64748b" font-weight="700">PHÚ THỌ</text>

                <!-- Dòng sông Hồng & Hồ Thác Bà mô phỏng -->
                <path d="M 195,15 Q 260,110 350,195 T 440,310 T 470,390" fill="none" stroke="#38bdf8" stroke-width="3" opacity="0.6" stroke-dasharray="4,2"/>
                <text x="360" y="220" font-size="9" fill="#0284c7" font-style="italic">Sông Hồng</text>

                <!-- Hồ Thác Bà -->
                <path d="M 480,240 Q 520,260 505,295 T 465,305 Z" fill="#7dd3fc" opacity="0.8"/>
                <text x="485" y="280" font-size="9" fill="#0369a1" font-weight="700">Hồ Thác Bà</text>
        `;

        regions.forEach(reg => {
            const dataItem = CCKL_DATA.hatKiemLam.find(x => x.id === reg.hatId) || {};
            let fillColor = '#1b5e20';

            if (mode === 'fire') {
                const fwi = dataItem.fwi || 30;
                if (fwi >= 40) fillColor = '#d32f2f';      // Rất cao
                else if (fwi >= 30) fillColor = '#f57c00'; // Cao
                else if (fwi >= 20) fillColor = '#fbc02d'; // Trung bình
                else if (fwi >= 10) fillColor = '#689f38'; // Thấp
                else fillColor = '#2e7d32';               // Rất thấp
            } else {
                const chePhu = dataItem.chePhu || 61.5;
                if (chePhu >= 80) fillColor = '#0f441c';
                else if (chePhu >= 68) fillColor = '#1b5e20';
                else if (chePhu >= 60) fillColor = '#2e7d32';
                else if (chePhu >= 50) fillColor = '#4caf50';
                else fillColor = '#7cb342';
            }

            svgHtml += `
                <g class="map-district-group" data-id="${reg.id}" data-hatid="${reg.hatId}" data-name="${reg.name}">
                    <path class="map-district" d="${reg.path}" fill="${fillColor}" stroke="#ffffff" stroke-width="2" />
                    <text x="${reg.labelX}" y="${reg.labelY}" font-size="10" font-weight="800" fill="#ffffff" text-anchor="middle" style="pointer-events: none; text-shadow: 0 1px 4px rgba(0,0,0,0.9);">
                        ${reg.name}
                    </text>
                </g>
            `;
        });

        svgHtml += `</svg>`;
        container.innerHTML = svgHtml;

        // Hover và click tương tác
        const groups = container.querySelectorAll('.map-district-group');
        const tooltip = document.getElementById('map-tooltip') || ForestCharts.createTooltip();

        groups.forEach(g => {
            const hatId = g.getAttribute('data-hatid');
            const data = CCKL_DATA.hatKiemLam.find(x => x.id === hatId);

            g.addEventListener('mouseenter', (e) => {
                if (!data) return;
                let content = `
                    <div class="map-tooltip-title">${data.ten}</div>
                    <div><b>Địa bàn quản lý:</b> ${data.diaBan}</div>
                    <div><b>Tổng DT rừng:</b> ${data.tongDT.toLocaleString('vi-VN')} ha</div>
                    <div><b>Rừng tự nhiên:</b> ${data.tuNhien.toLocaleString('vi-VN')} ha</div>
                    <div><b>Rừng trồng:</b> ${data.trong.toLocaleString('vi-VN')} ha</div>
                    <div><b>Độ che phủ:</b> <b style="color:#4ade80;">${data.chePhu}%</b></div>
                    <div><b>Cảnh báo cháy:</b> <span style="color:#f59e0b;">FWI ${data.fwi} (${data.capChay})</span></div>
                    <div><b>Biên chế đơn vị:</b> ${data.bienChe} công chức, kiểm lâm</div>
                    <div style="font-size:0.75rem; color:#94a3b8; margin-top:4px;">* Nhấp chuột để xem danh sách xã/phường</div>
                `;
                tooltip.innerHTML = content;
                tooltip.style.display = 'block';
            });

            g.addEventListener('mousemove', (e) => {
                tooltip.style.left = (e.pageX + 15) + 'px';
                tooltip.style.top = (e.pageY - 20) + 'px';
            });

            g.addEventListener('mouseleave', () => {
                tooltip.style.display = 'none';
            });

            g.addEventListener('click', () => {
                if (window.App && typeof window.App.showHatKiemLamDetail === 'function') {
                    window.App.showHatKiemLamDetail(hatId);
                }
            });
        });
    },

    createTooltip() {
        let el = document.getElementById('map-tooltip');
        if (!el) {
            el = document.createElement('div');
            el.id = 'map-tooltip';
            el.className = 'map-tooltip';
            document.body.appendChild(el);
        }
        return el;
    }
};

window.ForestCharts = ForestCharts;
