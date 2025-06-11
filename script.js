document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quizForm');
    const part1QuestionsDiv = document.getElementById('part1-questions');
    const part2QuestionsDiv = document.getElementById('part2-questions');
    const resultDiv = document.getElementById('result');
    const totalScoreSpan = document.getElementById('totalScore');

    // Define questions and answers
    const questionsPart1 = [
        {
            id: 1,
            question: "Sự ra đời của Liên bang Cộng hòa xã hội chủ nghĩa Xô viết có ý nghĩa nào sau đây đối với nước Nga?",
            options: ["A. Nhân dân lao động được làm chủ vận mệnh đất nước.", "B. Dẫn đến tình trạng hai chính quyền song song tồn tại.", "C. Mở ra con đường giải phóng cho các nước trên thế giới.", "D. Xác lập chế độ xã hội chủ nghĩa trên toàn lãnh thổ Liên Xô."],
            answer: "D"
        },
        {
            id: 2,
            question: "Thắng lợi của cuộc khởi nghĩa Lam Sơn (1418 – 1427) gắn liền với vai trò của",
            options: ["A. Quang Trung.", "B. Lê Lợi.", "C. Lý Thường Kiệt.", "D. Ngô Quyền."],
            answer: "B"
        },
        {
            id: 3,
            question: "Những quốc gia nào sau đây đóng vai trò quyết định, đồng thời là sáng lập viên của tổ chức Liên hợp quốc?",
            options: ["A. Trung Quốc, Mỹ, Pháp.", "B. Liên Xô, Mỹ, Anh.", "C. Liên Xô, Trung Quốc, Việt Nam.", "D. Mỹ, Anh, Thái Lan."],
            answer: "B"
        },
        {
            id: 4,
            question: "Quốc gia nào sau đây là một trong những thành viên sáng lập Hiệp hội các quốc gia Đông Nam Á (ASEAN)?",
            options: ["A. Nam Phi.", "B. Pháp.", "C. Thái Lan.", "D. Trung Quốc."],
            answer: "C"
        },
        {
            id: 5,
            question: "Cộng đồng ASEAN hoạt động dựa trên cơ sở pháp lí là",
            options: ["A. Hiến chương Liên hợp quốc.", "B. Hiến chương ASEAN.", "C. Tuyên ngôn độc lập.", "D. Tầm nhìn ASEAN 2020."],
            answer: "B"
        },
        {
            id: 6,
            question: "Địa phương cuối cùng giành chính quyền trong cách mạng tháng Tám năm 1945 ở Việt Nam là",
            options: ["A. Huế và Sài Gòn.", "B. Hà Nội và Huế.", "C. Bắc Giang và Nam Định.", "D. Hà Tiên và Đồng Nai Thượng."],
            answer: "D"
        },
        {
            id: 7,
            question: "Chiến dịch nào sau đây diễn ra trong cuộc kháng chiến chống Mỹ cứu nước?",
            options: ["A. Chiến dịch Biên giới thu – đông.", "B. Chiến dịch Hồ Chí Minh.", "C. Chiến dịch Việt Bắc thu – đông.", "D. Chiến dịch Điện Biên Phủ."],
            answer: "B"
        },
        {
            id: 8,
            question: "Trong giai đoạn 1961 – 1965, quân dân miền Nam đấu tranh chống chiến lược chiến tranh nào sau đây?",
            options: ["A. Chiến tranh phá hoại.", "B. Chiến tranh đặc biệt.", "C. Chiến tranh cục bộ.", "D. Việt Nam hóa chiến tranh."],
            answer: "B"
        },
        {
            id: 9,
            question: "Trọng tâm của công cuộc Đổi mới ở Việt Nam (từ năm 1986) là tập trung vào lĩnh vực",
            options: ["A. kinh tế.", "B. chính trị.", "C. quốc phòng.", "D. văn hóa."],
            answer: "A"
        },
        {
            id: 10,
            question: "Ngày 6/3/1946, Chính phủ Việt Nam Dân chủ Cộng hòa đã kí Hiệp định Sơ bộ với đại diện Chính phủ",
            options: ["A. Nhật Bản.", "B. Pháp.", "C. Mỹ.", "D. Trung Quốc."],
            answer: "B"
        },
        {
            id: 11,
            question: "Năm 1995, Việt Nam gia nhập tổ chức khu vực nào sau đây?",
            options: ["A. Tổ chức Liên hợp quốc (UN).", "B. Tổ chức Hiệp ước Bắc Đại Tây Dương (NATO).", "C. Hiệp hội các quốc gia Đông Nam Á (ASEAN).", "D. Tổ chức Y tế thế giới (WHO)"],
            answer: "C"
        },
        {
            id: 12,
            question: "Trong những năm 1923 – 1924, Nguyễn Ái Quốc hoạt động chủ yếu tại",
            options: ["A. Nhật Bản.", "B. Nam Phi.", "C. Việt Nam.", "D. Liên Xô."],
            answer: "D"
        },
        {
            id: 13,
            question: "Từ năm 2010, nền kinh tế Trung Quốc đạt được thành tựu nổi bật nào sau đây?",
            options: ["A. Vượt qua Mỹ, trở thành nền kinh tế lớn nhất thế giới.", "B. Vượt qua Nhật Bản và duy trì vị trí thứ hai thế giới.", "C. Vươn lên trở thành cường quốc quân sự ở châu Á.", "D. Bước đầu có tích luỹ, có dự trữ vàng và các ngoại tệ."],
            answer: "B"
        },
        {
            id: 14,
            question: "Một trong những nhân tố quyết định cho thắng lợi trong các cuộc kháng chiến chống ngoại xâm của dân tộc Việt Nam (trước năm 1945) là",
            options: ["A. Kết hợp đấu tranh quân sự và ngoại giao.", "B. Đa phương hoá trong quan hệ quốc tế.", "C. Phát huy được sức mạnh toàn dân tộc.", "D. Chủ trương giành thắng lợi từng bước."],
            answer: "C"
        },
        {
            id: 15,
            question: "Cuộc chiến tranh cục bộ nào dưới đây diễn ra dưới ảnh hưởng của Chiến tranh lạnh?",
            options: ["A. Chiến tranh thế giới lần thứ nhất (1914 – 1918).", "B. Chiến tranh xâm lược Việt Nam của Mỹ (1954 – 1975).", "C. Cuộc chiến chống lực lượng khủng bố.", "D. Chiến tranh thế giới lần thứ hai ( 1939 – 1945)."],
            answer: "B"
        },
        {
            id: 16,
            question: "Điều kiện tiên quyết để các nước trong khu vực gia nhập vào tổ chức ASEAN là gì?",
            options: ["A. Đều có nền kinh tế phát triển.", "B. Đều đã giành được độc lập.", "C. Có sự tương đồng về ngôn ngữ và văn hóa.", "D. Đều chịu ảnh hưởng của các cường quốc."],
            answer: "B"
        },
        {
            id: 17,
            question: "Nội dung nào sau đây không phải là nhiệm vụ của miền Bắc trong giai đoạn 1954 – 1960?",
            options: ["A. Đấu tranh chống chiến lược Việt Nam hóa chiến tranh.", "B. Cải tạo quan hệ sản xuất, bước đầu phát triển kinh tế – xã hội.", "C. Thực hiện khôi phục kinh tế, hàn gắn vết thương chiến tranh.", "D. Hoàn thành việc cải cách ruộng đất để “người cày có ruộng”."],
            answer: "A"
        },
        {
            id: 18,
            question: "Đến năm 2008, Việt Nam đạt được thành tựu tiêu biểu nào sau đây về kinh tế?",
            options: ["A. Chủ động thiết lập quan hệ ngoại giao với Liên Xô.", "B. Từng bước trở thành nước đang phát triển có thu nhập trung bình.", "C. Bình thường hoá quan hệ ngoại giao với Liên Xô, Mỹ.", "D. Chính thức trở thành thành viên của Liên hợp quốc."],
            answer: "B"
        },
        {
            id: 19,
            question: "Các hoạt động đối ngoại của nước Việt Nam Dân chủ Cộng hoà trong giai đoạn 1945 – 1954 không nhằm mục tiêu nào sau đây?",
            options: ["A. Bảo vệ vững chắc chính quyền cách mạng mới thành lập.", "B. Tranh thủ sự ủng hộ của quốc tế với cuộc kháng chiến.", "C. Tránh tình trạng đối đầu cùng lúc với nhiều kẻ thù.", "D. Buộc Mỹ kí Hiệp định Pari về chấm dứt chiến tranh."],
            answer: "D"
        },
        {
            id: 20,
            question: "Trong những năm 1917 – 1920, Nguyễn Ái Quốc không có hoạt động nào sau đây?",
            options: ["A. Triệu tập và chủ trì Hội nghị thành lập Đảng Cộng sản Việt Nam.", "B. Gửi bản Yêu sách của nhân dân An Nam đến Hội nghị Véc xai.", "C. Đọc Sơ thảo Luận cương về vấn đề dân tộc và vấn đề thuộc địa.", "D. Tán thành gia nhập Quốc tế Cộng sản, tham gia sáng lập thành lập Đảng Cộng sản Pháp."],
            answer: "A"
        },
        {
            id: 21,
            question: "Nội dung nào sau đây không phải là biểu hiện của xu thế đa cực trong quan hệ quốc tế sau Chiến tranh lạnh?",
            options: ["A. Mỹ vẫn là cường quốc số 1 thế giới, có ảnh hưởng lớn đến quan hệ quốc tế.", "B. Trung Quốc vươn lên trở thành nền kinh tế lớn thứ hai thế giới (sau Mỹ).", "C. Mỹ thành công trong việc thiết lập trật tự thế giới đơn cực, bá chủ thế giới.", "D. Các trung tâm, tổ chức kinh tế, tài chính quốc tế và khu vực có vai trò lớn."],
            answer: "C"
        },
        {
            id: 22,
            question: "Quá trình kết thúc cuộc kháng chiến chống thực dân Pháp (1945 - 1954) và cuộc kháng chiến chống Mỹ, cứu nước (1954 - 1975) của nhân dân Việt Nam có điểm gì khác nhau?",
            options: ["A. Kết hợp giữa sức mạnh truyền thống của dân tộc với sức mạnh hiện tại", "B. Huy động mọi nguồn lực để tạo nên sức mạnh giành thắng lợi", "C. Cách thức kết hợp đấu tranh quân sự với đấu tranh ngoại giao", "D. Lấy đấu tranh quân sự làm yếu tố quyết định thắng lợi trong chiến tranh."],
            answer: "C"
        },
        {
            id: 23,
            question: "Thực tiễn công cuộc đổi mới ở Việt Nam từ năm 1986 đến nay đã để lại bài học kinh nghiệm nào sau đây?",
            options: ["A. Cần hạn chế tiêu cực của kinh tế thị trường vì đó là sản phẩm của chủ nghĩa tư bản.", "B. Phải tiến hành tư nhân hoá, tự do hoá toàn bộ nền kinh tế để giải phóng sức lao động.", "C. Cần phải xây dựng nền kinh tế thị trường với mục tiêu phải vì lợi ích của nhân dân.", "D. Đổi mới toàn bộ các lĩnh vực của đất nước với tốc độ nhanh nhất để thúc đẩy sản xuất."],
            answer: "C"
        },
        {
            id: 24,
            question: "Trong quá trình chuẩn bị và lãnh đạo Cách mạng tháng Tám năm 1945, nội dung nào sau đây phản ánh đóng góp của Hồ Chí Minh?",
            options: ["A. Ra Lời kêu gọi toàn quốc kháng chiến.", "B. Chủ trì Hội nghị Ban Chấp hành Trung ương lâm thời (10/1930).", "C. Điều chỉnh và bổ sung đường lối cách mạng trong tình hình mới.", "D. Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân."],
            answer: "C"
        }
    ];

    const questionsPart2 = [
        {
            id: 1,
            question: "Cho đoạn tư liệu sau đây: “Trật tự thế giới mới này được hình thành như thế nào, còn tùy thuộc ở nhiều nhân tố: Sự phát triển về thực lực kinh tế, chính trị, quân sự của các cường quốc Mỹ, Nga, Trung Quốc, Anh, Pháp, Nhật Bản, Đức trong cuộc chạy đua về sức mạnh quốc gia tổng hợp... Sự lớn mạnh của lực lượng cách mạng thế giới (sự thành bại của công cuộc cải cách, đổi mới ở các nước xã hội chủ nghĩa,...); Sự phát triển của cách mạng khoa học – kĩ thuật sẽ còn tiếp tục tạo ra những “đột phá” và biến chuyển trên cục diện thế giới”.",
            sub_questions: [
                { text: "a) Đoạn tư liệu là minh chứng cho xu thế hai cực, nhiều trung tâm trong quan hệ quốc tế trong thời gian diễn ra cuộc Chiến tranh lạnh.", answer: "Sai" },
                { text: "b) Trong trật tự thế giới mới sau chiến tranh lạnh, các quốc gia vừa cạnh tranh vừa hợp tác nhằm vươn lên và khẳng định vị thế của mình.", answer: "Đúng" },
                { text: "c) Khái niệm đa cực chỉ trạng thái địa – chính trị toàn cầu với ba trung tâm quyền lực chi phối là Mỹ, Liên bang Nga và Trung Quốc.", answer: "Sai" },
                { text: "d) Cuộc cách mạng khoa học – kĩ thuật vừa là nguyên nhân dẫn đến sự xói mòn và sụp đổ của trật tự hai cực I-an-ta, vừa là nhân tố tác động đến sự hình thành của trật tự thế giới đa cực.", answer: "Đúng" }
            ]
        },
        {
            id: 2,
            question: "Cho đoạn tư liệu sau đây: “ Năm tháng sẽ trôi qua, nhưng thắng lợi của nhân dân ta trong sự nghiệp kháng chiến chống Mỹ, cứu nước mãi mãi được ghi vào lịch sử dân tộc ta như một trong những trang chói lọi nhất, một biểu tượng sáng ngời về sự toàn thắng của chủ nghĩa anh hùng cách mạng và trí tuệ con người, và đi vào lịch sử thế giới như một chiến công vĩ đại của thế kỉ XX, một sự kiện có tầm quan trọng quốc tế to lớn và có tính thời đại sâu sắc”.",
            sub_questions: [
                { text: "a) Tư liệu trên nhấn mạnh ý nghĩa thắng lợi của cuộc kháng chiến chống Mỹ cứu nước của nhân dân Việt Nam.", answer: "Đúng" },
                { text: "b) Thắng lợi đó đã chấm dứt hoàn toàn chủ nghĩa thực dân cũ trên thế giới.", answer: "Sai" },
                { text: "c) Đó là một chiến công vĩ đại, có tầm quan trọng quốc tế to lớn và có tính thời đại sâu sắc.", answer: "Đúng" },
                { text: "d) Cuộc kháng chiến chống Mỹ đã kết thúc hoàn toàn mọi cuộc chiến tranh diễn ra trên đất nước Việt Nam.", answer: "Sai" }
            ]
        },
        {
            id: 3,
            question: "Cho đoạn tư liệu sau đây:“Theo nhận thức của chúng ta, kinh tế thị trường định hướng xã hội chủ nghĩa là nền kinh tế thị trường hiện đại, hội nhập quốc tế, vận hành đầy đủ, đồng bộ theo các quy luật của kinh tế thị trường, có sự quản lí của nhà nước pháp quyền xã hội chủ nghĩa, do Đảng Cộng sản Việt Nam lãnh đạo; bảo đảm định hướng xã hội chủ nghĩa, nhằm mục tiêu “dân giàu, nước mạnh, dân chủ, công bằng, văn minh\".",
            sub_questions: [
                { text: "a) Nguyên tắc hàng đầu trong quá trình đổi mới ở Việt Nam là kiên định con đường xã hội chủ nghĩa.", answer: "Đúng" },
                { text: "b) Định hướng kinh tế xã hội chủ nghĩa là nâng cao vai trò quản lý kinh tế của Đảng.", answer: "Sai" },
                { text: "c) Trong phát triển kinh tế xã hội chủ nghĩa, cần tuân thủ theo mọi quy luật của kinh tế thị trường.", answer: "Sai" },
                { text: "d) Mục tiêu phát triển kinh tế là đảm bảo dân giàu, nước mạnh, dân chủ, công bằng, văn minh.", answer: "Đúng" }
            ]
        },
        {
            id: 4,
            question: "Cho đoạn tư liệu sau đây: “Nhiệm vụ bao trùm trong thời gian tới là giữ vững hòa bình; mở rộng quan hệ hữa nghị, hợp tác, tạo điều kiện quốc tế thuận lợi cho công cuộc xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc…Với chính sách đối ngoại rộng mở, chúng ta tuyên bố rằng: Việt Nam muốn là bạn với tất cả các nước trong cộng đồng thế giới, phấn đầu vì hòa bình, độc lập và phát triển”.",
            sub_questions: [
                { text: "a) Đảng Cộng sản Việt Nam chủ trương mở rộng quan hệ với các đối tác và triệt để loại trừ đối tượng.", answer: "Sai" },
                { text: "b) Đoạn tư liệu trên khẳng định chính sách đối ngoại Việt Nam muốn là bạn của các nước trên thế giới.", answer: "Đúng" },
                { text: "c) Đoạn trích cho thấy Đảng Cộng sản Việt Nam chủ trương thiết lập đối tác chiến lược toàn diện với tất cả các nước.", answer: "Sai" },
                { text: "d) Đoạn trích cho thấy nguyên tắc cao nhất trong đường lối đối ngoại của Đảng Cộng sản Việt Nam là lợi ích kinh tế.", answer: "Sai" }
            ]
        }
    ];

    // Function to render Part 1 questions
    function renderPart1Questions() {
        questionsPart1.forEach(q => {
            const questionBlock = document.createElement('div');
            questionBlock.classList.add('question-block');
            questionBlock.innerHTML = `
                <p>Câu ${q.id}. ${q.question}</p>
                <div class="options">
                    ${q.options.map(option => `
                        <label>
                            <input type="radio" name="q1_${q.id}" value="${option.charAt(0)}">
                            ${option}
                        </label>
                    `).join('')}
                </div>
            `;
            part1QuestionsDiv.appendChild(questionBlock);
        });
    }

    // Function to render Part 2 questions
    function renderPart2Questions() {
        questionsPart2.forEach(q => {
            const questionBlock = document.createElement('div');
            questionBlock.classList.add('question-block');
            questionBlock.innerHTML = `
                <p>Câu ${q.id}. ${q.question}</p>
                <div class="options part2-options">
                    ${q.sub_questions.map((subQ, idx) => `
                        <label>
                            <input type="checkbox" name="q2_${q.id}_${String.fromCharCode(97 + idx)}" value="Đúng">
                            ${subQ.text}
                            (Đúng)
                        </label>
                        <label>
                            <input type="checkbox" name="q2_${q.id}_${String.fromCharCode(97 + idx)}" value="Sai">
                            ${subQ.text}
                            (Sai)
                        </label>
                    `).join('<hr style="border: 0; border-top: 1px dotted #ccc; margin: 15px 0;">')}
                </div>
            `;
            part2QuestionsDiv.appendChild(questionBlock);
        });
    }

    // Initialize questions
    renderPart1Questions();
    renderPart2Questions();

    // Handle form submission
    quizForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission
        let totalScore = 0;

        // Calculate score for Part 1
        questionsPart1.forEach(q => {
            const selectedOption = document.querySelector(`input[name="q1_${q.id}"]:checked`);
            if (selectedOption && selectedOption.value === q.answer) {
                totalScore += 0.25;
            }
        });

        // Calculate score for Part 2
        questionsPart2.forEach(q => {
            let correctSubAnswers = 0;
            q.sub_questions.forEach((subQ, idx) => {
                const namePrefix = `q2_${q.id}_${String.fromCharCode(97 + idx)}`;
                const selectedTrue = document.querySelector(`input[name="${namePrefix}"][value="Đúng"]:checked`);
                const selectedFalse = document.querySelector(`input[name="${namePrefix}"][value="Sai"]:checked`);

                // Check if exactly one option is selected and if it matches the correct answer
                if (subQ.answer === "Đúng" && selectedTrue && !selectedFalse) {
                    correctSubAnswers++;
                } else if (subQ.answer === "Sai" && selectedFalse && !selectedTrue) {
                    correctSubAnswers++;
                }
                // If both are selected or neither, it's incorrect.
            });

            // Scoring logic for Part 2 based on `correctSubAnswers`
            if (correctSubAnswers === 1) {
                totalScore += 0.1;
            } else if (correctSubAnswers === 2) {
                totalScore += 0.25;
            } else if (correctSubAnswers === 3) {
                totalScore += 0.75;
            } else if (correctSubAnswers === 4) {
                totalScore += 4; // Max score for Part 2 question
            }
        });

        // Display results
        totalScoreSpan.textContent = totalScore.toFixed(2); // Display with 2 decimal places
        resultDiv.style.display = 'block';
        window.scrollTo(0, document.body.scrollHeight); // Scroll to bottom to show results
    });
});