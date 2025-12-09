import starlightSidebarTopics from "starlight-sidebar-topics";

export const sidebar = starlightSidebarTopics([
  {
    label: "Sản Khoa",
    link: "/san-khoa/",
    icon: "external",
    items: [
      {
        label: "Giải phẫu và thai kỳ",
        autogenerate: {
          directory: "san-khoa/giai-phau",
        },
        collapsed: true,
      },
      {
        label: "Sàng lọc và chẩn đoán trước sinh",
        autogenerate: {
          directory: "san-khoa/sang-loc-chan-doan",
        },
        collapsed: true,
      },
      {
        label: "Sức khỏe thai",
        autogenerate: {
          directory: "san-khoa/suc-khoe-thai",
        },
        collapsed: true,
      },
      {
        label: "Chỉ số ối",
        autogenerate: {
          directory: "san-khoa/chi-so-oi",
        },
        collapsed: true,
      },
      {
        label: "Xuất huyết tử cung",
        autogenerate: {
          directory: "san-khoa/xuat-huyet-tu-cung",
        },
        collapsed: true,
      },
      {
        label: "Thai lưu",
        autogenerate: {
          directory: "san-khoa/thai-luu",
        },
        collapsed: true,
      },
      {
        label: "Dọa đẻ non",
        autogenerate: {
          directory: "san-khoa/doa-de-non",
        },
        collapsed: true,
      },
      {
        label: "Đái tháo đường thai kỳ",
        autogenerate: {
          directory: "san-khoa/dai-thao-duong",
        },
        collapsed: true,
      },
      {
        label: "Tăng huyết áp thai kỳ",
        autogenerate: {
          directory: "san-khoa/tang-huyet-ap",
        },
        collapsed: true,
      },
      {
        label: "Tuyến giáp và thai kỳ",
        autogenerate: {
          directory: "san-khoa/tuyen-giap",
        },
        collapsed: true,
      },
      {
        label: "Thiếu máu hồng cầu nhỏ nhược sắc",
        autogenerate: {
          directory: "san-khoa/thieu-mau",
        },
        collapsed: true,
      },
      {
        label: "Chuyển dạ",
        autogenerate: {
          directory: "san-khoa/chuyen-da",
        },
        collapsed: true,
      },
      {
        label: "Rau tiền đạo",
        autogenerate: {
          directory: "san-khoa/rau-tien-dao",
        },
        collapsed: true,
      },
      {
        label: "Cấp cứu sản khoa",
        autogenerate: {
          directory: "san-khoa/cap-cuu",
        },
        collapsed: true,
      },
      {
        label: "Bệnh truyền nhiễm",
        autogenerate: {
          directory: "san-khoa/truyen-nhiem",
        },
        collapsed: true,
      },
      {
        label: "Các vấn đề thường gặp",
        autogenerate: {
          directory: "san-khoa/mang-thai",
        },
        collapsed: true,
      },
      {
        label: "Hậu sản",
        autogenerate: {
          directory: "san-khoa/hau-san",
        },
        collapsed: true,
      },
      {
        label: "Sơ sinh",
        autogenerate: {
          directory: "san-khoa/so-sinh",
        },
        collapsed: true,
      },
      {
        label: "Thuốc",
        autogenerate: {
          directory: "san-khoa/thuoc",
        },
        collapsed: true,
      },
    ],
  },
  {
    label: "Phụ Khoa",
    link: "/phu-khoa/",
    icon: "forward-slash",
    items: [
      {
        label: "Hệ sinh dục nữ",
        autogenerate: {
          directory: "phu-khoa/he-sinh-duc-nu",
        },
        collapsed: true,
      },
      {
        label: "Xuất huyết tử cung",
        autogenerate: {
          directory: "phu-khoa/xuat-huyet-tu-cung",
        },
        collapsed: true,
      },
      "phu-khoa/vo-kinh",
      "phu-khoa/chua-ngoai-tu-cung",
      "phu-khoa/chua-vet-mo-lay-thai",
      {
        label: "Tiết dịch âm đạo bất thường",
        autogenerate: {
          directory: "phu-khoa/tiet-dich-am-dao",
        },
        collapsed: true,
      },
      {
        label: "Bệnh đường tình dục",
        autogenerate: {
          directory: "phu-khoa/benh-tinh-duc",
        },
        collapsed: true,
      },
      {
        label: "Bất thường cổ tử cung",
        autogenerate: {
          directory: "phu-khoa/co-tu-cung",
        },
        collapsed: true,
      },
      {
        label: "Bất thường buồng trứng",
        autogenerate: {
          directory: "phu-khoa/buong-trung",
        },
        collapsed: true,
      },
      {
        label: "U xơ tử cung",
        autogenerate: {
          directory: "phu-khoa/u-xo-tu-cung",
        },
        collapsed: true,
      },
      "phu-khoa/lac-noi-mac-tu-cung",
      {
        label: "Bệnh nguyên bào nuôi",
        autogenerate: {
          directory: "phu-khoa/benh-nguyen-bao-nuoi",
        },
        collapsed: true,
      },
      {
        label: "Bất thường tuyến vú",
        autogenerate: {
          directory: "phu-khoa/vu",
        },
        collapsed: true,
      },
      {
        label: "Kế hoạch hóa gia đình",
        autogenerate: {
          directory: "phu-khoa/ke-hoach-hoa-gia-dinh",
        },
        collapsed: true,
      },
      "phu-khoa/sa-tang-chau",
      {
        label: "Tổn thương trong phẫu thuật",
        autogenerate: {
          directory: "phu-khoa/ton-thuong-phau-thuat",
        },
        collapsed: true,
      },
      "phu-khoa/lanh-thuong",
    ],
  },
  {
    label: "Hỗ trợ sinh sản",
    link: "/ho-tro-sinh-san/",
    icon: "random",
    items: [
      "ho-tro-sinh-san/vo-sinh",
      "ho-tro-sinh-san/khong-rung-trung",
      "ho-tro-sinh-san/vo-sinh-nam",
      "ho-tro-sinh-san/pcos",
      "ho-tro-sinh-san/canh-niem-mac",
      "ho-tro-sinh-san/hsg-sis",
      "ho-tro-sinh-san/tac-voi-trung",
      "ho-tro-sinh-san/suy-buong-trung",
      {
        label: "IUI",
        autogenerate: {
          directory: "ho-tro-sinh-san/iui",
        },
        collapsed: true,
      },
      {
        label: "IVF",
        autogenerate: {
          directory: "ho-tro-sinh-san/ivf",
        },
        collapsed: true,
      },
      "ho-tro-sinh-san/ohss",
    ],
  },
]);
