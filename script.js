/**
 * TIỆM QUẺ VỈA HÈ - FULL LOGIC 2026
 * Phát triển bởi: Trần Bảo Nam
 */

const MAX_FREE_GIEOS = 2; // Giới hạn 2 lần gieo miễn phí mỗi ngày

// Dữ liệu 100 quẻ chia làm 2 nhóm năng lượng (Cát Tường & Bình An)
const dataFortune = {
    "NHOM_CAT_TUONG": [
        { ten: "ĐẠI CÁT", loi: "Vận may bùng nổ! Những dự định bấy lâu nay của bạn sẽ thành công rực rỡ ngoài mong đợi." },
        { ten: "TRUNG CÁT", loi: "Mọi việc hanh thông. Có quý nhân âm thầm giúp đỡ bạn vượt qua khó khăn hiện tại." },
        { ten: "TIỂU CÁT", loi: "Có lộc ăn uống hoặc quà tặng bất ngờ trong ngày hôm nay. Hãy vui vẻ đón nhận nhé." },
        { ten: "HỮU LỘC", loi: "Tiền bạc bắt đầu đổ về túi. Hãy quản lý chi tiêu tốt để tài lộc bền vững." },
        { ten: "KHỞI SẮC", loi: "Công việc có bước tiến mới. Sự kiên trì của bạn đã bắt đầu hái được quả ngọt." },
        { ten: "PHÁT TÀI", loi: "Vận tài lộc đang cực thịnh. Những khoản đầu tư cũ bắt đầu đem về lợi nhuận lớn." },
        { ten: "QUÝ NHÂN", loi: "Có người lớn tuổi hoặc cấp trên đang dõi theo và sẵn sàng nâng đỡ bạn." },
        { ten: "BẤT NGỜ", loi: "Một tin vui về giấy tờ hoặc tiền bạc sẽ đến với bạn vào cuối ngày hôm nay." },
        { ten: "MAY MẮN", loi: "Vận may nhỏ nhưng liên tục. Bạn sẽ thấy mọi việc suôn sẻ một cách lạ thường." },
        { ten: "THÀNH QUẢ", loi: "Gieo nhân nào gặt quả nấy. Những việc tử tế bạn làm đang mang lộc về cho bạn." },
        { ten: "VƯỢT TRỘI", loi: "Bạn sẽ vượt qua đối thủ hoặc thử thách một cách đầy thuyết phục." },
        { ten: "THỊNH VƯỢNG", loi: "Sự sung túc đang hiện hữu xung quanh bạn. Hãy trân trọng những gì mình có." },
        { ten: "HOÀN MỸ", loi: "Mọi mảnh ghép đang rơi đúng vị trí của nó. Một kết thúc đẹp cho dự án hiện tại." },
        { ten: "ĐẮC LỢI", loi: "Cầu tài được tài, cầu lộc được lộc. Một ngày bội thu đang chờ đón bạn." },
        { ten: "QUANG MINH", loi: "Con đường phía trước sáng lạng, mọi mịt mờ đều tan biến hoàn toàn." },
        { ten: "TIẾN BỘ", loi: "Kỹ năng của bạn được công nhận, cơ hội thăng tiến đang ở rất gần." },
        { ten: "NHƯ Ý", loi: "Vạn sự như ý, những mong cầu thầm kín bấy lâu nay bắt đầu hiện thực hóa." },
        { ten: "PHÚ QUÝ", loi: "Tài vận hanh thông, danh tiếng vang xa, được nhiều người kính nể." },
        { ten: "THUẬN LỢI", loi: "Đi đâu cũng có người giúp, làm gì cũng gặp may, vạn sự thuận buồm xuôi gió." },
        { ten: "KHAI THÔNG", loi: "Mọi bế tắc đều được giải quyết nhanh gọn nhờ sự sáng suốt của bạn." }
        // (Và 30 câu năng lượng tích cực khác để đủ 50 câu nhóm này...)
    ],
    "NHOM_BINH_AN": [
        { ten: "BÌNH AN", loi: "Không có biến động lớn. Đây là lúc thích hợp để nghỉ ngơi và sạc lại năng lượng." },
        { ten: "NHÂN DUYÊN", loi: "Một mối quan hệ tốt đẹp sắp bắt đầu. Người bạn mong chờ bấy lâu sẽ xuất hiện." },
        { ten: "SÁNG TẠO", loi: "Ý tưởng của bạn hôm nay rất giá trị. Đừng ngần ngại thực hiện nó ngay." },
        { ten: "CẨN TRỌNG", loi: "Hôm nay nên nói ít làm nhiều, tránh xa những cuộc tranh cãi vô bổ trên mạng." },
        { ten: "THONG DONG", loi: "Đừng vội vàng, chuyện gì đến sẽ đến. Mọi thứ đang diễn ra đúng trình tự của nó." },
        { ten: "NIỀM TIN", loi: "Hãy tin vào trực giác của mình. Trái tim đang chỉ cho bạn con đường đúng đắn nhất." },
        { ten: "MỞ LÒNG", loi: "Hãy bao dung hơn với những lỗi lầm cũ. Một khởi đầu mới đang chờ đợi bạn." },
        { ten: "QUYẾT ĐOÁN", loi: "Đây là thời điểm để đưa ra lựa chọn quan trọng. Đừng chần chừ thêm nữa." },
        { ten: "ẤM ÁP", loi: "Bạn sẽ nhận được sự quan tâm chân thành từ một người mà bạn không ngờ tới." },
        { ten: "VỮNG VÀNG", loi: "Dù khó khăn nhưng bạn vẫn đang đi đúng hướng. Thành công chỉ còn cách một chút nữa." },
        { ten: "HY VỌNG", loi: "Một cánh cửa này đóng lại, một cánh cửa khác sáng sủa hơn sẽ mở ra với bạn." },
        { ten: "TÍCH CỰC", loi: "Năng lượng tốt của bạn sẽ thu hút những người bạn tuyệt vời trong hôm nay." },
        { ten: "KẾT NỐI", loi: "Hãy liên lạc với gia đình hoặc bạn cũ, bạn sẽ tìm thấy niềm vui và lời khuyên quý giá." },
        { ten: "MÃN NGUYỆN", loi: "Mọi nỗ lực của bạn đã được đền đáp. Hãy tận hưởng thành quả của mình một cách xứng đáng." },
        { ten: "LẮNG NGHE", loi: "Hãy dành thời gian lắng nghe bản thân nhiều hơn thay vì chạy theo đám đông." },
        { ten: "TRÍ TUỆ", loi: "Khả năng phân tích của bạn đang rất sắc bén. Hãy dùng nó để giải quyết việc khó." },
        { ten: "VUI VẺ", loi: "Nụ cười của bạn là liều thuốc cho mọi rắc rối. Hãy giữ tinh thần lạc quan nhé." },
        { ten: "TRẦM TĨNH", loi: "Trong cái khó ló cái khôn. Chỉ cần giữ bình tĩnh, bạn sẽ thấy lối thoát." },
        { ten: "CHIÊM NGHIỆM", loi: "Hãy dành một chút thời gian yên tĩnh để nhìn lại những gì mình đã làm được." },
        { ten: "THOẢI MÁI", loi: "Áp lực đã qua đi. Bây giờ là lúc tận hưởng thành quả lao động của mình." }
        // (Và 30 câu năng lượng ổn định khác để đủ 50 câu nhóm này...)
    ]
};

// Thuật toán khóa nhóm năng lượng theo ngày và theo người dùng
function getDailyEnergyGroup() {
    const today = new Date().toISOString().slice(0, 10);
    const userAgent = navigator.userAgent;
    const seed = today + userAgent;
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = ((hash << 5) - hash) + seed.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash) % 2 === 0 ? "NHOM_CAT_TUONG" : "NHOM_BINH_AN";
}

// Hàm xử lý khi bấm Gieo Quẻ
function gieoQue() {
    const hu = document.getElementById('img-hu');
    const mainScreen = document.getElementById('main-screen');
    const resultScreen = document.getElementById('result-screen');
    const sndShake = document.getElementById('sound-shake');
    const sndResult = document.getElementById('sound-result');

    if (!hu || !mainScreen || !resultScreen) return;

    // Kiểm tra lượt gieo
    let gieoCount = parseInt(localStorage.getItem('gieo_count')) || 0;
    let lastGieoDate = localStorage.getItem('last_gieo_date');
    const today = new Date().toISOString().slice(0, 10);

    if (lastGieoDate !== today) {
        gieoCount = 0;
        localStorage.setItem('last_gieo_date', today);
    }

    if (gieoCount >= MAX_FREE_GIEOS) {
        const xacNhan = confirm("Bạn đã gieo 2 lần rồi. Xem 3s quảng cáo để nhận thêm lượt nhé?");
        if (xacNhan) {
            alert("Đang tải quảng cáo... (Chờ 3 giây)");
            setTimeout(() => {
                alert("Bạn đã nhận được thêm 1 lượt!");
                thucHienGieo(hu, mainScreen, resultScreen, sndShake, sndResult, gieoCount);
            }, 3000);
        }
        return;
    }

    thucHienGieo(hu, mainScreen, resultScreen, sndShake, sndResult, gieoCount);
}

function thucHienGieo(hu, mainScreen, resultScreen, sndShake, sndResult, currentCount) {
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
    }, 2000);
}

function restyle() {
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');
}
