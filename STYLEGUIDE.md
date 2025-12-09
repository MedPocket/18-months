# Quy tắc viết tài liệu (Style Guide)

Tài liệu này quy định các chuẩn mực về nội dung, định dạng và cấu trúc cho dự án `18-months`. Mục tiêu là đảm bảo tính chính xác về y khoa, sự thống nhất trong trình bày và trải nghiệm đọc tốt nhất cho người dùng.

---

## 1. Nguyên tắc chung

- **Tính chính xác:** Mọi thông tin y khoa phải dựa trên bằng chứng (Medline, ACOG, RCOG, WHO, Bộ Y tế). Ưu tiên dữ liệu định lượng hơn định tính.
- **Tính khách quan:** Sử dụng giọng văn trung tính, khoa học. Tránh cảm xúc cá nhân hoặc từ ngữ mang tính chủ quan (ví dụ: "rất nguy hiểm", "khủng khiếp").
- **Tính súc tích:** Viết ngắn gọn, đi thẳng vào vấn đề. Tránh câu dài dòng, lặp từ.
- **Đối tượng độc giả:** Viết cho cả nhân viên y tế và người dùng phổ thông có kiến thức. Giải thích thuật ngữ khó nếu cần thiết.

---

## 2. Định dạng văn bản và Kí hiệu

### In đậm và In nghiêng

- **In đậm (`**text**`):** Dùng để nhấn mạnh **từ khóa quan trọng**, các **con số ý nghĩa** hoặc **điểm mấu chốt**.
  - _Đúng:_ Tỷ lệ tử vong là **5%**.
  - _Sai:_ **Tỷ lệ tử vong là 5%**. (Không in đậm cả câu trừ tiêu đề).
- **In nghiêng (`_text_` hoặc `*text*`):** Dùng cho:
  - Tên khoa học của vi khuẩn/virus: _Clostridium tetani_, _Helicobacter pylori_.
  - Thuật ngữ tiếng Anh đi kèm lần đầu: Tiền sản giật (_Preeclampsia_).
  - Tên tài liệu tham khảo: _Williams Obstetrics_.

### Kí hiệu toán học và Đơn vị đo lường

- **Phép so sánh:** Viết liền các dấu so sánh với số.
  - _Đúng:_ `>5 cm`, `<100 mg`, `≥20 tuần`.
  - _Sai:_ `> 5 cm`, `< 100 mg`.
- **Đơn vị đo lường:** Luôn có **một khoảng trắng** giữa số và đơn vị.
  - _Đúng:_ 10 mg, 50 ml, 37 °C.
  - _Sai:_ 10mg, 50ml, 37°C.
- **Phần trăm:** Viết liền số và dấu phần trăm.
  - _Đúng:_ 50%, 95% CI.
  - _Sai:_ 50 %.
- **Khoảng giá trị:** Dùng dấu gạch nối `-` (hyphen) không có khoảng trắng hoặc dùng từ "đến".
  - _Đúng:_ 10-20 mg, 5-7 ngày.
  - _Sai:_ 10 - 20 mg.

### Chú thích (Footnotes)

Dùng số mũ hoặc dấu sao để chú thích ngắn gọn nếu không muốn làm ngắt mạch văn bản.

- Ví dụ: Dân số nghiên cứu^1^ bao gồm...

---

## 3. Thuật ngữ Y khoa

- **Ưu tiên Tiếng Việt:** Sử dụng thuật ngữ chuyên môn Tiếng Việt chuẩn xác nhất.
- **Thuật ngữ Tiếng Anh:**
  - Cung cấp thuật ngữ gốc Tiếng Anh trong ngoặc đơn ở lần xuất hiện đầu tiên nếu thuật ngữ Tiếng Việt ít phổ biến hoặc dễ gây nhầm lẫn.
  - Ví dụ: Thai trứng (_Hydatidiform mole_).
- **Viết tắt:**
  - Viết đầy đủ từ trong lần xuất hiện đầu tiên, kèm từ viết tắt trong ngoặc đơn.
  - Ví dụ: Đái tháo đường thai kỳ (GDM).
- **Tên thuốc:**
  - Dùng tên hoạt chất (Generic name), viết thường, không viết hoa (trừ đầu câu).
  - Ví dụ: _paracetamol_, _oxytocin_.

---

## 4. Cấu trúc bài viết

Mỗi bài viết bệnh học cần tuân theo cấu trúc chuẩn để dễ tra cứu.

### Metadata (Frontmatter)

```yaml
---
title: Tên bệnh/Vấn đề (Ngắn gọn, Chính xác)
description: Tóm tắt 1 câu về nội dung bài viết (Dùng cho SEO).
---
```

### Các đề mục chính (Headings)

Sử dụng H2 (`##`) cho các phần chính và H3 (`###`) cho các phần phụ.

#### 1. Tổng quan (`## Tổng quan`)

Định nghĩa, dịch tễ học, tầm quan trọng của vấn đề đối với sản phụ khoa.

#### 2. Nguyên nhân (`## Nguyên nhân`)

Cơ chế bệnh sinh, nguyên nhân gốc rễ.

#### 3. Yếu tố nguy cơ (`## Yếu tố nguy cơ`)

Liệt kê các yếu tố làm tăng khả năng mắc bệnh (Tuổi, tiền sử, lối sống...).

#### 4. Chẩn đoán (`## Chẩn đoán`)

- `### Lâm sàng`: Triệu chứng cơ năng (bệnh nhân kể), triệu chứng thực thể (bác sĩ khám).
- `### Cận lâm sàng`: Xét nghiệm máu, hình ảnh học (Siêu âm, MRI...), giải phẫu bệnh.
- `### Chẩn đoán phân biệt` (nếu cần): So sánh với các bệnh có triệu chứng tương tự.

#### 5. Điều trị (`## Điều trị`)

- `### Nguyên tắc`: Mục tiêu điều trị là gì?
- `### Nội khoa`: Thuốc, liều dùng, đường dùng.
- `### Ngoại khoa`: Chỉ định phẫu thuật, phương pháp.

#### 6. Dự phòng (`## Dự phòng`)

Biện pháp phòng ngừa (Vaccine, thay đổi lối sống, sàng lọc).

#### 7. Tài liệu tham khảo (`## Tài liệu tham khảo`)

Danh sách nguồn tài liệu uy tín.

---

## 5. Quy tắc List (Liệt kê)

### Danh sách không thứ tự (Unordered List)

Sử dụng dấu gạch ngang `-` cho các ý ngang hàng, không cần thứ tự ưu tiên.

- Viết hoa chữ cái đầu dòng.
- Kết thúc bằng dấu chấm `.` nếu là một câu hoàn chỉnh.
- Kết thúc bằng dấu chấm phẩy `;` hoặc không dấu nếu là cụm từ ngắn (nhưng cần thống nhất trong cùng một list).

**Ví dụ:**

```md
### Triệu chứng cơ năng

- Đau vùng hạ vị âm ỉ.
- Ra huyết âm đạo rỉ rả, màu nâu đen.
- Buồn nôn hoặc nôn.
```

### Danh sách có thứ tự (Ordered List)

Sử dụng `1.`, `2.` khi trình bày quy trình, các bước thực hiện, hoặc thứ tự ưu tiên.

**Ví dụ:**

```md
### Các bước xử trí cấp cứu

1. Đánh giá tri giác, đường thở (Airway).
2. Kiểm tra hô hấp (Breathing).
3. Đánh giá tuần hoàn (Circulation), thiết lập đường truyền tĩnh mạch.
```

---

## 6. Hình ảnh, Bảng và Callouts

### Hình ảnh

- Lưu ảnh trong thư mục: `src/assets/images/` hoặc thư mục con tương ứng.
- Cú pháp Markdown chuẩn: `![Mô tả ảnh (Alt text)](/đường/dẫn/ảnh.jpg)`
- **Luôn có chú thích ảnh** dưới dạng _text nghiêng_ hoặc caption rõ ràng ngay dưới ảnh.

### Bảng (Tables)

Sử dụng bảng để so sánh hoặc trình bày dữ liệu cấu trúc.

**Ví dụ:**

```md
_Bảng 1: Phân loại mức độ thiếu máu._

| Mức độ     | Hemoglobin (g/dL) | Biểu hiện lâm sàng         |
| ---------- | ----------------- | -------------------------- |
| Nhẹ        | 10 - 11           | Mệt mỏi nhẹ, da hơi xanh.  |
| Trung bình | 7 - 10            | Chóng mặt, nhịp tim nhanh. |
| Nặng       | < 7               | Khó thở, suy tim.          |
```

### Callouts (Lưu ý đặc biệt)

Sử dụng cú pháp đặc biệt để tạo hộp thông tin nổi bật.

- **Thông tin quan trọng/Cảnh báo:** Dùng `:::caution` hoặc `:::warning`.
- **Ghi chú bổ sung:** Dùng `:::note` hoặc `:::tip`.

**Ví dụ:**

```md
:::caution
Tuyệt đối không thăm khám âm đạo bằng tay khi nghi ngờ rau tiền đạo vì có thể gây xuất huyết ồ ạt.
:::
```

```md
:::note
Nồng độ Beta-hCG thường tăng gấp đôi sau mỗi 48 giờ trong thai kỳ bình thường giai đoạn sớm.
:::
```

---

## 7. Tài liệu tham khảo (References)

Trình bày nhất quán, ưu tiên định dạng: `Tên tổ chức/Tác giả (Năm) - Tên bài viết/Sách`.

**Ví dụ:**

```md
## Tài liệu tham khảo

- Bộ Y tế (2016) - _Hướng dẫn Quốc gia về các dịch vụ chăm sóc sức khỏe sinh sản_.
- ACOG Practice Bulletin No. 202 (2018) - _Gestational Hypertension and Preeclampsia_.
- Williams Obstetrics 25th Edition - _Chapter 41: Obstetrical Hemorrhage_.
```
