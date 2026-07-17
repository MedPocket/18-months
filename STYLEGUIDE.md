# Hướng dẫn viết tài liệu (Style Guide)

Tài liệu này quy định các nguyên tắc, chuẩn mực về nội dung, định dạng và cấu trúc cho toàn bộ dự án. Hướng dẫn này đảm bảo sự chính xác y khoa, tính thống nhất tuyệt đối trong trình bày, tối ưu hóa khả năng hiển thị trên nền tảng Starlight và mang lại trải nghiệm đọc tốt nhất cho nhân viên y tế và người dùng.

## 1. Nguyên tắc chung (General Principles)

- **Độ chính xác Y khoa:** Mọi thông tin, khuyến cáo lâm sàng phải dựa trên các nguồn bằng chứng khoa học uy tín (Bộ Y tế Việt Nam, WHO, ACOG, RCOG, Medline). Ưu tiên số liệu định lượng cụ thể, có nguồn gốc rõ ràng hơn các mô tả định tính mơ hồ.
- **Tính khách quan và Chuyên nghiệp:** Sử dụng giọng văn trung tính, khoa học, nghiêm túc. Tránh biểu đạt cảm xúc cá nhân hoặc sử dụng các từ mang tính chủ quan cảm tính (ví dụ: "rất nguy hiểm", "vô cùng tồi tệ", "khủng khiếp").
- **Tính súc tích và Rõ ràng:** Viết ngắn gọn, đi thẳng vào vấn đề lâm sàng. Sử dụng các câu chủ động, ngắn gọn, tránh lặp từ và các cách diễn đạt dài dòng không cần thiết.
- **Độc giả mục tiêu:** Tài liệu được thiết kế cho bác sĩ nội trú, sinh viên y khoa, bác sĩ sản phụ khoa và những người có kiến thức y khoa nền tảng. Khi sử dụng các thuật ngữ chuyên sâu, cần đảm bảo tính chính xác và rõ ràng.

## 2. Định dạng văn bản (Formatting & Typography)

### In đậm (Bold)

Sử dụng định dạng in đậm (`**văn bản**`) một cách có chọn lọc để làm nổi bật các **từ khóa quan trọng**, các **ngưỡng số liệu lâm sàng có ý nghĩa**, hoặc **chỉ định/chống chỉ định mấu chốt**.

- **Quy tắc:** Chỉ in đậm cụm từ hoặc số liệu cụ thể. **Không** in đậm toàn bộ câu hoặc cả dòng dài.
- _Đúng:_ Tỉ lệ thành công của phác đồ nội khoa là **70-95%**.
- _Sai:_ **Tỉ lệ thành công của phác đồ nội khoa là 70-95%.**

### In nghiêng (Italic)

Sử dụng định dạng in nghiêng (`_văn bản_` hoặc `*văn bản*`) cho các trường hợp cụ thể sau:

1. **Tên khoa học của tác nhân vi sinh** (vi khuẩn, virus, nấm...):
   - _Ví dụ:_ _Chlamydia trachomatis_, _Treponema pallidum_, _Helicobacter pylori_.
2. **Thuật ngữ tiếng Anh lâm sàng hoặc từ viết tắt quốc tế** đặt trong ngoặc đơn ở lần xuất hiện đầu tiên:
   - _Ví dụ:_ Tiền sản giật (_Preeclampsia_).
3. **Tên hoạt chất/tên thuốc gốc** (generic name) dạng chữ thường:
   - _Ví dụ:_ _paracetamol_, _oxytocin_, _methotrexate_, _iron dextran_.
4. **Tên sách, chương sách hoặc hướng dẫn điều trị**:
   - _Ví dụ:_ _Williams Obstetrics_, _Phác đồ điều trị Sản Phụ khoa_.
5. **Chú thích bên dưới hình ảnh hoặc bảng biểu**:
   - _Ví dụ:_ _Hình "Các vị trí chửa ngoài tử cung"_., _Bảng "Các mức độ thiếu máu"_.

### Quy tắc Danh sách (Lists)

Để đảm bảo tính mạch lạc và song song về mặt ngữ pháp, cấu trúc danh sách phải tuân thủ nghiêm ngặt các quy tắc sau:

#### Danh sách không thứ tự (Unordered List)

Sử dụng dấu gạch ngang `-` cho các ý ngang hàng.

- **Ký tự đầu dòng:** Luôn viết hoa chữ cái đầu tiên của mỗi mục.
- **Cấu trúc song song (Parallel Structure):** Các mục trong cùng một danh sách phải đồng nhất về cấu trúc ngữ pháp (ví dụ: tất cả đều bắt đầu bằng danh từ, động từ, hoặc đều là câu hoàn chỉnh).
- **Dấu kết thúc câu:** **Luôn kết thúc bằng dấu chấm `.`** cho tất cả các mục (kể cả cụm từ ngắn hay câu hoàn chỉnh) để đảm bảo tính nhất quán tuyệt đối.
- **Danh sách lồng nhau (Nested lists):** Thụt đầu dòng đúng **2 khoảng trắng (spaces)** so với cấp cha. Hạn chế lồng quá 2 cấp.

**Ví dụ:**

```md
### Triệu chứng cơ năng

- Đau vùng hạ vị âm ỉ liên tục.
- Ra huyết âm đạo rỉ rả, màu nâu đen.
- Buồn nôn hoặc nôn mửa nhẹ.
```

#### Danh sách có thứ tự (Ordered List)

Sử dụng `1.`, `2.`, `3.` khi trình bày quy trình, các bước thực hiện theo trình tự thời gian, hoặc các mức độ ưu tiên giảm dần.

- Quy tắc viết hoa đầu dòng và dấu chấm kết thúc tương tự danh sách không thứ tự.

**Ví dụ:**

```md
### Quy trình xử trí cấp cứu

1. Đánh giá tri giác và kiểm tra đường thở (Airway).
2. Kiểm tra và hỗ trợ hô hấp (Breathing).
3. Đánh giá tuần hoàn (Circulation), thiết lập đường truyền tĩnh mạch lớn.
```

## 3. Kí hiệu, Kí tự đặc biệt & Đo lường

### Kí hiệu toán học và Đơn vị đo lường

- **Phép so sánh:** Luôn thêm **một khoảng trắng** xung quanh các toán tử so sánh (`>`, `<`, `≥`, `≤`, `=`). Sử dụng kí hiệu chuẩn thay vì gõ dạng kí tự ghép.
  - _Đúng:_ `> 5 cm`, `≤ 5000 mIU/mL`, `≥ 20 tuần`.
  - _Sai:_ `>5 cm`, `≤5000mIU/mL`, `>= 20 tuần`.
- **Đơn vị đo lường:** Luôn có **một khoảng trắng** giữa số lượng và đơn vị đo lường.
  - _Đúng:_ 10 mg, 50 mL, 37 °C, 1500 mIU/mL.
  - _Sai:_ 10mg, 50mL, 37°C.
- **Phần trăm:** Viết liền chữ số và dấu phần trăm `%` (không có khoảng trắng).
  - _Đúng:_ 50%, 95% CI.
  - _Sai:_ 50 %.
- **Khoảng giá trị (Ranges):** Dùng dấu gạch nối `-` (hyphen) không có khoảng trắng hoặc dùng từ "đến".
  - _Đúng:_ 10 - 20 mg, 5 - 7 ngày, 10 đến 20 mg.
  - _Sai:_ 10-20 mg, 5-7 ngày.

### Kí tự đặc biệt & Trình bày

- **Dấu ngoặc kép:** Sử dụng dấu ngoặc kép thẳng `"`. Không dùng kí tự ngoặc kép cong hoặc thay thế khác.
- **Dấu gạch chéo `/`:** Viết liền với các từ ở hai bên khi biểu thị sự lựa chọn hoặc tỷ lệ.
  - _Đúng:_ Buồn nôn/nôn, 120/80 mmHg.
  - _Sai:_ Buồn nôn / nôn.
- **Kí hiệu `&`:** Tránh sử dụng trong nội dung văn bản thông thường, hãy viết rõ từ "và". Chỉ sử dụng trong tên riêng hoặc tài liệu tham khảo chính thức.
- **Mũi tên chỉ hướng/kết quả:** Sử dụng các kí tự Unicode chuẩn `→`, `←`, `↔` thay vì sử dụng kí tự ghép như `->`, `<-`.
- **Ký tự Hy Lạp:** Sử dụng ký tự Unicode chuẩn (ví dụ: `α` (Alpha), `β` (Beta), `γ` (Gamma), `δ` (Delta), `µ` (Micro)...), ví dụ: `β-hCG`. Không viết phiên âm tiếng Việt (như bê-ta hCG).
- **Chỉ số trên/dưới (Subscript/Superscript):** Để đảm bảo AST của Markdown/Starlight xử lý chính xác và không bị lỗi biên dịch, **phải sử dụng trực tiếp kí tự Unicode cho chỉ số trên và dưới**. Tránh sử dụng thẻ HTML (`<sup>`, `<sub>`) hoặc kí tự caret (`^`).
  - _Chỉ số trên (Superscript):_ `⁰` `¹` `²` `³` `⁴` `⁵` `⁶` `⁷` `⁸` `⁹` `⁺` `⁻`. (Ví dụ: m², cm³).
  - _Chỉ số dưới (Subscript):_ `₀` `₁` `₂` `₃` `₄` `₅` `₆` `₇` `₈` `₉`. (Ví dụ: HbA₁c, CO₂).

## 4. Thuật ngữ Y khoa & Viết tắt

- **Ưu tiên Tiếng Việt lâm sàng:** Sử dụng thuật ngữ chuyên môn Tiếng Việt chuẩn theo tài liệu của Bộ Y tế hoặc sách giáo trình Trường Đại học Y Dược TP. HCM, Đại học Y Hà Nội.
- **Thuật ngữ Tiếng Anh đồng hành:** Cung cấp thuật ngữ gốc Tiếng Anh viết nghiêng trong ngoặc đơn ở lần xuất hiện đầu tiên của thuật ngữ khó hoặc dễ gây nhầm lẫn.
  - _Ví dụ:_ Thai chậm tăng trưởng trong tử cung (_Intrauterine growth restriction_ - IUGR).
- **Quy trình Viết tắt:**
  - Lần xuất hiện đầu tiên: Viết đầy đủ thuật ngữ tiếng Việt, kèm theo từ viết tắt trong ngoặc đơn.
  - Các lần xuất hiện sau: Sử dụng trực tiếp từ viết tắt.
  - _Ví dụ:_ Chửa ngoài tử cung (CNTC) là... Khối CNTC có nguy cơ...
- **Tên thuốc và Hoạt chất:**
  - Luôn sử dụng tên hoạt chất gốc (Generic name), viết bằng chữ thường và in nghiêng. Không viết hoa chữ cái đầu tiên trừ khi đứng đầu câu.
  - _Ví dụ:_ _paracetamol_, _oxytocin_, _methotrexate_, _nifedipin_.

## 5. Tổ chức Thư mục và Cấu trúc Bài viết

### Tổ chức Thư mục và Tài sản (Assets)

Để duy trì tính di động, độc lập và dễ quản lý của từng chủ đề tài liệu:

- **Vị trí ảnh:** Tất cả hình ảnh minh họa cho một bài viết hoặc danh mục phải được lưu trữ trong thư mục con local có tên `_images/` nằm cùng cấp với bài viết đó.
  - _Đúng:_ `src/content/docs/phu-khoa/_images/chua-ngoai-tu-cung/vi-tri.png`
  - _Sai:_ `public/images/vi-tri.png`
- **Đường dẫn trong Frontmatter:** Mọi liên kết nội bộ khai báo trong Frontmatter (ví dụ: các hành động nút bấm trên trang chủ `index.mdx`) phải sử dụng **đường dẫn tương đối** (bắt đầu bằng `./`) để tránh lỗi khi triển khai dự án trên các base path khác nhau.
  - _Ví dụ:_ `href: ./san-khoa/` thay vì `href: /san-khoa/`.

### Cấu trúc Frontmatter chuẩn

```yaml
---
title: Tên bệnh/Vấn đề lâm sàng (Ngắn gọn, rõ ràng)
description: Tóm tắt 1 câu định hướng nội dung bài viết phục vụ SEO và hiển thị.
---
```

### Phân cấp Tiêu đề (Headings)

- Sử dụng H1 (`#`) duy nhất cho tên bài viết (được tự động tạo từ `title` trong Frontmatter).
- Sử dụng H2 (`##`) cho các phần chính và H3 (`###`) cho các phần phụ. Cấm nhảy cóc tiêu đề (ví dụ từ H2 xuống H4).

### Giới hạn độ sâu lồng ghép (Nesting Limits)

Để tài liệu luôn súc tích, dễ đọc lướt (scan) và tránh tình trạng phân mảnh nội dung, tổng mức độ lồng ghép từ Tiêu đề (Heading) xuống đến Danh sách (List) phải được kiểm soát nghiêm ngặt nhằm tránh cấu trúc dạng cây quá sâu:

- **Giới hạn Heading:** Khuyến khích tối đa chỉ dùng đến H3 (###). H4 (####) chỉ dùng khi thực sự cần thiết để chia nhỏ các ý phức tạp. Tuyệt đối **không sử dụng H5, H6.**
- **Giới hạn List:** Danh sách chỉ lồng tối đa **2 cấp** (1 cấp cha, 1 cấp con).
- **Quy tắc phối hợp Heading - List:** Không vượt quá 4 mức độ phân cấp (tính từ H2) đối với bất kỳ đoạn nội dung nào.
   - _Cấu trúc tối ưu (Khuyên dùng):_ `H2` → `H3` → `List cấp 1` → `List cấp 2`.
   - _Nếu đã sử dụng đến H4:_ Phía dưới H4 chỉ được dùng **List 1 cấp** (không lồng nhau). Nếu cần diễn giải sâu hơn, hãy cân nhắc cấu trúc lại thành một đoạn văn ngắn hoặc thiết kế bảng biểu thay vì tạo danh sách dài.
   - _Sai (Cần tránh):_ `H2` → `H3` → `H4` → `List cấp 1` → `List cấp 2` → `List cấp 3` (Gây rối mắt và làm người đọc bị "ngợp").

### Cấu trúc bài bệnh học chuẩn hóa

Mỗi bài viết về bệnh học sản phụ khoa cần tuân theo cấu trúc tiêu đề chuẩn mực dưới đây để tạo tính nhất quán cho toàn bộ trang web:

1. **Tổng quan/Định nghĩa** (`## Tổng quan` hoặc `## Định nghĩa`)
   - Định nghĩa bệnh lý, dịch tễ học, tần suất xuất hiện và tầm quan trọng lâm sàng.
2. **Nguyên nhân và Cơ chế bệnh sinh** (`## Nguyên nhân và Cơ chế bệnh sinh`)
   - Căn nguyên gây bệnh và cơ chế sinh lý bệnh.
3. **Yếu tố nguy cơ** (`## Yếu tố nguy cơ`)
   - Các yếu tố làm tăng khả năng mắc bệnh (đối tượng nguy cơ cao).
4. **Chẩn đoán** (`## Chẩn đoán`)
   - `### Lâm sàng`: Triệu chứng cơ năng (bệnh nhân khai), triệu chứng thực thể (bác sĩ khám).
   - `### Cận lâm sàng`: Xét nghiệm, chẩn đoán hình ảnh (Siêu âm, MRI...), thăm dò chức năng.
   - `### Chẩn đoán xác định/Tiêu chuẩn chẩn đoán` (nếu có).
   - `### Chẩn đoán phân biệt`: Các bệnh lý có triệu chứng tương đồng cần loại trừ.
5. **Điều trị** (`## Điều trị`)
   - `### Nguyên tắc điều trị`: Mục tiêu điều trị, hướng xử trí ban đầu.
   - `### Điều trị nội khoa`: Các phác đồ thuốc, liều lượng, cách dùng, lưu ý đặc biệt.
   - `### Điều trị ngoại khoa`: Chỉ định can thiệp thủ thuật/phẫu thuật, phương pháp cụ thể.
6. **Dự phòng và Theo dõi** (`## Dự phòng và Theo dõi`)
   - Các biện pháp phòng ngừa cấp 1, cấp 2, lịch trình tái khám và theo dõi sau điều trị.
7. **Tài liệu tham khảo** (`## Tài liệu tham khảo`)
   - Danh sách nguồn trích dẫn.

## 6. Hình ảnh, Bảng biểu và Callouts (Asides)

### Hình ảnh (Pictures/Images)

- Cú pháp chèn ảnh sử dụng đường dẫn tương đối: `![Mô tả ngắn gọn alt-text](./_images/tên-thư-mục/tên-ảnh.png)`
- **Chú thích ảnh bắt buộc:** Phải đặt ngay bên dưới hoặc bên trên ảnh, viết nghiêng và đặt trong ngoặc kép:
  - _Ví dụ:_ `_Hình "Các vị trí chửa ngoài tử cung"__.`

### Bảng biểu (Tables)

- Sử dụng bảng Markdown để so sánh hoặc hệ thống hóa dữ liệu số lượng phức tạp.
- **Chú thích bảng bắt buộc:** Đặt ngay phía trên bảng biểu, viết nghiêng và đặt trong ngoặc kép:
  - _Ví dụ:_ `_Bảng "Phân loại mức độ thiếu máu theo WHO"__.`

**Ví dụ trình bày:**

```md
\_Bảng "Tiêu chuẩn chẩn đoán đái tháo đường thai kỳ"\_\_.

| Chỉ số huyết thanh | Ngưỡng chẩn đoán (mmol/L) | Ngưỡng chẩn đoán (mg/dL) |
| ------------------ | ------------------------- | ------------------------ |
| Glucose đói        | ≥ 5.1                     | ≥ 92                     |
| Glucose sau 1 giờ  | ≥ 10.0                    | ≥ 180                    |
| Glucose sau 2 giờ  | ≥ 8.5                     | ≥ 153                    |
```

### Hộp thông tin nổi bật (Asides/Callouts)

Sử dụng cú pháp Starlight Asides để phân loại thông tin cảnh báo lâm sàng:

- `:::note` (Ghi chú): Dùng cho định nghĩa, tiêu chuẩn chẩn đoán, giá trị bình thường, thông tin bổ sung.
- `:::tip` (Lời khuyên/Mẹo): Các kinh nghiệm thực hành lâm sàng, thủ thuật nhỏ giúp thao tác nhanh hoặc ghi nhớ tốt hơn.
- `:::caution` (Thận trọng): Cảnh báo về các sai sót thường gặp, tương tác thuốc, tác dụng phụ nguy hiểm cần lưu ý.
- `:::danger` (Nguy hiểm): Các cấp cứu khẩn cấp đe dọa tính mạng, các chống chỉ định tuyệt đối, hoặc dấu hiệu nguy kịch đỏ.

**Ví dụ:**

```md
:::danger
Cấm thăm khám âm đạo bằng tay khi nghi ngờ rau tiền đạo chưa loại trừ, vì có thể gây xuất huyết âm đạo dữ dội đe dọa trực tiếp tính mạng thai phụ.
:::
```

## 7. Tài liệu tham khảo (References)

Danh sách tài liệu tham khảo phải được chuẩn hóa theo cấu trúc định dạng nhất quán:
`Tên tổ chức/Tác giả (Năm) - Tên bài viết/Tên sách in nghiêng`.

- **Quy tắc:**
  - Sắp xếp theo thứ tự ưu tiên: Tài liệu trong nước (Bộ Y tế) trước, tài liệu quốc tế (ACOG, RCOG, WHO...) sau.
  - Các chữ cái đầu tiên viết hoa, tên sách/văn bản pháp quy được in nghiêng.

**Ví dụ:**

```md
## Tài liệu tham khảo

- Bộ Y tế Việt Nam (2016) - _Hướng dẫn Quốc gia về các dịch vụ chăm sóc sức khỏe sinh sản_.
- Bệnh viện Từ Dũ (2022) - _Phác đồ điều trị Sản Phụ khoa_.
- ACOG Practice Bulletin No. 202 (2018) - _Gestational Hypertension and Preeclampsia_.
- F. Gary Cunningham et al. (2018) - _Williams Obstetrics 25th Edition_.
```
