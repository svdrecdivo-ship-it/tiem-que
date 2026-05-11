/**
 * TIỆM QUẺ VỈA HÈ - PHIÊN BẢN 100 QUẺ NHẤT QUÁN THEO NGÀY
 */

// 1. Kho nội dung chia theo Tầng Năng Lượng
const dataQue = {
    "CÁT_TƯỜNG": {
        titles: ["ĐẠI CÁT", "TRUNG CÁT", "CÁT TƯỜNG", "HỮU LỘC", "THỊNH VƯỢNG"],
        vibes: [
            "Vận thế bùng nổ, mọi dự định đều hanh thông rực rỡ.",
            "Tài lộc gõ cửa, chuẩn bị tinh thần đón nhận tin vui lớn.",
            "Quý nhân phù trợ, khó khăn nào cũng dễ dàng vượt qua.",
            "Hào quang rực rỡ, bạn là tâm điểm của sự may mắn hôm nay.",
            "Cầu tài đắc tài, cầu lộc đắc lộc, vạn sự như ý.",
            "Năng lượng đỉnh cao, làm việc gì cũng đạt kết quả mỹ mãn.",
            "Cơ hội vàng đang tới, hãy quyết đoán nắm bắt ngay nhé.",
            "Tiền bạc rủng rỉnh, vận may kéo dài từ sáng đến đêm.",
            "Mọi nỗ lực bấy lâu nay cuối cùng đã hái được quả ngọt.",
            "Thành công ngoài mong đợi, cuộc sống viên mãn đủ đầy."
        ]
    },
    "BÌNH_AN": {
        titles: ["TIỂU CÁT", "BÌNH AN", "HY VỌNG", "THONG DONG", "AN NHIÊN"],
        vibes: [
            "Tâm an vạn sự an, một ngày trôi qua nhẹ nhàng và ý nghĩa.",
            "Không cần vội vã, mọi thứ đang diễn ra đúng trình tự tốt đẹp.",
            "Có lộc ăn uống nhỏ hoặc quà tặng bất ngờ từ bạn cũ.",
            "Sức khỏe bình an là tài sản lớn nhất của bạn lúc này.",
            "Cứ chân thành, bạn sẽ nhận lại những điều tử tế nhất.",
            "Một ngày thích hợp để chăm sóc bản thân và nhìn lại dự định.",
            "Mối quan hệ bạn bè có chuyển biến tích cực, ấm áp.",
            "Tin vui từ xa tới giúp tinh thần bạn phấn chấn hơn.",
            "Hãy cứ gieo hạt giống tốt, hoa sẽ nở vào lúc bạn không ngờ.",
            "Sự kiên trì thầm lặng của bạn sắp nhận được lời hồi đáp."
        ]
    }
};

// Tự động tạo danh sách 100 quẻ từ kho dữ liệu trên
const danhSachQue = [];
function khoiTao100Que() {
    const keys = Object.keys(dataQue);
    for (let i = 0; i < 100; i++) {
        const groupKey = keys[i % keys.length]; // Luân phiên giữa Cát Tường và Bình An
        const group = dataQue[groupKey];
        danhSachQue.push({
            group: groupKey,
            ten: group.titles[i % group.titles.length],
            loi: group.vibes[i % group.vibes.length] + ` (Số: ${100 + i})`
        });
    }
}
khoiTao100Que();

/**
 * 2. Thuật toán khóa Tầng Năng Lượng theo ngày
 */
function getDailyEnergyGroup() {
    const userAgent = navigator.userAgent;
    const today = new Date().toISOString().slice(0, 10);
    const seed = userAgent + today;
    
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = ((hash << 5) - hash) + seed.charCodeAt(i);
        hash |= 0;
    }
    const keys = Object.keys(dataQue);
    return keys[Math.abs(hash) % keys.length]; // Trả về "CÁT_TƯỜNG" hoặc "BÌNH_AN"
}

/**
 * 3. Logic Gieo Quẻ
 */
function gieoQue() {
    const hu = document.getElementById('img-hu');
    const mainScreen = document.getElementById('main-screen');
    const resultScreen = document.getElementById('result-screen');
    const sndShake = document.getElementById('sound-shake');
    const sndResult = document.getElementById('sound-result');

    if (!hu || !mainScreen || !resultScreen) return;

    hu.classList.add('shake');
    if (sndShake) sndShake.play().catch(() => {});

    setTimeout(() => {
        hu.classList.remove('shake');
        if (sndShake) { sndShake.pause(); sndShake.currentTime = 0; }
        if (sndResult) sndResult.play().catch(() => {});

        mainScreen.classList.add('hidden');
        
        // 1. Xác định hôm nay người này thuộc tầng năng lượng nào
        const dailyGroup = getDailyEnergyGroup();
        
        // 2. Lọc ra danh sách quẻ thuộc tầng đó
        const filteredQue = danhSachQue.filter(q => q.group === dailyGroup);
        
        // 3. Chọn ngẫu nhiên một quẻ TRONG tầng năng lượng đó
        const finalResult = filteredQue[Math.floor(Math.random() * filteredQue.length)];

        document.getElementById('ten-que').innerText = finalResult.ten;
        document.getElementById('loi-giai').innerText = finalResult.loi;
        
        resultScreen.classList.remove('hidden');
    }, 2000);
}

function restyle() {
    const mainScreen = document.getElementById('main-screen');
    const resultScreen = document.getElementById('result-screen');
    if (mainScreen && resultScreen) {
        resultScreen.classList.add('hidden');
        mainScreen.classList.remove('hidden');
    }
}
