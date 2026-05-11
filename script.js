/**
 * TIỆM QUẺ VỈA HÈ - BẢN FIX MƯỢT MÀ
 * Phát triển bởi: Trần Bảo Nam
 */

const MAX_FREE_GIEOS = 2; 
let isShaking = false; 

const dataFortune = {
    "NHOM_CAT_TUONG": [
        { ten: "ĐẠI CÁT", loi: "Vận may bùng nổ! Những dự định bấy lâu nay của bạn sẽ thành công rực rỡ ngoài mong đợi." },
        { ten: "TRUNG CÁT", loi: "Mọi việc hanh thông. Có quý nhân âm thầm giúp đỡ bạn vượt qua khó khăn hiện tại." },
        { ten: "TIỂU CÁT", loi: "Có lộc ăn uống hoặc quà tặng bất ngờ trong ngày hôm nay. Hãy vui vẻ đón nhận nhé." },
        { ten: "HỮU LỘC", loi: "Tiền bạc bắt đầu đổ về túi. Hãy quản lý chi tiêu tốt để tài lộc bền vững." },
        { ten: "KHỞI SẮC", loi: "Công việc có bước tiến mới. Sự kiên trì của bạn đã bắt đầu hái được quả ngọt." }
    ],
    "NHOM_BINH_AN": [
        { ten: "BÌNH AN", loi: "Không có biến động lớn. Đây là lúc thích hợp để nghỉ ngơi và sạc lại năng lượng." },
        { ten: "NHÂN DUYÊN", loi: "Một mối quan hệ tốt đẹp sắp bắt đầu. Người bạn mong chờ bấy lâu sẽ xuất hiện." },
        { ten: "SÁNG TẠO", loi: "Ý tưởng của bạn hôm nay rất giá trị. Đừng ngần ngại thực hiện nó ngay." },
        { ten: "CẨN TRỌNG", loi: "Hôm nay nên nói ít làm nhiều, tránh xa những cuộc tranh cãi vô bổ trên mạng." },
        { ten: "THONG DONG", loi: "Đừng vội vàng, chuyện gì đến sẽ đến. Mọi thứ đang diễn ra đúng trình tự của nó." }
    ]
};

function getDailyEnergyGroup() {
    const today = new Date().toISOString().slice(0, 10);
    const seed = today + "TranBaoNam";
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = ((hash << 5) - hash) + seed.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash) % 2 === 0 ? "NHOM_CAT_TUONG" : "NHOM_BINH_AN";
}

function gieoQue() {
    if (isShaking) return;

    const hu = document.getElementById('img-hu');
    const mainScreen = document.getElementById('main-screen');
    const resultScreen = document.getElementById('result-screen');
    const sndShake = document.getElementById('sound-shake');
    const sndResult = document.getElementById('sound-result');

    let gieoCount = parseInt(localStorage.getItem('gieo_count')) || 0;
    let lastGieoDate = localStorage.getItem('last_gieo_date');
    const today = new Date().toISOString().slice(0, 10);

    if (lastGieoDate !== today) {
        gieoCount = 0;
        localStorage.setItem('last_gieo_date', today);
    }

    // TỐI ƯU CHỖ NÀY: Không hiện alert thông báo tải quảng cáo giả nữa
    if (gieoCount >= MAX_FREE_GIEOS) {
        alert("Duyên hôm nay đã đủ. Bạn có thể ủng hộ 'Tiệm Quẻ' bằng cách xem các quảng cáo tài trợ bên dưới nhé. Hẹn bạn ngày mai quay lại!");
        return;
    }

    thucHienGieo(hu, mainScreen, resultScreen, sndShake, sndResult, gieoCount);
}

function thucHienGieo(hu, mainScreen, resultScreen, sndShake, sndResult, currentCount) {
    isShaking = true;
    hu.classList.add('shake');
    if (sndShake) sndShake.play().catch(() => {});

    setTimeout(() => {
        hu.classList.remove('shake');
        if (sndShake) { sndShake.pause(); sndShake.currentTime = 0; }
        if (sndResult) sndResult.play().catch(() => {});

        mainScreen.classList.add('hidden');
        const groupName = getDailyEnergyGroup();
        const currentGroup = dataFortune[groupName];
        const ngauNhien = currentGroup[Math.floor(Math.random() * currentGroup.length)];
        
        document.getElementById('ten-que').innerText = ngauNhien.ten;
        document.getElementById('loi-giai').innerText = ngauNhien.loi;
        resultScreen.classList.remove('hidden');

        localStorage.setItem('gieo_count', currentCount + 1);
        isShaking = false;
    }, 2000);
}

function restyle() {
    isShaking = false;
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');
}
