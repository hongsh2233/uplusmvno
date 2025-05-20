var frontData = {
  // sort
  sort: {
    rateplan: {
      option: { type: "rateplan", value: "추천 순", selected: 0 },
      data: [
        { selected: true, value: 0, title: "추천 순" },
        { selected: false, value: 1, title: "낮은 가격 순" },
        { selected: false, value: 2, title: "할인 적용 후 낮은 가격 순" },
        { selected: false, value: 3, title: "선택 순" },
        { selected: false, value: 4, title: "데이터 많은 순" },
      ],
    },
    board: {
      option: { value: "최신 순", selected: 0 },
      data: [
        { selected: true, value: 0, title: "최신 순" },
        { selected: false, value: 1, title: "오래된 순" },
      ],
    },
    event: {
      option: { value: "추천 순", selected: 0 },
      data: [
        { selected: true, value: 0, title: "추천 순" },
        { selected: false, value: 1, title: "마감일 순" },
      ],
    },
  },

  selectList: {
    payType: [
      { selected: true, value: 0, title: "은행계좌 자동이체" },
      { selected: false, value: 1, title: "신용카드 자동결제" },
      { selected: false, value: 2, title: "지로납부" },
    ],
  },

  // popupSelect
  select: {
    MVNO: [
      {
        selected: true,
        value: 0,
        title: "전체",
        img: "",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 23,
        title: "알뜰폰닷컴",
        img: "/images/data/logo_alpha.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 1,
        title: "A모바일",
        img: "/images/data/logo_partner01.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 2,
        title: "FLASH모바일",
        img: "/images/data/logo_partner02.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 3,
        title: "KG모빌리언스",
        img: "/images/data/logo_partner03.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 4,
        title: "U+유모바일",
        img: "/images/data/logo_partner04.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 5,
        title: "WELL",
        img: "/images/data/logo_partner05.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 6,
        title: "freeT",
        img: "/images/data/logo_partner06.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 7,
        title: "mobing",
        img: "/images/data/logo_partner07.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 8,
        title: "리브모바일",
        img: "/images/data/logo_partner08.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 9,
        title: "마블프로듀스",
        img: "/images/data/logo_partner09.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 10,
        title: "벨류컴",
        img: "/images/data/logo_partner10.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 11,
        title: "슈가모바일",
        img: "/images/data/logo_partner11.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 12,
        title: "스노우맨",
        img: "/images/data/logo_partner12.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 13,
        title: "스마텔",
        img: "/images/data/logo_partner13.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 14,
        title: "아이즈모바일",
        img: "/images/data/logo_partner14.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 15,
        title: "앤텔레콤",
        img: "/images/data/logo_partner15.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 16,
        title: "에스원안심모바일",
        img: "/images/data/logo_partner16.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 17,
        title: "여유텔레콤",
        img: "/images/data/logo_partner17.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 18,
        title: "이야기모바일",
        img: "/images/data/logo_partner18.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 19,
        title: "이지모바일",
        img: "/images/data/logo_partner19.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 20,
        title: "인스모바일",
        img: "/images/data/logo_partner20.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 21,
        title: "티플러스",
        img: "/images/data/logo_partner21.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 22,
        title: "헬로모바일",
        img: "/images/data/logo_partner22.png",
        link: "javascript:void(0)",
      },
    ],
    MVNO2: [
      {
        selected: false,
        value: 1,
        title: "Well",
        img: "/images/data/logo_default.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 1,
        title: "A모바일",
        img: "/images/data/logo_partner01.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 2,
        title: "FLASH모바일",
        img: "/images/data/logo_partner02.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 3,
        title: "KG모빌리언스",
        img: "/images/data/logo_partner03.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 4,
        title: "U+유모바일",
        img: "/images/data/logo_partner04.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 5,
        title: "WELL",
        img: "/images/data/logo_partner05.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 6,
        title: "freeT",
        img: "/images/data/logo_partner06.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 7,
        title: "mobing",
        img: "/images/data/logo_partner07.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 8,
        title: "리브모바일",
        img: "/images/data/logo_partner08.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 9,
        title: "마블프로듀스",
        img: "/images/data/logo_partner09.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 10,
        title: "벨류컴",
        img: "/images/data/logo_partner10.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 11,
        title: "슈가모바일",
        img: "/images/data/logo_partner11.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 12,
        title: "스노우맨",
        img: "/images/data/logo_partner12.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 13,
        title: "스마텔",
        img: "/images/data/logo_partner13.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 14,
        title: "아이즈모바일",
        img: "/images/data/logo_partner14.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 15,
        title: "앤텔레콤",
        img: "/images/data/logo_partner15.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 16,
        title: "에스원안심모바일",
        img: "/images/data/logo_partner16.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 17,
        title: "여유텔레콤",
        img: "/images/data/logo_partner17.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 18,
        title: "이야기모바일",
        img: "/images/data/logo_partner18.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 19,
        title: "이지모바일",
        img: "/images/data/logo_partner19.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 20,
        title: "인스모바일",
        img: "/images/data/logo_partner20.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 21,
        title: "티플러스",
        img: "/images/data/logo_partner21.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 22,
        title: "헬로모바일",
        img: "/images/data/logo_partner22.png",
        link: "javascript:void(0)",
      },
    ],
    MVNOList: [
      {
        selected: false,
        value: 1,
        title: "A모바일",
        img: "/images/data/logo_partner01.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 2,
        title: "FLASH모바일",
        img: "/images/data/logo_partner02.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 3,
        title: "KG모빌리언스",
        img: "/images/data/logo_partner03.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 4,
        title: "U+유모바일",
        img: "/images/data/logo_partner04.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 5,
        title: "WELL",
        img: "/images/data/logo_partner05.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 6,
        title: "freeT",
        img: "/images/data/logo_partner06.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 7,
        title: "mobing",
        img: "/images/data/logo_partner07.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 8,
        title: "리브모바일",
        img: "/images/data/logo_partner08.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 9,
        title: "마블프로듀스",
        img: "/images/data/logo_partner09.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 10,
        title: "벨류컴",
        img: "/images/data/logo_partner10.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 11,
        title: "슈가모바일",
        img: "/images/data/logo_partner11.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 12,
        title: "스노우맨",
        img: "/images/data/logo_partner12.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 13,
        title: "스마텔",
        img: "/images/data/logo_partner13.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 14,
        title: "아이즈모바일",
        img: "/images/data/logo_partner14.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 15,
        title: "앤텔레콤",
        img: "/images/data/logo_partner15.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 16,
        title: "에스원안심모바일",
        img: "/images/data/logo_partner16.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 17,
        title: "여유텔레콤",
        img: "/images/data/logo_partner17.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 18,
        title: "이야기모바일",
        img: "/images/data/logo_partner18.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 19,
        title: "이지모바일",
        img: "/images/data/logo_partner19.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 20,
        title: "인스모바일",
        img: "/images/data/logo_partner20.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 21,
        title: "티플러스",
        img: "/images/data/logo_partner21.png",
        link: "javascript:void(0)",
      },
      {
        selected: false,
        value: 22,
        title: "헬로모바일",
        img: "/images/data/logo_partner22.png",
        link: "javascript:void(0)",
      },
    ],
    deliveryRequest: [
      { selected: false, value: 0, title: "배송 전에 미리 연락 바랍니다." },
      { selected: false, value: 1, title: "부재시 경비실에 맡겨 주세요." },
      {
        selected: false,
        value: 2,
        title: "부재시 전화 주시거나 문자 남겨주세요.",
      },
      { selected: false, value: 3, title: "직접 입력하기" },
    ],
    boardSort: [
      { selected: false, value: 0, title: "전체" },
      { selected: false, value: 1, title: "제목" },
      { selected: false, value: 2, title: "내용" },
    ],
    inquiryType: [
      { selected: false, value: 0, title: "가입/변경/해지" },
      { selected: false, value: 1, title: "유심" },
      { selected: false, value: 2, title: "요금제" },
      { selected: false, value: 3, title: "혜택/이벤트" },
      { selected: false, value: 4, title: "고객지원" },
    ],
    email: [
      { selected: true, value: 0, title: "직접입력" },
      { selected: false, value: 1, title: "naver.com" },
      { selected: false, value: 2, title: "daum.net" },
      { selected: false, value: 3, title: "hanmail.net" },
      { selected: false, value: 4, title: "nate.com" },
      { selected: false, value: 5, title: "gmail.com" },
      { selected: false, value: 6, title: "dreamwiz.com" },
      { selected: false, value: 7, title: "lycos.co.kr" },
      { selected: false, value: 8, title: "chol.com" },
    ],
    privacyVer: [
      { selected: true, value: 0, title: "버전 V.20230303" },
      { selected: false, value: 1, title: "버전 V.20230304" },
      { selected: false, value: 2, title: "버전 V.20230305" },
    ],
    bank: [
      { selected: false, value: 0, title: "국민은행" },
      { selected: false, value: 1, title: "신한은행" },
      { selected: false, value: 2, title: "하나은행" },
    ],
    payType: [
      { selected: false, value: 0, title: "은행계좌 자동이체" },
      { selected: false, value: 1, title: "신용카드 자동결제" },
      { selected: false, value: 2, title: "지로납부" },
    ],
    usimModel: [
      { selected: false, value: 0, title: "K3830" },
      { selected: false, value: 1, title: "K3840" },
      { selected: false, value: 2, title: "K3620" },
    ],
    iphone: [
      { selected: false, value: 0, title: "iPhone11" },
      { selected: false, value: 1, title: "iPhone11 Pro" },
      { selected: false, value: 3, title: "iPhone11 Pro Max" },
      { selected: false, value: 4, title: "iPhone12" },
      { selected: false, value: 5, title: "iPhone12 mini" },
      { selected: false, value: 6, title: "iPhone12 Pro" },
      { selected: false, value: 7, title: "iPhone12 Pro Max" },
      { selected: false, value: 8, title: "iPhone13" },
      { selected: false, value: 9, title: "iPhone13 mini" },
      { selected: false, value: 10, title: "iPhone13 Pro" },
      { selected: false, value: 11, title: "iPhone13 Pro Max" },
      { selected: false, value: 12, title: "iPhone14" },
    ],
    galaxy: [
      { selected: false, value: 0, title: "갤럭시 Z Fold 4" },
      { selected: false, value: 1, title: "갤럭시 Z Flip 4" },
      { selected: false, value: 2, title: "갤럭시 S23" },
      { selected: false, value: 3, title: "갤럭시 S23+" },
      { selected: false, value: 4, title: "갤럭시 S23 Ultra" },
    ],
    subwayArea: [
      { selected: false, value: 0, title: "수도권" },
      { selected: false, value: 1, title: "부산" },
      { selected: false, value: 2, title: "대전" },
      { selected: false, value: 3, title: "대구" },
      { selected: false, value: 4, title: "광주" },
    ],
    subwayLine: [
      { selected: false, value: 0, title: "노선1" },
      { selected: false, value: 1, title: "노선2" },
      { selected: false, value: 2, title: "노선3" },
      { selected: false, value: 3, title: "노선4" },
    ],
    subwayStation: [
      { selected: false, value: 0, title: "역1" },
      { selected: false, value: 1, title: "역2" },
      { selected: false, value: 2, title: "역3" },
      { selected: false, value: 3, title: "역4" },
    ],
  },

  // tag
  tag: {
    category: {
      // 요금제 카테고리
      select: [
        { title: "후불유심요금제", selected: true },
        { title: "선불유심요금제", selected: false },
      ],
      data: [
        { selected: true, disabled: false, title: "지금 HOT한" },
        { selected: false, disabled: false, title: "이달의 추천" },
        { selected: false, disabled: false, title: "데이터x통화 무제한" },
        { selected: false, disabled: false, title: "사은품 팡팡" },
        { selected: false, disabled: false, title: "인터넷 결합 요금제" },
        { selected: false, disabled: false, title: "카톡/인터넷용" },
        { selected: false, disabled: false, title: "5G 요금제" },
        { selected: false, disabled: false, title: "부모님 추천" },
        { selected: false, disabled: false, title: "초저가요금제" },
        { selected: false, disabled: false, title: "통화무제한" },
      ],
    },
    categorySample1: {
      // 가이드용 샘플
      select: [],
      data: [
        { selected: true, disabled: false, title: "지금 HOT한" },
        { selected: false, disabled: false, title: "이달의 추천1" },
        { selected: false, disabled: false, title: "데이터x통화 무제한" },
        { selected: false, disabled: false, title: "사은품 팡팡" },
        { selected: false, disabled: false, title: "인터넷 결합 요금제" },
        { selected: false, disabled: false, title: "카톡/인터넷용" },
        { selected: false, disabled: false, title: "5G 요금제" },
      ],
    },
    categorySample2: {
      // 가이드용 샘플
      select: [],
      data: [
        { selected: true, disabled: false, title: "지금 HOT한" },
        { selected: false, disabled: false, title: "이달의 추천2" },
        { selected: false, disabled: false, title: "데이터x통화 무제한" },
        { selected: false, disabled: false, title: "사은품 팡팡" },
        { selected: false, disabled: false, title: "인터넷 결합 요금제" },
        { selected: false, disabled: false, title: "카톡/인터넷용" },
        { selected: false, disabled: false, title: "5G 요금제" },
        { selected: false, disabled: false, title: "부모님 추천" },
        { selected: false, disabled: false, title: "초저가요금제" },
        { selected: false, disabled: false, title: "통화무제한" },
      ],
    },
    categorySample3: {
      // 가이드용 샘플
      select: [
        { title: "후불유심요금제", selected: true },
        { title: "선불유심요금제", selected: false },
      ],
      data: [
        { selected: true, disabled: false, title: "지금 HOT한" },
        { selected: false, disabled: false, title: "이달의 추천3" },
        { selected: false, disabled: false, title: "데이터x통화 무제한" },
        { selected: false, disabled: false, title: "사은품 팡팡" },
        { selected: false, disabled: false, title: "인터넷 결합 요금제" },
        { selected: false, disabled: false, title: "카톡/인터넷용" },
        { selected: false, disabled: false, title: "5G 요금제" },
        { selected: false, disabled: false, title: "부모님 추천" },
        { selected: false, disabled: false, title: "초저가요금제" },
        { selected: false, disabled: false, title: "통화무제한" },
      ],
    },
    categorySample4: {
      // 가이드용 샘플
      select: [
        { title: "후불유심요금제", selected: true },
        { title: "선불유심요금제", selected: false },
      ],
      data: [
        { selected: true, disabled: false, title: "지금 HOT한" },
        { selected: false, disabled: false, title: "이달의 추천4" },
        { selected: false, disabled: false, title: "데이터x통화 무제한" },
        { selected: false, disabled: false, title: "사은품 팡팡" },
        { selected: false, disabled: false, title: "인터넷 결합 요금제" },
        { selected: false, disabled: false, title: "카톡/인터넷용" },
        { selected: false, disabled: false, title: "5G 요금제" },
        { selected: false, disabled: false, title: "부모님 추천" },
        { selected: false, disabled: false, title: "초저가요금제" },
        { selected: false, disabled: false, title: "통화무제한" },
      ],
    },
    categorySample5: {
      // 가이드용 샘플
      select: [],
      data: [
        { selected: true, disabled: false, title: "지금 HOT한" },
        { selected: false, disabled: false, title: "이달의 추천" },
        { selected: false, disabled: false, title: "데이터x통화 무제한" },
        { selected: false, disabled: false, title: "사은품 팡팡" },
        { selected: false, disabled: false, title: "인터넷 결합 요금제" },
      ],
    },
    categorySample6: {
      // 가이드용 샘플 (이벤트)
      select: [],
      data: [
        { selected: true, disabled: false, title: "이번달 이벤트" },
        { selected: false, disabled: false, title: "제휴 이벤트" },
        { selected: false, disabled: false, title: "친구초대" },
        { selected: false, disabled: false, title: "제휴카드" },
        { selected: false, disabled: false, title: "사용후기" },
      ],
    },
    categorySample7: {
      // 가이드용 샘플
      select: [],
      data: [
        { selected: false, disabled: false, title: "전체" },
        { selected: true, disabled: false, title: "로밍패스" },
        { selected: false, disabled: false, title: "제로 프리미엄" },
        { selected: false, disabled: false, title: "하루 데이터 로밍" },
        { selected: false, disabled: false, title: "로밍 부가서비스" },
      ],
    },
    recom: {
      // [ALFM-MA01-PG00] 추천요금제 태그
      select: [],
      data: [
        { selected: true, disabled: false, title: "# 기분좋은 봄맞이 특가" },
        { selected: false, disabled: false, title: "# 새학기 특별 할인" },
        { selected: false, disabled: false, title: "# 알파에만 있어요" },
        { selected: false, disabled: false, title: "# 인기 요금제" },
        { selected: true, disabled: false, title: "# 기분좋은 봄맞이 특가" },
        { selected: false, disabled: false, title: "# 새학기 특별 할인" },
        { selected: false, disabled: false, title: "# 알파에만 있어요" },
        { selected: false, disabled: false, title: "# 인기 요금제" },
      ],
    },
    review: {
      // [ALFM-MY07-LT00] 사용자 평점·후기 관리
      select: [],
      data: [
        { selected: true, disabled: false, title: "전체" },
        { selected: false, disabled: false, title: "후기등록" },
        { selected: false, disabled: false, title: "등록완료" },
      ],
    },
    guide: {
      // [ALFM-FT05-PG00, ALFM-FT01-PG00] 이용약관
      select: [],
      data: [
        { selected: true, disabled: false, title: "서비스 이용약관" },
        { selected: false, disabled: false, title: "홈페이지 이용약관" },
        { selected: false, disabled: false, title: "휴대폰 보험 보통약관" },
        { selected: false, disabled: false, title: "구독서비스 이용약관" },
      ],
    },
    FAQ: {
      // [ALFM-CS04-PG00] 자주하는 질문
      select: [],
      data: [
        { selected: true, disabled: false, title: "전체보기" },
        { selected: false, disabled: false, title: "가입 및 변경" },
        { selected: false, disabled: false, title: "요금 및 납부" },
        { selected: false, disabled: false, title: "혜택/이벤트" },
        { selected: false, disabled: false, title: "결합할인" },
        { selected: false, disabled: false, title: "회원가입" },
      ],
    },
    youtube: {
      // [ALFM-BE01-LT00] 유튜브 태그
      select: [],
      data: [
        { selected: true, disabled: false, title: "전체" },
        { selected: false, disabled: false, title: "#우체국" },
        { selected: false, disabled: false, title: "#원칩" },
        { selected: false, disabled: false, title: "#셀프 개통" },
        { selected: false, disabled: false, title: "#유심" },
        { selected: false, disabled: false, title: "#알뜰폰" },
        { selected: false, disabled: false, title: "#알뜰폰 플러스" },
        { selected: false, disabled: false, title: "#이마트24" },
        { selected: false, disabled: false, title: "#유무선결합" },
      ],
    },
    usim: {
      // 팝업 편의점 검색
      select: [],
      data: [
        { selected: true, disabled: false, title: "전체" },
        { selected: false, disabled: false, title: "유심판매" },
        { selected: false, disabled: false, title: "바로픽업" },
      ],
    },
  },

  // swiper
  swiper: {
    rateplan: [
      {
        title: "데이터안심15G+",
        desc: "월 11GB + 매일 2GB + 3Mbps",
        price: "월 10,890원",
        priceOption: "6개월 이후 38,900원",
        img: "/images/data/logo_partner01.png",
        alt: "A mobile",
        score: "4.5",
      },
      {
        title: "데이터안심15G+",
        desc: "월 11GB + 매일 2GB + 3Mbps",
        price: "월 10,890원",
        priceOption: "6개월 이후 38,900원",
        img: "/images/data/logo_partner02.png",
        alt: "FLASH mobile",
        score: "5.0",
      },
      {
        title: "데이터안심15G+",
        desc: "월 11GB + 매일 2GB + 3Mbps",
        price: "월 10,890원",
        priceOption: "6개월 이후 38,900원",
        img: "/images/data/logo_partner03.png",
        alt: "KG 모바일+",
        score: "4.0",
      },
      {
        title: "데이터안심15G+",
        desc: "월 11GB + 매일 2GB + 3Mbps",
        price: "월 10,890원",
        priceOption: "6개월 이후 38,900원",
        img: "/images/data/logo_partner04.png",
        alt: "U+ U mobile",
        score: "4.5",
      },
      {
        title: "데이터안심15G+",
        desc: "월 11GB + 매일 2GB + 3Mbps",
        price: "월 10,890원",
        priceOption: "6개월 이후 38,900원",
        img: "/images/data/logo_partner05.png",
        alt: "WinnerStel",
        score: "4.5",
      },
      {
        title: "데이터안심15G+",
        desc: "월 11GB + 매일 2GB + 3Mbps",
        price: "월 10,890원",
        priceOption: "6개월 이후 38,900원",
        img: "/images/data/logo_partner06.png",
        alt: "프리티",
        score: "4.5",
      },
      {
        title: "데이터안심15G+",
        desc: "월 11GB + 매일 2GB + 3Mbps",
        price: "월 10,890원",
        priceOption: "6개월 이후 38,900원",
        img: "/images/data/logo_partner07.png",
        alt: "Mobing",
        score: "4.5",
      },
    ],
    rateplan2: [
      {
        title: "데이터안심15G+",
        desc: "월 11GB + 매일 2GB + 3Mbps",
        price: "월 10,890원",
        priceOption: "6개월 이후 38,900원",
        img: "/images/data/logo_partner01.png",
        alt: "A mobile",
        score: "4.5",
      },
      {
        title: "데이터안심15G+",
        desc: "월 11GB + 매일 2GB + 3Mbps",
        price: "월 10,890원",
        priceOption: "6개월 이후 38,900원",
        img: "/images/data/logo_partner01.png",
        alt: "A mobile",
        score: "4.5",
      },
    ],
    rateplan3: [
      {
        title: "데이터안심15G+",
        desc: "월 11GB + 매일 2GB + 3Mbps",
        price: "월 10,890원",
        priceOption: "6개월 이후 38,900원",
        img: "/images/data/logo_partner01.png",
        alt: "A mobile",
        score: "4.5",
      },
      {
        title: "데이터안심15G+",
        desc: "월 11GB + 매일 2GB + 3Mbps",
        price: "월 10,890원",
        priceOption: "6개월 이후 38,900원",
        img: "/images/data/logo_partner01.png",
        alt: "A mobile",
        score: "4.5",
      },
      {
        title: "데이터안심15G+",
        desc: "월 11GB + 매일 2GB + 3Mbps",
        price: "월 10,890원",
        priceOption: "6개월 이후 38,900원",
        img: "/images/data/logo_partner01.png",
        alt: "A mobile",
        score: "4.5",
      },
    ],
    notice: [
      {
        to: "javascript:void(0)",
        img: "https://api.uplusmvno.com/umah/fo/s3/getImage?filename=2024/4/26/GRAND오픈_메인팝업_0426.png",
        alt: "개통 시 Npay 5천원 선착순 증정 리뷰이벤트 2023.01.02 - 2023.01.31",
      },
      {
        to: "javascript:void(0)",
        img: "https://api.uplusmvno.com/umah/fo/s3/getImage?filename=2024/4/26/바로배송_팝업_0426_1.png",
        alt: "개통 시 Npay 5천원 선착순 증정 리뷰이벤트 2023.02.01 - 2023.02.28",
      },
    ],
    youtube: [
      {
        title: "편의점 알뜰폰 유심 사봄 feat.원칩편의점 알뜰폰 유심 사봄 feat.원칩",
        channel: "유튜브 채널명유튜브유튜브 채널명유튜브 채널명유튜브 채널명유튜브 채널명유튜브 채널명",
        url: "https://www.youtube.com/embed/xt9WafOY8d0",
        videoTitle: "YouTube video player",
        img: "https://yt3.ggpht.com/ytc/APkrFKYW5ka7JVzrfx5RS9886qHCCb5HUjhdpQDeUqnb=s68-c-k-c0x00ffffff-no-rj",
        alt: "channel logo",
      },
      {
        title: "편의점 알뜰폰 유심 사봄 feat.원칩",
        channel: "유튜브 채널명",
        url: "https://www.youtube.com/embed/xt9WafOY8d0",
        videoTitle: "YouTube video player",
        img: "https://yt3.ggpht.com/ytc/APkrFKYW5ka7JVzrfx5RS9886qHCCb5HUjhdpQDeUqnb=s68-c-k-c0x00ffffff-no-rj",
        alt: "channel logo",
      },
      {
        title: "편의점 알뜰폰 유심 사봄 feat.원칩",
        channel: "유튜브 채널명",
        url: "https://www.youtube.com/embed/xt9WafOY8d0",
        videoTitle: "YouTube video player",
        img: "https://yt3.ggpht.com/ytc/APkrFKYW5ka7JVzrfx5RS9886qHCCb5HUjhdpQDeUqnb=s68-c-k-c0x00ffffff-no-rj",
        alt: "channel logo",
      },
      {
        title: "편의점 알뜰폰 유심 사봄 feat.원칩",
        channel: "유튜브 채널명",
        url: "https://www.youtube.com/embed/xt9WafOY8d0",
        videoTitle: "YouTube video player",
        img: "https://yt3.ggpht.com/ytc/APkrFKYW5ka7JVzrfx5RS9886qHCCb5HUjhdpQDeUqnb=s68-c-k-c0x00ffffff-no-rj",
        alt: "channel logo",
      },
    ],
    naver: [
      {
        title: "알뜰폰 가입 개통 방법! 갤럭시S23알뜰폰 가입 개통 방법! 갤럭시S23",
        date: "2023.02.02",
        story: "모이모이의 IT 이야기모이모이의 IT 이야기모이모이의 IT 이야기모이모이의 IT 이야기모이모이의 IT 이야기",
        img: "/images/data/img_card_thum02.png",
        alt: "네이버 블로그 썸네일",
      },
      {
        title: "알뜰폰 가입 개통 방법! 갤럭시S23",
        date: "2023.02.02",
        story: "모이모이의 IT 이야기",
        img: "/images/data/img_card_thum02.png",
        alt: "네이버 블로그 썸네일",
      },
      {
        title: "알뜰폰 가입 개통 방법! 갤럭시S23",
        date: "2023.02.02",
        story: "모이모이의 IT 이야기",
        img: "/images/data/img_card_thum02.png",
        alt: "네이버 블로그 썸네일",
      },
      {
        title: "알뜰폰 가입 개통 방법! 갤럭시S23",
        date: "2023.02.02",
        story: "모이모이의 IT 이야기",
        img: "/images/data/img_card_thum02.png",
        alt: "네이버 블로그 썸네일",
      },
    ],
    instagram: [
      {
        id: "@aiden_group",
        date: "2023.02.02",
        img: "/images/data/img_card_thum10.png",
        alt: "인스타그램 썸네일",
      },
      {
        id: "@aiden_group",
        date: "2023.02.02",
        img: "/images/data/img_card_thum10.png",
        alt: "인스타그램 썸네일",
      },
      {
        id: "@aiden_group",
        date: "2023.02.02",
        img: "/images/data/img_card_thum10.png",
        alt: "인스타그램 썸네일",
      },
      {
        id: "@aiden_group",
        date: "2023.02.02",
        img: "/images/data/img_card_thum10.png",
        alt: "인스타그램 썸네일",
      },
      {
        id: "@aiden_group",
        date: "2023.02.02",
        img: "/images/data/img_card_thum10.png",
        alt: "인스타그램 썸네일",
      },
      {
        id: "@aiden_group",
        date: "2023.02.02",
        img: "/images/data/img_card_thum10.png",
        alt: "인스타그램 썸네일",
      },
    ],
    event: [
      {
        title: "무제한이 9천원대! 오직 알파에서만 무제한이 9천원대! 오직 알파에서만",
        img: "/images/data/img_card_thum07.png",
        alt: "혜택 이벤트 썸네일",
      },
      {
        title: "무제한이 9천원대! 오직 알파에서만 무제한이 9천원대! 오직 알파에서만",
        img: "/images/data/img_card_thum07.png",
        alt: "혜택 이벤트 썸네일",
      },
      {
        title: "무제한이 9천원대! 오직 알파에서만 무제한이 9천원대! 오직 알파에서만",
        img: "/images/data/img_card_thum07.png",
        alt: "혜택 이벤트 썸네일",
      },
      {
        title: "무제한이 9천원대! 오직 알파에서만 무제한이 9천원대! 오직 알파에서만",
        img: "/images/data/img_card_thum07.png",
        alt: "혜택 이벤트 썸네일",
      },
    ],
    banner: [
      {
        to: "javascript:void(0)",
        img: "/images/data/img_bnr01.jpg",
        pc_img: "/images/data/img_bnr01_pc.jpg",
        alt: "혜택을 가지고 다시 돌아왔어요! 데이터 프리덤 300GB",
      },
      {
        to: "javascript:void(0)",
        img: "/images/data/img_bnr01.jpg",
        pc_img: "/images/data/img_bnr01_pc.jpg",
        alt: "혜택을 가지고 다시 돌아왔어요! 데이터 프리덤 300GB",
      },
      {
        to: "javascript:void(0)",
        img: "/images/data/img_bnr01.jpg",
        pc_img: "/images/data/img_bnr01_pc.jpg",
        alt: "혜택을 가지고 다시 돌아왔어요! 데이터 프리덤 300GB",
      },
    ],
    mainBanner: [
      {
        to: "javascript:void(0)",
        img: "/images/data/img_main_bnr2.png",
        pc_img: "https://api.uplusmvno.com/umah/fo/s3/getImage?filename=2025/4/30/main_banner_인터넷iptv.png",
        alt: "알닷! 알뜰폰을 부탁해! 다양한 알닷케어 혜택과 풍성한 개통 혜택 확인!",
      },
      {
        to: "javascript:void(0)",
        img: "/images/data/img_main_bnr2.png",
        pc_img: "https://api.uplusmvno.com/umah/fo/s3/getImage?filename=2025/5/13/ban_mainup_aldot1st_0513_pc.png",
        alt: "알닷! 알뜰폰을 부탁해! 다양한 알닷케어 혜택과 풍성한 개통 혜택 확인!",
      },
      {
        to: "javascript:void(0)",
        img: "/images/data/img_main_bnr2.png",
        pc_img: "https://api.uplusmvno.com/umah/fo/s3/getImage?filename=2025/4/30/ban_roaming_mainup_pc.png",
        alt: "알닷! 알뜰폰을 부탁해! 다양한 알닷케어 혜택과 풍성한 개통 혜택 확인!",
      },
      {
        to: "javascript:void(0)",
        img: "/images/data/img_main_bnr2.png",
        pc_img: "https://api.uplusmvno.com/umah/fo/s3/getImage?filename=2025/4/30/main_banner_미성년자.png",
        alt: "알닷! 알뜰폰을 부탁해! 다양한 알닷케어 혜택과 풍성한 개통 혜택 확인!",
      },
      {
        to: "javascript:void(0)",
        img: "/images/data/img_main_bnr2.png",
        pc_img: "https://api.uplusmvno.com/umah/fo/s3/getImage?filename=2025/4/30/ban_mainup_melon_pc.png",
        alt: "알닷! 알뜰폰을 부탁해! 다양한 알닷케어 혜택과 풍성한 개통 혜택 확인!",
      },
      {
        to: "javascript:void(0)",
        img: "/images/data/img_main_bnr2.png",
        pc_img: "https://api.uplusmvno.com/umah/fo/s3/getImage?filename=2025/5/2/ban_mainup_hello05_PC_0502.png",
        alt: "알닷! 알뜰폰을 부탁해! 다양한 알닷케어 혜택과 풍성한 개통 혜택 확인!",
      },
    ],
    shop: [
      { img: "/images/data/img_shop.jpg", alt: "" },
      { img: "/images/data/img_shop.jpg", alt: "" },
      { img: "/images/data/img_shop.jpg", alt: "" },
    ],
    flow: [
      { img: "/images/data/logo_partner01.png", alt: "A모바일" },
      { img: "/images/data/logo_partner02.png", alt: "FLASH모바일" },
      { img: "/images/data/logo_partner03.png", alt: "KG모빌리언스" },
      { img: "/images/data/logo_partner04.png", alt: "U+유모바일" },
      { img: "/images/data/logo_partner05.png", alt: "WELL" },
      { img: "/images/data/logo_partner06.png", alt: "freeT" },
      { img: "/images/data/logo_partner07.png", alt: "mobing" },
      { img: "/images/data/logo_partner08.png", alt: "리브모바일" },
      { img: "/images/data/logo_partner09.png", alt: "마블프로듀스" },
      { img: "/images/data/logo_partner10.png", alt: "벨류컴" },
      { img: "/images/data/logo_partner11.png", alt: "슈가모바일" },
      { img: "/images/data/logo_partner12.png", alt: "스노우맨" },
      { img: "/images/data/logo_partner13.png", alt: "스마텔" },
      { img: "/images/data/logo_partner14.png", alt: "아이즈모바일" },
      { img: "/images/data/logo_partner15.png", alt: "앤텔레콤" },
      { img: "/images/data/logo_partner16.png", alt: "에스원안심모바일" },
      { img: "/images/data/logo_partner17.png", alt: "여유텔레콤" },
      { img: "/images/data/logo_partner18.png", alt: "이야기모바일" },
      { img: "/images/data/logo_partner19.png", alt: "이지모바일" },
      { img: "/images/data/logo_partner20.png", alt: "인스모바일" },
      { img: "/images/data/logo_partner21.png", alt: "티플러스" },
      { img: "/images/data/logo_partner22.png", alt: "헬로모바일" },
    ],
    esimios: [
      {
        step: "step 01",
        title: "eSIM을 개통한 아이폰에 오는 <br>Push 메시지를 눌러주세요",
        img: "/images/content/img_ios_set01.png",
        alt: "",
      },
      {
        step: "step 02",
        title: "eSIM 활성화를 해주세요",
        img: "/images/content/img_ios_set02.png",
        alt: "",
      },
      {
        step: "step 03",
        title: "새로 개통할 eSIM 요금제 <br>레이블을 선택해주세요",
        img: "/images/content/img_ios_set03.png",
        alt: "",
      },
      {
        step: "step 04",
        title: "기본회선을 선택하고 <br>계속을 눌러주세요",
        img: "/images/content/img_ios_set04.png",
        alt: "",
      },
      {
        step: "step 05",
        title: "애플 ID를 연동할 회선을 <br>선택하고 계속을 눌러주세요!",
        img: "/images/content/img_ios_set05.png",
        alt: "",
      },
      {
        step: "step 06",
        title: "셀룰러 데이터에 사용할 회선을 <br>선택 후 계속을 누르면 끝!",
        img: "/images/content/img_ios_set06.png",
        alt: "",
      },
    ],
    esimaos: [
      {
        step: "step 01",
        title: "휴대폰 [설정] 메뉴의 <br>[연결]을 눌러주세요",
        img: "/images/content/img_and_set01.png",
        alt: "",
      },
      {
        step: "step 02",
        title: "[SIM 카드 관리자] 메뉴를 <br>눌러주세요",
        img: "/images/content/img_and_set02.png",
        alt: "",
      },
      {
        step: "step 03",
        title: "[모바일 요금제 추가] 메뉴를 <br>눌러주세요",
        img: "/images/content/img_and_set03.png",
        alt: "",
      },
      {
        step: "step 04",
        title: "요금제 추가 되는 동안 <br>잠시만 기다려주세요!",
        img: "/images/content/img_and_set04.png",
        alt: "",
      },
      {
        step: "step 05",
        title: "[확인]버튼을 눌러주세요!",
        img: "/images/content/img_and_set05.png",
        alt: "",
      },
    ],
    dataRecome: {
      list: [
        [
          {
            id: "0",
            size: "<strong>71</strong>GB",
            description: "매일 1시간 이상 <strong>영상</strong>을 본다면",
            price: "12980",
            date: "24개월 할인 특가",
            salePrice: "480000",
            tooltip: false,
          },
          {
            id: "1",
            size: "매일 <strong>5</strong>GB",
            description: "매일 1시간 이상 <strong>영상</strong>을 본다면",
            price: "13570",
            date: "24개월 할인 특가",
            salePrice: "256000",
            tooltip: false,
          },
          {
            id: "2",
            size: "<strong>100</strong>GB",
            description: "부담없이 즐기는 <strong>무제한</strong> 데이터",
            price: "78900",
            date: "24개월 할인 특가",
            salePrice: "632510",
            tooltip: false,
          },
          {
            id: "3",
            size: "<strong>15</strong>GB",
            description: "출퇴근길에 <strong>음악</strong>을 듣는다면",
            price: "13500",
            date: "24개월 할인 특가",
            salePrice: "321000",
            tooltip: false,
          },
          {
            id: "4",
            size: "<strong>7</strong>GB",
            description: "<strong>웹 서핑</strong>과 <strong>카톡</strong>만 한다면",
            price: "25900",
            date: "24개월 할인 특가",
            salePrice: "568000",
            tooltip: false,
          },
        ],
        [
          {
            id: "0",
            size: "<strong>71</strong>GB",
            description: "매일 1시간 이상 <strong>영상</strong>을 본다면",
            price: "12980",
            date: "7개월 할인 특가",
            salePrice: "480000",
            tooltip: false,
          },
          {
            id: "1",
            size: "매일 <strong>5</strong>GB",
            description: "매일 1시간 이상 <strong>영상</strong>을 본다면",
            price: "13570",
            date: "7개월 할인 특가",
            salePrice: "256000",
            tooltip: false,
          },
          {
            id: "2",
            size: "<strong>100</strong>GB",
            description: "부담없이 즐기는 <strong>무제한</strong> 데이터",
            price: "78900",
            date: "7개월 할인 특가",
            salePrice: "632510",
            tooltip: false,
          },
          {
            id: "3",
            size: "<strong>15</strong>GB",
            description: "출퇴근길에 <strong>음악</strong>을 듣는다면",
            price: "13500",
            date: "7개월 할인 특가",
            salePrice: "321000",
            tooltip: false,
          },
          {
            id: "4",
            size: "<strong>7</strong>GB",
            description: "<strong>웹 서핑</strong>과 <strong>카톡</strong>만 한다면",
            price: "25900",
            date: "7개월 할인 특가",
            salePrice: "568000",
            tooltip: false,
          },
        ],
      ],
    },
  },

  // [ALFM-PR01-PG00] 꼼꼼하게 찾기 필터
  filter: {
    data: [
      {
        checked: true,
        id: "filter_radio01_01",
        title: "전체",
        value: "데이터 전체",
      },
      {
        checked: false,
        id: "filter_radio01_02",
        title: "데이터 무제한",
        value: "데이터 무제한",
      },
      {
        checked: false,
        id: "filter_radio01_03",
        title: "1GB 미만",
        value: "1GB 미만",
      },
      {
        checked: false,
        id: "filter_radio01_04",
        title: "1~5GB",
        value: "1~5GB",
      },
      {
        checked: false,
        id: "filter_radio01_05",
        title: "5~15GB",
        value: "5~15GB",
      },
      {
        checked: false,
        id: "filter_radio01_06",
        title: "15~50GB",
        value: "15~50GB",
      },
      {
        checked: false,
        id: "filter_radio01_07",
        title: "50~100GB",
        value: "50~100GB",
      },
    ],
    speed: [
      {
        checked: false,
        id: "filter_checkbox01_01",
        title: "1Mbps 미만",
        info: "웹서핑이 느릴 수 있어요",
        value: "1Mbps 미만",
      },
      {
        checked: false,
        id: "filter_checkbox01_02",
        title: "1Mbps",
        info: "카톡 텍스트는 되지만 사진은 느려요",
        value: "1Mbps",
      },
      {
        checked: false,
        id: "filter_checkbox01_03",
        title: "3Mbps",
        info: "유튜브 p720화질을 무난히 볼 수 있어요",
        value: "3Mbps",
      },
      {
        checked: false,
        id: "filter_checkbox01_04",
        title: "5Mbps",
        info: "유튜브 p1080화질을 무난히 볼 수 있어요",
        value: "5Mbps",
      },
      {
        checked: false,
        id: "filter_checkbox01_05",
        title: "10Mbps",
        info: "유튜브 p1080화질을 아주 원활히 볼 수 있어요",
        value: "10Mbps",
      },
    ],
    price: [
      {
        checked: true,
        id: "filter_radio02_01",
        title: "전체",
        min: "0",
        max: "60000",
        value: "가격 전체",
      },
      {
        checked: false,
        id: "filter_radio02_02",
        title: "1만원 이하",
        min: "0",
        max: "10000",
        value: "1만원 이하",
      },
      {
        checked: false,
        id: "filter_radio02_03",
        title: "1만원 대",
        min: "10000",
        max: "20000",
        value: "1만원 대",
      },
      {
        checked: false,
        id: "filter_radio02_04",
        title: "2만원 대",
        min: "20000",
        max: "30000",
        value: "2만원 대",
      },
      {
        checked: false,
        id: "filter_radio02_05",
        title: "3만원 대",
        min: "30000",
        max: "40000",
        value: "3만원 대",
      },
      {
        checked: false,
        id: "filter_radio02_06",
        title: "4만원 대",
        min: "40000",
        max: "50000",
        value: "4만원 대",
      },
      {
        checked: false,
        id: "filter_radio02_07",
        title: "5만원 이상",
        min: "50000",
        max: "100000",
        value: "5만원 이상",
      },
    ],
    call: [
      {
        checked: false,
        id: "filter_checkbox02_01",
        title: "통화 무제한",
        value: "통화 무제한",
      },
      {
        checked: false,
        id: "filter_checkbox02_02",
        title: "60분 미만",
        value: "60분 미만",
      },
      {
        checked: false,
        id: "filter_checkbox02_03",
        title: "60-180분",
        value: "60-180분",
      },
      {
        checked: false,
        id: "filter_checkbox02_04",
        title: "180-300분",
        value: "180-300분",
      },
    ],
    sms: [
      {
        checked: false,
        id: "filter_checkbox03_01",
        title: "문자 무제한",
        value: "문자 무제한",
      },
      {
        checked: false,
        id: "filter_checkbox03_02",
        title: "50건 미만",
        value: "50건 미만",
      },
      {
        checked: false,
        id: "filter_checkbox03_03",
        title: "50-100건",
        value: "50-100건",
      },
      {
        checked: false,
        id: "filter_checkbox03_04",
        title: "100-300건",
        value: "100-300건",
      },
      {
        checked: false,
        id: "filter_checkbox03_05",
        title: "300-500건",
        value: "300-500건",
      },
    ],
    partner: [
      {
        checked: false,
        id: "filter_checkbox04_01",
        title: "A모바일",
        value: "A모바일",
      },
      {
        checked: false,
        id: "filter_checkbox04_02",
        title: "FLASH모바일",
        value: "FLASH모바일",
      },
      {
        checked: false,
        id: "filter_checkbox04_03",
        title: "KG모빌리언스",
        value: "KG모빌리언스",
      },
      {
        checked: false,
        id: "filter_checkbox04_04",
        title: "U+유모바일",
        value: "U+유모바일",
      },
      {
        checked: false,
        id: "filter_checkbox04_05",
        title: "WELL",
        value: "WELL",
      },
      {
        checked: false,
        id: "filter_checkbox04_06",
        title: "freeT",
        value: "freeT",
      },
      {
        checked: false,
        id: "filter_checkbox04_07",
        title: "mobing",
        value: "mobing",
      },
      {
        checked: false,
        id: "filter_checkbox04_08",
        title: "리브모바일",
        value: "리브모바일",
      },
      {
        checked: false,
        id: "filter_checkbox04_09",
        title: "마블프로듀스",
        value: "마블프로듀스",
      },
      {
        checked: false,
        id: "filter_checkbox04_10",
        title: "밸류컴",
        value: "밸류컴",
      },
      {
        checked: false,
        id: "filter_checkbox04_11",
        title: "서경모바일",
        value: "서경모바일",
      },
      {
        checked: false,
        id: "filter_checkbox04_12",
        title: "슈가모바일",
        value: "슈가모바일",
      },
      {
        checked: false,
        id: "filter_checkbox04_13",
        title: "스노우맨",
        value: "스노우맨",
      },
      {
        checked: false,
        id: "filter_checkbox04_14",
        title: "스마텔",
        value: "스마텔",
      },
      {
        checked: false,
        id: "filter_checkbox04_15",
        title: "아이즈모바일",
        value: "아이즈모바일",
      },
      {
        checked: false,
        id: "filter_checkbox04_16",
        title: "앤텔레콤",
        value: "앤텔레콤",
      },
      {
        checked: false,
        id: "filter_checkbox04_17",
        title: "에스원안심모바일",
        value: "에스원안심모바일",
      },
      {
        checked: false,
        id: "filter_checkbox04_18",
        title: "여유텔레콤",
        value: "여유텔레콤",
      },
      {
        checked: false,
        id: "filter_checkbox04_19",
        title: "이야기모바일",
        value: "이야기모바일",
      },
      {
        checked: false,
        id: "filter_checkbox04_20",
        title: "이지모바일",
        value: "이지모바일",
      },
      {
        checked: false,
        id: "filter_checkbox04_21",
        title: "인스모바일",
        value: "인스모바일",
      },
      {
        checked: false,
        id: "filter_checkbox04_22",
        title: "티플러스",
        value: "티플러스",
      },
      {
        checked: false,
        id: "filter_checkbox04_23",
        title: "헬로모바일",
        value: "헬로모바일",
      },
    ],
    tech: [
      {
        checked: true,
        id: "filter_radio03_01",
        title: "전체",
        value: "통신기술 전체",
      },
      {
        checked: false,
        id: "filter_radio03_02",
        title: "4G(LTE)",
        value: "4G(LTE)",
      },
      { checked: false, id: "filter_radio03_03", title: "5G", value: "5G" },
    ],
    discount: [
      {
        checked: true,
        id: "filter_radio04_01",
        title: "전체",
        value: "할인 전체",
      },
      {
        checked: false,
        id: "filter_radio04_02",
        title: "6개월 미만",
        value: "6개월 미만",
      },
      {
        checked: false,
        id: "filter_radio04_03",
        title: "6~12개월",
        value: "6~12개월",
      },
      {
        checked: false,
        id: "filter_radio04_04",
        title: "12개월 이상",
        value: "12개월 이상",
      },
    ],
    service: [
      {
        checked: false,
        id: "filter_checkbox05_01",
        title: "NFC 지원",
        value: "NFC 지원",
      },
      {
        checked: false,
        id: "filter_checkbox05_02",
        title: "소액결제",
        value: "소액결제",
      },
      {
        checked: false,
        id: "filter_checkbox05_03",
        title: "유심무료",
        value: "유심무료",
      },
      {
        checked: false,
        id: "filter_checkbox05_04",
        title: "모바일 핫스팟",
        value: "모바일 핫스팟",
      },
      {
        checked: false,
        id: "filter_checkbox05_05",
        title: "데이터 쉐어링",
        value: "데이터 쉐어링",
      },
      {
        checked: false,
        id: "filter_checkbox05_06",
        title: "eSIM 지원",
        value: "eSIM 지원",
      },
      {
        checked: false,
        id: "filter_checkbox05_07",
        title: "해외 로밍",
        value: "해외 로밍",
      },
      {
        checked: false,
        id: "filter_checkbox05_08",
        title: "가족 결합",
        value: "가족 결합",
      },
    ],
    target: [
      {
        checked: false,
        id: "filter_checkbox06_01",
        title: "시니어 요금제",
        value: "시니어 요금제",
      },
      {
        checked: false,
        id: "filter_checkbox06_02",
        title: "청소년 요금제",
        value: "청소년 요금제",
      },
      // { checked: false, id:'filter_checkbox06_03', title:'복지 요금제', value:'복지 요금제' },
    ],
  },

  ratePlanTable: [
    { name: "통신사명", skt: "SK", kt: "KT", lg: "LG" },
    { name: "요금제명", skt: "요금제1", kt: "요금제2", lg: "요금제3" },
    {
      name: "월 요금",
      skt: "<span>100,000</span>원",
      kt: "<span>80,000</span>원",
      lg: "<span>75,000</span>원",
    },
    {
      name: "데이터양",
      skt: "<span>500</span>GB",
      kt: "<span>200</span>GB",
      lg: "<span>180</span>GB",
    },
    {
      name: "통화량",
      skt: "<span>집/이동전화<br>무제한</span>",
      kt: "<span>집/이동전화<br>무제한</span>",
      lg: "<span>집/이동전화<br>무제한</span>",
    },
    { name: "월 요금", skt: "기본제공", kt: "기본제공", lg: "기본제공" },
  ],

  alert: {
    // [공통][PR02Alert] [페이지][ALFM-PR02-PO00 ~ 08] 꼭 맞는 요금제 찾기 중단
    PR02Alert: {
      title: "안내",
      content: `
        <div class="info_con">
          지금 팝업을 닫으시면,<br>꼭 맞는 요금제 찾기가 중단되요.<br>정말 닫으시겠어요?
        </div>
      `,
      button: [
        { text: "계속할래요", class: "btn sm c07", click: "this.closeAlert()" },
        {
          text: "닫을래요",
          class: "btn sm c02",
          click:
            "this.closeAlert(); this.closePopup('PR02PO00', 'btn_PR02PO00'); this.closePopup('PR02PO01', 'btn_PR02PO01'); this.closePopup('PR02PO02', 'btn_PR02PO02'); this.closePopup('PR02PO03', 'btn_PR02PO03'); this.closePopup('PR02PO04', 'btn_PR02PO04'); this.closePopup('PR02PO05', 'btn_PR02PO05'); this.closePopup('PR02PO06', 'btn_PR02PO06'); this.closePopup('PR02PO07', 'btn_PR02PO07'); this.closePopup('PR02PO08', 'btn_PR02PO08');",
        },
      ],
    },

    // [공통][ALFM-CS02-PG00] [페이지][ALFM-CS02-PG00] 위치정보 활용 동의 안내 (동의 체크 X 시 노출)
    CS02Alert: {
      title: "위치정보 활용 동의 안내",
      content: `
        <div class="info_con">
          [내 주변 매장 찾기] 메뉴를 <br>이용하기 위해서는 <br>위치정보 활용 동의가 꼭 필요해요!
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // [공통][ALFM-CM09-PO00] 가입신청 프로세스 이탈 안내 팝업
    CM09PO00: {
      title: "안내",
      content: `
        <div class="info_con">
          ⁠신청을 종료하시겠어요?<br>
          ⁠진행중인 내용은 저장됩니다.
        </div>
      `,
      button: [
        { text: "취소", class: "btn sm c07", click: "this.closeAlert()" },
        { text: "종료하기", class: "btn sm c02", click: "this.closeAlert()" },
      ],
    },

    // [공통][ALFM-CM10-PO00] 가입신청 이어하기 안내 팝업, 23/12/15 삭제
    // CM10PO00: {
    //   title: '안내',
    //   content: `
    //     <div class="info_con">
    //       ⁠작성중인 신청서가 있습니다.<br>
    //       ⁠이어서 신청할까요?
    //     </div>
    //   `,
    //   button: [
    //     { text: '취소', class:'btn sm c07', click:"this.closeAlert()", },
    //     { text: '이어하기', class:'btn sm c02', click:"this.closeAlert()", },
    //   ],
    // },

    // [공통][ALFM-CM12-PG00] 공유하기
    CM12PG00: {
      title: "공유하기",
      content: `
        <div class="cir_icon_link">
          <ul>
            <li><a href="javascript:void(0);" class="icon_link facebook"><span>페이스북</span></a></li>
            <li><a href="javascript:void(0);" class="icon_link kakao"><span>카카오톡</span></a></li>
            <li><a href="javascript:void(0);" class="icon_link url"><span>URL 복사</span></a></li>
          </ul>
        </div>
      `,
      button: [{ text: "닫기", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // 유심구매 > 바로배송 [ALFM-BU01-PO02] alert : 바로배송 안내
    BU01PO02: {
      title: "원칩 지금배송 안내",
      content: `
        <div class="info_con">
          지금은 원칩 지금배송이 불가한 시간이에요<br>택배배송으로 전달 드릴게요
        </div>
        <div class="info_baro">
          <span class="bag clr c06">원칩 지금배송 가능시간</span>
          <strong class="time">10:00~22:00</strong>
        </div>
        <div class="box_gray">
          <ul class="text_list bull">
            <li>택배배송은 보통 2~3일(영업일 기준)정도 소요됩니다.</li>
            <li>택배사의 사정에 따라 배송이 지연될 수 있어요.</li>
            <li>문의하실 사항이 있으실 경우 1:1문의하기를 이용해주세요.<br>
              <a href="javascript:void(0);" class="btn xsm c07 mgt8">1:1문의하기</a>
            </li>
          </ul>
        </div>
        <div class="tip_baro">
          <span class="bag clr c06">구매팁</span>
          <span class="desc">원칩 지금배송이 가능한 시간에 주문하시면 <strong>2시간 이내</strong>로 받을 수 있어요!</span>
        </div>
      `,
      button: [
        {
          text: "택배 배송으로 받기",
          class: "btn sm c02",
          click: "this.closeAlert()",
        },
      ],
    },

    // 유심구매 > 바로배송 [ALFM-BU01-PO01] alert : 바로배송 불가 택배배송 안내
    BU01PO01: {
      title: "택배배송 안내",
      content: `
        <div class="info_con">
          입력하신 주소는 현재 원칩 지금배송이 
          불가하여 택배배송으로 전달 드릴게요
        </div>
        <div class="box_gray mgt20">
          <ul class="text_list bull">
            <li>택배배송은 보통 2~3일(영업일 기준) 정도 소요됩니다.</li>
            <li>택배사의 사정에 따라 배송이 지연될 수 있어요.</li>
            <li>문의하실 사항이 있으실 경우 1:1문의하기를 이용해주세요.<br>
              <a  href="javascript:void(0);" class="btn xsm c07 mgt8">1:1문의하기</a>
            </li>
          </ul>
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // [ALFM-PR03-PO03] 검색된 번호가 없습니다.
    PR03PO03B: {
      title: "확인",
      content: `
        <div class="info_con">검색된 번호가 없습니다.</div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // 요금제 가입신청 완료 [ALFM-PR03-PO19] 알럿 : 셀프개통 불가한 시간에, 신규가입으로 가입신청 완료 시
    PR03PO19: {
      title: "안내",
      content: `
        <div class="info_con">
          지금은 셀프개통 가능한 시간이 아닙니다.<br>
          ⁠셀프개통 가능한 시간에,<br>
          ⁠마이페이지>내가 신청한 요금제<br>
          상세 화면에서 <span class="fc01">⁠희망번호</span>를 선택 후<br>
          개통을 완료해주세요!
        </div>
        <div class="box_gray mgt20">
          <strong>셀프개통 업무시간 안내</strong>
          <ul class="text_list bull">
            <li>
              번호이동 <br>
              : 오전 10시 ~ 오후 8시 (평일/토요일)
            </li>
          </ul>
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // 요금제 가입신청 완료 [ALFM-PR03-PO19] 알럿 : USIM 없이, 가입신청 완료 시
    PR03PO19B: {
      title: "안내",
      content: `
        <div class="info_con">
          택배로 USIM을 받게 되시면,<br>
          마이페이지>내가 신청한 요금제<br>
          상세 화면에서 <span class="fc01">USIM 정보를 입력</span> 후<br>
          개통을 완료해주세요!
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // [ALFM-PR03-PO05] 조회된 일련번호가 없을 경우 Alert
    PR03PO05: {
      title: "안내",
      content: `
        <div class="info_con">
          조회된 일련번호가 없습니다.<br>
          모델명으로 조회해 주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // [ALFM-PR03-PO04] eSIM 미지원 단말기인 경우
    PR03PO04: {
      title: "안내",
      content: `
        <div class="info_con">
          해당 단말기는 eSIM을 지원하지 않습니다.<br>
          계속해서 가입신청 후<br>
          상담사를 통해 개통하시겠어요?
        </div>
      `,
      button: [
        {
          text: "상담받고<br>개통할래요",
          class: "btn sm c07",
          click: "this.closeAlert()",
        },
        {
          text: "USIM으로<br>개통할래요",
          class: "btn sm c02",
          click: "this.closeAlert()",
        },
      ],
    },

    // [ALFM-PR03-PO00] 셀프개통 불가 경우
    PR03PO00: {
      title: "안내",
      content: `
        <div class="info_con">
          지금은 셀프개통 가능한 시간이 아닙니다. <br>
          현재는 가입 신청 접수만 가능하며,<br>
          가입 신청서를 작성하여 주시면<br>
          개통이 가능할 때, 다시 알려 드리겠습니다.
        </div>
        <div class="box_gray mgt20">
          <strong>셀프개통 가능시간</strong>
          <ul class="text_list bull">
            <li>번호이동<br>
              : 오전 10시 ~ 오후 8시 (평일/토요일)
            </li>
          </ul>
        </div>
      `,
      button: [
        {
          text: "가입신청서 작성하기",
          class: "btn sm c02",
          click: "this.closeAlert()",
        },
      ],
    },

    // [ALFM-PR03-PO05] 사전 인증하기 승인 거부 Alert
    PR03PO06: {
      title: "안내",
      content: `
        <div class="info_con">
          번호이동 사전 동의를 승인하지 않았거나<br />
          거부한 상태입니다.<br /><br />
          사전동의 승인 후 인증을 확인하여 주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // [ALFM-PR03-PO05] 사전 인증하기 항목 오류 Alert
    PR03PO07: {
      title: "안내",
      content: `
        <div class="info_con">
          사전 인증 항목을 정확하게 입력하여 주세요
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // [ALFM-BE02-PG00] 댓글을 삭제하시겠어요?
    BE02PG00: {
      title: "안내",
      content: `
        <div class="info_con">댓글을 삭제하시겠어요?</div>
      `,
      button: [
        { text: "취소", class: "btn sm c07", click: "this.closeAlert()" },
        { text: "확인", class: "btn sm c02", click: "this.closeAlert()" },
      ],
    },

    // [ALFM-BE02-PG00] 댓글이 삭제되었습니다.
    BE02PG00B: {
      title: "안내",
      content: `
        <div class="info_con">댓글이 삭제되었습니다.</div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // [BE02PO00] 모두의 유심, 원칩 이벤트
    BE02PO00A: {
      title: "안내",
      content: `
        <div class="info_con">이미 참여하신 이벤트 입니다.</div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },
    BE02PO00B: {
      title: "안내",
      content: `
        <div class="info_con">개인정보 수집 및 활용에 <br />동의하셔야만 신청 가능합니다.</div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },
    BE02PO00C: {
      title: "안내",
      content: `
        <div class="info_con">답변이 입력되지 않은 내용이 있습니다. <br />답변을 입력해 주세요.</div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },
    BE02PO01A: {
      title: "알림",
      content: `
        <div class="info_con">신규 인터넷 상담 접수가<br /> 완료되었습니다.</div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },
    BE02PO01B: {
      title: "알림",
      content: `
        <div class="info_con">인터넷 결합 상담 접수가<br /> 완료되었습니다.</div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // [ALFM-CS05-PO02] 1:1 문의하기 > 등록 > 완료 :: 등록 완료 - 미로그인 Case
    CS05PO02: {
      title: "안내",
      content: `
        <div class="info_con">
          1:1문의하기가 접수되었습니다.<br>입력하신 이메일 주소로<br>문의에 대한 답변을 보내드릴게요!<br>
          <span class="info_sub">문의가 많은 경우 답변이 지연될 수 있습니다.</span>
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // [ALFM-CS05-PO02] 1:1 문의하기 > 등록 > 완료 :: 등록 완료 - 등록 완료 - 로그인 Case
    CS05PO02B: {
      title: "안내",
      content: `
        <div class="info_con">
          1:1문의하기가 접수되었습니다.<br>
          문의에 대한 답변은<br>
          [마이페이지 > 1:1문의내역]에서<br>
          확인하실 수 있어요!<br>
          <span class="info_sub">문의가 많은 경우 답변이 지연될 수 있습니다.</span>
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // [ALFM-CS05-PO01] 1:1 문의하기 > 등록 > 등록확인 :: 이메일 주소 확인
    CS05PO01: {
      title: "안내",
      content: `
        <div class="info_con">
          답변 받으실 이메일 주소가 맞나요?<br>
          <strong class="fc01">abcdef@hotmail.com</strong>
        </div>
      `,
      button: [
        { text: "취소", class: "btn sm c07", click: "this.closeAlert()" },
        { text: "확인", class: "btn sm c02", click: "this.closeAlert()" },
      ],
    },

    // [ALFM-CS05-PO01] 1:1 문의하기 > 등록 > 등록확인 :: 문의 등록 확인
    CS05PO01B: {
      title: "안내",
      content: `
        <div class="info_con">
          입력하신 내용으로 문의하시겠어요?
        </div>
      `,
      button: [
        { text: "취소", class: "btn sm c07", click: "this.closeAlert()" },
        { text: "확인", class: "btn sm c02", click: "this.closeAlert()" },
      ],
    },

    // [ALFM-CS05-PO00] 알럿 : 인증번호 발송 안내
    CS05PO00: {
      title: "안내",
      content: `
        <div class="info_con">
          해당 번호로 인증번호를 <br>발송하였습니다.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // [ALFM-CS05-PO00] 알럿 : 고객명 입력 안내
    CS05PO00B: {
      title: "안내",
      content: `
        <div class="info_con">
          고객명을 입력해 주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // [ALFM-CS05-PO00] 알럿 : 휴대폰 번호 입력 안내
    CS05PO00C: {
      title: "안내",
      content: `
        <div class="info_con">
          휴대폰 번호를 정확하게 <br>입력해 주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // [ALFM-CS05-PO00] 알럿 : 인증 번호 불일치 안내
    CS05PO00E: {
      title: "안내",
      content: `
        <div class="info_con">
          인증번호가 틀렸습니다.<br>
          다시 확인해 주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // login [ALFM-LG01-PO00] 로그인 > 회원가입 안내 alert
    LG01PO00: {
      title: "회원가입 안내",
      content: `
        <div class="info_con">
          아직 알뜰폰닷컴의 회원이 아니신가요? <br>지금 바로 가입하시고 <br> 회원만의 혜택을 놓치지 마세요!
        </div>
      `,
      button: [
        { text: "취소", class: "btn sm c07", click: "this.closeAlert()" },
        { text: "회원가입", class: "btn sm c02", click: "this.closeAlert()" },
      ],
    },

    // login [ALFM-LG01-PO00] 로그인 > 사이트 이용 제한 안내 alert
    LG01PO00B: {
      title: "사이트 이용 제한 안내",
      content: `
        <div class="info_con">
          관리자 요청에 의해 <br> 사이트 이용이 제한된 계정입니다. <br>문의사항이 있으실 경우,<br> 1:1 문의하기를 이용해 주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // login [ALFM-LG01-PO00] 로그인 > 소셜회원 안내 팝업 alert
    LG01PO00S: {
      title: "안내",
      content: `
        <div class="info_con">
          <span>$카카오톡 or 네이버$</span>으로<br> 가입한 회원이시네요.<br> 지금 바로 간편하게 로그인 해보세요!
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // login [ALFM-LG04-PO00] 중복된 이메일이 없을 경우 alert
    LG04PO00: {
      title: "안내",
      content: `
        <div class="info_con">
          이용 가능한 메일 주소입니다!<br>가입을 계속 진행해주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // login [ALFM-LG04-PO00] 기존 계정 또는 탈퇴한 경우 alert
    LG04PO00B: {
      title: "안내",
      content: `
        <div class="info_con">
          입력하신 이메일 주소는 <br> 이미 사용중이거나 탈퇴한 계정입니다. <br> 다른 이메일 주소를 입력해 주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // login [ALFM-LG04-PO00] 가입된 회원정보가 있는 경우 alert
    LG04PO00C: {
      title: "로그인 안내",
      content: `
        <div class="info_con">
          이미 알뜰폰닷컴의 회원이시네요.<br>간편하게 로그인 후<br>회원 서비스를 계속 이용해 보세요!
        </div>
      `,
      button: [{ text: "로그인하기", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // [ALFM-CS05-PO00] 알럿 : 인증 완료 안내
    CS05PO00D: {
      title: "안내",
      content: `
        <div class="info_con">
          인증이 완료되었습니다.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // [ALFM-MY08-PO01] 마이페이지 > 내 정보 수정 > 회원탈퇴 완료
    MY08PO01: {
      title: "회원탈퇴 완료",
      content: `
        <div class="info_con">
          회원탈퇴가 완료되었습니다.<br>그동안 알뜰폰닷컴를 이용해 주셔서 감사합니다.
        </div>
      `,
      button: [
        {
          text: "알뜰폰닷컴 홈 바로가기",
          class: "btn sm c02 w_ty02",
          click: "this.closeAlert()",
        },
      ],
    },
    // [ALFM-MY08-PO01] 마이페이지 > 내 정보 수정 > 회원탈퇴 안내
    MY08PO01B: {
      title: "회원탈퇴 안내",
      content: `
        <div class="info_con">
          개인정보 보호를 위해 회원탈퇴 시 <br>본인 인증이 필요합니다.
        </div>
      `,
      button: [
        {
          text: "본인 인증 하기",
          class: "btn sm c02 w_ty02",
          click: "this.closeAlert()",
        },
      ],
    },

    // [ALFM-CM10-PO00] 공통 > 가입신청 이어하기 안내 :
    CM10PO00B: {
      title: "요금제 가입안내",
      content: `
        <div class="info_con">
          기존에 신청하시던 요금제가 있어요. <br><br>
          새로운 요금제를 가입하시면, <br>
          요금제 가입신청 이어하기가 초기화 되어요.<br>
          그래도 계속하시겠어요?
        </div>
      `,
      button: [
        {
          text: "새 요금제로<br>가입하기",
          class: "btn sm c07",
          click: "this.closeAlert()",
        },
        {
          text: "기존 요금제 가입<br> 이어하기",
          class: "btn sm c02",
          click: "this.closeAlert()",
        },
      ],
    },

    // [ALFM-CM10-PO00] 공통 > 가입신청 개통 안내 :
    CM10PO00C: {
      title: "요금제 개통안내",
      content: `
        <div class="info_con">
          개통 신청을 대기중인 요금제가 있습니다. <br>
          개통 신청 완료 후, <br>
          신규 요금제 가입을 진행 해 주세요.
        </div>
      `,
      button: [
        {
          text: "마이페이지로 이동하기",
          class: "btn sm c02",
          click: "this.closeAlert()",
        },
      ],
    },

    // 요금제상세 [ALFM-PR01-PG01] alert : 제휴카드 안내
    PR01PG01C: {
      title: "제휴카드 안내",
      content: `
        <div class="info_con">
          제휴카드로 통신비를 자동이체 하시면,<br>
          제공되는 카드사의 혜택만큼 <br>
          요금을 더 할인 받으실 수 있어요.
        </div>
        <div class="box_gray mgt20">
          <ul class="text_list bull">
            <li>카드 할인은 해당 카드사 청구서에서 확인하실 있는 내역이라, 알뜰폰닷컴에서 요금제 가입신청서에 나오는 요금과 청구서의 요금과는 다르게 표시될 수 있어요.</li>
            <li>제휴카드의 혜택과 할인 조건은 각 카드별로 다르기에 <strong>제휴카드 자세히 알아보기</strong>에서 자세한 내용을 확인해 주세요. <br>
              <a href="javascript:void(0);" class="btn xsm c07 mgt8">제휴카드 자세히 알아보기</a>
            </li>
          </ul>
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // login [ALFM-LG01-PO00] 휴먼회원 안내 alert
    LG01PO00C: {
      title: "휴먼회원 안내",
      content: `
        <div class="info_con">
        회원님은 1년 동안 로그인을 하지 않아 <br>
        휴면회원으로 전환 되었습니다. <br>
        휴면회원 해제를 원하시면 아래의<br>
        [해제하기] 를 눌러 본인 인증을 진행해 주세요. 
        </div>
      `,
      button: [
        { text: "취소", class: "btn sm c07", click: "this.closeAlert()" },
        { text: "해제하기", class: "btn sm c02", click: "this.closeAlert()" },
      ],
    },
    // login [ALFM-LG01-PO00] 로그인 5회 실패 안내 alert
    LG01PO00D: {
      title: "로그인 안내",
      content: `
        <div class="info_con">
          로그인을 5회 실패하여<br>
          고객님의 정보 보호를 위해<br>
          로그인을 제한합니다.<br>
          비밀번호를 다시 설정해 주세요.
        </div>
      `,
      button: [
        {
          text: "메인으로 이동",
          class: "btn sm c07",
          click: "this.closeAlert()",
        },
        {
          text: "비밀번호 재설정",
          class: "btn sm c02",
          click: "this.closeAlert()",
        },
      ],
    },
    // login [ALFM-LG01-PO00] 비밀번호 변경 안내 alert
    LG01PO00E: {
      title: "비밀번호 변경 안내",
      content: `
        <div class="info_con">
          고객님의 개인 정보 보호를 위해<br>
          비밀번호를 변경해 주세요.<br><br>
          
          고객님은 6개월 이상<br>
          동일한 비밀번호를 사용하고 계십니다.<br>
          소중한 개인 정보 보호를 위해<br>
          비밀번호를 주기적으로 변경해 주세요.
        </div>
      `,
      button: [
        {
          text: "30일 후에 변경",
          class: "btn sm c07",
          click: "this.closeAlert()",
        },
        {
          text: "비밀번호 재설정",
          class: "btn sm c02",
          click: "this.closeAlert()",
        },
      ],
    },

    // login [ALFM-LG03-PO00] 기존과 동일한 비밀번호 alert
    LG03PO00: {
      title: "안내",
      content: `
        <div class="info_con">
          입력하신 비밀번호는 <br>
          이전에 사용하셨던 비밀번호 입니다.<br>
          다른 비밀번호를 입력해 주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // 공통 [ALFM-CM13-PO00] 광고성 정보 수신 알림  alert
    CM13PO00: {
      title: "광고성 정보 수신 알림 안내",
      content: `
        <div class="info_con advert">
          광고성 정보 수신을 알림을 설정하시면 <br>
          알뜰폰닷컴의 다양한 혜택과 <br>
          요금제 정보 등을 받으실 수 없어요. <br>
          그래도 거부하시겠어요?
        </div>
      `,
      button: [
        {
          text: "동의 유지하기",
          class: "btn sm c07",
          click: "this.closeAlert()",
        },
        { text: "거부 하기", class: "btn sm c02", click: "this.closeAlert()" },
      ],
    },

    // 요금제 가입신청 완료 [ALFM-PR03-PO19] 알럿 : 감사 문구, 가입신청 완료 시
    PR03PO19C: {
      title: "안내",
      content: `
        <div class="info_con">
          가입신청을 해주셔서 감사합니다. <br>
          셀프개통은 최대 5분 정도의 시간이 걸려요. <br><br>

          유심을 교체한 후 전원을 2~3회 <br>
          재시작 해 주시면 이용이 가능합니다.<br><br>

          번호이동 하신 고객님은 <br>
          기존폰이 끊기면 유심을 교체하여 주세요.
        </div>
      `,
      button: [
        {
          text: "개통 신청하기",
          class: "btn sm c02",
          click: "this.closeAlert()",
        },
      ],
    },
    // 요금제 가입신청 완료 [ALFM-PR03-PO19] 알럿 : 외국인미성년자, 가입신청 완료 시
    PR03PO19D: {
      title: "안내",
      content: `
        <div class="info_con">
          가입신청을 해주셔서 감사합니다. <br>
          회원님은 상담사의 확인 후, <br>
          개통 처리를 도와드릴게요.<br><br>

          조금만 기다려 주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // 마이페이지 [ALFM-MY02-PO01] USIM 정보 자동 입력 알림  alert
    MY02PO01: {
      title: "USIM 정보가 등록된 카드가 있어요",
      content: `
        <div class="info_con">
        등록된 유심카드의 번호를<br>
        자동으로 불러올까요?
        </div>
      `,
      button: [
        {
          text: "직접<br> 입력할게요",
          class: "btn sm c07",
          click: "this.closeAlert()",
        },
        {
          text: "자동으로<br>불러와 주세요",
          class: "btn sm c02",
          click: "this.closeAlert()",
        },
      ],
    },

    // 마이페이지 [ALFM-MY08-PO00] 기존 계정 또는 탈퇴한 경우 alert
    MY08PO00B: {
      title: "SNS 계정 연결 안내",
      content: `
        <div class="info_con">
          하나의 SNS만 연결되어 있어<br>
          계정 연결을 해제할 수 없어요. <br>
          회원 탈퇴를 이용하여 주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // 마이페이지 [ALFM-MY01-PO00] 요금제 가입 이어하기 안내 alert
    MY01PO00: {
      title: "요금제 가입 이어하기 안내",
      content: `
        <div class="info_con">
          선택하신 요금제의 가격이 <br>
          변동되었을 수 있으니 <br>
          가입신청서의 마지막 화면에서 <br>
          요금제 가격을 꼭 확인해 주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // 유심 교체 개통 공통 에러 케이스
    CS03PO00A: {
      title: "안내",
      content: `
        <div class="info_con">
          미성년자 / 외국인의 경우
          현재 알닷에서 유심 교체가 불가합니다.<br /><br />

          요금제를 사용 중이신 <br />
          파트너사의 고객센터를 통해 <br />
          신청 부탁 드립니다.<br /><br />

          ▶ 파트너사 고객센터 안내<br /><br />

          (알닷에 입접되지 않은 파트너사의 경우  국번없이 114로 문의하여 주시기 바랍니다. )
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },
    CS03PO00B: {
      title: "안내",
      content: `
        <div class="info_con">
          이름과 주민등록번호가 일치하지 않습니다.<br />
          확인 후 다시 입력해 주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },
    CS03PO00C: {
      title: "안내",
      content: `
        <div class="info_con">
          입력해 주신 정보가 정확하지 않습니다.<br />
          확인 후 다시 입력해 주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },
    CS03PO00D: {
      title: "안내",
      content: `
        <div class="info_con">
          인증 진행 중 입니다.<br />
          인증 요청을 받은 앱에서<br />
          인증 진행 후 다시<br />
          인증 확인하기를 눌러주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },
    CS03PO00E: {
      title: "안내",
      content: `
        <div class="info_con">
          본인인증 처리를 실패하였습니다.<br />
          다른 인증 방법으로 요청하시거나<br />
          처음부터 다시 진행 해 주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },
    CS03PO00F: {
      title: "안내",
      content: `
        <div class="info_con">
          이미 완료된 인증건 입니다.<br />
          다른 인증 방법으로 요청하시거나<br />
          처음부터 다시 진행 해 주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },
    CS03PO00G: {
      title: "안내",
      content: `
        <div class="info_con">
          인증 확인하기 요청 허용건수가<br />
          초과 되었습니다.<br />
          다른 인증 방법으로 요청하시거나<br />
          처음부터 다시 진행 해 주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },
    CS03PO00H: {
      title: "안내",
      content: `
        <div class="info_con">
          현재 사용중인 회선의<br />
          통신사 정보가 확인되지 않습니다.<br /><br />

          통신사를 정확히 선택하여 <br />
          주시기 바랍니다.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },
    CS03PO00I: {
      title: "안내",
      content: `
        <div class="info_con">
          변경 신청이 <br />
          불가능한 유심입니다. <br /><br />

          유심 번호를 확인하여 주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },
    CS03PO00J: {
      title: "안내",
      content: `
        <div class="info_con">
          유심 변경 신청이 <br />
          진행되지 못했습니다. <br /><br />

          잠시 후, 다시 시도하여 주시기 바랍니다.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },
    CS03PO00K: {
      title: "안내",
      content: `
        <div class="info_con">
          고객정보가 조회되지 않거나, <br />
          유심 변경 대상이 아닙니다. <br /><br />

          정확한 정보를 입력 후<br />
          다시 시도해 주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },
    CS03PO00L: {
      title: "유심 변경 개통 신청",
      content: `
        <div class="info_con">
          유심 변경 개통 신청이 접수 되었습니다.<br />
          개통은 최대 3분 정도 소요되며,<br /><br />

          유심 변경 처리완료 알림톡(또는 문자)을 받으신 후, <br />
          새 유심을 휴대폰에 장착하여<br />
          전원을 1~3회 껐다 켜시고 <br /><br />

          LG U+ 데이터 정상접속 여부를 확인 바랍니다.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },
    CS03PO00M: {
      title: "유심 변경 개통 완료",
      content: `
        <div class="info_con">
          유심 변경 개통이 완료되었습니다.<br /><br />

          새 유심을 휴대폰에 장착하여<br />
          전원을 1~3회 껐다 켜시고 <br /><br />

          LG U+ 데이터 정상접속 여부를 확인 바랍니다.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c02", click: "this.closeAlert()" }],
    },

    // 외국인/미성년 개통건
    LG01Alert: {
      title: "안내",
      content: `
        <div class="info_con">
          신청하시는 요금제는<br /> 고객님의 연령대에서는 사용할 수 없어요.<br /> 다른 요금제를 신청해 주세요.
        </div>
      `,
      button: [
        {
          text: "닫기",
          class: "btn sm c02",
          click: "this.closeAlert(); this.closePopup('LG01Alert', 'btn_LG01Alert');",
        },
        {
          text: "다른 요금제 보기",
          class: "btn sm c01",
          click: "this.closeAlert()",
        },
      ],
    },
    LG02Alert: {
      title: "안내",
      content: `
        <div class="info_con">
          보이스피싱 예방, 대포폰 근절 대책에 따라<br />
          고객님의 가입하실 수 있는 회선이 제한되어 <br />
          요금제 가입 불가능합니다.<br /><br />
           
          내국인 : 180일 이내 3회선 초과 금지<br />
          외국인 : 180일 이내 2회선 초과 금지<br /><br />
           
          모든 통신사 포함 180일 이내 <br />
          추가 개통하여 회선 초과된 내역이 있는지<br />
          확인 하시기 바랍니다.<br /><br />


          [확인]을 누르시면<br />
          요금제 상세로 돌아갑니다. <br />
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c01", click: "this.closeAlert()" }],
    },
    LG03Alert: {
      title: "안내",
      content: `
        <div class="info_con">
          만 19세 이상 고객이시네요<br /><br />

          이전화면으로 돌아가서 가입대상을<br />
          일반으로 선택하여 주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c01", click: "this.closeAlert()" }],
    },
    LG04Alert: {
      title: "안내",
      content: `
        <div class="info_con">
          외국인 고객이시네요<br /><br />

          이전화면으로 돌아가서 가입대상을<br />
          외국인(Foreigner)으로 선택하여 주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c01", click: "this.closeAlert()" }],
    },
    LG05Alert: {
      title: "안내",
      content: `
        <div class="info_con">
          외국인 미성년자 고객이시네요<br /><br />

          이전화면으로 돌아가서 가입대상을<br />
          외국인 미성년자(Foreigner Minors)로<br />
          선택하여 주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c01", click: "this.closeAlert()" }],
    },
    LG06Alert: {
      title: "안내",
      content: `
        <div class="info_con">
          가입고객과 법정 대리인과의 <br />
          정보가 일치하지 않습니다.<br /><br />

          정보를  확인 후 <br />
          다시 입력해 주시기 바랍니다.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c01", click: "this.closeAlert()" }],
    },
    LG07Alert: {
      title: "안내",
      content: `
        <div class="info_con">
          만 19세 미만 고객이시네요<br /><br />

          이전화면으로 돌아가서 가입대상을<br />
          미성년자로 선택하여 주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c01", click: "this.closeAlert()" }],
    },
    LG08Alert: {
      title: "안내",
      content: `
        <div class="info_con">
          신분증 인증이 완료되었습니다. 
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c01", click: "this.closeAlert()" }],
    },
    LG09Alert: {
      title: "안내",
      content: `
        <div class="info_con">
          신분증 인증이 진행되지 못했습니다. <br /><br />

          입력된 정보를 다시 확인해 주세요.
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c01", click: "this.closeAlert()" }],
    },
    LG10Alert: {
      title: "안내",
      content: `
        <div class="info_con">
          국내 체류 자격 30일 이내 거나<br />
          만료된 체류자격 입니다.<br />
          (Period of Stay expired<br />
          or within 30 days)
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c01", click: "this.closeAlert()" }],
    },
    LG11Alert: {
      title: "안내",
      content: `
        <div class="info_con">
          알닷에서 온라인 개통이 불가능한<br />
          체류코드 입니다.<br />
          (Status of Stay does not <br />
          allow to register online)
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c01", click: "this.closeAlert()" }],
    },
    LG12Alert: {
      title: "안내",
      content: `
        <div class="info_con">
          가입가능한 회선이 초과되어<br />
          가입할 수 없습니다. <br />
          번호이동을 이용해 주세요.<br />
          (Mobile subscription line exceeded)
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c01", click: "this.closeAlert()" }],
    },
    LG13Alert: {
      title: "안내",
      content: `
        <div class="info_con">
          신분증 인증이 진행되지 못했습니다. <br /><br />

          (유큐브 메시지)
        </div>
      `,
      button: [{ text: "확인", class: "btn sm c01", click: "this.closeAlert()" }],
    },
  },
};

export default frontData;
