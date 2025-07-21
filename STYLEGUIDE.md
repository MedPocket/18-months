## Quy tắc viết tài liệu

### Cấu trúc file Markdown

Lưu nội dung trong thư mục: `src/content/docs/`. Mỗi file đại diện cho một chuyên đề hoặc bệnh lý. Cấu trúc frontmatter:

```md
---
title: 'Dọa sảy thai'
description: 'Chẩn đoán, xử trí và theo dõi dọa sảy thai trong 3 tháng đầu'
---
```

### Heading (Tiêu đề phân cấp)

`#` được dùng làm tiêu đề trang. Sử dụng theo cấu trúc nội dung dưới đây:

```md
## Định nghĩa

## Nguyên nhân

## Yếu tố nguy cơ

## Chẩn đoán

### Triệu chứng lâm sàng

### Cận lâm sàng

## Điều trị

### Nội khoa

### Ngoại khoa
```

### Danh sách và phân tích nội dung

Dùng danh sách để trình bày các tiêu chuẩn, tiêu chí chẩn đoán, yếu tố nguy cơ... **Ví dụ**:

```md
### Yếu tố nguy cơ dọa sảy thai

- Tuổi mẹ > 35
- Tiền sử sảy thai liên tiếp
- Bất thường tử cung (vách ngăn tử cung, tử cung hai sừng)
- Nhiễm trùng niệu sinh dục
```

### Callouts (Lưu ý chuyên môn)

Dùng `:::caution`, `:::note` để làm nổi bật thông tin quan trọng:

```md
:::caution
Siêu âm đầu dò là phương tiện chẩn đoán hình ảnh ưu tiên trong 3 tháng đầu thai kỳ.
:::
```

### Liệt kê

#### Dạng liệt kê cơ bản

Dùng `-` hoặc `1. 2. 3.` để liệt kê các ý.

```md
### Nguyên nhân dọa sảy thai

- Rối loạn nội tiết.
- Nhiễm trùng sinh dục.
- Bất thường nhiễm sắc thể.
- Tử cung dị dạng.
```

#### Dạng liệt kê phân cấp (nested list)

Dùng indent (4 dấu cách hoặc 1 tab) để viết danh sách lồng nhau.

```md
### Tiêu chuẩn chẩn đoán

1. Triệu chứng lâm sàng
   - Ra huyết âm đạo
   - Đau bụng dưới
2. Khám thực thể
   - Cổ tử cung đóng
   - Tử cung tương ứng tuổi thai
3. Siêu âm
   - Thai trong tử cung
   - Tim thai dương tính
```

### Chèn bảng nội dung y khoa

Sử dụng bảng để so sánh chẩn đoán phân biệt, phác đồ điều trị, v.v.

**Ví dụ:**

```md
| Tiêu chí            | Dọa sảy thai         | Thai ngoài tử cung    |
| ------------------- | -------------------- | --------------------- |
| **Đau bụng**        | Âm ỉ vùng hạ vị      | Đau nhói 1 bên        |
| **Ra huyết âm đạo** | Lượng ít, đỏ sẫm     | Có thể nhiều, đỏ tươi |
| **Siêu âm tử cung** | Có túi thai trong TC | Không thấy túi thai   |
```

### Tài liệu tham khảo

Cuối mỗi bài nên có danh sách tài liệu tham khảo hoặc guideline theo định dạng sau:

```md
## Tài liệu tham khảo

- Trường ĐH Y Dược TP. HCM (2020) - _Team-based learning_
- ACOG Practice Bulletin No. 134 (2013) - _Intrauterine Growth Restriction_
- WHO (2014) - _WHO Recommendations for Prevention and Treatment of Pre-eclampsia and Eclampsia_
```
