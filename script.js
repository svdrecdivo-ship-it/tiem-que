/**
 * TIỆM QUẺ VỈA HÈ - PHIÊN BẢN ĐẶC BIỆT 2026
 * Tác giả: Trần Bảo Nam
 * Tính năng: Hiệu ứng gõ chữ, Lời chào theo giờ, 30 quẻ bói, Chặn gieo 2 lượt.
 */

const MAX_FREE_GIEOS = 2; 
let isShaking = false; 

// KHO DỮ LIỆU 30 QUẺ BÓI
const dataFortune = {
    "NHOM_CAT_TUONG": [
        { ten: "ĐẠI CÁT", loi: "Vận may bùng nổ! Những dự định bấy lâu nay sẽ thành công rực rỡ ngoài mong đợi." },
        { ten: "TRUNG CÁT", loi: "Mọi việc hanh thông. Có quý nhân âm thầm giúp đỡ bạn vượt qua khó khăn hiện tại." },
        { ten: "TIỂU CÁT", loi: "Có lộc ăn uống hoặc quà tặng bất ngờ. Hãy vui vẻ đón nhận những niềm vui nhỏ bé này." },
        { ten: "HỮU LỘC", loi: "Tiền bạc bắt đầu đổ về túi. Đây là lúc thích hợp để lên kế hoạch tài chính dài hạn." },
        { ten: "KHỞI SẮC", loi: "Công việc có bước tiến mới. Sự kiên trì của bạn đã bắt đầu hái được quả ngọt." },
        { ten: "QUÝ NHÂN", loi: "Sẽ có người đưa tay giúp đỡ lúc bạn cần nhất. Hãy chú ý các mối quan hệ cũ." },
        { ten: "HỶ SỰ", loi: "Tin vui từ phương xa đưa tới. Có thể là một lời mời hoặc một cơ hội hợp tác mới." },
        { ten: "VƯỢNG KHÍ", loi: "Năng lượng dồi dào, làm gì cũng thấy thuận tay. Đừng bỏ lỡ thời điểm vàng này." },
        { ten: "MINH TRIẾT", loi: "Đầu tư vào kiến thức lúc này là sáng suốt nhất. Một ý tưởng cũ sẽ đem lại lợi ích mới." },
        { ten: "THANH THẢN", loi: "Gánh nặng tâm lý được trút bỏ. Bạn sẽ tìm thấy giải pháp cho vấn đề đang đau đầu." },
        { ten: "THÀNH TỰU", loi: "Một cột mốc quan trọng sắp được hoàn thành. Hãy tự thưởng cho bản thân một chút." },
        { ten: "TẤN TỚI", loi: "Vận trình đang lên. Chỉ cần giữ vững nhịp độ, thành quả sẽ bền vững." },
        { ten: "NHƯ Ý", loi: "Muốn việc gì được việc đó, nhưng đừng tham lam. Sự vừa đủ sẽ mang lại hạnh phúc." },
        { ten: "VIÊN MÃN", loi: "Gia đạo yên vui, bạn bè ủng hộ. Một ngày trọn vẹn về mặt cảm xúc." },
        { ten: "KHA ĐIỀM", loi: "Điềm báo tốt lành cho một chuyến đi hoặc một sự thay đổi nơi ở/chỗ làm." }
    ],
    "NHOM_BINH_AN": [
        { ten: "BÌNH AN", loi: "Không có biến động lớn. Đây là lúc thích hợp để nghỉ ngơi và sạc lại năng lượng." },
        { ten: "NHÂN DUYÊN", loi: "Một mối quan hệ tốt đẹp sắp bắt đầu. Người bạn mong chờ bấy lâu sẽ xuất hiện." },
        { ten: "SÁNG TẠO", loi: "Ý tưởng của bạn hôm nay rất giá trị. Đừng ngần ngại thực hiện nó ngay." },
        { ten: "CẨN TRỌNG", loi: "Nên nói ít làm nhiều, tránh xa những cuộc tranh cãi vô bổ. Im lặng là vàng." },
        { ten: "THONG DONG", loi: "Đừng vội vàng, chuyện gì đến sẽ đến. Mọi thứ đang diễn ra đúng trình tự của nó." },
        { ten: "CHIÊM NGHIỆM", loi: "Hãy dành thời gian đọc một cuốn sách hoặc nhìn lại bản thân. Câu trả lời nằm ở bên trong." },
        { ten: "VỮNG VÀNG", loi: "Dù xung quanh có biến động, tâm bạn vẫn tịnh. Sự điềm tĩnh sẽ giúp bạn chiến thắng." },
        { ten: "HÒA HỢP", loi: "Mâu thuẫn cũ được hóa giải. Một lời xin lỗi hoặc tha thứ sẽ làm ngày hôm nay đẹp hơn." },
        { ten: "TÍCH LŨY", loi: "Chưa phải lúc để bung sức. Hãy lẳng lặng chuẩn bị nguồn lực, thời cơ sắp tới rồi." },
        { ten: "TIẾT CHẾ", loi: "Bớt một chút mong cầu sẽ thêm nhiều phần hạnh phúc. Hãy hài lòng với những gì đang có." },
        { ten: "KIÊN ĐỊNH", loi: "Đừng để lời ra tiếng vào làm lay chuyển quyết định của mình. Bạn đang đi đúng hướng." },
        { ten: "TĨNH LẶNG", loi: "Một ngày phù hợp để dọn dẹp không gian sống. Nhà sạch thì tâm mới sáng." },
        { ten: "KIM CHỈ NAM", loi: "Bạn sẽ tìm thấy hướng đi mới cho một dự án đang bế tắc. Hãy tin vào trực giác." },
        { ten: "SỨC BỀN", loi: "Đường dài mới biết ngựa hay. Đừng nản lòng nếu kết quả chưa đến ngay lập tức." },
        { ten: "CHÂN THÀNH", loi: "Sự thật lòng sẽ chạm đến trái tim người khác. Hãy đối xử với mọi người bằng sự tử tế." }
    ]
};

// LOGIC CHỌN NHÓM NĂNG LƯỢNG THEO NGÀY
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

// HÀM GÕ CHỮ (TYPING EFFECT)
function typeWriter(elementId, text, speed = 50) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = ""; // Xóa trắng nội dung cũ
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// HÀM GIEO QUẺ CHÍNH
function gieoQue() {
    if (isShaking) return;

    let gieoCount = parseInt(localStorage.getItem('gieo_count')) || 0;
    let lastGieoDate = localStorage.getItem('last_gieo_date');
    const today = new Date().toISOString().slice(0, 10);

    // Reset lượt gieo nếu sang ngày mới
    if (lastGieoDate !== today) {
        gieoCount = 0;
        localStorage.setItem('last_gieo_date', today);
    }

    // Kiểm tra giới hạn lượt gieo
    if (gieoCount >= MAX_FREE_GIEOS) {
        alert("Duyên hôm nay đã đủ. Hãy ủng hộ 'Tiệm Quẻ' bằng cách xem quảng cáo và quay lại vào ngày mai nhé!");
        return;
    }

    thucHienGieo(gieoCount);
}

// XỬ LÝ HIỆU ỨNG VÀ KẾT QUẢ
function thucHienGieo(currentCount) {
    isShaking = true;
    const hu = document.getElementById('img-hu');
    const mainScreen = document.getElementById('main-screen');
    const resultScreen = document.getElementById('result-screen');
    const sndShake = document.getElementById('sound-shake');
    const sndResult = document.getElementById('sound-result');

    // Bắt đầu rung hũ và phát âm thanh
    hu.classList.add('shake');
    if (sndShake) sndShake.play().catch(() => {});

    setTimeout(() => {
        // Dừng rung
        hu.classList.remove('shake');
        if (sndShake) { sndShake.pause(); sndShake.currentTime = 0; }
        if (sndResult) sndResult.play().catch(() => {});

        // Chuyển màn hình
        mainScreen.classList.add('hidden');
        
        // Lấy quẻ ngẫu nhiên từ nhóm năng lượng trong ngày
        const groupName = getDailyEnergyGroup();
        const currentGroup = dataFortune[groupName];
        const ngauNhien = currentGroup[Math.floor(Math.random() * currentGroup.length)];
        
        // Lấy lời chào theo thời gian thực
        const hour = new Date().getHours();
        let greeting = "";
        if (hour < 11) greeting = "Sáng sớm thanh tịnh, ";
        else if (hour < 14) greeting = "Trưa nắng đứng bóng, ";
        else if (hour < 18) greeting = "Chiều tà buông xuống, ";
        else greeting = "Đêm trường tĩnh lặng, ";

        const fullText = greeting + ngauNhien.loi;

        // Hiển thị kết quả với hiệu ứng gõ chữ
        document.getElementById('ten-que').innerText = ngauNhien.ten;
        resultScreen.classList.remove('hidden');
        typeWriter('loi-giai', fullText, 60);

        // Lưu lượt gieo
        localStorage.setItem('gieo_count', currentCount + 1);
        isShaking = false;
    }, 2000);
}

// QUAY LẠI MÀN HÌNH CHÍNH
function restyle() {
    isShaking = false;
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');
}
