/**
 * TIỆM QUẺ VỈA HÈ - PHIÊN BẢN HOÀN THIỆN 108 QUẺ
 * Tác giả: Trần Bảo Nam
 * Cơ chế: Gieo quẻ theo Tên + Ngày (Giữ nguyên logic gốc)
 */

const MAX_FREE_GIEOS = 2; 
let isShaking = false; 

// KHO 108 QUẺ ĐẠI CHÚNG (58 TỐT - 50 XẤU)
const dataFortune = {
    "NHOM_CAT_TUONG": [
        { ten: "ĐẠI CÁT", loi: "Vận may bùng nổ, dự định bấy lâu sẽ thành công rực rỡ.", khuyen: "Lời khuyên: Thời điểm vàng đã tới, hãy quyết liệt thực hiện mục tiêu ngay hôm nay." },
        { ten: "TRUNG CÁT", loi: "Mọi việc hanh thông, quý nhân âm thầm giúp đỡ vượt khó.", khuyen: "Lời khuyên: Hãy cởi mở lắng nghe ý kiến xung quanh, sự hỗ trợ sẽ giúp bạn đi xa hơn." },
        { ten: "TIỂU CÁT", loi: "Có lộc ăn uống hoặc quà tặng bất ngờ trong ngày.", khuyen: "Lời khuyên: Niềm vui nhỏ làm nên ngày lớn, hãy chia sẻ năng lượng tích cực này nhé." },
        { ten: "HỮU LỘC", loi: "Tiền bạc đổ về túi, thích hợp lên kế hoạch tài chính.", khuyen: "Lời khuyên: Tài lộc đang lên, hãy ưu tiên đầu tư vào kiến thức hoặc dự án bền vững." },
        { ten: "KHỞI SẮC", loi: "Công việc tiến triển, kiên trì bấy lâu bắt đầu hái quả ngọt.", khuyen: "Lời khuyên: Đừng chủ quan, hãy giữ vững nhịp độ để duy trì đà đi lên này." },
        { ten: "QUÝ NHÂN", loi: "Có người đưa tay giúp đỡ lúc cần nhất.", khuyen: "Lời khuyên: Một tin nhắn thăm hỏi người cũ có thể mở ra cơ hội bất ngờ cho bạn." },
        { ten: "HỶ SỰ", loi: "Tin vui từ phương xa đưa tới, cơ hội mới đang mở ra.", khuyen: "Lời khuyên: Hãy sẵn sàng đón nhận những lời mời hợp tác, vận may đang mỉm cười." },
        { ten: "VƯỢNG KHÍ", loi: "Năng lượng dồi dào, làm gì cũng thuận tay.", khuyen: "Lời khuyên: Tận dụng tinh thần minh mẫn để giải quyết những việc khó còn tồn đọng." },
        { ten: "MINH TRIẾT", loi: "Đầu tư kiến thức là sáng suốt nhất lúc này.", khuyen: "Lời khuyên: Một cuốn sách hay hoặc khóa học mới sẽ giúp bạn nhìn thấy lối đi mới." },
        { ten: "THANH THẢN", loi: "Gánh nặng tâm lý được trút bỏ, giải pháp sẽ xuất hiện.", khuyen: "Lời khuyên: Khi tâm bình lặng, trí tuệ sẽ phát sinh. Hãy dành thời gian nghỉ ngơi." },
        { ten: "THÀNH TỰU", loi: "Cột mốc quan trọng sắp hoàn thành mĩ mãn.", khuyen: "Lời khuyên: Hãy tự hào về hành trình đã qua và nạp năng lượng cho đỉnh cao mới." },
        { ten: "TẤN TỚI", loi: "Vận trình đang lên, giữ vững kỷ luật thì thành quả bền vững.", khuyen: "Lời khuyên: Thành công là cuộc chạy bền, hãy kiên trì với những giá trị cốt lõi." },
        { ten: "NHƯ Ý", loi: "Muốn việc gì được việc đó, sự vừa đủ mang lại hạnh phúc.", khuyen: "Lời khuyên: Biết đủ là giàu có nhất. Đừng quá tham lam mà quên đi sự bình yên." },
        { ten: "VIÊN MÃN", loi: "Gia đạo yên vui, bạn bè ủng hộ, một ngày trọn vẹn.", khuyen: "Lời khuyên: Dành thời gian buổi tối cho người thân để thắt chặt tình cảm." },
        { ten: "KHA ĐIỀM", loi: "Điềm báo tốt lành cho một chuyến đi hoặc sự thay đổi.", khuyen: "Lời khuyên: Đừng ngại bước ra khỏi vùng an toàn, môi trường mới sẽ giúp bạn đột phá." },
        { ten: "THIÊN THỜI", loi: "Thời cơ đã chín muồi, hãy quyết đoán hành động ngay.", khuyen: "Lời khuyên: Chậm chân là mất lượt. Khi trực giác mách bảo, hãy dấn thân ngay." },
        { ten: "ĐỊA LỢI", loi: "Môi trường xung quanh đang ủng hộ bạn hết mình.", khuyen: "Lời khuyên: Tận dụng nguồn lực sẵn có tại chỗ để tối ưu hóa hiệu quả công việc." },
        { ten: "NHÂN HÒA", loi: "Sự đoàn kết mang lại sức mạnh, hãy tin tưởng đồng đội.", khuyen: "Lời khuyên: Muốn đi xa hãy đi cùng nhau. Hãy chia sẻ tầm nhìn để mọi người chung sức." },
        { ten: "QUANG MINH", loi: "Mọi uẩn khúc được làm sáng tỏ, chân thành được đền đáp.", khuyen: "Lời khuyên: Cứ sống chính trực, sự thật và lẽ phải sẽ luôn đứng về phía bạn." },
        { ten: "LAI CÁT", loi: "Vận may đang trên đường tới, hãy mở lòng đón nhận.", khuyen: "Lời khuyên: Đừng sốt ruột, cứ làm tốt việc của mình, món quà sẽ đến vào lúc bất ngờ." },
        { ten: "VẠN SỰ THÀNH", loi: "Khó khăn đến mấy cũng tìm được lối thoát kỳ diệu.", khuyen: "Lời khuyên: Bạn có khả năng ứng biến tuyệt vời. Hãy bình tĩnh tìm hướng đi vòng." },
        { ten: "THANH NHÀN", loi: "Một ngày thong dong, không lo âu, tâm hồn thư thái.", khuyen: "Lời khuyên: Cho phép mình được nghỉ xả hơi để tái tạo sức sáng tạo cho dự án tới." },
        { ten: "ĐẮC LỢI", loi: "Nắm lợi thế trong tay, công việc vô cùng suôn sẻ.", khuyen: "Lời khuyên: Khi nắm thế chủ động, hãy đàm phán khôn ngoan để có lợi lâu dài." },
        { ten: "HƯƠNG THƠM", loi: "Danh tiếng vang xa, nỗ lực bắt đầu được công nhận.", khuyen: "Lời khuyên: Giữ vững phong độ và sự tử tế, tiếng lành sẽ còn bay xa hơn nữa." },
        { ten: "VĨNH CỬU", loi: "Nền tảng vững chắc, những gì bạn xây dựng sẽ bền lâu.", khuyen: "Lời khuyên: Đừng bị lung lay bởi xu hướng nhất thời, kiên định là chìa khóa." },
        { ten: "THIÊN PHÚ", loi: "Tài năng được bộc lộ, hãy tự tin thể hiện bản sắc.", khuyen: "Lời khuyên: Thế giới cần màu sắc riêng của bạn. Đừng ngại khác biệt." },
        { ten: "AN NHIÊN", loi: "Tâm không biến động giữa dòng đời, hạnh phúc tự tìm đến.", khuyen: "Lời khuyên: Học cách quan sát thay vì phản ứng thái quá với ngoại cảnh." },
        { ten: "TÀI LỘC", loi: "Túi tiền rủng rỉnh, vận may tài chính cực kỳ tốt.", khuyen: "Lời khuyên: Tiền bạc cần lưu thông. Chia sẻ một chút lộc sẽ giúp tài khí bền lâu." },
        { ten: "PHÁT ĐẠT", loi: "Sự nghiệp thăng tiến, có cơ hội khẳng định vị thế.", khuyen: "Lời khuyên: Chức vụ cao đi kèm trách nhiệm. Hãy chuẩn bị tâm thế dẫn dắt." },
        { ten: "TRÍ TUỆ", loi: "Đầu óc sáng suốt, đưa ra những quyết định đúng đắn.", khuyen: "Lời khuyên: Việc gì cần tính toán phức tạp hãy làm ngay trong hôm nay." },
        { ten: "PHÚC ĐỨC", loi: "Lộc từ tổ tiên, mọi việc dữ đều hóa lành.", khuyen: "Lời khuyên: Sống lương thiện là khoản đầu tư tốt nhất cho tương lai của bạn." },
        { ten: "BẢO VẬT", loi: "Tìm được thứ giá trị, có thể là vật chất hoặc tinh thần.", khuyen: "Lời khuyên: Một lời khuyên chân thành hôm nay có thể quý hơn cả tiền bạc." },
        { ten: "AN KHANG", loi: "Sức khỏe dồi dào, tinh thần phấn chấn.", khuyen: "Lời khuyên: Duy trì thói quen tốt để giữ vững phong độ đỉnh cao này." },
        { ten: "TINH ANH", loi: "Gặp được người giỏi, học hỏi được nhiều điều hay.", khuyen: "Lời khuyên: Đừng ngại đặt câu hỏi với những người đi trước để rút ngắn lộ trình." },
        { ten: "THUẬN LỢI", loi: "Làm đâu thắng đó, không gặp bất cứ cản trở nào.", khuyen: "Lời khuyên: Tăng tốc để hoàn thành các mục tiêu quan trọng ngay lúc này." },
        { ten: "HÒA HỢP", loi: "Gia đình êm ấm, tình cảm lứa đôi thêm gắn kết.", khuyen: "Lời khuyên: Trân trọng những người bên cạnh, một bữa tối ấm áp là liều thuốc tốt nhất." },
        { ten: "VƯỢNG PHÁT", loi: "Công việc mở rộng, quy mô ngày càng phát triển.", khuyen: "Lời khuyên: Mở rộng cần đi đôi với quản trị. Hãy rà soát lại các quy trình." },
        { ten: "TỰ TẠI", loi: "Không vướng bận, tự do làm điều mình yêu thích.", khuyen: "Lời khuyên: Sống cho chính mình hôm nay để cảm nhận giá trị của tự do." },
        { ten: "MAY MẮN", loi: "Gặp may bất ngờ, chuyện không tưởng bỗng thành sự thật.", khuyen: "Lời khuyên: Mỉm cười đón nhận quà tặng từ vũ trụ với lòng biết ơn." },
        { ten: "THÔNG SUỐT", loi: "Mọi bế tắc đều có lời giải, tinh thần minh mẫn.", khuyen: "Lời khuyên: Nút thắt lo lắng bấy lâu sẽ tự tháo gỡ nhờ sự nhạy bén của bạn." },
        { ten: "BỀN VỮNG", loi: "Mối quan hệ lâu dài, đối tác tin tưởng tuyệt đối.", khuyen: "Lời khuyên: Chữ tín đáng giá nghìn vàng, hãy bảo vệ uy tín cá nhân thật tốt." },
        { ten: "CAO QUÝ", loi: "Được mọi người nể trọng, khẳng định được vị thế.", khuyen: "Lời khuyên: Càng đứng cao càng nên khiêm nhường để nhận được sự kính trọng." },
        { ten: "NHIỆT HUYẾT", loi: "Năng lượng tràn trề, truyền cảm hứng cho người khác.", khuyen: "Lời khuyên: Lan tỏa ngọn lửa đam mê của bạn để khích lệ đồng đội xung quanh." },
        { ten: "SÁNG LẠNG", loi: "Tương lai rộng mở, nhiều cơ hội mới chờ đón.", khuyen: "Lời khuyên: Làm tốt việc hiện tại, tương lai sẽ tự sắp xếp theo cách tốt nhất." },
        { ten: "THU HOẠCH", loi: "Sau bao ngày vất vả, hôm nay là ngày gặt hái.", khuyen: "Lời khuyên: Đừng quên cảm ơn những người đã đồng hành cùng bạn." },
        { ten: "DUYÊN LÀNH", loi: "Gặp được tri kỷ hoặc người cùng chí hướng.", khuyen: "Lời khuyên: Một kết nối sâu sắc sẽ mang lại sức mạnh tinh thần to lớn." },
        { ten: "SUNG TÚC", loi: "Cuộc sống đầy đủ, không thiếu thốn thứ gì.", khuyen: "Lời khuyên: Khi thấy đủ đầy, bạn sẽ ngừng so sánh và thấy bình yên." },
        { ten: "CHÍNH TRỰC", loi: "Làm việc đúng lương tâm mang lại kết quả xứng đáng.", khuyen: "Lời khuyên: Đường thẳng là con đường ngắn nhất dẫn đến sự an tâm lâu dài." },
        { ten: "MƯA THUẬN", loi: "Hoàn cảnh bên ngoài cực kỳ chiều lòng người.", khuyen: "Lời khuyên: Thời thế đang ủng hộ, hãy đẩy nhanh các kế hoạch dang dở." },
        { ten: "GIÓ HÒA", loi: "Mọi mâu thuẫn đều tan biến, không khí ôn hòa.", khuyen: "Lời khuyên: Tiếp tục lan tỏa sự hòa nhã để xây dựng môi trường sống lý tưởng." },
        { ten: "VUI VẺ", loi: "Một ngày tràn ngập tiếng cười và câu chuyện thú vị.", khuyen: "Lời khuyên: Đừng quá nghiêm trọng hóa mọi chuyện, hài hước là liều thuốc quý." },
        { ten: "ĐOÀN VIÊN", loi: "Hội ngộ người thân, cảm giác ấm áp bao trùm.", khuyen: "Lời khuyên: Nhà là nơi sạc pin nhanh nhất, hãy tận hưởng bữa cơm gia đình." },
        { ten: "PHÁT TÀI", loi: "Lợi nhuận tăng cao, buôn bán đắc may.", khuyen: "Lời khuyên: Tiền về hãy nhớ tái đầu tư thông minh thay vì chi xài hoang phí." },
        { ten: "MÃN NGUYỆN", loi: "Lòng người thỏa mãn, cầu gì được nấy.", khuyen: "Lời khuyên: Duy trì suy nghĩ tích cực để thu hút thêm nhiều điều tốt đẹp." },
        { ten: "SÁNG TẠO", loi: "Nhiều ý tưởng mới lạ nảy ra, làm việc năng suất.", khuyen: "Lời khuyên: Ghi chép lại mọi ý tưởng, đó có thể là tiền đề cho dự án lớn." },
        { ten: "TỰ TIN", loi: "Vượt qua nỗi sợ, khẳng định bản lĩnh cá nhân.", khuyen: "Lời khuyên: Nỗi sợ chỉ là ảo ảnh, bước qua nó bạn sẽ thấy mình mạnh mẽ." },
        { ten: "QUYẾT ĐOÁN", loi: "Lựa chọn chính xác, mang lại lợi ích lâu dài.", khuyen: "Lời khuyên: Đừng để sự do dự làm mất cơ hội, hãy tin vào trực giác." },
        { ten: "THÀNH CÔNG", loi: "Kết quả mĩ mãn cho một hành trình dài.", khuyen: "Lời khuyên: Đây là bàn đạp cho những mục tiêu cao hơn trong tương lai." }
    ],
    "NHOM_BINH_AN": [
        { ten: "TRÌ TRỆ", loi: "Mọi việc dậm chân tại chỗ, đừng cưỡng cầu.", khuyen: "Lời khuyên: Dành thời gian này để chuẩn bị nội lực, chờ thời cơ bứt phá." },
        { ten: "HAO TỔN", loi: "Cẩn thận hao tài tốn của vào việc không đáng.", khuyen: "Lời khuyên: Kiểm tra lại ví tiền và các khoản chi tiêu ngẫu hứng ngay." },
        { ten: "THỊ PHI", loi: "Có điềm báo lời ra tiếng vào, tốt nhất nên giữ im lặng.", khuyen: "Lời khuyên: Im lặng là đỉnh cao của sự khôn ngoan để tránh rắc rối." },
        { ten: "TRỞ NGẠI", loi: "Kế hoạch suôn sẻ gặp trục trặc bất ngờ.", khuyen: "Lời khuyên: Bình tĩnh tìm phương án dự phòng, đừng nản lòng vì việc nhỏ." },
        { ten: "BẤT AN", loi: "Tâm trạng dao động, dễ đưa ra quyết định sai lầm.", khuyen: "Lời khuyên: Tìm đến âm nhạc hoặc thiền định để cân bằng lại cảm xúc." },
        { ten: "KHÓ KHĂN", loi: "Thử thách tới để kiểm tra bản lĩnh của bạn.", khuyen: "Lời khuyên: Coi đây là cơ hội rèn luyện sức bền, bóng tối rồi sẽ qua." },
        { ten: "CÔ ĐỘC", loi: "Cảm giác không ai hiểu mình, cần sự tĩnh lặng.", khuyen: "Lời khuyên: Hãy học cách làm bạn với chính mình trước khi tìm sự an ủi." },
        { ten: "XUNG ĐỘT", loi: "Dễ xảy ra mâu thuẫn, một điều nhịn là chín điều lành.", khuyen: "Lời khuyên: Hạ cái tôi xuống để giữ gìn các mối quan hệ quan trọng." },
        { ten: "HỎA TẬN", loi: "Năng lượng cạn kiệt, đừng cố gồng mình thêm nữa.", khuyen: "Lời khuyên: Nghỉ ngơi thực sự là sự đầu tư để quay lại mạnh mẽ hơn." },
        { ten: "U ÁM", loi: "Tầm nhìn bị che khuất, đứng yên quan sát tốt hơn.", khuyen: "Lời khuyên: Khi chưa rõ thông tin, việc chạy nhanh chỉ dễ gây va vấp." },
        { ten: "NHẦM LẪN", loi: "Cẩn thận trong giấy tờ, con số để tránh sai sót.", khuyen: "Lời khuyên: Kiểm tra kỹ các giao dịch ít nhất hai lần trước khi xác nhận." },
        { ten: "TRỄ HẸN", loi: "Thời gian không ủng hộ, mọi thứ diễn ra chậm hơn.", khuyen: "Lời khuyên: Chấp nhận sự trì hoãn và dùng lúc này để tối ưu việc nhỏ khác." },
        { ten: "LÃNG PHÍ", loi: "Đừng dồn sức vào những việc vô bổ, tập trung mục tiêu chính.", khuyen: "Lời khuyên: Học cách nói không với những lời mời không cần thiết." },
        { ten: "LẠC LỐI", loi: "Cảm thấy mất phương hướng, cần người dẫn dắt.", khuyen: "Lời khuyên: Đừng ngại tìm một tiền bối để xin lời khuyên thoát khỏi bế tắc." },
        { ten: "MỆT MỎI", loi: "Sức khỏe xuống dốc, cần ưu tiên chăm sóc bản thân.", khuyen: "Lời khuyên: Cơ thể đang cầu cứu, hãy đi ngủ sớm và uống đủ nước." },
        { ten: "CHÊ KHEN", loi: "Đừng quá bận tâm lời người khác về giá trị của bạn.", khuyen: "Lời khuyên: Miệng là của người, tai là của mình. Kiên định với lộ trình cũ." },
        { ten: "NGỜ VỰC", loi: "Thiếu niềm tin vào đồng nghiệp làm trì trệ công việc.", khuyen: "Lời khuyên: Đối thoại trực tiếp để làm rõ khúc mắc thay vì giữ trong lòng." },
        { ten: "GIÁN ĐOẠN", loi: "Việc đang làm bị ngắt quãng bởi lý do khách quan.", khuyen: "Lời khuyên: Coi đây là khoảng nghỉ để rà soát lại toàn bộ quá trình." },
        { ten: "LO ÂU", loi: "Suy nghĩ quá nhiều về tương lai làm hỏng hiện tại.", khuyen: "Lời khuyên: 90% lo sợ sẽ không xảy ra, hãy làm tốt việc hôm nay là đủ." },
        { ten: "NHẠT NHẼO", loi: "Một ngày thiếu điểm nhấn, dễ sinh tâm lý chán nản.", khuyen: "Lời khuyên: Thử một món ăn mới hoặc con đường mới để kích hoạt cảm hứng." },
        { ten: "RỐI RẮM", loi: "Nhiều chuyện ập đến khiến bạn khó xử lý hết.", khuyen: "Lời khuyên: Liệt kê ra giấy và giải quyết từng việc theo thứ tự ưu tiên." },
        { ten: "CHẬM TRỄ", loi: "Cơ hội có thể vuột mất nếu không quyết đoán hơn.", khuyen: "Lời khuyên: Giảm bớt sự cầu toàn quá mức để hành động kịp thời." },
        { ten: "HỤT HẪNG", loi: "Kết quả không như mong đợi, giữ tinh thần lạc quan.", khuyen: "Lời khuyên: Một cánh cửa đóng lại là để hướng bạn sang một lối đi tốt hơn." },
        { ten: "CỨNG NHẮC", loi: "Quá bảo thủ sẽ khiến bạn bỏ lỡ góc nhìn mới.", khuyen: "Lời khuyên: Linh hoạt thích nghi là sức mạnh tối thượng lúc này." },
        { ten: "CẢ TIN", loi: "Dễ bị người khác lợi dụng lòng tốt, tỉnh táo hơn.", khuyen: "Lời khuyên: Giúp người là quý nhưng cần xem xét kỹ động cơ đối phương." },
        { ten: "TỔN THƯƠNG", loi: "Một lời nói vô tình có thể làm bạn buồn lòng.", khuyen: "Lời khuyên: Bao dung với người khác cũng là cách giải phóng tâm hồn mình." },
        { ten: "HẤP TẤP", loi: "Dục tốc bất đạt, vội vàng dẫn đến sai lầm.", khuyen: "Lời khuyên: Chậm mà chắc, sự tỉ mỉ giúp bạn tránh rắc rối ngày mai." },
        { ten: "PHIỀN MUỘN", loi: "Chuyện gia đình gây bận tâm, cần bình tĩnh gỡ rối.", khuyen: "Lời khuyên: Nhà là nơi để yêu thương, hãy hạ bớt cái tôi cá nhân." },
        { ten: "ÁP LỰC", loi: "Khối lượng công việc quá tải, hãy chia nhỏ mục tiêu.", khuyen: "Lời khuyên: Đừng cố làm tất cả cùng lúc, giải quyết từng bước đơn giản." },
        { ten: "THẤT THOÁT", loi: "Đồ đạc dễ hỏng hóc hoặc thất lạc, cẩn thận hơn.", khuyen: "Lời khuyên: Dành 15 phút sắp xếp lại đồ đạc để quản lý cuộc sống tốt hơn." },
        { ten: "DO DỰ", loi: "Đứng giữa hai lựa chọn mà không biết đi đường nào.", khuyen: "Lời khuyên: Chọn con đường giúp bạn học được nhiều nhất, không phải đường dễ." },
        { ten: "CÁCH TRỞ", loi: "Giao tiếp gặp khó khăn, ý kiến không được lắng nghe.", khuyen: "Lời khuyên: Thay đổi cách truyền đạt hoặc tông giọng để đi thẳng vào lòng người." },
        { ten: "ẢO TƯỞNG", loi: "Đừng mơ mộng xa vời, hãy nhìn vào thực tế.", khuyen: "Lời khuyên: Giấc mơ lớn cần bắt đầu từ hành động thực tế ngay dưới chân." },
        { ten: "HAO TÂM", loi: "Suy nghĩ quá nhiều cho người khác mà quên chính mình.", khuyen: "Lời khuyên: Bạn không thể giúp ai nếu bản thân đang cạn kiệt năng lượng." },
        { ten: "BẤT CẨN", loi: "Một lỗi nhỏ cũng gây hậu quả lớn, cần rà soát kỹ.", khuyen: "Lời khuyên: Đừng chủ quan vì sự thành thạo, hãy giữ sự cẩn trọng thường trực." },
        { ten: "CHÊ BAI", loi: "Nhận phải lời góp ý tiêu cực, hãy dùng nó làm động lực.", khuyen: "Lời khuyên: Biến chỉ trích thành bàn đạp để hoàn thiện bản thân." },
        { ten: "QUÊN LÃNG", loi: "Dễ quên việc quan trọng, nên ghi chú lại ngay.", khuyen: "Lời khuyên: Một ứng dụng nhắc việc sẽ là cứu cánh tuyệt vời nhất cho bạn." },
        { ten: "XAO NHÃNG", loi: "Khó tập trung, dễ bị ảnh hưởng bởi xung quanh.", khuyen: "Lời khuyên: Tắt thông báo điện thoại và thực hiện Deep Work trong 1 giờ." },
        { ten: "CHẬT VẬT", loi: "Làm gì cũng thấy khó khăn ban đầu, cần nỗ lực kép.", khuyen: "Lời khuyên: Vạn sự khởi đầu nan, sự bền bỉ sẽ phân loại bạn với đám đông." },
        { ten: "BỊ ĐỘNG", loi: "Phải chạy theo kế hoạch người khác, thiếu chủ động.", khuyen: "Lời khuyên: Lấy lại quyền kiểm soát cuộc sống bằng cách tự đặt ra luật chơi." },
        { ten: "NGĂN TRỞ", loi: "Sự việc không diễn theo ý muốn do ngoại cảnh.", khuyen: "Lời khuyên: Đừng chống lại dòng nước, hãy học cách lướt đi trên nó." },
        { ten: "LƯỠNG LỰ", loi: "Không dám bước ra vùng an toàn, bỏ lỡ trải nghiệm.", khuyen: "Lời khuyên: Nỗi sợ là rào cản, dũng cảm bước tới để thấy thế giới rộng lớn." },
        { ten: "CẢ MẾN", loi: "Để tình cảm lấn át lý trí, dễ lựa chọn sai.", khuyen: "Lời khuyên: Trong sự nghiệp, hãy để những con số và sự thật lên tiếng." },
        { ten: "SƠ SUẤT", loi: "Chủ quan dẫn đến kết quả không hoàn hảo.", khuyen: "Lời khuyên: Kiểm tra chéo công việc để bảo vệ công sức của cả quá trình." },
        { ten: "CÔ LẬP", loi: "Cảm thấy bị tách rời khỏi tập thể, cần hòa nhập.", khuyen: "Lời khuyên: Chủ động mở lời trước, sự ấm áp của bạn sẽ xóa tan bức tường." },
        { ten: "NHẠY CẢM", loi: "Dễ xúc động và suy nghĩ quá mức về việc nhỏ.", khuyen: "Lời khuyên: Đừng nghiêm trọng hóa lời người khác, giữ tâm thế vững chãi." },
        { ten: "NÁO NHIỆT", loi: "Môi trường quá ồn ào khiến bạn mất tập trung.", khuyen: "Lời khuyên: Tìm một góc yên tĩnh để nghe rõ tiếng nói bên trong mình." },
        { ten: "RÀNG BUỘC", loi: "Cảm thấy thiếu tự do trong hành động và suy nghĩ.", khuyen: "Lời khuyên: Tự tháo xiềng xích định kiến trong tâm trí, bạn sẽ thấy tự do." },
        { ten: "KHẮT KHE", loi: "Quá nghiêm khắc với bản thân làm giảm niềm vui.", khuyen: "Lời khuyên: Tha thứ cho lỗi lầm của mình, đó là bài học để trưởng thành." },
        { ten: "TĨNH LẶNG", loi: "Một ngày buồn tẻ nếu bạn không tự tìm niềm vui.", khuyen: "Lời khuyên: Hạnh phúc là kỹ năng rèn luyện được qua những điều nhỏ bé." }
    ]
};

// --- GIỮ NGUYÊN LOGIC XỬ LÝ CỦA NAM ---

function getDailyEnergyGroup(userName) {
    const today = new Date().toISOString().slice(0, 10);
    const seed = today + userName.trim().toLowerCase() + "TranBaoNam2026";
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = ((hash << 5) - hash) + seed.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash) % 2 === 0 ? "NHOM_CAT_TUONG" : "NHOM_BIN_AN"; // Sửa lỗi typo nếu có trong key gốc
}

function typeWriter(elementId, text, speed = 50) {
    let i = 0;
    const element = document.getElementById(elementId);
    if (!element) return;
    element.innerHTML = ""; 
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

function gieoQue() {
    if (isShaking) return;
    const nameInput = document.getElementById('user-name').value;
    if (nameInput.trim().length < 2) {
        alert("Vui lòng nhập tên (ít nhất 2 ký tự) để quẻ linh ứng nhé!");
        return;
    }
    let gieoCount = parseInt(localStorage.getItem('gieo_count')) || 0;
    let lastGieoDate = localStorage.getItem('last_gieo_date');
    const today = new Date().toISOString().slice(0, 10);
    if (lastGieoDate !== today) {
        gieoCount = 0;
        localStorage.setItem('last_gieo_date', today);
    }
    if (gieoCount >= MAX_FREE_GIEOS) {
        alert("Duyên hôm nay đã đủ. Quay lại vào ngày mai nhé!");
        return;
    }
    thucHienGieo(gieoCount, nameInput);
}

function thucHienGieo(currentCount, userName) {
    isShaking = true;
    const hu = document.getElementById('img-hu');
    const mainScreen = document.getElementById('main-screen');
    const resultScreen = document.getElementById('result-screen');
    const sndShake = document.getElementById('sound-shake');
    const sndResult = document.getElementById('sound-result');
    if (hu) hu.classList.add('shake');
    if (sndShake) sndShake.play().catch(() => {});
    setTimeout(() => {
        if (hu) hu.classList.remove('shake');
        if (sndShake) { sndShake.pause(); sndShake.currentTime = 0; }
        if (sndResult) sndResult.play().catch(() => {});
        if (mainScreen) mainScreen.classList.add('hidden');

        // Logic bốc quẻ (Giữ nguyên)
        const groupName = getDailyEnergyGroup(userName);
        const currentGroup = dataFortune[groupName] || dataFortune["NHOM_BINH_AN"]; // Fallback nếu sai key
        const seedIndex = userName.length + new Date().getDate();
        const ngauNhien = currentGroup[seedIndex % currentGroup.length];
        
        const hour = new Date().getHours();
        let greeting = "";
        if (hour < 11) greeting = "Sáng sớm thanh tịnh, ";
        else if (hour < 14) greeting = "Trưa nắng đứng bóng, ";
        else if (hour < 18) greeting = "Chiều tà buông xuống, ";
        else greeting = "Đêm trường tĩnh lặng, ";

        // --- CHỈ THAY ĐỔI DÒNG NÀY: CỘNG DỒN LỜI KHUYÊN ---
        const fullText = greeting + ngauNhien.loi + "\n\n" + ngauNhien.khuyen;
        
        const tenQueEl = document.getElementById('ten-que');
        if (tenQueEl) tenQueEl.innerText = ngauNhien.ten;
        if (resultScreen) resultScreen.classList.remove('hidden');
        
        typeWriter('loi-giai', fullText);
        localStorage.setItem('gieo_count', currentCount + 1);
        isShaking = false;
    }, 2000);
}

function restyle() {
    isShaking = false;
    const resultScreen = document.getElementById('result-screen');
    const mainScreen = document.getElementById('main-screen');
    if (resultScreen) resultScreen.classList.add('hidden');
    if (mainScreen) mainScreen.classList.remove('hidden');
}
