export const gnb = [
  {
    id: 5,
    isOn: false,
    menu: "마이페이지",
    url: "/my/ALFM-MY01-PG00",
    className: "my",
    sub: [
      { isOn: false, menu: "내가 신청한 요금제", url: "" },
      { isOn: false, menu: "내가 구매한 유심", url: "" },
      { isOn: false, menu: "내가 찜한 요금제", url: "" },
      { isOn: false, menu: "최근 둘러본 요금제", url: "" },
      { isOn: false, menu: "1:1 문의 내역", url: "" },
      { isOn: false, menu: "사용자 평점/후기 관리", url: "" },
      { isOn: false, menu: "추천 활동 내역 확인하기", url: "" },
    ],
  },
  {
    id: 0,
    isOn: false,
    menu: "유심구매",
    url: "/bu/ALFM-BU01-PG00",
    className: "bu",
    sub: [
      { isOn: false, menu: "지금배송", url: "/bu/ALFM-BU01-PG00" },
      { isOn: false, menu: "편의점 구매", url: "/bu/ALFM-BU02-PG00" },
      { isOn: false, menu: "지하철 판매처", url: "" },
    ],
  },
  {
    id: 1,
    isOn: false,
    menu: "요금제",
    url: "/pr/ALFM-PR01-PG00",
    className: "pr",
    sub: [
      { isOn: false, menu: "이달의 혜택", url: "" },
      { isOn: false, menu: "알닷ONLY", url: "" },

      { isOn: false, menu: "요금제 찾기", url: "/pr/ALFM-PR01-PG00" },
      { isOn: false, menu: "내게 맞는 요금제 찾기", url: "" },
      { isOn: false, menu: "인터넷 트리플 혜택", url: "" },
    ],
  },
  {
    id: 2,
    isOn: false,
    menu: "알닷케어",
    url: "/sc/ALFM-MY01-PG00",
    className: "sc",
    sub: [
      {
        isOn: false,
        menu: "가입 정보 관리",
        url: "/sc/AL-MY-05-001",
        depth2: [
          { menu: "가입 정보", url: "/sc/AL-MY-05-001" },
          { menu: "가입 회선 관리", url: "/sc/AL-MY-05-002" },
          { menu: "휴대폰 정보 등록", url: "/sc/AL-MY-05-005" },
        ],
      },
      {
        isOn: false,
        menu: "요금/납부",
        url: "/sc/AL-MY-03-002",
        depth2: [
          {
            menu: "청구요금 조회",
            url: "/sc/AL-MY-03-002",
            depth3: [
              { menu: "청구 요금 보기", url: "/sc/AL-MY-03-002" },
              { menu: "청구서 받는 방법 변경", url: "/sc/AL-MY-03-004" },
              { menu: "청구서 재발행", url: "/sc/AL-MY-03-005" },
            ],
          },
          {
            menu: "납부 조회/변경",
            url: "/sc/AL-MY-04-001",
            depth3: [
              { menu: "납부내역 조회", url: "/sc/AL-MY-04-001" },
              { menu: "납부 방법 변경", url: "/sc/AL-MY-04-002" },
              { menu: "결제일 변경", url: "/sc/AL-MY-04-003" },
              { menu: "입금 전용 계좌 발급", url: "" },
            ],
          },
        ],
      },
      {
        isOn: false,
        menu: "사용 현황",
        url: "/sc/AL-MY-02-001",
        depth2: [
          { menu: "실시간 사용량", url: "/sc/AL-MY-02-001" },
          { menu: "실시간 요금", url: "/sc/AL-MY-02-002" },
          { menu: "월별 사용량", url: "/sc/AL-MY-02-003" },
        ],
      },
      {
        isOn: false,
        menu: "분실/정지/해제",
        url: "/sc/AL-MY-06-001",
        depth2: [
          { menu: "휴대폰(유심) 분실 등록/해제", url: "/sc/AL-MY-06-001" },
          { menu: "일시정지/해제", url: "/sc/AL-MY-06-004" },
        ],
      },
      {
        isOn: false,
        menu: "유심보호서비스 신청/해지",
        url: "",
      },
    ],
  },
  {
    id: 3,
    isOn: false,
    menu: "혜택",
    url: "/be/ALFM-BE01-PG00",
    className: "be",
    sub: [
      { isOn: false, menu: "이벤트", url: "/be/ALFM-BE02-LT00" },
      { isOn: false, menu: "가족/친구 추천하기", url: "" },
      { isOn: false, menu: "제휴카드 혜택", url: "" },
      { isOn: false, menu: "알닷 활용하기", url: "" },
      { isOn: false, menu: "당첨자 발표", url: "" },
    ],
  },
  {
    id: 4,
    isOn: false,
    menu: "고객지원",
    url: "/cs/ALFM-CS02-PG00",
    className: "cs",
    sub: [
      { isOn: false, menu: "고객센터 안내", url: "" },
      { isOn: false, menu: "내 주변 매장 찾기", url: "/cs/ALFM-CS02-PG00" },
      { isOn: false, menu: "공지사항", url: "" },
      { isOn: false, menu: "자주하는 질문", url: "" },
      { isOn: false, menu: "1:1 문의하기", url: "" },
    ],
  },
];
