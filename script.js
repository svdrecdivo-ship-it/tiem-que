// KHO DỮ LIỆU 100 QUẺ CHIA LÀM 2 NHÓM NĂNG LƯỢNG
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
        { ten: "KHAI THÔNG", loi: "Mọi bế tắc đều được giải quyết nhanh gọn nhờ sự sáng suốt của bạn." },
        // ... (Tiếp tục 30 câu năng lượng mạnh tương tự)
        { ten: "CÁT KHÁNH", loi: "Niềm vui nhân đôi, chuyện gia đình và sự nghiệp đều có tin mừng." },
        { ten: "HÀO QUANG", loi: "Bạn đang tỏa sáng trong lĩnh vực của mình, hãy tự tin thể hiện bản thân." },
        { ten: "TẤN TỚI", loi: "Làm một hưởng mười, vận may dồi dào khiến ai cũng phải ngưỡng mộ." },
        { ten: "ĐẠI THẮNG", loi: "Dự án quan trọng sẽ về đích thành công rực rỡ, mang lại lợi ích lớn." },
        { ten: "PHÁT ĐẠT", loi: "Kinh doanh thuận lợi, khách hàng tin tưởng, tiền bạc đổ về không ngừng." },
        { ten: "SUNG TÚC", loi: "Cuộc sống ấm no, không phải lo nghĩ về tiền bạc trong thời gian tới." },
        { ten: "UY TÍN", loi: "Lời nói của bạn có trọng lượng, nhận được sự tin cậy tuyệt đối từ đối tác." },
        { ten: "CƠ HỘI", loi: "Một lời mời hợp tác bất ngờ mang lại nguồn thu nhập bền vững." },
        { ten: "VIÊN MÃN", loi: "Tình tiền đều đủ đầy, cảm giác hạnh phúc lan tỏa khắp cả ngày." },
        { ten: "THÀNH DANH", loi: "Tên tuổi của bạn được khẳng định, vị thế trong xã hội được nâng cao." }
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
        { ten: "THOẢI MÁI", loi: "Áp lực đã qua đi. Bây giờ là lúc tận hưởng thành quả lao động của mình." },
        // ... (Tiếp tục 30 câu năng lượng ổn định tương tự)
        { ten: "DUYÊN LÀNH", loi: "Người bạn đang nghĩ đến cũng đang nhớ về bạn. Một cuộc gặp gỡ đầy thú vị." },
        { ten: "SỨC KHỎE", loi: "Cơ thể bạn đang cần được quan tâm. Hãy ăn uống đủ chất và ngủ sớm hơn." },
        { ten: "HÒA GIẢI", loi: "Mọi mâu thuẫn sẽ được hóa giải nếu bạn là người chủ động mở lời trước." },
        { ten: "CHUYỂN BIẾN", loi: "Có sự thay đổi tích cực trong môi trường làm việc hoặc nơi ở của bạn." },
        { ten: "TỰ TIN", loi: "Đừng đánh giá thấp bản thân. Bạn giỏi hơn những gì bạn đang nghĩ đấy." },
        { ten: "CÔNG DANH", loi: "Tiếng tăm của bạn đang lan xa. Những gì bạn làm đang được mọi người ghi nhận." },
        { ten: "BÌNH YÊN", loi: "Một ngày trôi qua nhẹ nhàng. Tâm hồn thư thái là tài sản quý giá nhất lúc này." },
        { ten: "BỀN BỈ", loi: "Thành công không đến ngay lập tức nhưng nó chắc chắn sẽ đến với người kiên trì." },
        { ten: "CHÂN THÀNH", loi: "Sự thật thà sẽ bảo vệ bạn khỏi những rắc rối không đáng có hôm nay." },
        { ten: "ĐỔI MỚI", loi: "Thử một con đường mới, một cách làm mới sẽ mang lại kết quả kinh ngạc." }
    ]
};

// HÀM KHÓA NĂNG LƯỢNG THEO NGÀY (Seed Random)
function getDailyEnergyGroup() {
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const userAgent = navigator.userAgent; // Phân biệt thiết bị
    const seed = today + userAgent;
    
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = ((hash << 5) - hash) + seed.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash) % 2 === 0 ? "NHOM_CAT_TUONG" : "NHOM_BINH_AN";
}

function gieoQue() {
    const hu = document.getElementById('img-hu');
    const sndShake = document.getElementById('sound-shake');
    const sndResult = document.getElementById('sound-result');
    const mainScreen = document.getElementById('main-screen');
    const resultScreen = document.getElementById('result-screen');

    if (!hu || !mainScreen || !resultScreen) return;

    hu.classList.add('shake');
    if (sndShake) {
        sndShake.play().catch(() => console.log("Không tìm thấy nhạc xóc"));
    }

    setTimeout(() => {
        hu.classList.remove('shake');
        if (sndShake) {
            sndShake.pause();
            sndShake.currentTime = 0;
        }
        if (sndResult) {
            sndResult.play().catch(() => console.log("Không tìm thấy nhạc kết quả"));
        }

        mainScreen.classList.add('hidden');
        
        // 1. Xác định hôm nay người này thuộc nhóm nào
        const groupName = getDailyEnergyGroup();
        const currentGroup = dataFortune[groupName];
        
        // 2. Chọn ngẫu nhiên 1 câu TRONG nhóm đó
        const ngauNhien = currentGroup[Math.floor(Math.random() * currentGroup.length)];
        
        document.getElementById('ten-que').innerText = ngauNhien.ten;
        document.getElementById('loi-giai').innerText = ngauNhien.loi;
        
        resultScreen.classList.remove('hidden');
    }, 2000);
}

function restyle() {
    // Thay vì reload trang, chỉ cần hiện lại màn hình chính để gieo tiếp trong nhóm năng lượng đó
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');
}
