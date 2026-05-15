/**
 * TIỆM QUẺ VỈA HÈ - PHIÊN BẢN HOÀN THIỆN 2026
 * Tác giả: Trần Bảo Nam
 * Cơ chế: Gieo quẻ theo Tên + Ngày
 */

const MAX_FREE_GIEOS = 2; 
let isShaking = false; 

// KHO 108 QUẺ BÓI - ĐÃ ĐỜI HÓA & THÊM LỜI KHUYÊN (XUỐNG DÒNG)
const dataFortune = {
    "NHOM_CAT_TUONG": [
        { ten: "ĐẠI CÁT", loi: "Vận may bùng nổ, dự định bấy lâu sẽ thành công rực rỡ, tiền bạc rủng rỉnh.", khuyen: "\nLời khuyên: Thời tới cản không kịp, hãy quyết đoán chốt đơn hoặc thực hiện ngay dự án đang ấp ủ." },
        { ten: "TRUNG CÁT", loi: "Mọi việc hanh thông, quý nhân âm thầm giúp đỡ vượt qua những khúc mắc nhỏ.", khuyen: "\nLời khuyên: Cứ bình tĩnh mà làm, đừng quá phô trương kẻo người khác dòm ngó." },
        { ten: "TIỂU CÁT", loi: "Có lộc ăn uống hoặc quà tặng bất ngờ, tinh thần thoải mái cả ngày.", khuyen: "\nLời khuyên: Niềm vui nhỏ làm nên ngày lớn, hãy tận hưởng bữa ăn ngon cùng bạn bè." },
        { ten: "HỮU LỘC", loi: "Tiền bạc đổ về túi, có thể là khoản thưởng hoặc nợ cũ được trả bất ngờ.", khuyen: "\nLời khuyên: Tài chính dư dả thì nên trích một ít để đầu tư cho bản thân hoặc mua món đồ mình thích." },
        { ten: "KHỞI SẮC", loi: "Công việc tiến triển, kiên trì bấy lâu đã bắt đầu có phản hồi tích cực.", khuyen: "\nLời khuyên: Đừng bỏ cuộc giữa chừng, quả ngọt chỉ dành cho người biết kiên nhẫn đến cùng." },
        { ten: "QUÝ NHÂN", loi: "Có người đưa tay giúp đỡ lúc cần nhất, đặc biệt là một người bạn cũ lâu ngày không gặp.", khuyen: "\nLời khuyên: Hãy chú trọng các mối quan hệ xã giao, đôi khi một lời chào hỏi lại mở ra cơ hội lớn." },
        { ten: "HỶ SỰ", loi: "Tin vui từ phương xa đưa tới, có thể là lời mời hợp tác hoặc tin mừng từ người thân.", khuyen: "\nLời khuyên: Mở lòng đón nhận cái mới, vận may đang mỉm cười với những bước đi táo bạo." },
        { ten: "VƯỢNG KHÍ", loi: "Năng lượng dồi dào, làm gì cũng thấy thuận tay, sức thuyết phục người khác đang rất cao.", khuyen: "\nLời khuyên: Tận dụng lúc tinh thần đang 'lên' để giải quyết những việc khó nhằn nhất." },
        { ten: "MINH TRIẾT", loi: "Đầu tư kiến thức là sáng suốt nhất, trí tuệ giúp bạn nhìn ra cơ hội trong khó khăn.", khuyen: "\nLời khuyên: Dành 30 phút đọc sách hoặc học thêm kỹ năng mới, nó sẽ hái ra tiền sau này." },
        { ten: "THANH THẢN", loi: "Gánh nặng tâm lý được trút bỏ, mọi rắc rối bỗng dưng tìm được hướng giải quyết nhẹ nhàng.", khuyen: "\nLời khuyên: Buông bỏ những gì không đáng, tâm an thì vạn sự mới tự nhiên thành." },
        { ten: "THÀNH TỰU", loi: "Cột mốc quan trọng sắp hoàn thành, sự nỗ lực của bạn đã được cấp trên ghi nhận.", khuyen: "\nLời khuyên: Hãy tự thưởng cho mình một buổi nghỉ ngơi thực sự trước khi bắt đầu hành trình mới." },
        { ten: "TẤN TỚI", loi: "Vận trình đang lên rất mạnh, giữ vững nhịp độ thì thành quả sẽ cực kỳ bền vững.", khuyen: "\nLời khuyên: Đừng để sự lười biếng nhất thời làm chậm bước tiến, cứ duy trì phong độ này nhé." },
        { ten: "NHƯ Ý", loi: "Muốn việc gì được việc đó, hoàn cảnh khách quan đang vô cùng chiều lòng bạn.", khuyen: "\nLời khuyên: Biết đủ là hạnh phúc, hãy trân trọng những gì đang có trong tay." },
        { ten: "VIÊN MÃN", loi: "Gia đạo yên vui, bạn bè ủng hộ hết mình, tình cảm cá nhân có bước tiến triển lớn.", khuyen: "\nLời khuyên: Dành thời gian tối nay cho gia đình, hơi ấm tình thân là liều thuốc bổ nhất." },
        { ten: "KHA ĐIỀM", loi: "Điềm báo tốt lành cho một chuyến đi xa hoặc một sự thay đổi không gian sống tích cực.", khuyen: "\nLời khuyên: Đừng ngại xách ba lô lên và đi, trải nghiệm mới sẽ mang lại cảm hứng sáng tạo." },
        { ten: "THIÊN THỜI", loi: "Thời cơ đã chín muồi, thiên hạ đang cần tài năng của bạn.", khuyen: "\nLời khuyên: Khi cơ hội gõ cửa, hãy mở ra ngay lập tức, đừng do dự kẻo người khác cướp mất." },
        { ten: "ĐỊA LỢI", loi: "Môi trường xung quanh đang ủng hộ bạn hết mình, làm việc gì cũng có chỗ dựa.", khuyen: "\nLời khuyên: Hãy tận dụng tối đa nguồn lực sẵn có để bứt phá trong công việc." },
        { ten: "NHÂN HÒA", loi: "Sự đoàn kết mang lại sức mạnh, tiếng nói của bạn có trọng lượng với đám đông.", khuyen: "\nLời khuyên: Lắng nghe ý kiến đồng đội, 'một cây làm chẳng nên non' đâu bạn ơi." },
        { ten: "QUANG MINH", loi: "Mọi uẩn khúc được làm sáng tỏ, sự chân thành bấy lâu cuối cùng cũng được đền đáp.", khuyen: "\nLời khuyên: Cứ sống thật thà, cây ngay không sợ chết đứng, vinh quang sẽ thuộc về bạn." },
        { ten: "LAI CÁT", loi: "Vận may đang trên đường tới, chỉ là hơi tắc đường một chút thôi.", khuyen: "\nLời khuyên: Chuẩn bị tâm thế sẵn sàng, túi tiền thật rộng để đón tài lộc vào nhà." },
        { ten: "VẠN SỰ THÀNH", loi: "Khó khăn đến mấy cũng tìm được lối thoát kỳ diệu vào phút chót.", khuyen: "\nLời khuyên: Đừng nản chí khi thấy khó, chìa khóa thường nằm ở cuối chùm chìa khóa." },
        { ten: "THANH NHÀN", loi: "Một ngày thong dong, không áp lực KPI, không lo âu cơm áo gạo tiền.", khuyen: "\nLời khuyên: Tận hưởng sự tĩnh lặng này, uống một tách trà và nghe bản nhạc yêu thích đi." },
        { ten: "ĐẮC LỢI", loi: "Nắm lợi thế trong tay, công việc kinh doanh hay đàm phán đều vô cùng suôn sẻ.", khuyen: "\nLời khuyên: Khôn ngoan nhưng cần sự tử tế để duy trì đối tác lâu dài." },
        { ten: "HƯƠNG THƠM", loi: "Danh tiếng vang xa, năng lực của bạn bắt đầu được nhiều người biết đến và nể trọng.", khuyen: "\nLời khuyên: Giữ vững uy tín, chữ tín quý hơn vàng trong thời buổi này." },
        { ten: "VĨNH CỬU", loi: "Nền tảng vững chắc, những gì bạn dày công xây dựng sẽ có giá trị lâu dài.", khuyen: "\nLời khuyên: Đừng chạy theo lợi ích ngắn hạn, tầm nhìn xa mới là người chiến thắng." },
        { ten: "THIÊN PHÚ", loi: "Tài lẻ của bạn có cơ hội bộc lộ, mọi người sẽ ngạc nhiên về khả năng của bạn.", khuyen: "\nLời khuyên: Hãy tự tin thể hiện mình, thế giới cần những màu sắc riêng biệt như bạn." },
        { ten: "AN NHIÊN", loi: "Tâm không biến động giữa dòng đời, bạn cảm thấy hài lòng với hiện tại.", khuyen: "\nLời khuyên: Hạnh phúc là biết đủ, đừng quá so sánh mình với người khác làm gì." },
        { ten: "TÀI LỘC", loi: "Túi tiền rủng rỉnh, vận may tài chính đang ở mức cao nhất trong tháng.", khuyen: "\nLời khuyên: Thích hợp để đầu tư nhẹ nhàng hoặc mua vé số cầu may." },
        { ten: "PHÁT ĐẠT", loi: "Sự nghiệp thăng tiến, có cơ hội thăng chức hoặc nhận dự án lớn.", khuyen: "\nLời khuyên: Trách nhiệm càng cao thì càng cần sự tỉ mỉ, đừng chủ quan." },
        { ten: "TRÍ TUỆ", loi: "Đầu óc cực kỳ sáng suốt, đưa ra những quyết định đúng đắn cho tương lai.", khuyen: "\nLời khuyên: Nếu có ý tưởng gì mới, hãy viết ngay ra giấy kẻo quên." },
        { ten: "PHÚC ĐỨC", loi: "Được hưởng lộc từ tổ tiên, mọi việc dữ đều hóa lành nhờ ăn ở hiền lành.", khuyen: "\nLời khuyên: Tiếp tục làm việc thiện, nhân quả sẽ không bỏ rơi người tốt." },
        { ten: "BẢO VẬT", loi: "Tìm được thứ giá trị, có thể là một người bạn tri kỷ hoặc một kiến thức quý giá.", khuyen: "\nLời khuyên: Trân trọng những người bên cạnh mình lúc gian nan nhất." },
        { ten: "AN KHANG", loi: "Sức khỏe dồi dào, tinh thần phấn chấn giúp bạn xử lý việc gì cũng xong.", khuyen: "\nLời khuyên: Duy trì thói quen tập luyện để giữ vững phong độ đỉnh cao này." },
        { ten: "TINH ANH", loi: "Gặp được người giỏi, học hỏi được những chiến lược hay cho sự nghiệp.", khuyen: "\nLời khuyên: Học thầy không tày học bạn, hãy chủ động kết nối với những người ưu tú." },
        { ten: "THUẬN LỢI", loi: "Làm đâu thắng đó, cảm giác như cả thế giới đang nhường đường cho bạn.", khuyen: "\nLời khuyên: Đừng vì quá thuận lợi mà lơ là, hãy tận dụng sức nóng để về đích sớm." },
        { ten: "HÒA HỢP", loi: "Gia đình êm ấm, mâu thuẫn lứa đôi được hóa giải bằng sự thấu hiểu.", khuyen: "\nLời khuyên: Một lời xin lỗi hoặc cảm ơn đúng lúc sẽ giữ lửa hạnh phúc bền lâu." },
        { ten: "VƯỢNG PHÁT", loi: "Công việc kinh doanh mở rộng, quy mô ngày càng phát triển mạnh mẽ.", khuyen: "\nLời khuyên: Cần có kế hoạch quản lý nhân sự và dòng tiền chặt chẽ hơn." },
        { ten: "TỰ TẠI", loi: "Không vướng bận thị phi, bạn tự do làm điều mình đam mê mà không sợ phán xét.", khuyen: "\nLời khuyên: Sống cho mình là cách tốt nhất để không hối tiếc về sau." },
        { ten: "MAY MẮN", loi: "Gặp may bất ngờ, chuyện không tưởng bỗng nhiên thành sự thật trong tích tắc.", khuyen: "\nLời khuyên: Hãy mỉm cười và đón nhận món quà của số phận với lòng biết ơn." },
        { ten: "THÔNG SUỐT", loi: "Mọi bế tắc bấy lâu đều có lời giải, tinh thần cực kỳ minh mẫn.", khuyen: "\nLời khuyên: Đây là lúc để lập kế hoạch cho 5 năm tới, bạn đang nhìn thấy rõ đường đi." },
        { ten: "BỀN VỮNG", loi: "Mối quan hệ lâu dài, đối tác tin tưởng và sẵn sàng đồng hành cùng bạn.", khuyen: "\nLời khuyên: Chân thành là chìa khóa duy nhất để giữ chân những người thực sự giá trị." },
        { ten: "CAO QUÝ", loi: "Được mọi người nể trọng vì nhân cách, khẳng định được vị thế cá nhân.", khuyen: "\nLời khuyên: Càng ở vị trí cao càng cần khiêm nhường để giữ được lòng người." },
        { ten: "NHIỆT HUYẾT", loi: "Năng lượng làm việc tràn trề, bạn đang truyền cảm hứng rất tốt cho đội nhóm.", khuyen: "\nLời khuyên: Hãy giữ ngọn lửa này luôn cháy, sự nhiệt tình sẽ bù đắp cho kỹ năng." },
        { ten: "SÁNG LẠNG", loi: "Tương lai rộng mở, nhiều cơ hội nghề nghiệp mới đang chào đón bạn.", khuyen: "\nLời khuyên: Đừng sợ thay đổi, môi trường mới sẽ giúp bạn vươn xa hơn." },
        { ten: "THU HOẠCH", loi: "Sau bao ngày vất vả gieo trồng, hôm nay chính là ngày bạn hái quả ngọt.", khuyen: "\nLời khuyên: Hãy tận hưởng thành quả nhưng đừng quên chia sẻ niềm vui với người đồng hành." },
        { ten: "DUYÊN LÀNH", loi: "Gặp được người cùng chí hướng, có thể cùng nhau tạo nên việc lớn.", khuyen: "\nLời khuyên: Hãy mở lòng giao tiếp, một cuộc trò chuyện ngắn có thể đổi thay số phận." },
        { ten: "SUNG TÚC", loi: "Cuộc sống đầy đủ, không thiếu thốn, tinh thần vô cùng viên mãn.", khuyen: "\nLời khuyên: Hãy học cách cho đi khi đang dư dả để tích thêm phúc đức." },
        { ten: "CHÍNH TRỰC", loi: "Làm việc đúng lương tâm, dù chậm nhưng kết quả nhận được rất bền vững.", khuyen: "\nLời khuyên: Sự tử tế luôn có cái giá của nó, đừng vì cái lợi trước mắt mà đánh mất mình." },
        { ten: "MƯA THUẬN", loi: "Hoàn cảnh bên ngoài cực kỳ thuận lợi, như cá gặp nước, diều gặp gió.", khuyen: "\nLời khuyên: Đừng lãng phí thời cơ, hãy bung hết sức mình trong giai đoạn này." },
        { ten: "GIÓ HÒA", loi: "Mọi mâu thuẫn trong các mối quan hệ đều tan biến, bầu không khí rất ôn hòa.", khuyen: "\nLời khuyên: Đây là lúc để gắn kết tình cảm, xóa bỏ những hiểu lầm cũ." },
        { ten: "VUI VẺ", loi: "Một ngày tràn ngập tiếng cười và những câu chuyện thú vị với bạn bè.", khuyen: "\nLời khuyên: Hãy lan tỏa năng lượng tích cực này, nụ cười của bạn là liều thuốc cho mọi người." },
        { ten: "ĐOÀN VIÊN", loi: "Hội ngộ người thân hoặc bạn cũ, cảm giác ấm áp và ý nghĩa bao trùm.", khuyen: "\nLời khuyên: Trân trọng những phút giây bên gia đình, đó là nền tảng của mọi thành công." },
        { ten: "PHÁT TÀI", loi: "Lợi nhuận kinh doanh tăng vọt, buôn may bán đắt hơn mọi ngày.", khuyen: "\nLời khuyên: Tái đầu tư thông minh thay vì chi tiêu hoang phí ngay lúc này." },
        { ten: "CẦU ĐƯỢC ƯỚC THẤY", loi: "Lòng người thỏa mãn, cầu gì được nấy, vạn sự hanh thông.", khuyen: "\nLời khuyên: Hãy khiêm nhường đón nhận vận may, đừng quá kiêu ngạo kẻo vận đổi sao dời." },
        { ten: "SÁNG TẠO", loi: "Nhiều ý tưởng mới lạ nảy ra, xử lý công việc nhanh gấp đôi bình thường.", khuyen: "\nLời khuyên: Ghi chép lại những ý tưởng này, chúng có thể trở thành dự án triệu đô." },
        { ten: "TỰ TIN", loi: "Vượt qua được nỗi sợ hãi bấy lâu, khẳng định mạnh mẽ bản lĩnh cá nhân.", khuyen: "\nLời khuyên: Bạn mạnh mẽ hơn bạn tưởng, hãy cứ tin vào con đường mình chọn." },
        { ten: "QUYẾT ĐOÁN", loi: "Lựa chọn chính xác vào thời điểm nhạy cảm mang lại lợi ích lâu dài.", khuyen: "\nLời khuyên: Khi đã quyết thì đừng nhìn lại, cứ thẳng tiến về phía trước." },
        { ten: "THÀNH CÔNG", loi: "Kết quả mĩ mãn cho một hành trình dài gian nan vất vả.", khuyen: "\nLời khuyên: Đỉnh núi này qua đi, đỉnh núi khác lại tới, hãy sẵn sàng cho thử thách mới." }
    ],
    "NHOM_BINH_AN": [
        { ten: "TRÌ TRỆ", loi: "Mọi việc dậm chân tại chỗ, hồ sơ bị treo, tiến độ chậm hơn dự kiến.", khuyen: "\nLời khuyên: Đừng cố ép mình lúc này, hãy dành thời gian rà soát lại quy trình xem sai ở đâu." },
        { ten: "HAO TỔN", loi: "Cẩn thận hao tài tốn của vào những việc trời ơi đất hỡi, hỏng hóc đồ đạc.", khuyen: "\nLời khuyên: Kiểm tra lại ví tiền, đồ điện tử và hạn chế mua sắm theo cảm xúc." },
        { ten: "THỊ PHI", loi: "Dễ có lời ra tiếng vào, những hiểu lầm không đáng có nơi công sở.", khuyen: "\nLời khuyên: Im lặng là vàng, đừng tham gia vào các cuộc tranh luận vô bổ trên mạng." },
        { ten: "TRỞ NGẠI", loi: "Kế hoạch đang suôn sẻ bỗng gặp trục trặc bất ngờ do yếu tố bên ngoài.", khuyen: "\nLời khuyên: Bình tĩnh tìm phương án dự phòng, 'cái khó ló cái khôn' thôi mà." },
        { ten: "BẤT AN", loi: "Tâm trạng dao động, lo lắng vô cớ, đừng đưa ra quyết định quan trọng lúc này.", khuyen: "\nLời khuyên: Tìm đến âm nhạc hoặc thiền định để lấy lại sự cân bằng trước khi làm việc." },
        { ten: "KHÓ KHĂN", loi: "Thử thách tới để kiểm tra bản lĩnh, áp lực công việc đang đè nặng.", khuyen: "\nLời khuyên: Coi đây là bài học để trưởng thành, bóng tối nào rồi cũng sẽ nhường chỗ cho bình minh." },
        { ten: "CÔ ĐỘC", loi: "Cảm giác không ai thấu hiểu mình, thiếu sự hỗ trợ từ những người xung quanh.", khuyen: "\nLời khuyên: Học cách làm bạn với chính mình, đôi khi một mình mới là lúc sáng suốt nhất." },
        { ten: "XUNG ĐỘT", loi: "Dễ xảy ra mâu thuẫn, tranh cãi nảy lửa vì bất đồng quan điểm sống.", khuyen: "\nLời khuyên: Hạ cái tôi xuống một chút, thắng thua trong lời nói không mang lại hạnh phúc." },
        { ten: "HỎA TẬN", loi: "Năng lượng cạn kiệt hoàn toàn, cảm giác mệt mỏi xâm chiếm cả tâm trí.", khuyen: "\nLời khuyên: Nghỉ ngơi ngay lập tức, đừng cố gồng mình kẻo ảnh hưởng sức khỏe lâu dài." },
        { ten: "U ÁM", loi: "Tầm nhìn bị che khuất, bạn chưa thấy lối thoát cho vấn đề hiện tại.", khuyen: "\nLời khuyên: Đứng yên quan sát tốt hơn là tiến tới một cách mù quáng, kiên nhẫn đợi thời." },
        { ten: "NHẦM LẪN", loi: "Cẩn thận trong giấy tờ, con số, dễ gửi nhầm mail hoặc nhầm lịch hẹn.", khuyen: "\nLời khuyên: Kiểm tra lại mọi thứ ít nhất hai lần trước khi bấm nút xác nhận." },
        { ten: "TRỄ HẸN", loi: "Thời gian không ủng hộ, giao thông trắc trở khiến mọi thứ chậm tiến độ.", khuyen: "\nLời khuyên: Chủ động sắp xếp thời gian sớm hơn bình thường để tránh những rắc rối vụn vặt." },
        { ten: "LÃNG PHÍ", loi: "Bạn đang dồn quá nhiều sức vào những việc vô bổ, không mang lại giá trị thực.", khuyen: "\nLời khuyên: Tập trung vào mục tiêu chính, đừng để mạng xã hội 'ăn cắp' thời gian của bạn." },
        { ten: "LẠC LỐI", loi: "Cảm thấy mất phương hướng trong sự nghiệp, không biết mình thực sự muốn gì.", khuyen: "\nLời khuyên: Hãy dừng lại một nhịp, viết ra những gì bạn thích nhất để tìm lại chính mình." },
        { ten: "MỆT MỎI", loi: "Sức khỏe có dấu hiệu đi xuống, cơ thể đang biểu tình vì làm việc quá sức.", khuyen: "\nLời khuyên: Đi ngủ sớm và uống đủ nước, đừng để công việc vắt kiệt sức lực cuối cùng." },
        { ten: "CHÊ KHEN", loi: "Quá bận tâm lời nhận xét của người khác làm bạn chùn bước và tổn thương.", khuyen: "\nLời khuyên: Người ta nói gì là việc của họ, giá trị của bạn là do bạn định đoạt." },
        { ten: "NGỜ VỰC", loi: "Thiếu niềm tin vào đồng nghiệp hoặc đối tác đang làm trì trệ công việc chung.", khuyen: "\nLời khuyên: Đối thoại trực tiếp để giải tỏa nghi ngờ, sự mập mờ là kẻ thù của thành công." },
        { ten: "GIÁN ĐOẠN", loi: "Việc đang làm bị ngắt quãng nửa chừng bởi lý do khách quan như cúp điện, rớt mạng.", khuyen: "\nLời khuyên: Tận dụng khoảng nghỉ này để thư giãn mắt và hít thở sâu." },
        { ten: "LO ÂU", loi: "Suy nghĩ quá nhiều về những chuyện chưa xảy ra làm hỏng niềm vui hiện tại.", khuyen: "\nLời khuyên: Tập trung vào 'ngay bây giờ', tương lai là kết quả của những gì bạn làm hôm nay." },
        { ten: "NHẠT NHẼO", loi: "Một ngày trôi qua thiếu điểm nhấn, bạn cảm thấy cuộc sống hơi vô vị.", khuyen: "\nLời khuyên: Hãy thử một món ăn mới hoặc một con đường mới để kích thích hứng khởi." },
        { ten: "RỐI RẮM", loi: "Nhiều chuyện rắc rối ập đến cùng lúc khiến bạn không biết bắt đầu từ đâu.", khuyen: "\nLời khuyên: Liệt kê mọi việc ra giấy và giải quyết từng thứ một, đừng cố làm tất cả." },
        { ten: "CHẬM TRỄ", loi: "Cơ hội có thể vuột mất nếu bạn không quyết đoán nhanh hơn trong ngày hôm nay.", khuyen: "\nLời khuyên: Suy nghĩ kỹ nhưng đừng quá lâu, cơ hội không đứng đợi ai bao giờ." },
        { ten: "HỤT HẪNG", loi: "Kết quả thực tế không như mong đợi ban đầu, cảm giác thất vọng tràn trề.", khuyen: "\nLời khuyên: Thất bại là mẹ thành công, hãy rút kinh nghiệm và làm lại tốt hơn." },
        { ten: "CỨNG NHẮC", loi: "Quá bảo thủ với ý kiến cũ khiến bạn bỏ lỡ những giải pháp đột phá.", khuyen: "\nLời khuyên: Học cách lắng nghe những người trẻ hơn, họ có những góc nhìn rất thú vị." },
        { ten: "CẢ TIN", loi: "Dễ bị người khác lợi dụng lòng tốt hoặc cuốn vào những lời hứa hão huyền.", khuyen: "\nLời khuyên: Tỉnh táo hơn trong các giao dịch tiền bạc, lòng tốt cần đặt đúng chỗ." },
        { ten: "TỔN THƯƠNG", loi: "Một lời nói vô tình từ người thân có thể làm bạn buồn lòng cả ngày.", khuyen: "\nLời khuyên: Học cách bao dung và đừng giữ sự bực tức trong lòng quá lâu." },
        { ten: "HẤP TẤP", loi: "Dục tốc bất đạt, vội vàng trong quyết định chỉ dẫn đến những sai sót ngớ ngẩn.", khuyen: "\nLời khuyên: Chậm lại một chút để quan sát tổng thể, 'chậm mà chắc' vẫn tốt hơn." },
        { ten: "PHIỀN MUỘN", loi: "Chuyện gia đình hoặc tình cảm gây bận tâm, làm giảm năng suất làm việc.", khuyen: "\nLời khuyên: Tách biệt việc tư và việc công, cần sự bình tĩnh để tháo gỡ từng nút thắt." },
        { ten: "ÁP LỰC", loi: "Khối lượng công việc quá tải đè nặng lên vai, cảm giác nghẹt thở vì Deadline.", khuyen: "\nLời khuyên: Chia nhỏ mục tiêu lớn thành các việc nhỏ dễ làm, bạn sẽ thấy nhẹ nhàng hơn." },
        { ten: "THẤT THOÁT", loi: "Đồ đạc dễ bị hỏng hóc bất ngờ hoặc thất lạc, cẩn thận với ví tiền và điện thoại.", khuyen: "\nLời khuyên: Kiểm tra lại túi xách trước khi ra khỏi quán cà phê hoặc xe buýt." },
        { ten: "DO DỰ", loi: "Đứng giữa hai lựa chọn mà không biết đi đường nào, lãng phí thời gian.", khuyen: "\nLời khuyên: Hãy hỏi ý kiến một người bạn thân tin cậy, họ sẽ có cái nhìn khách quan hơn." },
        { ten: "CÁCH TRỞ", loi: "Giao tiếp gặp khó khăn, ý kiến của bạn không được tập thể lắng nghe thấu đáo.", khuyen: "\nLời khuyên: Thay đổi cách truyền đạt, súc tích và có dẫn chứng thuyết phục hơn." },
        { ten: "ẢO TƯỞNG", loi: "Đừng mơ mộng những điều quá xa vời thực tế, hãy nhìn thẳng vào sự thật.", khuyen: "\nLời khuyên: Đặt đôi chân xuống đất, làm những việc nhỏ nhất cho thật tốt đã." },
        { ten: "HAO TÂM", loi: "Suy nghĩ quá nhiều cho người khác mà quên đi việc chăm sóc chính mình.", khuyen: "\nLời khuyên: Bạn không thể giúp ai nếu bản thân đang cạn kiệt năng lượng, hãy yêu lấy mình." },
        { ten: "BẤT CẨN", loi: "Một lỗi nhỏ do thiếu quan sát cũng có thể gây hậu quả lớn cho cả nhóm.", khuyen: "\nLời khuyên: Luôn có bước rà soát cuối cùng trước khi bàn giao công việc." },
        { ten: "CHÊ BAI", loi: "Nhận phải lời góp ý tiêu cực làm nản lòng ý chí phấn đấu của bạn.", khuyen: "\nLời khuyên: Biến chỉ trích thành động lực để chứng minh năng lực thực sự của mình." },
        { ten: "QUÊN LÃNG", loi: "Dễ quên những việc quan trọng, cần ghi chú lại cẩn thận vào sổ tay.", khuyen: "\nLời khuyên: Sử dụng ứng dụng nhắc việc để cuộc sống ngăn nắp và hiệu quả hơn." },
        { ten: "XAO NHÃNG", loi: "Khó tập trung vào việc chính, dễ bị ảnh hưởng bởi những chuyện lặt vặt.", khuyen: "\nLời khuyên: Tắt thông báo điện thoại và dành 1 tiếng tập trung tuyệt đối cho công việc." },
        { ten: "CHẬT VẬT", loi: "Làm gì cũng thấy khó khăn ban đầu, đòi hỏi nỗ lực gấp đôi bình thường.", khuyen: "\nLời khuyên: Vạn sự khởi đầu nan, đừng nản lòng khi thấy kết quả chưa đến ngay." },
        { ten: "BỊ ĐỘNG", loi: "Phải chạy theo kế hoạch của người khác, thiếu sự chủ động trong cuộc sống.", khuyen: "\nLời khuyên: Học cách nói không với những việc không thuộc trách nhiệm của mình." },
        { ten: "NGĂN TRỞ", loi: "Sự việc không diễn ra như ý muốn do yếu tố thời tiết hoặc trục trặc kỹ thuật.", khuyen: "\nLời khuyên: Chấp nhận những gì không thể thay đổi và linh hoạt ứng biến với hoàn cảnh." },
        { ten: "LƯỠNG LỰ", loi: "Không dám bước ra khỏi vùng an toàn, bỏ lỡ những trải nghiệm thú vị.", khuyen: "\nLời khuyên: Một lần dũng cảm có thể mang lại những bài học quý giá cả đời." },
        { ten: "CẢ MẾN", loi: "Để tình cảm cá nhân lấn át lý trí, dễ đưa ra những lựa chọn sai lầm.", khuyen: "\nLời khuyên: Trong công việc cần sự lạnh lùng của con số và thực tế khách quan." },
        { ten: "SƠ SUẤT", loi: "Chủ quan trong những khâu nhỏ nhất dẫn đến kết quả không được hoàn hảo.", khuyen: "\nLời khuyên: Càng việc quen tay càng cần sự tỉ mỉ, đừng chủ quan khinh suất." },
        { ten: "CÔ LẬP", loi: "Cảm thấy bị tách rời khỏi dòng chảy chung của tập thể, thiếu kết nối bạn bè.", khuyen: "\nLời khuyên: Hãy chủ động mở lời, sự ấm áp của bạn sẽ xóa tan mọi rào cản." },
        { ten: "NHẠY CẢM", loi: "Dễ xúc động và suy nghĩ quá mức về những lời nói bâng quơ của người khác.", khuyen: "\nLời khuyên: Đừng quá nghiêm trọng hóa vấn đề, hãy giữ cho tâm thế luôn vững vàng." },
        { ten: "NÁO NHIỆT", loi: "Môi trường quá ồn ào khiến bạn không thể tập trung suy nghĩ sâu sắc được.", khuyen: "\nLời khuyên: Tìm một góc yên tĩnh để đối thoại với chính mình vào cuối ngày." },
        { ten: "RÀNG BUỘC", loi: "Cảm thấy thiếu tự do trong hành động và bị gò bó bởi những quy tắc cũ.", khuyen: "\nLời khuyên: Tự tạo ra không gian riêng cho mình, sáng tạo không có biên giới." },
        { ten: "KHẮT KHE", loi: "Đang quá nghiêm khắc với bản thân làm giảm đi niềm vui sống mỗi ngày.", khuyen: "\nLời khuyên: Hãy tha thứ cho những lỗi lầm của mình, bạn đã cố gắng rất nhiều rồi." },
        { ten: "TĨNH LẶNG", loi: "Một ngày trôi qua bình lặng nếu bạn không biết tự tìm niềm vui nhỏ cho mình.", khuyen: "\nLời khuyên: Hạnh phúc nằm ở những điều giản đơn, hãy thưởng cho mình một ly trà ngon." }
    ]
};

/**
 * THUẬT TOÁN MÃ BĂM (HASHING) 
 * Mục đích: Đảm bảo "Nam" gieo ở đâu hôm nay cũng ra cùng 1 Nhóm (Tốt hoặc Bình)
 */
function getDailyEnergyGroup(userName) {
    const today = new Date().toISOString().slice(0, 10);
    // Kết hợp Tên + Ngày để tạo hạt giống định mệnh
    const seed = today + userName.trim().toLowerCase() + "TranBaoNam2026";
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        // Thuật toán dịch bit để Nam khác Nma, đảm bảo tính duy nhất
        hash = ((hash << 5) - hash) + seed.charCodeAt(i);
        hash |= 0;
    }
    // Chẵn ra Cát, Lẻ ra Bình - Luôn cố định cho 1 cái tên trong 1 ngày
    return Math.abs(hash) % 2 === 0 ? "NHOM_CAT_TUONG" : "NHOM_BINH_AN";
}

function typeWriter(elementId, text, speed = 60) {
    let i = 0;
    const element = document.getElementById(elementId);
    if (!element) return;
    element.innerHTML = ""; 
    function typing() {
        if (i < text.length) {
            if (text.charAt(i) === "\n") {
                element.innerHTML += "<br>";
            } else {
                element.innerHTML += text.charAt(i);
            }
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
        alert("Vui lòng nhập tên (ít nhất 2 ký tự) để gieo quẻ nhé!");
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
        alert("Duyên hôm nay đã đủ. Hãy quay lại vào ngày mai nhé!");
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

        // BƯỚC 1: XÁC ĐỊNH BẢN CHẤT (NHÓM) - DÙNG MÃ BĂM ĐỊNH MỆNH
        const groupName = getDailyEnergyGroup(userName);
        const currentGroup = dataFortune[groupName];
        
        // BƯỚC 2: CHỌN QUẺ CỤ THỂ - DÙNG RANDOM ĐỂ KHÔNG BỊ TRÙNG MÁY MÓC
        // Hai người cùng tên gieo sẽ ra 2 quẻ khác nhau trong cùng nhóm Cát/Bình
        const randomIndex = Math.floor(Math.random() * currentGroup.length);
        const ngauNhien = currentGroup[randomIndex];
        
        const hour = new Date().getHours();
        let greeting = "";
        if (hour < 11) greeting = "Khởi đầu ngày mới, tâm thế hanh thông. ";
        else if (hour < 14) greeting = "Giữa dòng thời gian, dừng chân tĩnh tại. ";
        else if (hour < 18) greeting = "Ngày dần trôi qua, lòng người lắng lại.";
        else greeting = "Không gian tĩnh lặng, duyên định về đêm.";

        // Bước 3: Định dạng lời khuyên (Tự động thêm xuống dòng đẹp mắt)
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
