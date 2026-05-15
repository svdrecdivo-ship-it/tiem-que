/**
 * TIỆM QUẺ VỈA HÈ - PHIÊN BẢN 108 QUẺ CHUẨN (XUỐNG DÒNG LỜI KHUYÊN)
 * Tác giả: Trần Bảo Nam
 */

const MAX_FREE_GIEOS = 2; 
let isShaking = false; 

const dataFortune = {
    "NHOM_CAT_TUONG": [
        { ten: "ĐẠI CÁT", loi: "Vận thế như rồng gặp mây, mọi dự định bấy lâu đều có cơ hội thành công rực rỡ, danh lộc vẹn toàn.", khuyen: "Lời khuyên:\nThời điểm vàng đã tới, hãy quyết đoán hành động ngay." },
        { ten: "TRUNG CÁT", loi: "Đường đi bằng phẳng, công việc và tình cảm đều thuận lợi, có quý nhân âm thầm chỉ lối.", khuyen: "Lời khuyên:\nGiữ thái độ khiêm nhường sẽ giúp bạn nhận được nhiều sự hỗ trợ hơn." },
        { ten: "TIỂU CÁT", loi: "Có lộc nhỏ bất ngờ, tinh thần phấn chấn, các mối quan hệ xã hội tiến triển tốt đẹp.", khuyen: "Lời khuyên:\nNiềm vui nhỏ làm nên ngày lớn, hãy chia sẻ nó với người thân." },
        { ten: "HỮU LỘC", loi: "Tài chính hanh thông, nguồn thu ổn định hoặc có tin vui về lương thưởng, tiền bạc.", khuyen: "Lời khuyên:\nNên có kế hoạch quản lý chi tiêu để tích lũy cho việc lớn lao." },
        { ten: "KHỞI SẮC", loi: "Sự nghiệp có bước tiến mới, khó khăn dần qua đi, mở ra giai đoạn đầy hứa hẹn.", khuyen: "Lời khuyên:\nKiên trì với mục tiêu hiện tại, quả ngọt đang ở rất gần bạn." },
        { ten: "QUÝ NHÂN", loi: "Gặp được người tốt giúp đỡ lúc cần thiết, khúc mắc công việc được tháo gỡ nhẹ nhàng.", khuyen: "Lời khuyên:\nTrân trọng những nhân duyên cũ, một lời hỏi thăm có thể mở ra cơ hội." },
        { ten: "HỶ SỰ", loi: "Gia đạo yên vui, có tin mừng từ phương xa hoặc sự hội ngộ đầy ý nghĩa.", khuyen: "Lời khuyên:\nMở lòng đón nhận lời mời, vận may tình cảm đang rất khởi sắc." },
        { ten: "VƯỢNG KHÍ", loi: "Năng lượng dồi dào, làm việc gì cũng thấy thuận tay, sức thuyết phục rất cao.", khuyen: "Lời khuyên:\nTận dụng lúc minh mẫn để giải quyết việc quan trọng còn tồn đọng." },
        { ten: "MINH TRIẾT", loi: "Đầu óc sáng suốt, đưa ra được những quyết định đúng đắn mang tính chiến lược.", khuyen: "Lời khuyên:\nĐầu tư cho kiến thức là khoản đầu tư lãi nhất cho tương lai." },
        { ten: "THANH THẢN", loi: "Tâm hồn nhẹ nhõm, gánh nặng áp lực được trút bỏ, tìm thấy sự bình an nội tại.", khuyen: "Lời khuyên:\nDành thời gian nghỉ ngơi để tái tạo năng lượng cho hành trình mới." },
        { ten: "THÀNH TỰU", loi: "Công sức bỏ ra bấy lâu nay đã được đền đáp xứng đáng bằng kết quả mĩ mãn.", khuyen: "Lời khuyên:\nĐừng ngủ quên trên chiến thắng, hãy lấy đây làm bàn đạp vươn xa." },
        { ten: "TẤN TỚI", loi: "Vận trình đang lên, mọi việc tiến triển tích cực ngoài mong đợi của bạn.", khuyen: "Lời khuyên:\nGiữ vững kỷ luật cá nhân để sự thành công này được bền vững." },
        { ten: "NHƯ Ý", loi: "Cầu gì được nấy, hoàn cảnh khách quan rất ủng hộ các quyết định của bạn.", khuyen: "Lời khuyên:\nHãy biết ơn những gì đang có để thu hút thêm nhiều điều may mắn." },
        { ten: "VIÊN MÃN", loi: "Mọi phương diện từ sự nghiệp đến tình cảm đều đạt được sự hài hòa, trọn vẹn.", khuyen: "Lời khuyên:\nTận hưởng khoảnh khắc này và lan tỏa hạnh phúc đến mọi người." },
        { ten: "KHA ĐIỀM", loi: "Điềm báo tốt lành cho một sự thay đổi tích cực hoặc khởi đầu mới thuận lợi.", khuyen: "Lời khuyên:\nĐừng ngại bước ra khỏi vùng an toàn, môi trường mới sẽ giúp bạn tỏa sáng." },
        { ten: "THIÊN THỜI", loi: "Thời cơ chín muồi, các yếu tố khách quan đang hội tụ để ủng hộ bạn.", khuyen: "Lời khuyên:\nKhi trực giác mách bảo hãy dấn thân ngay, chậm chân sẽ lỡ mất vận may." },
        { ten: "ĐỊA LỢI", loi: "Môi trường làm việc và nơi ở mang lại nguồn cảm hứng và sự hỗ trợ tuyệt vời.", khuyen: "Lời khuyên:\nTận dụng nguồn lực sẵn có tại chỗ để tối ưu hóa hiệu quả hiện tại." },
        { ten: "NHÂN HÒA", loi: "Được lòng người, sự đoàn kết giúp bạn vượt qua mọi rào cản một cách dễ dàng.", khuyen: "Lời khuyên:\nMuốn đi xa hãy đi cùng nhau, lắng nghe và chia sẻ tầm nhìn với đồng đội." },
        { ten: "QUANG MINH", loi: "Mọi sự mập mờ đều được làm sáng tỏ, lẽ phải đứng về phía bạn.", khuyen: "Lời khuyên:\nCứ sống chính trực, sự chân thành là tấm hộ chiếu quyền năng nhất." },
        { ten: "LAI CÁT", loi: "May mắn đang trên đường đến, hãy chuẩn bị tâm thế sẵn sàng đón nhận.", khuyen: "Lời khuyên:\nCứ làm tốt việc của mình, món quà sẽ đến vào lúc bất ngờ nhất." },
        { ten: "VẠN SỰ THÀNH", loi: "Dù gặp khó khăn ban đầu nhưng cuối cùng vẫn đạt được mục tiêu đề ra.", khuyen: "Lời khuyên:\nBình tĩnh ứng biến, linh hoạt phương pháp sẽ tìm ra lối thoát kỳ diệu." },
        { ten: "THANH NHÀN", loi: "Một ngày thong dong, không vướng bận lo âu, tận hưởng sự thư thái tâm hồn.", khuyen: "Lời khuyên:\nCho phép mình nghỉ ngơi một chút để lắng nghe tiếng nói bên trong cơ thể." },
        { ten: "ĐẮC LỢI", loi: "Nắm thế chủ động trong đàm phán, mang về lợi ích lớn cho bản thân.", khuyen: "Lời khuyên:\nKhôn ngoan nhưng cần sự tử tế để duy trì những hợp tác lâu dài." },
        { ten: "HƯƠNG THƠM", loi: "Danh tiếng và uy tín cá nhân tăng cao, được nhiều người nể trọng, tin tưởng.", khuyen: "Lời khuyên:\nGiữ vững phong độ, tiếng lành đồn xa sẽ mang lại vận may lớn." },
        { ten: "VĨNH CỬU", loi: "Nền tảng bạn xây dựng rất vững chắc, có giá trị lâu dài theo thời gian.", khuyen: "Lời khuyên:\nĐừng chạy theo xu hướng nhất thời, hãy tập trung vào giá trị cốt lõi." },
        { ten: "THIÊN PHÚ", loi: "Tài năng thiên bẩm có cơ hội bộc lộ, tạo nên sự khác biệt độc đáo.", khuyen: "Lời khuyên:\nThế giới cần màu sắc riêng của bạn, hãy tự tin thể hiện bản sắc." },
        { ten: "AN NHIÊN", loi: "Giữa dòng đời biến động, bạn vẫn giữ được sự bình tĩnh và tự tại.", khuyen: "Lời khuyên:\nTu tâm dưỡng tính là gốc hạnh phúc, duy trì thói quen đọc sách mỗi ngày." },
        { ten: "TÀI LỘC", loi: "Vận may tiền bạc rất lớn, nhận được khoản tiền bất ngờ hoặc tăng thu nhập.", khuyen: "Lời khuyên:\nTiền bạc cần lưu thông, hãy dùng một phần để giúp đỡ người khó khăn." },
        { ten: "PHÁT ĐẠT", loi: "Công việc kinh doanh, làm ăn mở rộng, doanh thu tăng trưởng ấn tượng.", khuyen: "Lời khuyên:\nMở rộng quy mô cần quản trị chặt chẽ, đừng chủ quan với các con số." },
        { ten: "TRÍ TUỆ", loi: "Sáng kiến của bạn được đánh giá cao, mở ra hướng đi mới cho tập thể.", khuyen: "Lời khuyên:\nĐừng giữ ý tưởng cho riêng mình, hãy thảo luận để biến nó thành thực tế." },
        { ten: "PHÚC ĐỨC", loi: "Hưởng lộc từ sự lương thiện, mọi tai ương đều hóa cát tường.", khuyen: "Lời khuyên:\nGieo nhân lành gặt quả ngọt, tiếp tục giúp đỡ mọi người khi có thể." },
        { ten: "BẢO VẬT", loi: "Tìm được thứ giá trị, có thể là bạn tri kỷ hoặc một bài học quý báu.", khuyen: "Lời khuyên:\nTrân trọng những gì đang có, đôi khi điều quý giá nhất ở ngay bên cạnh." },
        { ten: "AN KHANG", loi: "Sức khỏe cải thiện, tinh thần minh mẫn, cuộc sống tràn đầy sức sống.", khuyen: "Lời khuyên:\nDuy trì chế độ ăn uống và tập luyện để giữ vững phong độ đỉnh cao." },
        { ten: "TINH ANH", loi: "Gặp gỡ và học hỏi được từ những người ưu tú, tầm nhìn được mở rộng.", khuyen: "Lời khuyên:\nHọc thầy không tày học bạn, chủ động kết nối với những người giỏi hơn." },
        { ten: "THUẬN LỢI", loi: "Mọi việc diễn ra suôn sẻ như ý, không gặp bất cứ cản trở nào.", khuyen: "Lời khuyên:\nTăng tốc để hoàn thành mục tiêu quan trọng ngay trong giai đoạn này." },
        { ten: "HÒA HỢP", loi: "Mâu thuẫn cũ được hóa giải, tình cảm gia đình và bạn bè thêm gắn kết.", khuyen: "Lời khuyên:\nMột lời xin lỗi hoặc cảm ơn đúng lúc sẽ làm lành mọi vết thương." },
        { ten: "VƯỢNG PHÁT", loi: "Sự nghiệp thăng hoa, vị thế của bạn được khẳng định chắc chắn.", khuyen: "Lời khuyên:\nTrách nhiệm càng cao càng cần sự thấu hiểu và bao dung với mọi người." },
        { ten: "TỰ TẠI", loi: "Tâm không vướng bận thị phi, tự do làm điều mình yêu thích và đam mê.", khuyen: "Lời khuyên:\nSống cho chính mình là cách tốt nhất để cảm nhận giá trị cuộc đời." },
        { ten: "MAY MẮN", loi: "Gặp may mắn trong những tình huống không ngờ tới nhất.", khuyen: "Lời khuyên:\nMỉm cười đón nhận quà tặng từ vũ trụ với lòng biết ơn chân thành." },
        { ten: "THÔNG SUỐT", loi: "Các nút thắt trong công việc được tháo gỡ, tư duy mạch lạc rõ ràng.", khuyen: "Lời khuyên:\nViệc gì cần tính toán phức tạp hãy làm ngay hôm nay, kết quả sẽ tốt." },
        { ten: "BỀN VỮNG", loi: "Các mối quan hệ đối tác bền chặt, mang lại sự ổn định lâu dài.", khuyen: "Lời khuyên:\nChữ tín quý hơn vàng, hãy luôn giữ lời hứa trong mọi giao dịch." },
        { ten: "CAO QUÝ", loi: "Hành động nghĩa hiệp của bạn được ghi nhận và nể trọng.", khuyen: "Lời khuyên:\nGiữ vững cốt cách chính trực, bạn sẽ luôn là điểm tựa cho người khác." },
        { ten: "NHIỆT HUYẾT", loi: "Ngọn lửa đam mê bùng cháy, truyền cảm hứng mạnh mẽ cho cộng đồng.", khuyen: "Lời khuyên:\nLan tỏa năng lượng này để cùng mọi người tạo nên thay đổi lớn lao." },
        { ten: "SÁNG LẠNG", loi: "Tương lai mở rộng với nhiều lựa chọn hấp dẫn và triển vọng.", khuyen: "Lời khuyên:\nLựa chọn quan trọng hơn nỗ lực, hãy cân nhắc con đường phù hợp nhất." },
        { ten: "THU HOẠCH", loi: "Đã đến lúc hái quả sau một thời gian dài gieo trồng và chăm sóc.", khuyen: "Lời khuyên:\nĐừng quên tri ân những người đã đồng hành cùng bạn lúc khó khăn." },
        { ten: "DUYÊN LÀNH", loi: "Gặp được người cùng chí hướng, tạo nên sự cộng hưởng mạnh mẽ.", khuyen: "Lời khuyên:\nSự thấu hiểu là nền tảng mối quan hệ, hãy đầu tư thời gian cho nó." },
        { ten: "SUNG TÚC", loi: "Cuộc sống đầy đủ về cả vật chất lẫn tinh thần, không lo thiếu thốn.", khuyen: "Lời khuyên:\nBiết đủ là hạnh phúc nhất, hãy trân trọng sự bình yên hiện tại." },
        { ten: "CHÍNH TRỰC", loi: "Làm việc đúng lương tâm mang lại sự bình an và kết quả bền lâu.", khuyen: "Lời khuyên:\nĐường thẳng là con đường ngắn nhất dẫn đến sự tin cậy lâu dài." },
        { ten: "MƯA THUẬN", loi: "Hoàn cảnh bên ngoài cực kỳ chiều lòng người, làm gì cũng dễ.", khuyen: "Lời khuyên:\nThời thế đang ủng hộ, hãy tranh thủ thực hiện các kế hoạch quan trọng." },
        { ten: "GIÓ HÒA", loi: "Không gian sống và làm việc ôn hòa, giảm bớt mọi căng thẳng.", khuyen: "Lời khuyên:\nDuy trì sự nhã nhặn để xây dựng môi trường sống lý tưởng." },
        { ten: "VUI VẺ", loi: "Một ngày tràn ngập tiếng cười và những câu chuyện thú vị.", khuyen: "Lời khuyên:\nHài hước là liều thuốc cho tâm hồn, hãy lan tỏa nó cho mọi người." },
        { ten: "ĐOÀN VIÊN", loi: "Hội ngộ người thân, cảm giác ấm áp và bình yên bao trùm.", khuyen: "Lời khuyên:\nNhà là nơi sạc năng lượng tốt nhất, dành tối nay cho gia đình." },
        { ten: "PHÁT TÀI", loi: "Lợi nhuận từ việc đầu tư tăng vọt, tiền bạc dồi dào.", khuyen: "Lời khuyên:\nHọc cách tái đầu tư thông minh thay vì chi xài hoang phí lúc này." },
        { ten: "MÃN NGUYỆN", loi: "Cảm giác thỏa mãn với những gì đạt được, tâm thế tự tin.", khuyen: "Lời khuyên:\nTiếp tục duy trì suy nghĩ tích cực để thu hút thêm nhiều vận may." },
        { ten: "SÁNG TẠO", loi: "Nhiều ý tưởng đột phá xuất hiện, giải quyết được việc khó.", khuyen: "Lời khuyên:\nGhi lại mọi ý tưởng lóe lên, chúng là tài sản quý giá của bạn." },
        { ten: "TỰ TIN", loi: "Vượt qua nỗi sợ hãi, khẳng định bản lĩnh cá nhân trước đám đông.", khuyen: "Lời khuyên:\nBạn mạnh mẽ hơn bạn nghĩ, hãy cứ dấn thân và trải nghiệm." },
        { ten: "QUYẾT ĐOÁN", loi: "Đưa ra lựa chọn dứt khoát, chấm dứt tình trạng trì trệ.", khuyen: "Lời khuyên:\nSự do dự là kẻ cắp thời gian, hãy tin vào trực giác của chính mình." },
        { ten: "THÀNH CÔNG", loi: "Đạt được mục tiêu lớn lao, khẳng định giá trị bản thân.", khuyen: "Lời khuyên:\nThành công là hành trình, hãy sẵn sàng cho những thử thách tiếp theo." }
    ],
    "NHOM_BINH_AN": [
        { ten: "TRÌ TRỆ", loi: "Mọi việc dậm chân tại chỗ, tiến độ công việc chậm hơn dự kiến.", khuyen: "Lời khuyên:\nĐừng cưỡng cầu, dùng thời gian này chuẩn bị nội lực thật kỹ." },
        { ten: "HAO TỔN", loi: "Cẩn thận hao tài tốn của vào những việc không thực sự cần thiết.", khuyen: "Lời khuyên:\nKiểm tra lại ví tiền và cắt giảm chi tiêu cảm tính ngay." },
        { ten: "THỊ PHI", loi: "Dễ gặp lời ra tiếng vào, hiểu lầm không đáng có phát sinh.", khuyen: "Lời khuyên:\nIm lặng là cách bảo vệ mình tốt nhất trước những tranh cãi vô bổ." },
        { ten: "TRỞ NGẠI", loi: "Kế hoạch đang làm gặp trục trặc bất ngờ do yếu tố khách quan.", khuyen: "Lời khuyên:\nBình tĩnh tìm phương án dự phòng, đừng nản lòng vì chút khó khăn." },
        { ten: "BẤT AN", loi: "Tâm trạng dao động, lo lắng vô cớ về những chuyện chưa xảy ra.", khuyen: "Lời khuyên:\nTìm đến âm nhạc hoặc thiền định để lấy lại sự cân bằng tâm hồn." },
        { ten: "KHÓ KHĂN", loi: "Thử thách lớn xuất hiện để kiểm tra bản lĩnh và sự kiên trì của bạn.", khuyen: "Lời khuyên:\nCoi đây là cơ hội rèn luyện, bóng tối đêm nay dẫn tới bình minh." },
        { ten: "CÔ ĐỘC", loi: "Cảm giác không ai thấu hiểu mình, thiếu sự hỗ trợ từ đồng nghiệp.", khuyen: "Lời khuyên:\nHọc cách làm bạn với chính mình trước khi tìm cầu sự an ủi." },
        { ten: "XUNG ĐỘT", loi: "Dễ xảy ra mâu thuẫn, tranh cãi nảy lửa vì bất đồng quan điểm.", khuyen: "Lời khuyên:\nHạ cái tôi xuống, một điều nhịn là chín điều lành để giữ đại cục." },
        { ten: "HỎA TẬN", loi: "Năng lượng cạn kiệt, cảm giác mệt mỏi xâm chiếm tâm trí và cơ thể.", khuyen: "Lời khuyên:\nNghỉ ngơi là bắt buộc, đừng cố gồng mình thêm kẻo hại sức khỏe." },
        { ten: "U ÁM", loi: "Tầm nhìn bị che khuất, chưa tìm thấy lối thoát cho vấn đề hiện tại.", khuyen: "Lời khuyên:\nKhi chưa rõ đường đi, tốt nhất là đứng yên quan sát lắng nghe." },
        { ten: "NHẦM LẪN", loi: "Dễ xảy ra sai sót trong giấy tờ, con số hoặc nhầm lịch hẹn.", khuyen: "Lời khuyên:\nKiểm tra kỹ mọi thông tin trước khi xác nhận hoặc ký kết." },
        { ten: "TRỄ HẸN", loi: "Thời gian không ủng hộ, mọi thứ diễn ra chậm hơn kế hoạch.", khuyen: "Lời khuyên:\nChấp nhận trì hoãn và tận dụng nó để rà soát lại chi tiết nhỏ." },
        { ten: "LÃNG PHÍ", loi: "Đang dồn sức vào việc vô bổ, không mang lại giá trị thực tế.", khuyen: "Lời khuyên:\nTập trung vào mục tiêu chính, học cách nói không với lời mời vụn vặt." },
        { ten: "LẠC LỐI", loi: "Cảm thấy mất phương hướng, không biết mục tiêu thực sự mình là gì.", khuyen: "Lời khuyên:\nTìm một người tiền bối tin cậy để xin lời khuyên cho lối đi tới." },
        { ten: "MỆT MỎI", loi: "Sức khỏe có dấu hiệu đi xuống, cơ thể cần được chăm sóc khẩn cấp.", khuyen: "Lời khuyên:\nĐi ngủ sớm và uống đủ nước, đừng để công việc vắt kiệt sức lực." },
        { ten: "CHÊ KHEN", loi: "Nhận phải lời góp ý khắt khe, cảm thấy tổn thương lòng tự trọng.", khuyen: "Lời khuyên:\nLọc lấy ý kiến xây dựng, bỏ qua những lời ác ý không căn cứ." },
        { ten: "NGỜ VỰC", loi: "Thiếu niềm tin vào những người xung quanh làm trì trệ việc chung.", khuyen: "Lời khuyên:\nĐối thoại trực tiếp để làm rõ khúc mắc thay vì giữ sự nghi ngờ." },
        { ten: "GIÁN ĐOẠN", loi: "Việc đang làm bị ngắt quãng bởi những lý do khách quan không đáng có.", khuyen: "Lời khuyên:\nCoi đây là khoảng nghỉ cần thiết để xem lại toàn bộ quy trình." },
        { ten: "LO ÂU", loi: "Suy nghĩ quá nhiều tương lai khiến bạn bỏ lỡ niềm vui hiện tại.", khuyen: "Lời khuyên:\nLàm tốt việc hôm nay là cách chuẩn bị tốt nhất cho ngày mai." },
        { ten: "NHẠT NHẼO", loi: "Một ngày trôi qua thiếu điểm nhấn, cảm giác chán nản xâm chiếm.", khuyen: "Lời khuyên:\nThử món ăn mới hoặc con đường mới để kích hoạt cảm hứng sống." },
        { ten: "RỐI RẮM", loi: "Nhiều chuyện ập đến cùng lúc khiến bạn không biết bắt đầu từ đâu.", khuyen: "Lời khuyên:\nLiệt kê việc ra giấy và giải quyết từng thứ theo thứ tự ưu tiên." },
        { ten: "CHẬM TRỄ", loi: "Cơ hội có thể vuột mất nếu bạn tiếp tục do dự không quyết định.", khuyen: "Lời khuyên:\nGiảm bớt sự cầu toàn quá mức, đôi khi hoàn thành tốt hơn hoàn hảo." },
        { ten: "HỤT HẪNG", loi: "Kết quả không như mong đợi, cảm giác thất vọng về bản thân.", khuyen: "Lời khuyên:\nThất bại là mẹ thành công, rút ra bài học và bắt đầu lại mạnh mẽ." },
        { ten: "CỨNG NHẮC", loi: "Quá bảo thủ với ý kiến cá nhân khiến bạn bỏ lỡ góc nhìn mới.", khuyen: "Lời khuyên:\nLinh hoạt thích nghi hoàn cảnh là chìa khóa để tồn tại và phát triển." },
        { ten: "CẢ TIN", loi: "Dễ bị người khác lợi dụng lòng tốt hoặc cuốn vào lời hứa hão.", khuyen: "Lời khuyên:\nTỉnh táo xem xét động cơ đối phương trước khi quyết định giúp đỡ." },
        { ten: "TỔN THƯƠNG", loi: "Một lời nói vô tình từ người thân có thể khiến bạn đau lòng cả ngày.", khuyen: "Lời khuyên:\nBao dung với sự vô ý người khác cũng là cách giải phóng chính mình." },
        { ten: "HẤP TẤP", loi: "Dục tốc bất đạt, sự vội vàng chỉ dẫn đến những sai lầm ngớ ngẩn.", khuyen: "Lời khuyên:\nChậm lại một nhịp để quan sát, sự tỉ mỉ sẽ cứu vãn tình thế." },
        { ten: "PHIỀN MUỘN", loi: "Chuyện gia đình hoặc tình cảm gây bận tâm, mệt mỏi tinh thần.", khuyen: "Lời khuyên:\nTìm không gian riêng tư tĩnh tâm, đừng mang bực dọc vào công việc." },
        { ten: "ÁP LỰC", loi: "Khối lượng công việc quá tải đè nặng lên vai, cảm giác nghẹt thở.", khuyen: "Lời khuyên:\nHọc cách ủy quyền hoặc nhờ giúp đỡ, bạn không thể làm tất cả." },
        { ten: "THẤT THOÁT", loi: "Đồ đạc dễ hỏng hóc hoặc thất lạc, cẩn thận với đồ điện tử.", khuyen: "Lời khuyên:\nKiểm tra lại khóa cửa, túi xách trước khi ra ngoài tránh rắc rối." },
        { ten: "DO DỰ", loi: "Đứng giữa hai lựa chọn mà không dám quyết, lãng phí thời gian.", khuyen: "Lời khuyên:\nChọn con đường mang lại nhiều sự phát triển nhất cho bản thân." },
        { ten: "CÁCH TRỞ", loi: "Giao tiếp gặp trục trặc, ý kiến của bạn không được lắng nghe.", khuyen: "Lời khuyên:\nThay đổi cách truyền đạt súc tích hơn để thuyết phục người khác." },
        { ten: "ẢO TƯỞNG", loi: "Đang mơ mộng những điều xa vời thực tế, thiếu tính khả thi.", khuyen: "Lời khuyên:\nĐặt đôi chân xuống đất, bắt đầu từ những hành động nhỏ thiết thực." },
        { ten: "HAO TÂM", loi: "Suy nghĩ quá nhiều cho người khác mà quên chăm sóc chính mình.", khuyen: "Lời khuyên:\nBạn không thể giúp ai khi đang cạn kiệt, hãy yêu lấy mình trước." },
        { ten: "BẤT CẨN", loi: "Một lỗi nhỏ do thiếu quan sát có thể gây hậu quả dây chuyền.", khuyen: "Lời khuyên:\nRà soát các bước quan trọng, đừng chủ quan vì đã làm nhiều lần." },
        { ten: "CHÊ BAI", loi: "Nhận phải chỉ trích tiêu cực, làm nản lòng ý chí phấn đấu.", khuyen: "Lời khuyên:\nBiến chỉ trích thành động lực chứng minh năng lực thực sự của bạn." },
        { ten: "QUÊN LÃNG", loi: "Dễ quên các việc quan trọng hoặc các mốc thời gian cần thiết.", khuyen: "Lời khuyên:\nSử dụng ứng dụng nhắc việc để quản lý cuộc sống tốt hơn." },
        { ten: "XAO NHÃNG", loi: "Khó tập trung việc chính, dễ bị ảnh hưởng bởi mạng xã hội.", khuyen: "Lời khuyên:\nTắt thông báo điện thoại và dành 1 tiếng tập trung tuyệt đối." },
        { ten: "CHẬT VẬT", loi: "Mọi việc khởi đầu đều khó khăn, cần nỗ lực gấp đôi bình thường.", khuyen: "Lời khuyên:\nVạn sự khởi đầu nan, sự kiên trì sẽ định đoạt thành công." },
        { ten: "BỊ ĐỘNG", loi: "Đang phải chạy theo kế hoạch người khác, thiếu quyền tự quyết.", khuyen: "Lời khuyên:\nHọc cách đặt ranh giới và chủ động đề xuất ý kiến riêng mình." },
        { ten: "NGĂN TRỞ", loi: "Sự việc diễn ra không như ý do ngăn cản từ yếu tố bên ngoài.", khuyen: "Lời khuyên:\nĐừng cố chống dòng nước, hãy tìm cách lướt trên nó khéo léo." },
        { ten: "LƯỠNG LỰ", loi: "Lo sợ thất bại khiến bạn không dám nắm bắt trải nghiệm mới.", khuyen: "Lời khuyên:\nNỗi sợ là ảo ảnh, bước qua nó bạn sẽ thấy thế giới rộng lớn." },
        { ten: "CẢ MẾN", loi: "Để tình cảm cá nhân lấn át lý trí trong các quyết định sự nghiệp.", khuyen: "Lời khuyên:\nTrong công việc cần sự lạnh lùng của con số và thực tế khách quan." },
        { ten: "SƠ SUẤT", loi: "Chủ quan trong khâu kiểm tra cuối cùng dẫn đến kết quả chưa tốt.", khuyen: "Lời khuyên:\nLuôn có bước kiểm tra chéo để đảm bảo mọi thứ hoàn hảo nhất." },
        { ten: "CÔ LẬP", loi: "Cảm thấy bị tách rời khỏi dòng chảy chung, thiếu sự kết nối.", khuyen: "Lời khuyên:\nChủ động mở lời giúp đỡ người khác, sự ấm áp xóa tan bức tường." },
        { ten: "NHẠY CẢM", loi: "Dễ xúc động và suy nghĩ quá mức về những lời nói bâng quơ.", khuyen: "Lời khuyên:\nĐừng nghiêm trọng hóa mọi chuyện, giữ tâm thế vững chãi tự tin." },
        { ten: "NÁO NHIỆT", loi: "Môi trường quá ồn ào khiến bạn không thể tập trung tư duy sâu.", khuyen: "Lời khuyên:\nTìm góc yên tĩnh cuối ngày để đối thoại với chính bản thân mình." },
        { ten: "RÀNG BUỘC", loi: "Cảm thấy bị bó buộc bởi quy tắc cũ kỹ, thiếu không gian sáng tạo.", khuyen: "Lời khuyên:\nTự tháo xiềng xích định kiến trong tâm trí, bạn sẽ thấy tự do." },
        { ten: "KHẮT KHE", loi: "Đang quá nghiêm khắc với bản thân, khiến niềm vui giảm sút.", khuyen: "Lời khuyên:\nHãy tha thứ cho lỗi lầm nhỏ, đó là bài học để bạn trưởng thành." },
        { ten: "TĨNH LẶNG", loi: "Một ngày trôi qua bình lặng đến mức tẻ nhạt nếu không biết tìm vui.", khuyen: "Lời khuyên:\nHạnh phúc nằm ở điều nhỏ bé, hãy thưởng cho mình một ly trà ngon." }
    ]
};

// --- LOGIC GIỮ NGUYÊN ---

function typeWriter(elementId, text, speed = 50) {
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

function getDailyEnergyGroup(userName) {
    const today = new Date().toISOString().slice(0, 10);
    const seed = today + userName.trim().toLowerCase() + "TranBaoNam2026";
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = ((hash << 5) - hash) + seed.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash) % 2 === 0 ? "NHOM_CAT_TUONG" : "NHOM_BINH_AN";
}

function gieoQue() {
    if (isShaking) return;
    const nameInput = document.getElementById('user-name').value;
    if (nameInput.trim().length < 2) {
        alert("Nhập tên đã ông ơi!");
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
        alert("Mai quay lại nhé!");
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

        const groupName = getDailyEnergyGroup(userName);
        const currentGroup = dataFortune[groupName];
        
        const day = new Date().getDate();
        const seedIndex = (userName.length * day) + day;
        const ngauNhien = currentGroup[seedIndex % currentGroup.length];
        
        const hour = new Date().getHours();
        let greeting = "";
        if (hour < 11) greeting = "Sáng sớm thanh tịnh, ";
        else if (hour < 14) greeting = "Trưa nắng đứng bóng, ";
        else if (hour < 18) greeting = "Chiều tà buông xuống, ";
        else greeting = "Đêm trường tĩnh lặng, ";

        // Kết hợp lời giải và lời khuyên (đã có \n để xuống dòng)
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
