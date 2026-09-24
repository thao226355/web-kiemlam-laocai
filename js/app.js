/**
 * APPLICATION CORE SCRIPT - WEBSITE CHI CỤC KIỂM LÂM LÀO CAI
 * Cập nhật số liệu chuẩn xác theo Quyết định số 537/QĐ-UBND ngày 27/02/2026
 */

const App = {
    currentAction: 'action-1',
    currentSubTabs: {
        'action-2': 'tab-ht-rung',
        'action-3': 'tab-cb-hom-nay',
        'action-4': 'tab-so-do-tc',
        'action-5': 'tab-tra-cuu-hs',
        'action-6': 'tab-vb-phap-luat'
    },

    init() {
        this.bindEvents();
        this.renderOverview();
        this.renderForestData();
        this.render99CommunesTable();
        this.renderFireWarning();
        this.renderOrgChart();
        this.renderTTHC();
        this.renderLegalDocs();

        setTimeout(() => {
            ForestCharts.renderLaoCaiMap('overview-map-container', 'status');
            ForestCharts.drawFireGauge('overview-fire-gauge', CCKL_DATA.canhBaoChayRung.fwiTrungBinh);
        }, 150);
    },

    bindEvents() {
        // Chuyển tab chính (Action 1 -> Action 6)
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                const actionId = tab.getAttribute('data-action');
                this.switchAction(actionId);
            });
        });

        // Quick action buttons
        document.querySelectorAll('.quick-action-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetAction = btn.getAttribute('data-target');
                this.switchAction(targetAction);
            });
        });

        // Search bar
        const searchInput = document.getElementById('global-search-input');
        const searchBtn = document.getElementById('global-search-btn');
        if (searchInput && searchBtn) {
            const handleSearch = () => {
                const q = searchInput.value.trim().toLowerCase();
                if (!q) return;
                if (q.includes('qđ') || q.includes('537') || q.includes('văn bản') || q.includes('nghị định')) {
                    this.switchAction('action-6');
                    const inputVb = document.getElementById('filter-vb-keyword');
                    if (inputVb) { inputVb.value = q; App.filterLegalDocs(); }
                } else if (q.includes('hsc') || q.includes('hồ sơ') || q.includes('thủ tục')) {
                    this.switchAction('action-5');
                    const inputHs = document.getElementById('search-hs-keyword');
                    if (inputHs) { inputHs.value = q; App.searchHoSo(); }
                } else if (q.includes('xã') || q.includes('phường')) {
                    this.switchAction('action-2');
                    this.switchSubTab('action-2', 'tab-99-xa');
                    const inputXa = document.getElementById('search-99-xa-keyword');
                    if (inputXa) { inputXa.value = q; App.filter99Communes(); }
                } else {
                    this.switchAction('action-2');
                }
            };
            searchBtn.addEventListener('click', handleSearch);
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') handleSearch();
            });
        }

        // Modal close
        const modalOverlay = document.getElementById('app-modal-overlay');
        const modalClose = document.getElementById('modal-close-btn');
        if (modalOverlay && modalClose) {
            modalClose.addEventListener('click', () => modalOverlay.classList.remove('active'));
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) modalOverlay.classList.remove('active');
            });
        }
    },

    switchAction(actionId) {
        this.currentAction = actionId;

        document.querySelectorAll('.nav-tab').forEach(t => {
            if (t.getAttribute('data-action') === actionId) {
                t.classList.add('active');
            } else {
                t.classList.remove('active');
            }
        });

        document.querySelectorAll('.action-section').forEach(sec => {
            if (sec.id === actionId) {
                sec.style.display = 'block';
            } else {
                sec.style.display = 'none';
            }
        });

        window.scrollTo({ top: 120, behavior: 'smooth' });

        if (actionId === 'action-1') {
            setTimeout(() => {
                ForestCharts.renderLaoCaiMap('overview-map-container', 'status');
                ForestCharts.drawFireGauge('overview-fire-gauge', CCKL_DATA.canhBaoChayRung.fwiTrungBinh);
            }, 100);
        } else if (actionId === 'action-2') {
            setTimeout(() => {
                ForestCharts.drawDonutChart('donut-forest-purpose', CCKL_DATA.mucDichSuDung, '860.494,3 ha');
            }, 100);
        } else if (actionId === 'action-3') {
            setTimeout(() => {
                ForestCharts.renderLaoCaiMap('fire-warning-map-container', 'fire');
            }, 100);
        }
    },

    switchSubTab(actionId, tabKey) {
        this.currentSubTabs[actionId] = tabKey;
        const container = document.getElementById(actionId);
        if (!container) return;

        container.querySelectorAll('.sub-nav-btn').forEach(btn => {
            if (btn.getAttribute('data-subtab') === tabKey) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        container.querySelectorAll('.sub-tab-content').forEach(content => {
            if (content.getAttribute('data-tab-content') === tabKey) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    },

    /* =========================================================================
       ACTION 1: TỔNG QUAN
       ========================================================================= */
    renderOverview() {
        const barContainer = document.getElementById('overview-purpose-bars');
        if (barContainer) {
            let html = '';
            CCKL_DATA.mucDichSuDung.forEach(item => {
                html += `
                    <div class="bar-chart-row">
                        <div class="bar-label-group">
                            <span class="bar-name"><b>${item.ten}</b></span>
                            <span class="bar-value">${item.dienTich.toLocaleString('vi-VN')} ha (${item.tyLe}%)</span>
                        </div>
                        <div class="bar-track">
                            <div class="bar-fill" style="width: ${item.tyLe * 1.8}%; background-color: ${item.color};"></div>
                        </div>
                    </div>
                `;
            });
            barContainer.innerHTML = html;
        }
    },

    /* =========================================================================
       ACTION 2: DỮ LIỆU RỪNG
       ========================================================================= */
    renderForestData() {
        // Bảng diện tích theo mục đích sử dụng (Biểu 1)
        const tableBody = document.getElementById('table-forest-purpose-body');
        if (tableBody) {
            let html = '';
            let totalDT = 0;
            let totalTL = 0;

            CCKL_DATA.mucDichSuDung.forEach((item, index) => {
                totalDT += item.dienTich;
                totalTL += item.tyLe;
                html += `
                    <tr>
                        <td style="text-align:center; font-weight:700;">${index + 1}</td>
                        <td style="font-weight:700;"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${item.color};margin-right:8px;"></span>${item.ten}</td>
                        <td style="text-align:right; font-weight:700;">${item.dienTich.toLocaleString('vi-VN')}</td>
                        <td style="text-align:right; font-weight:700; color:var(--primary);">${item.tyLe}%</td>
                        <td style="text-align:right;">${item.tuNhien.toLocaleString('vi-VN')}</td>
                        <td style="text-align:right;">${item.daThanhRung.toLocaleString('vi-VN')}</td>
                        <td style="text-align:right; color:#d97706;">${item.chuaThanhRung.toLocaleString('vi-VN')}</td>
                    </tr>
                `;
            });

            html += `
                <tr style="background:#f1f5f9; font-weight:800;">
                    <td colspan="2" style="text-align:center;">TỔNG CỘNG TOÀN TỈNH</td>
                    <td style="text-align:right; color:#0f172a;">${totalDT.toLocaleString('vi-VN')}</td>
                    <td style="text-align:right; color:var(--primary);">100%</td>
                    <td style="text-align:right;">466.715,6</td>
                    <td style="text-align:right;">347.919,6</td>
                    <td style="text-align:right; color:#d97706;">45.859,1</td>
                </tr>
            `;
            tableBody.innerHTML = html;
        }

        // Bảng 11 Hạt Kiểm lâm
        const tableHatBody = document.getElementById('table-forest-district-body');
        if (tableHatBody) {
            let html = '';
            CCKL_DATA.hatKiemLam.forEach((h, idx) => {
                html += `
                    <tr>
                        <td style="text-align:center; font-weight:700;">${idx + 1}</td>
                        <td style="font-weight:700; color:var(--primary);">${h.ten}</td>
                        <td>${h.diaBan}</td>
                        <td style="text-align:right; font-weight:700;">${h.tongDT.toLocaleString('vi-VN')}</td>
                        <td style="text-align:right;">${h.tuNhien.toLocaleString('vi-VN')}</td>
                        <td style="text-align:right;">${h.trong.toLocaleString('vi-VN')}</td>
                        <td style="text-align:right; font-weight:700; color:#16a34a;">${h.chePhu}%</td>
                        <td style="text-align:center; font-weight:700;">${h.bienChe}</td>
                        <td style="text-align:center;"><span class="badge ${h.fwi >= 40 ? 'badge-danger' : (h.fwi >= 30 ? 'badge-warning' : 'badge-success')}">${h.capChay}</span></td>
                        <td style="text-align:center;">
                            <button class="action-btn" onclick="App.showHatKiemLamDetail('${h.id}')">Xem chi tiết</button>
                        </td>
                    </tr>
                `;
            });
            tableHatBody.innerHTML = html;
        }

        // Bảng theo chủ quản lý (Biểu 2)
        const tableChuQL = document.getElementById('table-forest-owner-body');
        if (tableChuQL) {
            let html = '';
            CCKL_DATA.chuQuanLy.forEach(c => {
                html += `
                    <tr>
                        <td style="text-align:center; font-weight:700;">${c.id}</td>
                        <td style="font-weight:600;">${c.loai}</td>
                        <td style="text-align:right; font-weight:700;">${c.dienTich.toLocaleString('vi-VN')}</td>
                        <td style="text-align:right;">${c.tuNhien.toLocaleString('vi-VN')}</td>
                        <td style="text-align:right;">${c.trong.toLocaleString('vi-VN')}</td>
                        <td style="text-align:right; font-weight:700; color:var(--primary);">${c.tyLe}%</td>
                    </tr>
                `;
            });
            tableChuQL.innerHTML = html;
        }

        // Vùng trọng điểm kinh tế lâm nghiệp (Mục 7)
        const vungContainer = document.getElementById('vung-trong-diem-container');
        if (vungContainer) {
            let vHtml = '';
            CCKL_DATA.vungTrongDiem.forEach(v => {
                vHtml += `
                    <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:var(--radius-md); padding:16px; box-shadow:var(--shadow-sm);">
                        <h4 style="color:var(--primary); font-size:1.05rem; margin-bottom:6px;">🌿 ${v.ten}</h4>
                        <div style="font-size:0.88rem; line-height:1.7;">
                            <p><b>Quy mô diện tích:</b> <span style="color:#0f172a; font-weight:700;">${v.dienTich.toLocaleString('vi-VN')} ha</span></p>
                            <p><b>Sản lượng hàng năm:</b> <span style="color:#16a34a; font-weight:700;">${v.sanLuong}</span></p>
                            <p><b>Địa bàn tập trung:</b> ${v.diaBan}</p>
                            <p><b>Cơ cấu loài:</b> ${v.loaiCay}</p>
                        </div>
                    </div>
                `;
            });
            vungContainer.innerHTML = vHtml;
        }

        // Bảng Đề án Du lịch sinh thái (QĐ 1382)
        const dlstContainer = document.getElementById('dlst-container');
        if (dlstContainer) {
            let dHtml = '';
            CCKL_DATA.duLichSinhThai.duAnThucHien.forEach(d => {
                dHtml += `
                    <div style="background:#f8fafc; border-left:4px solid var(--primary); padding:12px 16px; border-radius:4px; margin-bottom:10px;">
                        <h5 style="font-size:0.95rem; font-weight:700; color:#0f172a;">${d.ten}</h5>
                        <div style="font-size:0.84rem; color:#475569; margin-top:2px;">
                            <span>Khu bảo tồn / Vị trí: <b>${d.viTri}</b></span> |
                            <span>Trạng thái: <span class="badge badge-success">${d.trangThai}</span></span>
                            ${d.tienThue ? ` | <span>Doanh thu DVMTR: <b style="color:#b91c1c;">${d.tienThue}</b></span>` : ''}
                        </div>
                    </div>
                `;
            });
            dlstContainer.innerHTML = dHtml;
        }
    },

    /* =========================================================================
       ACTION 2 - SUBTAB: BẢNG 99 XÃ/PHƯỜNG (Biểu 3 - QĐ 537)
       ========================================================================= */
    render99CommunesTable(filterList = null) {
        const tableBody = document.getElementById('table-99-xa-body');
        if (!tableBody) return;

        const list = filterList || CCKL_DATA.danhSach99XaPhuong;
        let html = '';

        list.forEach(item => {
            html += `
                <tr>
                    <td style="text-align:center; font-weight:700;">${item.stt}</td>
                    <td style="font-weight:700; color:#0f172a;">${item.ten}</td>
                    <td><span class="badge badge-purple">${item.khuVuc}</span></td>
                    <td style="text-align:right;">${item.tongDT.toLocaleString('vi-VN')}</td>
                    <td style="text-align:right; font-weight:700;">${item.dtRung.toLocaleString('vi-VN')}</td>
                    <td style="text-align:right;">${item.tuNhien.toLocaleString('vi-VN')}</td>
                    <td style="text-align:right;">${item.thanhRung.toLocaleString('vi-VN')}</td>
                    <td style="text-align:right; font-weight:800; color:${item.chePhu >= 70 ? '#166534' : (item.chePhu >= 50 ? '#16a34a' : '#ea580c')};">${item.chePhu}%</td>
                    <td style="text-align:center;">
                        <button class="action-btn" onclick="App.showXaDetail('${item.ten}')">Chi tiết</button>
                    </td>
                </tr>
            `;
        });

        tableBody.innerHTML = html;
        const countEl = document.getElementById('count-99-xa');
        if (countEl) countEl.textContent = `${list.length} / 99 xã, phường, thị trấn`;
    },

    filter99Communes() {
        const input = document.getElementById('search-99-xa-keyword');
        const khuVucSelect = document.getElementById('select-99-xa-khuvuc');
        const q = input ? input.value.trim().toLowerCase() : '';
        const kv = khuVucSelect ? khuVucSelect.value : 'all';

        const filtered = CCKL_DATA.danhSach99XaPhuong.filter(x => {
            const matchQ = !q || x.ten.toLowerCase().includes(q) || x.khuVuc.toLowerCase().includes(q);
            const matchKv = kv === 'all' || x.khuVuc.includes(kv);
            return matchQ && matchKv;
        });

        this.render99CommunesTable(filtered);
    },

    /* =========================================================================
       ACTION 3: Cảnh cháy rừng & Vi phạm
       ========================================================================= */
    renderFireWarning() {
        const tableDanger = document.getElementById('table-fire-danger-body');
        if (tableDanger) {
            let html = '';
            CCKL_DATA.canhBaoChayRung.diaBanNguyCoCao.forEach(d => {
                html += `
                    <tr>
                        <td style="text-align:center; font-weight:700;">${d.stt}</td>
                        <td style="font-weight:700;">${d.xa}</td>
                        <td>${d.hat}</td>
                        <td style="font-weight:700; color:#b91c1c; text-align:center;">${d.fwi}</td>
                        <td style="text-align:center;"><span class="badge ${d.cap === 'Rất cao' ? 'badge-danger' : 'badge-warning'}">${d.cap}</span></td>
                    </tr>
                `;
            });
            tableDanger.innerHTML = html;
        }
    },

    /* =========================================================================
       ACTION 4: TỔ CHỨC & ĐƠN VỊ
       ========================================================================= */
    renderOrgChart() {
        // Các phòng nghiệp vụ
        const phongList = document.getElementById('org-phong-list');
        if (phongList) {
            let html = '';
            CCKL_DATA.toChucMoi.phongChucNang.forEach(p => {
                html += `
                    <div class="org-node-item" onclick="App.showOrgDetail('phong', '${p.ten}')">
                        <div class="org-node-title">${p.ten}</div>
                        <div class="org-node-sub">${p.lanhDao}</div>
                    </div>
                `;
            });
            phongList.innerHTML = html;
        }

        // 2 Đội KLCĐ & PCCCR
        const ttList = document.getElementById('org-tructhuoc-list');
        if (ttList) {
            let html = '';
            CCKL_DATA.toChucMoi.doiKiemLamCoDong.forEach(d => {
                html += `
                    <div class="org-node-item" onclick="App.showOrgDetail('doi', '${d.ten}')">
                        <div class="org-node-title">${d.ten}</div>
                        <div class="org-node-sub">${d.lanhDao}</div>
                    </div>
                `;
            });
            CCKL_DATA.toChucMoi.cacBanQuanLyKhuBaoTon.forEach(b => {
                html += `
                    <div class="org-node-item" onclick="App.showOrgDetail('kbt', '${b.ten}')">
                        <div class="org-node-title">${b.ten}</div>
                        <div class="org-node-sub">${b.viTri} • ${b.dienTich}</div>
                    </div>
                `;
            });
            ttList.innerHTML = html;
        }

        // Hạt Kiểm lâm khu vực
        const hatList = document.getElementById('org-hat-list');
        if (hatList) {
            let html = '';
            CCKL_DATA.hatKiemLam.forEach(h => {
                html += `
                    <div class="org-node-item" onclick="App.showHatKiemLamDetail('${h.id}')">
                        <div class="org-node-title">${h.ten}</div>
                        <div class="org-node-sub">Quản lý: ${h.tongDT.toLocaleString('vi-VN')} ha • ${h.bienChe} CCVC • Trụ sở: ${h.truSo}</div>
                    </div>
                `;
            });
            hatList.innerHTML = html;
        }
    },

    /* =========================================================================
       ACTION 5: THỦ TỤC HÀNH CHÍNH (49 TTHC)
       ========================================================================= */
    renderTTHC() {
        // Hồ sơ thực tế đang thụ lý
        const hsBody = document.getElementById('table-tthc-body');
        if (hsBody) {
            let html = '';
            CCKL_DATA.hoSoThucTe.forEach(h => {
                html += `
                    <tr>
                        <td style="text-align:center; font-weight:700;">${h.stt}</td>
                        <td style="font-weight:700; color:#1d4ed8; font-family:monospace;">${h.maHoSo}</td>
                        <td style="font-weight:600;">
                            ${h.tenThuTuc}
                            <div style="font-size:0.8rem; color:var(--text-muted);">Đơn vị: ${h.toChuc}</div>
                        </td>
                        <td>${h.ngayTiepNhan}</td>
                        <td style="text-align:center;"><span class="badge ${h.statusClass}">${h.tinhTrang}</span></td>
                        <td style="font-weight:600;">${h.hanXuLy}</td>
                        <td style="text-align:center;">
                            <button class="action-btn primary" onclick="App.showHoSoDetail('${h.maHoSo}')">Tiến độ</button>
                        </td>
                    </tr>
                `;
            });
            hsBody.innerHTML = html;
        }

        // Danh mục đầy đủ TTHC
        this.renderDanhMucTTHC();
    },

    renderDanhMucTTHC(filterList = null) {
        const danhMucBody = document.getElementById('table-danhmuc-tthc-body');
        if (!danhMucBody) return;

        const list = filterList || CCKL_DATA.danhMucTTHCChuan;
        let dmHtml = '';

        list.forEach((dm, idx) => {
            dmHtml += `
                <tr>
                    <td style="text-align:center; font-weight:700;">${idx + 1}</td>
                    <td style="font-family:monospace; font-weight:700; color:var(--primary); white-space:nowrap;">${dm.ma}</td>
                    <td style="font-weight:600;">${dm.ten}</td>
                    <td style="white-space:nowrap;"><span class="badge badge-purple">${dm.cap}</span></td>
                    <td style="white-space:nowrap;">${dm.thoiHan}</td>
                    <td style="text-align:center;"><span class="badge badge-success">${dm.dvctt}</span></td>
                    <td style="text-align:center;">
                        <button class="action-btn" onclick="alert('Đang tạo biểu mẫu điện tử của thủ tục: ' + '${dm.ma}')">Tải biểu mẫu</button>
                    </td>
                </tr>
            `;
        });
        danhMucBody.innerHTML = dmHtml;
        const countTTHC = document.getElementById('count-tthc-danhmuc');
        if (countTTHC) countTTHC.textContent = `Tổng số: ${list.length} thủ tục hành chính`;
    },

    searchHoSo() {
        const input = document.getElementById('search-hs-keyword');
        if (!input) return;
        const q = input.value.trim().toLowerCase();
        if (!q) {
            this.renderTTHC();
            return;
        }
        const filtered = CCKL_DATA.hoSoThucTe.filter(h =>
            h.maHoSo.toLowerCase().includes(q) ||
            h.tenThuTuc.toLowerCase().includes(q) ||
            h.toChuc.toLowerCase().includes(q)
        );
        const hsBody = document.getElementById('table-tthc-body');
        if (hsBody) {
            let html = '';
            filtered.forEach(h => {
                html += `
                    <tr>
                        <td style="text-align:center; font-weight:700;">${h.stt}</td>
                        <td style="font-weight:700; color:#1d4ed8; font-family:monospace;">${h.maHoSo}</td>
                        <td style="font-weight:600;">${h.tenThuTuc}<div style="font-size:0.8rem; color:var(--text-muted);">${h.toChuc}</div></td>
                        <td>${h.ngayTiepNhan}</td>
                        <td style="text-align:center;"><span class="badge ${h.statusClass}">${h.tinhTrang}</span></td>
                        <td>${h.hanXuLy}</td>
                        <td style="text-align:center;"><button class="action-btn primary" onclick="App.showHoSoDetail('${h.maHoSo}')">Tiến độ</button></td>
                    </tr>
                `;
            });
            hsBody.innerHTML = html;
        }
    },

    /* =========================================================================
       ACTION 6: PHÁP LUẬT & TÀI LIỆU
       ========================================================================= */
    renderLegalDocs(filterList = null) {
        const tableBody = document.getElementById('table-legal-docs-body');
        if (!tableBody) return;

        const list = filterList || [
            {
                stt: 1, soKyHieu: "537/QĐ-UBND", tenVanBan: "Công bố hiện trạng rừng tỉnh Lào Cai năm 2025",
                ngayBanHanh: "27/02/2026", coQuanBanHanh: "UBND tỉnh Lào Cai", loaiVanBan: "Quyết định", linhVuc: "Quản lý bảo vệ rừng",
                hieuLuc: "Còn hiệu lực", trichYeu: "Công bố số liệu hiện trạng rừng tỉnh Lào Cai đến ngày 31/12/2025: Diện tích đất có rừng 860.494,3 ha; Tỷ lệ che phủ rừng đạt 61,5%. Kèm 5 biểu số liệu và bản đồ số.",
                file: "537_QD_UBND_HienTrangRung2025.pdf"
            },
            {
                stt: 2, soKyHieu: "2336/QĐ-UBND", tenVanBan: "Giao chỉ tiêu Kế hoạch phát triển KT-XH và dự toán NSNN năm 2026",
                ngayBanHanh: "12/12/2025", coQuanBanHanh: "UBND tỉnh Lào Cai", loaiVanBan: "Quyết định", linhVuc: "Kế hoạch",
                hieuLuc: "Còn hiệu lực", trichYeu: "Giao chỉ tiêu trồng mới 14.000 ha rừng sản xuất, khai thác 1.130.000 m³ gỗ, duy trì độ che phủ 61,3% và giá trị sản xuất lâm nghiệp 4.437,5 tỷ đồng.",
                file: "2336_QD_UBND_KeHoach2026.pdf"
            },
            {
                stt: 3, soKyHieu: "1382/QĐ-UBND", tenVanBan: "Phê duyệt Đề án du lịch sinh thái, nghỉ dưỡng, giải trí trong rừng đặc dụng và phòng hộ",
                ngayBanHanh: "23/04/2026", coQuanBanHanh: "UBND tỉnh Lào Cai", loaiVanBan: "Quyết định", linhVuc: "Lâm sinh",
                hieuLuc: "Còn hiệu lực", trichYeu: "Phê duyệt 74 dự án thuê môi trường rừng với tổng diện tích 5.723 ha (Fansipan, Hoàng Liên - Văn Bàn, Bát Xát, Mù Cang Chải, hồ Thác Bà).",
                file: "1382_QD_UBND_DuLichSinhThai.pdf"
            },
            {
                stt: 4, soKyHieu: "42/2026/NĐ-CP", tenVanBan: "Sửa đổi, bổ sung một số điều của Nghị định số 156/2018/NĐ-CP quy định chi tiết Luật Lâm nghiệp",
                ngayBanHanh: "26/01/2026", coQuanBanHanh: "Chính phủ", loaiVanBan: "Nghị định", linhVuc: "Chính sách",
                hieuLuc: "Còn hiệu lực", trichYeu: "Quy định mới về phân định thẩm quyền chính quyền địa phương 2 cấp, thủ tục chủ trương chuyển mục đích sử dụng rừng và cấp tín chỉ các-bon rừng.",
                file: "42_2026_ND_CP_SuaDoiND156.pdf"
            },
            {
                stt: 5, soKyHieu: "521/QĐ-UBND", tenVanBan: "Phê duyệt Kế hoạch thu, chi tiền Dịch vụ môi trường rừng năm 2026",
                ngayBanHanh: "15/03/2026", coQuanBanHanh: "UBND tỉnh Lào Cai", loaiVanBan: "Quyết định", linhVuc: "Chính sách",
                hieuLuc: "Còn hiệu lực", trichYeu: "Tổng thu DVMTR toàn tỉnh năm 2026 đạt 276,29 tỷ đồng (Quỹ Trung ương điều phối 101,85 tỷ đồng; thu nội tỉnh 174,43 tỷ đồng) chi trả cho 545.160 ha rừng.",
                file: "521_QD_UBND_ThuChiDVMTR2026.pdf"
            }
        ];

        let html = '';
        list.forEach(vb => {
            html += `
                <tr>
                    <td style="text-align:center; font-weight:700;">${vb.stt}</td>
                    <td style="font-weight:700; font-family:monospace; color:#0f172a; white-space:nowrap;">${vb.soKyHieu}</td>
                    <td style="font-weight:600;">
                        ${vb.tenVanBan}
                        <div style="font-size:0.8rem; color:var(--text-muted); margin-top:2px;">Cơ quan: ${vb.coQuanBanHanh} • Lĩnh vực: ${vb.linhVuc}</div>
                    </td>
                    <td style="white-space:nowrap;">${vb.ngayBanHanh}</td>
                    <td style="text-align:center;"><span class="badge badge-success">${vb.hieuLuc}</span></td>
                    <td style="text-align:center; white-space:nowrap;">
                        <button class="action-btn" onclick="App.showLegalDocDetail('${vb.soKyHieu}')">Xem</button>
                        <button class="action-btn primary" onclick="App.downloadDoc('${vb.file}')">Tải về</button>
                    </td>
                </tr>
            `;
        });
        tableBody.innerHTML = html;
    },

    /* =========================================================================
       MODAL CHI TIẾT
       ========================================================================= */
    openModal(title, contentHtml) {
        const overlay = document.getElementById('app-modal-overlay');
        const titleEl = document.getElementById('modal-title');
        const bodyEl = document.getElementById('modal-body-content');
        if (!overlay || !titleEl || !bodyEl) return;

        titleEl.textContent = title;
        bodyEl.innerHTML = contentHtml;
        overlay.classList.add('active');
    },

    showHatKiemLamDetail(hatId) {
        const h = CCKL_DATA.hatKiemLam.find(x => x.id === hatId);
        if (!h) return;

        // Lọc các xã/phường thuộc hạt này
        const danhSachXa = CCKL_DATA.danhSach99XaPhuong.filter(x => {
            const cleanTen = x.ten.replace(/^(P\.|Xã\s*)/i, '').trim().toLowerCase();
            return h.diaBan.toLowerCase().includes(cleanTen) || h.diaBan.toLowerCase().includes(x.ten.toLowerCase());
        });

        let xaHtml = '<ul style="margin-left:20px; line-height:1.8; margin-top:8px; max-height:160px; overflow-y:auto;">';
        danhSachXa.forEach(x => {
            xaHtml += `<li><b>${x.ten}</b>: DT rừng ${x.dtRung.toLocaleString('vi-VN')} ha (Độ che phủ: <b>${x.chePhu}%</b>)</li>`;
        });
        xaHtml += '</ul>';

        const content = `
            <div style="line-height:1.7;">
                <p><b>Đơn vị:</b> <span style="font-size:1.15rem; font-weight:800; color:var(--primary);">${h.ten}</span></p>
                <p><b>Địa bàn quản lý:</b> ${h.diaBan}</p>
                <p><b>Trụ sở làm việc:</b> ${h.truSo}</p>
                <p><b>Diện tích rừng quản lý:</b> <b style="color:#0f172a;">${h.tongDT.toLocaleString('vi-VN')} ha</b></p>
                <ul style="margin-left:20px;">
                    <li>Rừng tự nhiên: <b>${h.tuNhien.toLocaleString('vi-VN')} ha</b></li>
                    <li>Rừng trồng: <b>${h.trong.toLocaleString('vi-VN')} ha</b> (Chưa thành rừng: ${h.chuaThanhRung.toLocaleString('vi-VN')} ha)</li>
                </ul>
                <p><b>Tỷ lệ che phủ rừng địa bàn:</b> <span style="color:#16a34a; font-weight:800; font-size:1.1rem;">${h.chePhu}%</span></p>
                <p><b>Biên chế công chức kiểm lâm:</b> <b>${h.bienChe} đồng chí</b></p>
                <p><b>Cảnh báo cháy rừng:</b> Chỉ số FWI <b>${h.fwi}</b> (<span class="badge ${h.fwi >= 40 ? 'badge-danger' : (h.fwi >= 30 ? 'badge-warning' : 'badge-success')}">${h.capChay}</span>)</p>
                
                <h4 style="font-size:0.95rem; font-weight:700; margin-top:14px; border-bottom:1px solid #e2e8f0; padding-bottom:4px;">Các xã, phường trực thuộc địa bàn phụ trách:</h4>
                ${xaHtml}
            </div>
        `;
        this.openModal(`Thông tin chi tiết: ${h.ten}`, content);
    },

    showXaDetail(tenXa) {
        const x = CCKL_DATA.danhSach99XaPhuong.find(item => item.ten === tenXa);
        if (!x) return;

        const content = `
            <div style="line-height:1.8;">
                <p><b>Tên đơn vị:</b> <span style="font-size:1.2rem; font-weight:800; color:var(--primary);">Xã/Phường ${x.ten}</span></p>
                <p><b>Khu vực huyện/thị:</b> ${x.khuVuc}</p>
                <p><b>Tổng diện tích tự nhiên:</b> ${x.tongDT.toLocaleString('vi-VN')} ha</p>
                <p><b>Tổng diện tích có rừng:</b> <b style="color:#0f172a;">${x.dtRung.toLocaleString('vi-VN')} ha</b></p>
                <ul style="margin-left:20px;">
                    <li>Rừng tự nhiên: <b>${x.tuNhien.toLocaleString('vi-VN')} ha</b></li>
                    <li>Rừng trồng đã thành rừng: <b>${x.thanhRung.toLocaleString('vi-VN')} ha</b></li>
                    <li>Diện tích đã trồng chưa thành rừng: ${x.chuaThanhRung.toLocaleString('vi-VN')} ha</li>
                </ul>
                <p><b>Phân theo 3 loại rừng:</b></p>
                <ul style="margin-left:20px;">
                    <li>Rừng đặc dụng: ${x.dacDung.toLocaleString('vi-VN')} ha</li>
                    <li>Rừng phòng hộ: ${x.phongHo.toLocaleString('vi-VN')} ha</li>
                    <li>Rừng sản xuất: ${x.sanXuat.toLocaleString('vi-VN')} ha</li>
                </ul>
                <p><b>Tỷ lệ che phủ rừng:</b> <span style="color:#16a34a; font-weight:900; font-size:1.3rem;">${x.chePhu}%</span></p>
                <div style="background:#f8fafc; padding:10px; border-radius:4px; font-size:0.85rem; margin-top:10px;">
                    * Trích lục từ Biểu 03 Quyết định số 537/QĐ-UBND ngày 27/02/2026 của UBND tỉnh Lào Cai.
                </div>
            </div>
        `;
        this.openModal(`Chi tiết xã/phường: ${x.ten}`, content);
    },

    showHoSoDetail(maHoSo) {
        const hs = CCKL_DATA.hoSoThucTe.find(x => x.maHoSo === maHoSo);
        if (!hs) return;

        const content = `
            <div style="line-height:1.7;">
                <p><b>Mã hồ sơ:</b> <span style="font-family:monospace; font-weight:700; color:#1d4ed8; font-size:1.1rem;">${hs.maHoSo}</span></p>
                <p><b>Tên thủ tục:</b> ${hs.tenThuTuc}</p>
                <p><b>Chủ rừng / Tổ chức nộp:</b> ${hs.toChuc}</p>
                <p><b>Ngày tiếp nhận:</b> ${hs.ngayTiepNhan}</p>
                <p><b>Hạn trả kết quả:</b> ${hs.hanXuLy}</p>
                <p><b>Tình trạng:</b> <span class="badge ${hs.statusClass}">${hs.tinhTrang}</span></p>
                <p><b>Cán bộ thụ lý:</b> ${hs.canBoThuLy}</p>
            </div>
        `;
        this.openModal(`Hồ sơ giải quyết TTHC: ${hs.maHoSo}`, content);
    },

    showLegalDocDetail(soKyHieu) {
        const content = `
            <div style="line-height:1.8;">
                <p><b>Số hiệu:</b> <span style="font-weight:700; color:#0f172a;">${soKyHieu}</span></p>
                <p><b>Cơ quan ban hành:</b> UBND tỉnh Lào Cai</p>
                <p><b>Tình trạng:</b> <span class="badge badge-success">Còn hiệu lực thi hành</span></p>
                <p>Văn bản pháp lý nền tảng phục vụ chỉ đạo điều hành lâm nghiệp toàn diện tỉnh Lào Cai.</p>
            </div>
        `;
        this.openModal(`Văn bản pháp luật: ${soKyHieu}`, content);
    },

    showOrgDetail(type, name) {
        let content = '';
        if (type === 'phong') {
            const p = CCKL_DATA.toChucMoi.phongChucNang.find(x => x.ten === name);
            if (p) {
                content = `
                    <p><b>Tên phòng:</b> ${p.ten}</p>
                    <p><b>Biên chế:</b> ${p.bienChe} công chức</p>
                    <p><b>Lãnh đạo & phân công:</b> ${p.lanhDao}</p>
                    <p><b>Chức năng nhiệm vụ:</b> ${p.nhiemVu}</p>
                `;
            }
        } else if (type === 'doi') {
            const d = CCKL_DATA.toChucMoi.doiKiemLamCoDong.find(x => x.ten === name);
            if (d) {
                content = `
                    <p><b>Đơn vị:</b> ${d.ten}</p>
                    <p><b>Biên chế:</b> ${d.bienChe} đồng chí</p>
                    <p><b>Lãnh đạo:</b> ${d.lanhDao}</p>
                    <p><b>Phạm vi phụ trách:</b> ${d.phuTrach}</p>
                `;
            }
        } else {
            const b = CCKL_DATA.toChucMoi.cacBanQuanLyKhuBaoTon.find(x => x.ten === name);
            if (b) {
                content = `
                    <p><b>Tên Khu bảo tồn:</b> ${b.ten}</p>
                    <p><b>Địa bàn:</b> ${b.viTri}</p>
                    <p><b>Diện tích:</b> ${b.dienTich}</p>
                    <p><b>Bộ máy quản lý:</b> ${b.loaiHinh}</p>
                `;
            }
        }
        this.openModal(`Cơ cấu tổ chức: ${name}`, content);
    },

    downloadDoc(fileName) {
        const text = `CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\nĐộc lập - Tự do - Hạnh phúc\n\nCHI CỤC KIỂM LÂM TỈNH LÀO CAI\nTài liệu: ${fileName}\n(Số liệu đồng bộ từ Quyết định số 537/QĐ-UBND ngày 27/02/2026 của UBND tỉnh Lào Cai)`;
        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    },

    exportDataToCSV() {
        let csv = '\uFEFF';
        csv += 'STT,Tên xã phường,Khu vực,Tổng diện tích tự nhiên (ha),Diện tích có rừng (ha),Rừng tự nhiên (ha),Rừng trồng đã thành rừng (ha),Tỷ lệ che phủ (%)\n';
        CCKL_DATA.danhSach99XaPhuong.forEach(x => {
            csv += `"${x.stt}","${x.ten}","${x.khuVuc}","${x.tongDT}","${x.dtRung}","${x.tuNhien}","${x.thanhRung}","${x.chePhu}"\n`;
        });
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'Bieu_03_Hien_Trang_99_Xa_Lao_Cai_2025.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    },

    /* =========================================================================
       ĐIỀU KHIỂN BẢN ĐỒ HIỆN TRẠNG & TƯƠNG TÁC
       ========================================================================= */
    mapZoomLevel: 1.0,

    zoomMap(factor) {
        const img = document.getElementById('mainMapImg');
        if (!img) return;
        this.mapZoomLevel = Math.max(0.6, Math.min(3.5, this.mapZoomLevel * factor));
        img.style.transform = `scale(${this.mapZoomLevel})`;
    },

    resetMapZoom() {
        const img = document.getElementById('mainMapImg');
        if (!img) return;
        this.mapZoomLevel = 1.0;
        img.style.transform = 'scale(1.0)';
    },

    openMapModal() {
        const modalHtml = `
            <div style="text-align:center; padding:5px;">
                <div style="max-height:70vh; overflow:auto; border-radius:8px; border:1px solid #cbd5e1; background:#f8fafc;">
                    <img src="images/ban_do_hien_trang.png" style="width:100%; height:auto; display:block;" alt="Bản đồ Hiện trạng Lâm nghiệp Lào Cai" />
                </div>
                <div style="margin-top:14px; text-align:left; background:#f1f5f9; padding:14px; border-radius:6px; font-size:0.86rem; color:#1e293b; line-height:1.6;">
                    <div style="font-weight:700; font-size:0.95rem; color:#0f766e; margin-bottom:6px;">🗺️ BẢN ĐỒ HIỆN TRẠNG RỪNG TỈNH LÀO CAI</div>
                    <p>• <b>Cơ sở số liệu:</b> Quyết định số 537/QĐ-UBND ngày 27/02/2026 của Ủy ban nhân dân tỉnh Lào Cai; kết xuất từ 681.445 lô rừng (DBR_2025.shp).</p>
                    <p>• <b>Quy mô tự nhiên:</b> Tổng diện tích <b>1.325.675,0 ha</b>; Tổng diện tích đất có rừng <b>860.494,3 ha</b> (gồm 466.715,6 ha rừng tự nhiên và 393.778,7 ha rừng trồng).</p>
                    <p>• <b>Độ che phủ rừng:</b> Đạt <b>61,50%</b> trên toàn bộ 99 xã, phường.</p>
                    <p>• <b>Hệ thống chú giải:</b> Ranh giới xã, phường và ranh giới tỉnh; các khu rừng đặc dụng, rừng phòng hộ, rừng sản xuất và trục thủy văn Sông Hồng, Hồ Thác Bà.</p>
                </div>
            </div>
        `;
        this.openModal('Bản đồ hiện trạng rừng tỉnh Lào Cai năm 2025 (QĐ 537/QĐ-UBND)', modalHtml);
    },

    showMapMode(mode) {
        const btnImg = document.getElementById('btn-map-image');
        const btnHat = document.getElementById('btn-map-hat');
        const btnCover = document.getElementById('btn-map-cover');
        const btnFire = document.getElementById('btn-map-fire');
        const viewImg = document.getElementById('image-map-view');
        const viewVec = document.getElementById('vector-map-view');

        if (btnImg) btnImg.classList.remove('active');
        if (btnHat) btnHat.classList.remove('active');
        if (btnCover) btnCover.classList.remove('active');
        if (btnFire) btnFire.classList.remove('active');

        if (mode === 'image') {
            if (btnImg) btnImg.classList.add('active');
            if (viewImg) viewImg.style.display = 'flex';
            if (viewVec) viewVec.style.display = 'none';
        } else {
            if (mode === 'hat' && btnHat) btnHat.classList.add('active');
            if (mode === 'status' && btnCover) btnCover.classList.add('active');
            if (mode === 'fire' && btnFire) btnFire.classList.add('active');
            if (viewImg) viewImg.style.display = 'none';
            if (viewVec) viewVec.style.display = 'flex';
            ForestCharts.renderLaoCaiMap('overview-map-container', mode);
        }
    }
};

window.App = App;
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
