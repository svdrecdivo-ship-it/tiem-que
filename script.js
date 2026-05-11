// 1. Danh sách 50 câu quẻ "Barnum" - Ai đọc cũng thấy mình trong đó
const danhSachQue = [
    { ten: "ĐẠI CÁT", loi: "Vận may đang đến rất gần, những nỗ lực thầm lặng của bạn bấy lâu nay sắp được đền đáp xứng đáng." },
    { ten: "TIỂU CÁT", loi: "Một mối quan hệ cũ sẽ mang lại tin vui bất ngờ. Hãy mở lòng đón nhận những cơ hội mới." },
    { ten: "BÌNH AN", loi: "Sóng yên biển lặng. Đây là thời điểm tốt để bạn nghỉ ngơi và nhìn lại chặng đường đã qua." },
    { ten: "TRUNG CÁT", loi: "Công việc có tiến triển tốt. Một chút kiên trì nữa thôi, thành quả sẽ khiến bạn mỉm cười." },
    { ten: "HẠ HẠ", loi: "Cẩn thận trong lời ăn tiếng nói hôm nay. Đừng để những phút nóng giận làm hỏng việc lớn." },
    { ten: "THÁI BÌNH", loi: "Mọi sự hanh thông, không có gì phải lo lắng. Hãy tận hưởng một ngày trọn vẹn bên người thân." },
    { ten: "HỮU LỘC", loi: "Tiền bạc đang tìm đường đến cửa. Có thể là một khoản thưởng hoặc một món quà nhỏ từ ai đó." },
    { ten: "NHÂN DUYÊN", loi: "Có người đang thầm quan tâm đến bạn. Hãy để ý những hành động nhỏ xung quanh mình." },
    { ten: "CẢNH BÁO", loi: "Đừng vội vàng đưa ra quyết định quan trọng về tài chính vào lúc này. Hãy chờ thêm một vài ngày." },
    { ten: "KHỞI SẮC", loi: "Năng lượng của bạn đang rất tốt. Đây là lúc để bắt đầu một thói quen mới hoặc dự án mới." },
    { ten: "VÔ TRỊ", loi: "Hôm nay không có gì đặc biệt xảy ra, và đó chính là sự bình yên quý giá nhất." },
    { ten: "QUÝ NHÂN", loi: "Bạn sắp gặp được một người có thể giúp đỡ bạn vượt qua khó khăn hiện tại trong công việc." },
    { ten: "THẤT THOÁT", loi: "Cẩn thận với đồ dùng cá nhân, đặc biệt là ví tiền và điện thoại ở nơi công cộng." },
    { ten: "HY VỌNG", loi: "Điều bạn đang mong chờ bấy lâu nay sắp có tín hiệu phản hồi tích cực." },
    { ten: "THỊ PHI", loi: "Tránh xa các cuộc tranh luận không cần thiết. Im lặng là vàng trong ngày hôm nay." },
    { ten: "LỘC ĂN", loi: "Hôm nay bạn có vận may về ăn uống. Chuẩn bị tinh thần được mời đi tiệc nhé." },
    { ten: "CẢI THIỆN", loi: "Sức khỏe của bạn cần được chú ý hơn. Hãy uống đủ nước và ngủ đủ giấc." },
    { ten: "MAY MẮN", loi: "Những sự trùng hợp ngẫu nhiên trong ngày hôm nay sẽ mang lại cho bạn niềm vui bất ngờ." },
    { ten: "THỬ THÁCH", loi: "Một chút khó khăn đầu ngày sẽ giúp bạn rèn luyện sự kiên nhẫn. Cuối ngày mọi chuyện sẽ ổn." },
    { ten: "VIÊN MÃN", loi: "Một kế hoạch bạn đã chuẩn bị kỹ lưỡng sẽ đạt được kết quả như ý muốn." },
    { ten: "CHUYỂN BIẾN", loi: "Một sự thay đổi nhỏ trong cách nghĩ sẽ giúp bạn thoát khỏi bế tắc hiện tại." },
    { ten: "TÍCH CỰC", loi: "Nụ cười của bạn hôm nay chính là chìa khóa để giải quyết mọi rắc rối." },
    { ten: "CẨN TRỌNG", loi: "Kiểm tra kỹ các con số và văn bản trước khi gửi đi kẻo sai sót nhỏ gây phiền phức lớn." },
    { ten: "KẾT NỐI", loi: "Một cuộc gọi hoặc tin nhắn từ người bạn lâu năm sẽ mang lại cảm hứng mới." },
    { ten: "SÁNG TẠO", loi: "Ý tưởng nảy ra trong hôm nay rất đáng giá. Hãy ghi chép lại ngay lập tức." },
    { ten: "THONG DONG", loi: "Đừng ép bản thân quá mức. Mọi chuyện sẽ tự động đâu vào đấy theo thời gian." },
    { ten: "MỞ LÒNG", loi: "Đừng giữ mãi những muộn phiền cũ. Một khởi đầu mới đang chờ đợi bạn phía trước." },
    { ten: "QUYẾT ĐOÁN", loi: "Đây là lúc để bạn nói 'không' với những yêu cầu không hợp lý từ người khác." },
    { ten: "TRẦM TĨNH", loi: "Giữ được sự bình tĩnh trước áp lực sẽ giúp bạn ghi điểm lớn trong mắt mọi người." },
    { ten: "MAY MẮN", loi: "Vận may nhỏ về tiền bạc sẽ giúp tâm trạng của bạn tốt hơn vào cuối ngày." },
    { ten: "CHIÊM NGHIỆM", loi: "Dành một chút thời gian yên tĩnh để hiểu rõ bản thân đang thực sự muốn gì." },
    { ten: "TƯƠI MỚI", loi: "Hãy thử thay đổi phong cách ăn mặc hoặc kiểu tóc, vận thế sẽ khởi sắc hơn." },
    { ten: "CHÂN THÀNH", loi: "Sự thật thà luôn mang lại kết quả tốt nhất, dù ban đầu có vẻ hơi khó khăn." },
    { ten: "KIÊN TRÌ", loi: "Đừng bỏ cuộc khi chỉ còn cách thành công một bước chân ngắn nữa thôi." },
    { ten: "HÀI HÒA", loi: "Mối quan hệ với đồng nghiệp sẽ được cải thiện đáng kể sau một sự cố nhỏ." },
    { ten: "XUẤT HÀNH", loi: "Nếu có kế hoạch đi xa, hãy chuẩn bị kỹ giấy tờ. Chuyến đi sẽ mang lại nhiều bài học." },
    { ten: "NIỀM TIN", loi: "Hãy tin vào bản năng của mình, nó đang chỉ dẫn bạn đi đúng hướng đó." },
    { ten: "GIA ĐÌNH", loi: "Một bữa cơm gia đình đầm ấm sẽ giúp bạn xua tan mọi mệt mỏi trong công việc." },
    { ten: "CƠ HỘI", loi: "Một lời mời làm việc hoặc cộng tác bất ngờ sẽ xuất hiện. Đừng từ chối vội." },
    { ten: "TIẾT KIỆM", loi: "Hôm nay nên thắt chặt chi tiêu một chút để chuẩn bị cho một kế hoạch lớn hơn." },
    { ten: "VỮNG VÀNG", loi: "Dù ai nói ngả nói nghiêng, bạn hãy cứ tin vào con đường mình đã chọn." },
    { ten: "ẤM ÁP", loi: "Một cử chỉ tử tế từ người lạ sẽ làm ngày hôm nay của bạn trở nên tươi sáng." },
    { ten: "TẦM NHÌN", loi: "Đừng chỉ nhìn vào cái lợi trước mắt, hãy nghĩ đến mục tiêu dài hạn của bạn." },
    { ten: "KỶ LUẬT", loi: "Hoàn thành những việc nhỏ đúng hạn sẽ tạo tiền đề cho những thành công lớn." },
    { ten: "BẤT NGỜ", loi: "Bạn sẽ tìm thấy một đồ vật đã mất từ lâu ở một nơi không ai ngờ tới." },
    { ten: "LẮNG NGHE", loi: "Hôm nay hãy nói ít lại và lắng nghe nhiều hơn, bạn sẽ học được một bí mật thú vị." },
    { ten: "BUÔNG BỎ", loi: "Thứ gì không thuộc về mình thì đừng cưỡng cầu, để tâm hồn được thanh thản." },
    { ten: "SÔI NỔI", loi: "Một buổi gặp gỡ bạn bè sẽ tiếp thêm năng lượng tích cực cho tuần mới." },
    { ten: "TRÍ TUỆ", loi: "Một cuốn sách hoặc bài báo bạn đọc hôm nay sẽ thay đổi hoàn toàn tư duy của bạn." },
    { ten: "MÃN NGUYỆN", loi: "Mọi việc kết thúc tốt đẹp. Bạn hoàn toàn có thể tự hào về bản thân mình." }
];

// 2. Logic xử lý
function gieoQue() {
    const hu = document.getElementById('img-hu');
    const sndShake = document.getElementById('sound-shake');
    const sndResult = document.getElementById('sound-result');
    
    // Phát âm thanh nếu có
    if (sndShake) sndShake.play();
    
    // Thêm hiệu ứng rung
    hu.classList.add('shake');

    // Đợi 2 giây cho "linh" rồi hiện kết quả
    setTimeout(() => {
        hu.classList.remove('shake');
        if (sndShake) {
            sndShake.pause();
            sndShake.currentTime = 0;
        }
        if (sndResult) sndResult.play();

        // Chuyển màn hình
        document.getElementById('main-screen').classList.add('hidden');
        
        // Lấy ngẫu nhiên một quẻ
        const ngauNhien = danhSachQue[Math.floor(Math.random() * danhSachQue.length)];
        
        document.getElementById('ten-que').innerText = ngauNhien.ten;
        document.getElementById('loi-giai').innerText = ngauNhien.loi;
        document.getElementById('result-screen').classList.remove('hidden');
    }, 2000);
}

function restyle() {
    location.reload(); // Gieo lại bằng cách tải lại trang
}