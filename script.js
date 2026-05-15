/**
 * TIỆM QUẺ VỈA HÈ - PHIÊN BẢN HOÀN THIỆN 2026
 * Tác giả: Trần Bảo Nam
 * Cơ chế: Gieo quẻ theo Tên + Ngày
 */

const MAX_FREE_GIEOS = 2; 
let isShaking = false; 

// KHO 108 QUẺ BÓI (Giữ nguyên dữ liệu của Nam)
const dataFortune = {
    "NHOM_CAT_TUONG": [
        { ten: "ĐẠI CÁT", loi: "Vận may bùng nổ, dự định bấy lâu sẽ thành công rực rỡ." },
        { ten: "TRUNG CÁT", loi: "Mọi việc hanh thông, quý nhân âm thầm giúp đỡ vượt khó." },
        { ten: "TIỂU CÁT", loi: "Có lộc ăn uống hoặc quà tặng bất ngờ trong ngày hôm nay." },
        { ten: "HỮU LỘC", loi: "Tiền bạc đổ về túi, thích hợp lên kế hoạch tài chính dài hạn." },
        { ten: "KHỞI SẮC", loi: "Công việc tiến triển, kiên trì bấy lâu đã bắt đầu hái quả ngọt." },
        { ten: "QUÝ NHÂN", loi: "Có người đưa tay giúp đỡ lúc cần nhất, hãy chú ý mối quan hệ cũ." },
        { ten: "HỶ SỰ", loi: "Tin vui từ phương xa đưa tới, cơ hội hợp tác mới đang mở ra." },
        { ten: "VƯỢNG KHÍ", loi: "Năng lượng dồi dào, làm gì cũng thuận tay, đừng bỏ lỡ thời điểm vàng." },
        { ten: "MINH TRIẾT", loi: "Đầu tư kiến thức là sáng suốt nhất, ý tưởng cũ mang lại lợi ích mới." },
        { ten: "THANH THẢN", loi: "Gánh nặng tâm lý được trút bỏ, giải pháp cho vấn đề sẽ xuất hiện." },
        { ten: "THÀNH TỰU", loi: "Cột mốc quan trọng sắp hoàn thành, hãy tự thưởng cho bản thân." },
        { ten: "TẤN TỚI", loi: "Vận trình đang lên, giữ vững nhịp độ thì thành quả sẽ bền vững." },
        { ten: "NHƯ Ý", loi: "Muốn việc gì được việc đó, sự vừa đủ mang lại hạnh phúc lớn nhất." },
        { ten: "VIÊN MÃN", loi: "Gia đạo yên vui, bạn bè ủng hộ, một ngày trọn vẹn cảm xúc." },
        { ten: "KHA ĐIỀM", loi: "Điềm báo tốt lành cho một chuyến đi hoặc thay đổi nơi ở mới." },
        { ten: "THIÊN THỜI", loi: "Thời cơ đã chín muồi, hãy quyết đoán hành động ngay." },
        { ten: "ĐỊA LỢI", loi: "Môi trường xung quanh đang ủng hộ bạn hết mình." },
        { ten: "NHÂN HÒA", loi: "Sự đoàn kết mang lại sức mạnh, hãy tin tưởng đồng đội." },
        { ten: "QUANG MINH", loi: "Mọi uẩn khúc được làm sáng tỏ, sự chân thành được đền đáp." },
        { ten: "LAI CÁT", loi: "Vận may đang trên đường tới, hãy mở lòng đón nhận." },
        { ten: "VẠN SỰ THÀNH", loi: "Khó khăn đến mấy cũng tìm được lối thoát kỳ diệu." },
        { ten: "THANH NHÀN", loi: "Một ngày thong dong, không lo âu, tâm hồn thư thái." },
        { ten: "ĐẮC LỢI", loi: "Nắm lợi thế trong tay, công việc kinh doanh vô cùng suôn sẻ." },
        { ten: "HƯƠNG THƠM", loi: "Danh tiếng vang xa, nỗ lực của bạn bắt đầu được công nhận." },
        { ten: "VĨNH CỬU", loi: "Nền tảng vững chắc, những gì bạn xây dựng sẽ bền lâu." },
        { ten: "THIÊN PHÚ", loi: "Tài năng được bộc lộ, hãy tự tin thể hiện bản sắc riêng." },
        { ten: "AN NHIÊN", loi: "Tâm không biến động giữa dòng đời, hạnh phúc tự tìm đến." },
        { ten: "TÀI LỘC", loi: "Túi tiền rủng rỉnh, vận may tài chính cực kỳ tốt." },
        { ten: "PHÁT ĐẠT", loi: "Sự nghiệp thăng tiến, có cơ hội thăng quan tiến chức." },
        { ten: "TRÍ TUỆ", loi: "Đầu óc sáng suốt, đưa ra những quyết định đúng đắn." },
        { ten: "PHÚC ĐỨC", loi: "Lộc từ tổ tiên, mọi việc dữ đều hóa lành." },
        { ten: "BẢO VẬT", loi: "Tìm được thứ giá trị, có thể là vật chất hoặc tinh thần." },
        { ten: "AN KHANG", loi: "Sức khỏe dồi dào, tinh thần phấn chấn làm việc hiệu quả." },
        { ten: "TINH ANH", loi: "Gặp được người giỏi, học hỏi được nhiều điều hay." },
        { ten: "THUẬN LỢI", loi: "Làm đâu thắng đó, không gặp bất cứ cản trở nào." },
        { ten: "HÒA HỢP", loi: "Gia đình êm ấm, tình cảm lứa đôi thêm phần gắn kết." },
        { ten: "VƯỢNG PHÁT", loi: "Công việc mở rộng, quy mô ngày càng phát triển." },
        { ten: "TỰ TẠI", loi: "Không vướng bận, tự do làm điều mình yêu thích." },
        { ten: "MAY MẮN", loi: "Gặp may bất ngờ, chuyện không tưởng bỗng thành sự thật." },
        { ten: "THÔNG SUỐT", loi: "Mọi bế tắc đều có lời giải, tinh thần minh mẫn." },
        { ten: "BỀN VỮNG", loi: "Mối quan hệ lâu dài, đối tác tin tưởng tuyệt đối." },
        { ten: "CAO QUÝ", loi: "Được mọi người nể trọng, khẳng định được vị thế." },
        { ten: "NHIỆT HUYẾT", loi: "Năng lượng làm việc tràn trề, truyền cảm hứng cho người khác." },
        { ten: "SÁNG LẠNG", loi: "Tương lai rộng mở, nhiều cơ hội mới đang chờ đón." },
        { ten: "THU HOẠCH", loi: "Sau bao ngày vất vả, hôm nay là ngày gặt hái." },
        { ten: "DUYÊN LÀNH", loi: "Gặp được tri kỷ hoặc người cùng chí hướng." },
        { ten: "SUNG TÚC", loi: "Cuộc sống đầy đủ, không thiếu thốn thứ gì." },
        { ten: "CHÍNH TRỰC", loi: "Làm việc đúng lương tâm, kết quả nhận được rất xứng đáng." },
        { ten: "MƯA THUẬN", loi: "Hoàn cảnh bên ngoài cực kỳ chiều lòng người." },
        { ten: "GIÓ HÒA", loi: "Mọi mâu thuẫn đều tan biến, không khí ôn hòa." },
        { ten: "VUI VẺ", loi: "Một ngày tràn ngập tiếng cười và những câu chuyện thú vị." },
        { ten: "ĐOÀN VIÊN", loi: "Hội ngộ người thân, cảm giác ấm áp bao trùm." },
        { ten: "PHÁT TÀI", loi: "Lợi nhuận tăng cao, buôn bán đắt may." },
        { ten: "CẦU ĐƯỢC ƯỚC THẤY", loi: "Lòng người thỏa mãn, cầu gì được nấy." },
        { ten: "SÁNG TẠO", loi: "Nhiều ý tưởng mới lạ nảy ra, làm việc cực năng suất." },
        { ten: "TỰ TIN", loi: "Vượt qua nỗi sợ, khẳng định bản lĩnh cá nhân." },
        { ten: "QUYẾT ĐOÁN", loi: "Lựa chọn chính xác, mang lại lợi ích lâu dài." },
        { ten: "THÀNH CÔNG", loi: "Kết quả mĩ mãn cho một hành trình dài." }
    ],
    "NHOM_BINH_AN": [
        { ten: "TRÌ TRỆ", loi: "Mọi việc dậm chân tại chỗ, đừng cưỡng cầu, hãy kiên nhẫn đợi." },
        { ten: "HAU TỔN", loi: "Cẩn thận hao tài tốn của vào việc không đáng, hãy kiểm tra lại ví." },
        { ten: "THỊ PHI", loi: "Có điềm báo lời ra tiếng vào, tốt nhất nên giữ im lặng." },
        { ten: "TRỞ NGẠI", loi: "Kế hoạch suôn sẻ gặp trục trặc bất ngờ, cần phương án dự phòng." },
        { ten: "BẤT AN", loi: "Tâm trạng dao động, đừng đưa ra quyết định quan trọng lúc này." },
        { ten: "KHÓ KHĂN", loi: "Thử thách tới để kiểm tra bản lĩnh, bóng tối nào rồi cũng qua." },
        { ten: "CÔ ĐỘC", loi: "Cảm giác không ai hiểu mình, hãy dành thời gian tự đối thoại." },
        { ten: "XUNG ĐỘT", loi: "Dễ xảy ra mâu thuẫn, một điều nhịn là chín điều lành." },
        { ten: "HỎA TẬN", loi: "Năng lượng cạn kiệt, hãy nghỉ ngơi thay vì cố gồng mình." },
        { ten: "U ÁM", loi: "Tầm nhìn bị che khuất, đứng yên quan sát tốt hơn là tiến tới." },
        { ten: "NHẦM LẪN", loi: "Cẩn thận trong giấy tờ, con số để tránh sai sót đáng tiếc." },
        { ten: "TRỄ HẸN", loi: "Thời gian không ủng hộ, mọi thứ diễn ra chậm hơn dự kiến." },
        { ten: "LÃNG PHÍ", loi: "Đừng dồn sức vào những việc vô bổ, hãy tập trung mục tiêu chính." },
        { ten: "LẠC LỐI", loi: "Cảm thấy mất phương hướng, cần tìm một người dẫn dắt." },
        { ten: "MỆT MỎI", loi: "Sức khỏe xuống dốc, cần ưu tiên việc chăm sóc bản thân." },
        { ten: "CHÊ KHEN", loi: "Đừng quá bận tâm lời người khác, hãy tin vào giá trị của mình." },
        { ten: "NGỜ VỰC", loi: "Thiếu niềm tin vào đồng nghiệp làm trì trệ công việc chung." },
        { some: "GIÁN ĐOẠN", loi: "Việc đang làm bị ngắt quãng nửa chừng bởi lý do khách quan." },
        { ten: "LO ÂU", loi: "Suy nghĩ quá nhiều về tương lai làm hỏng niềm vui hiện tại." },
        { ten: "NHẠT NHẼO", loi: "Một ngày trôi qua thiếu điểm nhấn, hãy thử làm điều gì đó mới." },
        { ten: "RỐI RẮM", loi: "Nhiều chuyện ập đến cùng lúc khiến bạn khó xử lý hết." },
        { ten: "CHẬM TRỄ", loi: "Cơ hội có thể vuột mất nếu bạn không quyết đoán nhanh hơn." },
        { ten: "HỤT HẪNG", loi: "Kết quả không như mong đợi ban đầu, hãy giữ tinh thần lạc quan." },
        { ten: "CỨNG NHẮC", loi: "Quá bảo thủ sẽ khiến bạn bỏ lỡ những góc nhìn mới mẻ." },
        { ten: "CẢ TIN", loi: "Dễ bị người khác lợi dụng lòng tốt, hãy tỉnh táo hơn." },
        { ten: "TỔN THƯƠNG", loi: "Một lời nói vô tình có thể làm bạn buồn, hãy bao dung." },
        { ten: "HẤP TẤP", loi: "Dục tốc bất đạt, vội vàng chỉ dẫn đến sai lầm." },
        { ten: "PHIỀN MUỘN", loi: "Chuyện gia đình gây bận tâm, cần sự bình tĩnh để giải quyết." },
        { ten: "ÁP LỰC", loi: "Khối lượng công việc quá tải, hãy chia nhỏ mục tiêu." },
        { ten: "THẤT THOÁT", loi: "Đồ đạc dễ bị hỏng hóc hoặc thất lạc, hãy giữ gìn cẩn thận." },
        { ten: "DO DỰ", loi: "Đứng giữa hai lựa chọn mà không biết đi đường nào." },
        { ten: "CÁCH TRỞ", loi: "Giao tiếp gặp khó khăn, ý kiến không được lắng nghe." },
        { ten: "ẢO TƯỞNG", loi: "Đừng mơ mộng quá xa vời, hãy nhìn vào thực tế trước mắt." },
        { ten: "HAO TÂM", loi: "Suy nghĩ quá nhiều cho người khác mà quên đi chính mình." },
        { ten: "BẤT CẨN", loi: "Một lỗi nhỏ cũng có thể gây ra hậu quả lớn, hãy rà soát kỹ." },
        { ten: "CHÊ BAI", loi: "Nhận phải lời góp ý tiêu cực, hãy biến nó thành động lực." },
        { ten: "QUÊN LÃNG", loi: "Dễ quên những việc quan trọng, nên ghi chú lại cẩn thận." },
        { ten: "XAO NHÃNG", loi: "Khó tập trung vào việc chính, dễ bị ảnh hưởng bởi xung quanh." },
        { ten: "CHẬT VẬT", loi: "Làm gì cũng thấy khó khăn ban đầu, cần nỗ lực gấp đôi." },
        { ten: "BÌ ĐỘNG", loi: "Phải chạy theo kế hoạch của người khác, thiếu sự chủ động." },
        { ten: "NGĂN TRỞ", loi: "Sự việc không diễn ra theo ý muốn do yếu tố thời tiết hoặc con người." },
        { ten: "LƯỠNG LỰ", loi: "Không dám bước ra khỏi vùng an toàn, bỏ lỡ trải nghiệm." },
        { ten: "CẢ MẾN", loi: "Để tình cảm lấn át lý trí, dễ đưa ra lựa chọn sai lầm." },
        { ten: "SƠ SUẤT", loi: "Chủ quan trong công việc dẫn đến kết quả không hoàn hảo." },
        { ten: "CÔ LẬP", loi: "Cảm thấy bị tách rời khỏi tập thể, cần sự hòa nhập hơn." },
        { ten: "NHẠY CẢM", loi: "Dễ xúc động và suy nghĩ quá mức về những điều nhỏ nhặt." },
        { ten: "NÁO NHIỆT", loi: "Môi trường quá ồn ào khiến bạn không thể tập trung suy nghĩ." },
        { ten: "RÀNG BUỘC", loi: "Cảm thấy thiếu tự do trong hành động và suy nghĩ." },
        { ten: "KHẮT KHE", loi: "Quá nghiêm khắc với bản thân làm giảm đi niềm vui sống." },
        { ten: "TĨNH LẶNG", loi: "Một ngày buồn tẻ nếu bạn không tự tìm niềm vui cho mình." }
    ]
};

// --- CHỈNH SỬA CỦA BẢO NAM: THUẬT TOÁN THEO TÊN + NGÀY ---
function getDailyEnergyGroup(userName) {
    const today = new Date().toISOString().slice(0, 10);
    
    // Trộn Ngày + Tên Người Dùng + Muối (TranBaoNam)
    const seed = today + userName.trim().toLowerCase() + "TranBaoNam2026";
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = ((hash << 5) - hash) + seed.charCodeAt(i);
        hash |= 0;
    }
    // Dựa vào số cuối của Hash để chọn nhóm (Chẵn: Cát tường, Lẻ: Bình an)
    return Math.abs(hash) % 2 === 0 ? "NHOM_CAT_TUONG" : "NHOM_BINH_AN";
}

// HIỆU ỨNG GÕ CHỮ (Giữ nguyên)
function typeWriter(elementId, text, speed = 60) {
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

// LOGIC GIEO QUẺ (Cập nhật check Tên)
function gieoQue() {
    if (isShaking) return;

    // Lấy tên từ ô input Nam mới thêm vào index.html
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
        alert("Duyên hôm nay đã đủ. Hãy quay lại vào ngày mai nhé!");
        return;
    }

    thucHienGieo(gieoCount, nameInput);
}

// HIỆU ỨNG RUNG VÀ HIỂN THỊ KẾT QUẢ
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
        
        // --- CHỐT HẠ: Bốc quẻ dựa trên Tên nhập vào ---
        const groupName = getDailyEnergyGroup(userName);
        const currentGroup = dataFortune[groupName];
        
        // Dùng thuật toán chọn phần tử ngẫu nhiên nhưng cố định theo tên trong ngày
        const seedIndex = userName.length + new Date().getDate();
        const ngauNhien = currentGroup[seedIndex % currentGroup.length];
        
        const hour = new Date().getHours();
        let greeting = "";
        if (hour < 11) greeting = "Sáng sớm thanh tịnh, ";
        else if (hour < 14) greeting = "Trưa nắng đứng bóng, ";
        else if (hour < 18) greeting = "Chiều tà buông xuống, ";
        else greeting = "Đêm trường tĩnh lặng, ";

        const fullText = greeting + ngauNhien.loi;
        
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
