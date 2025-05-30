import starlightSidebarTopics from "starlight-sidebar-topics";

export const sidebar = starlightSidebarTopics([
  {
    label: "Sản Khoa",
    link: "/san-khoa/",
    icon: "external",
    items: [
      "san-khoa/dac-diem-rau-thai",
      {
        label: "Xuất huyết tử cung trong thai kỳ",
        autogenerate: {
          directory: "san-khoa/xuat-huyet-tu-cung-trong-thai-ky",
        },
        collapsed: true,
      },
      {
        label: "Thai nghén thất bại sớm",
        autogenerate: {
          directory: "san-khoa/thai-nghen-that-bai-som",
        },
        collapsed: true,
      },
      "san-khoa/cu-dong-thai",
      "san-khoa/dong-hoc-sieu-am-doppler",
      {
        label: "Chỉ số ối",
        autogenerate: {
          directory: "san-khoa/chi-so-oi",
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
          directory: "san-khoa/dai-thao-duong-thai-ky",
        },
        collapsed: true,
      },
      {
        label: "Tăng huyết áp thai kỳ",
        autogenerate: {
          directory: "san-khoa/tang-huyet-ap-thai-ky",
        },
        collapsed: true,
      },
      {
        label: "Tuyến giáp và thai kỳ",
        autogenerate: {
          directory: "san-khoa/tuyen-giap-va-thai-ky",
        },
        collapsed: true,
      },
      {
        label: "Thiếu máu hồng cầu nhỏ nhược sắc",
        autogenerate: {
          directory: "san-khoa/thieu-mau-hong-cau-nho-nhuoc-sac",
        },
        collapsed: true,
      },
      "san-khoa/sga-iugr",
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
          directory: "san-khoa/cap-cuu-san-khoa",
        },
        collapsed: true,
      },
      "san-khoa/viem-gan-b-va-thai-ky",
      "san-khoa/hiv-va-thai-ky",
      "san-khoa/uon-van",
      "san-khoa/thuy-dau-trong-thai-ky",
      {
        label: "Sử dụng thuốc trong thai kỳ",
        autogenerate: {
          directory: "san-khoa/su-dung-thuoc-trong-thai-ky",
        },
        collapsed: true,
      },
      {
        label: "Các vấn đề sau sinh",
        autogenerate: {
          directory: "san-khoa/cac-van-de-sau-sinh",
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
        label: "Giải phẫu và sinh lý",
        autogenerate: {
          directory: "phu-khoa/giai-phau-sinh-ly",
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
          directory: "phu-khoa/tiet-dich-am-dao-bat-thuong",
        },
        collapsed: true,
      },
      {
        label: "Bất thường cổ tử cung",
        autogenerate: {
          directory: "phu-khoa/bat-thuong-co-tu-cung",
        },
        collapsed: true,
      },
      {
        label: "Bất thường buồng trứng",
        autogenerate: {
          directory: "phu-khoa/bat-thuong-buong-trung",
        },
        collapsed: true,
      },
      "phu-khoa/u-xo-tu-cung",
      "phu-khoa/lac-noi-mac-tu-cung",
      {
        label: "Bất thường tuyến vú",
        autogenerate: {
          directory: "phu-khoa/bat-thuong-tuyen-vu",
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
      "phu-khoa/benh-nguyen-bao-nuoi",
      "phu-khoa/lanh-thuong",
    ],
  },
  {
    label: "Hỗ trợ sinh sản",
    link: "/ho-tro-sinh-san/",
    icon: "apple",
    items: ["ho-tro-sinh-san/buong-trung-da-nang"],
  },
]);
