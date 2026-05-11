const danhSachQue = [
    { ten: "ĐẠI CÁT", loi: "Vận may bùng nổ! Những dự định bấy lâu nay của bạn sẽ thành công rực rỡ ngoài mong đợi." },
    { ten: "TRUNG CÁT", loi: "Mọi việc hanh thông. Có quý nhân âm thầm giúp đỡ bạn vượt qua khó khăn hiện tại." },
    { ten: "TIỂU CÁT", loi: "Có lộc ăn uống hoặc quà tặng bất ngờ trong ngày hôm nay. Hãy vui vẻ đón nhận nhé." },
    { ten: "BÌNH AN", loi: "Không có biến động lớn. Đây là lúc thích hợp để nghỉ ngơi và sạc lại năng lượng." },
    { ten: "HỮU LỘC", loi: "Tiền bạc bắt đầu đổ về túi. Hãy quản lý chi tiêu tốt để tài lộc bền vững." },
    { ten: "NHÂN DUYÊN", loi: "Một mối quan hệ tốt đẹp sắp bắt đầu. Người bạn mong chờ bấy lâu sẽ xuất hiện." },
    { ten: "SÁNG TẠO", loi: "Ý tưởng của bạn hôm nay rất giá trị. Đừng ngần ngại thực hiện nó ngay." },
    { ten: "CẨN TRỌNG", loi: "Hôm nay nên nói ít làm nhiều, tránh xa những cuộc tranh cãi vô bổ trên mạng." },
    { ten: "KHỞI SẮC", loi: "Công việc có bước tiến mới. Sự kiên trì của bạn đã bắt đầu hái được quả ngọt." },
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
    { ten: "PHÁT TÀI", loi: "Vận tài lộc đang cực thịnh. Những khoản đầu tư cũ bắt đầu đem về lợi nhuận lớn." },
    { ten: "QUÝ NHÂN", loi: "Có người lớn tuổi hoặc cấp trên đang dõi theo và sẵn sàng nâng đỡ bạn." },
    { ten: "BẤT NGỜ", loi: "Một tin vui về giấy tờ hoặc tiền bạc sẽ đến với bạn vào cuối ngày hôm nay." },
    { ten: "TRÍ TUỆ", loi: "Khả năng phân tích của bạn đang rất sắc bén. Hãy dùng nó để giải quyết việc khó." },
    { ten: "VUI VẺ", loi: "Nụ cười của bạn là liều thuốc cho mọi rắc rối. Hãy giữ tinh thần lạc quan nhé." },
    { ten: "TRẦM TĨNH", loi: "Trong cái khó ló cái khôn. Chỉ cần giữ bình tĩnh, bạn sẽ thấy lối thoát." },
    { ten: "MAY MẮN", loi: "Vận may nhỏ nhưng liên tục. Bạn sẽ thấy mọi việc suôn sẻ một cách lạ thường." },
    { ten: "CHIÊM NGHIỆM", loi: "Hãy dành một chút thời gian yên tĩnh để nhìn lại những gì mình đã làm được." },
    { ten: "THOẢI MÁI", loi: "Áp lực đã qua đi. Bây giờ là lúc tận hưởng thành quả lao động của mình." },
    { ten: "DUYÊN LÀNH", loi: "Người bạn đang nghĩ đến cũng đang nhớ về bạn. Một cuộc gặp gỡ đầy thú vị." },
    { ten: "SỨC KHỎE", loi: "Cơ thể bạn đang cần được quan tâm. Hãy ăn uống đủ chất và ngủ sớm hơn." },
    { ten: "HÒA GIẢI", loi: "Mọi mâu thuẫn sẽ được hóa giải nếu bạn là người chủ động mở lời trước." },
    { ten: "CHUYỂN BIẾN", loi: "Có sự thay đổi tích cực trong môi trường làm việc hoặc nơi ở của bạn." },
    { ten: "TỰ TIN", loi: "Đừng đánh giá thấp bản thân. Bạn giỏi hơn những gì bạn đang nghĩ đấy." },
    { ten: "CÔNG DANH", loi: "Tiếng tăm của bạn đang lan xa. Những gì bạn làm đang được mọi người ghi nhận." },
    { ten: "BÌNH YÊN", loi: "Một ngày trôi qua nhẹ nhàng. Tâm hồn thư thái là tài sản quý giá nhất lúc này." },
    { ten: "THÀNH QUẢ", loi: "Gieo nhân nào gặt quả nấy. Những việc tử tế bạn làm đang mang lộc về cho bạn." },
    { ten: "VƯỢT TRỘI", loi: "Bạn sẽ vượt qua đối thủ hoặc thử thách một cách đầy thuyết phục." },
    { ten: "BỀN BỈ", loi: "Thành công không đến ngay lập tức nhưng nó chắc chắn sẽ đến với người kiên trì." },
    { ten: "THỊNH VƯỢNG", loi: "Sự sung túc đang hiện hữu xung quanh bạn. Hãy trân trọng những gì mình có." },
    { ten: "CHÂN THÀNH", loi: "Sự thật thà sẽ bảo vệ bạn khỏi những rắc rối không đáng có hôm nay." },
    { ten: "ĐỔI MỚI", loi: "Thử một con đường mới, một cách làm mới sẽ mang lại kết quả kinh ngạc." },
    { ten: "HÀI LÒNG", loi: "Bạn đang sở hữu điều mà nhiều người khác mong ước. Hãy mỉm cười và tận hưởng." },
    { ten: "SÔI NỔI", loi: "Một buổi gặp gỡ bạn bè sẽ tiếp thêm cho bạn rất nhiều cảm hứng sáng tạo." },
    { ten: "TỰ DO", loi: "Bạn đã thoát khỏi những gông xiềng tinh thần. Hãy làm điều bạn thực sự yêu thích." },
    { ten: "ẤN TƯỢNG", loi: "Bạn sẽ để lại dấu ấn rất tốt đẹp trong một sự kiện hoặc cuộc họp hôm nay." },
    { ten: "TRONG TRẺO", loi: "Mọi lo âu tan biến. Tâm trí bạn đang đạt được trạng thái cân bằng tuyệt đối." },
    { ten: "KỊP THỜI", loi: "Một sự giúp đỡ xuất hiện đúng lúc bạn cần nhất. Thật là một điều kỳ diệu." },
    { ten: "THUẬN LỢI", loi: "Dù đi đâu làm gì, bạn cũng nhận được sự ủng hộ nhiệt tình từ mọi người." },
    { ten: "HOÀN MỸ", loi: "Mọi mảnh ghép đang rơi đúng vị trí của nó. Một kết thúc đẹp cho dự án hiện tại." }
];

function gieoQue() {
    const hu = document.getElementById('img-hu');
    const sndShake = document.getElementById('sound-shake');
    const sndResult = document.getElementById('sound-result');
    const mainScreen = document.getElementById('main-screen');
    const resultScreen = document.getElementById('result-screen');

    // 1. Kiểm tra ID để tránh lỗi đứng code
    if (!hu || !mainScreen || !resultScreen) return;

    // 2. Hiệu ứng rung
    hu.classList.add('shake');

    // 3. Âm thanh an toàn (Không có file vẫn chạy tiếp)
    if (sndShake) {
        sndShake.play().catch(() => console.log("Không tìm thấy nhạc xóc"));
    }

    // 4. Đợi 2 giây cho đúng thủ tục
    setTimeout(() => {
        hu.classList.remove('shake');
        if (sndShake) {
            sndShake.pause();
            sndShake.currentTime = 0;
        }
        if (sndResult) {
            sndResult.play().catch(() => console.log("Không tìm thấy nhạc kết quả"));
        }

        // 5. Chuyển màn hình
        mainScreen.classList.add('hidden');
        
        // 6. Lấy quẻ ngẫu nhiên
        const ngauNhien = danhSachQue[Math.floor(Math.random() * danhSachQue.length)];
        document.getElementById('ten-que').innerText = ngauNhien.ten;
        document.getElementById('loi-giai').innerText = ngauNhien.loi;
        
        resultScreen.classList.remove('hidden');
    }, 2000);
}

function restyle() {
    location.reload();
}
