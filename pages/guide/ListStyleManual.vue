<template>
  <div>
    <h2>스타일 및 기본 가이드 정의</h2>
    <div class="guide_cont">

      <section>
        <h3>퍼블리싱 환경 가이드</h3>
        <ul class="guide-list">
          <li>
            <p>형상 관리 도구: <code>Git</code></p>
            <p class="sub">· 프로젝트 소스 관리를 위한 버전 관리 시스템으로 Git을 사용합니다.</p>
          </li>
          <li>
            <!-- <p>Node.js 버전: <code>v18.20.8</code></p> -->
          </li>
          <li>
            <p>에디터: <code>Visual Studio Code (VSCode)</code></p>
          </li>
          <!-- <li>
            <p>필수 확장 프로그램 (Extensions): <code>Live Sass Compiler</code></p>
          </li> -->
        </ul>
      </section>

      <!--SCSS 작성 가이드 -->
      <section>
        <h3>SCSS 작성 가이드</h3>

        <h4>1. 기본 원칙</h4>
        <table class="ui-guide-table">
          <thead>
            <tr>
              <th>규칙 항목</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0에는 단위 생략</td>
              <td><code>margin: 0 auto;</code>처럼 사용</td>
            </tr>
            <tr>
              <td>색상 표기</td>
              <td>HEX 형식 권장, 변수 사용 시 <code>$primary</code> 등 사용</td>
            </tr>
            <tr>
              <td>속성 정렬 순서</td>
              <td>레이아웃 → 박스 → 타이포 → 기타 순 정렬</td>
            </tr>
          </tbody>
        </table>

        <h4>2. 중첩(Nesting) 규칙</h4>
        <ul class="text_list bull">
          <li>중첩은 2~3단계 이하로 유지</li>
          <li>과도한 중첩 시 <code>@mixin</code>, <code>@extend</code> 활용 고려</li>
        </ul>

        <h4>3. 선택자 사용</h4>
        <table class="ui-guide-table">
          <thead>
            <tr>
              <th>사용 케이스</th>
              <th>예시</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>자식 선택자</td>
              <td><code>> div</code></td>
              <td>직계 자식에만 적용</td>
            </tr>
            <tr>
              <td>형제 선택자</td>
              <td><code>~</code>, <code>+</code></td>
              <td>의도 명확한 경우에만 사용</td>
            </tr>
            <tr>
              <td>태그 선택자</td>
              <td>지양</td>
              <td>클래스 기반 선택자 사용 권장</td>
            </tr>
            <tr>
              <td>ID 선택자</td>
              <td>지양</td>
              <td>우선순위 문제 고려하여 사용</td>
            </tr>
          </tbody>
        </table>

        <h4>4. 변수 및 믹스인 사용</h4>
        <ul class="text_list bull">
          <li>색상, 간격, 폰트는 변수로 분리 (<code>$spacing-sm</code>)</li>
          <li>공통 스타일은 <code>@mixin</code> 사용 권장</li>
          <li><code>@extend</code>는 반복 요소 간 간단한 공유에 활용</li>
        </ul>

        <h4>5. 주석 규칙</h4>
        <ul class="text_list bull">
          <li>구간 주석: <code>// ========================</code></li>
          <li>설명 주석: <code>// 설명</code></li>
          <li>인라인 주석: <code>/* 설명 */</code></li>
        </ul>

        <h4>6. 지양해야 할 예</h4>
        <table class="ui-guide-table">
          <thead>
            <tr>
              <th>잘못된 코드</th>
              <th>문제점</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>.wrap .list .item .name .label input</code></td>
              <td>중첩 과도함 (5단계 이상)</td>
            </tr>
            <tr>
              <td><code>#main</code></td>
              <td>ID 선택자 사용 지양</td>
            </tr>
            <tr>
              <td><code>color: rgb(0,0,0);</code></td>
              <td>컬러 직접 입력 → 변수로 관리 권장, rgb -> HEX코드 사용 권장</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!--클래스 스타일 가이드 -->
      <section>
        <h3>UI 클래스 가이드</h3>
        <div>
          <input
            v-model="search"
            type="text"
            placeholder="항목 검색..."
            class="search-input"
          />
          <div class="ui-guide-table-wrap">
            <table class="ui-guide-table">
              <thead>
                <tr>
                  <th>UI요소 이름</th>
                  <th>클래스명</th>
                  <th>설명</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in filteredItems" :key="index">
                  <td>{{ item.label }}</td>
                  <td>
                    <template v-for="(cls, i) in item.examples" :key="i">
                      <code>{{ cls }}</code><span v-if="i < item.examples.length - 1">, </span>
                    </template>
                  </td>
                  <td>{{ item.description }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h4>클래스명 작성 규칙</h4>
        <ul class="text_list bull">
          <li>단어는 <b>소문자 + 하이픈(-)</b> 조합 사용 (<span class="txt-green">camelCase, snake_case</span> 사용하지 않음)</li>
          <li>가급적 의미 있는 단어 사용 (<span class="txt-green">box보단 modal, box2보단 alert 등</span>)</li>
        </ul>
      </section>

      <!--이미지 사용 가이드-->
      <section>
        <h3>이미지 사용 가이드</h3>

        <h4>1. 아이콘</h4>
        <ul class="text_list bull">
          <li>기본적으로 <strong>SVG 포맷 사용</strong>을 지향</li>
        </ul>
        <h4>2. 이미지 업로드 위치</h4>
        <ul class="text_list bull">
          <li>이미지 경로는 <strong>큰 카테고리 단위로 분류하여 업로드</strong>함</li>
          <li>공통으로 사용하는 이미지는 다음 경로에 저장:<br />
            <code>public/images/common</code>
          </li>
          <li>개별 화면 또는 기능에 종속적인 이미지는 다음 경로에 저장:<br />
            <code>public/images/roaming</code>
          </li>
        </ul>

        <h4>3. 기타 권장사항</h4>
        <ul class="text_list bull">
          <li>이미지 파일명은 <strong>의미 있는 영문명 + 언더바(_)</strong> 형식 사용<br />
            예: <code>icon_download.svg</code>, <code>profile_empty.png</code>
          </li>
          <li>불필요한 중복 이미지 지양, 공통화 가능한 리소스는 <code>common</code> 폴더로 이동</li>
        </ul>
      </section>
      
      <!--이미지 사용 규칙-->
      <section>
          <h3>이미지 파일 네이밍 규칙 가이드</h3>

          <h4>1. 기본 원칙</h4>
          <table class="ui-guide-table">
            <thead>
              <tr>
                <th>규칙 항목</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>영문 소문자만 사용</td>
                <td>대소문자 혼용 금지 (<code>Login.png ❌</code> → <code>login.png ✅</code>)</td>
              </tr>
              <tr>
                <td>언더바(_) 사용</td>
                <td>띄어쓰기 대신 사용, 단일 방식으로 통일</td>
              </tr>
              <tr>
                <td>파일 내용이 드러나는 직관적 이름</td>
                <td><code>button_icon.svg ✅</code> / <code>img1.png ❌</code></td>
              </tr>
              <tr>
                <td>파일 형식별 확장자 통일</td>
                <td>벡터: <code>.svg</code>, 일반 UI/비트맵: <code>.png</code> / <code>.jpg</code>, 썸네일: <code>.webp</code> 등</td>
              </tr>
              <tr>
                <td>스페이스, 특수문자 사용 금지</td>
                <td>공백, <code>#</code>, <code>!</code>, <code>()</code>, <code>[]</code> 등 모두 금지</td>
              </tr>
            </tbody>
          </table>

          <h4>2. 추천 네이밍 패턴</h4>
          <pre><code>[UI영역]_[요소명]_[상태/버전].[확장자]</code></pre>

          <p><strong>예시:</strong></p>
          <ul>
            <li><code>login_button_icon.svg</code>, 
            <code>header_logo_dark.svg</code>, 
            <code>profile_avatar_default.png</code>, 
            <code>banner_event_summer2025.jpg</code>, 
            <code>modal_close_hover.svg</code>, 
            <code>product_thumbnail_01.webp</code></li>
          </ul>

          <h4>3. 사용 예시</h4>
          <table class="ui-guide-table">
            <thead>
              <tr>
                <th>용도</th>
                <th>네이밍 예시</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>버튼 아이콘</td>
                <td><code>button_add.svg</code>, <code>button_delete.svg</code></td>
                <td>버튼 내 아이콘</td>
              </tr>
              <tr>
                <td>로고</td>
                <td><code>logo_main.svg</code>, <code>logo_footer.svg</code></td>
                <td>위치별 구분</td>
              </tr>
              <tr>
                <td>프로필 이미지</td>
                <td><code>avatar_default.png</code>, <code>avatar_admin.png</code></td>
                <td>사용자 기본/관리자 아바타</td>
              </tr>
              <tr>
                <td>배너</td>
                <td><code>banner_main.jpg</code>, <code>banner_event_spring2025.jpg</code></td>
                <td>시즌성/위치성 포함</td>
              </tr>
              <tr>
                <td>팝업 관련</td>
                <td><code>popup_warning.svg</code>, <code>popup_close_hover.svg</code></td>
                <td>팝업 상태/인터랙션</td>
              </tr>
              <tr>
                <td>제품 이미지</td>
                <td><code>product_detail_01.jpg</code>, <code>product_thumb_02.webp</code></td>
                <td>상세 vs 썸네일 구분</td>
              </tr>
            </tbody>
          </table>

          <h4>4. 지양해야 할 예</h4>
          <table class="ui-guide-table">
            <thead>
              <tr>
                <th>잘못된 이름</th>
                <th>문제점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>IMG001.png</code></td>
                <td>의미 없음</td>
              </tr>
              <tr>
                <td><code>버튼아이콘.png</code></td>
                <td>한글 사용</td>
              </tr>
              <tr>
                <td><code>CloseBtn!.png</code></td>
                <td>특수문자 포함</td>
              </tr>
              <tr>
                <td><code>Logo New.svg</code></td>
                <td>띄어쓰기 포함</td>
              </tr>
              <tr>
                <td><code>main_image(2).jpg</code></td>
                <td>관리 어려움</td>
              </tr>
            </tbody>
          </table>
      </section>

      <!--반응형 css 작성 가이드-->
      <section>
        <h3>반응형 CSS 작성 가이드</h3>

        <h4>1. 기본 원칙</h4>
        <table class="ui-guide-table">
          <thead>
            <tr>
              <th>항목</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1rem = 10px 기준</td>
              <td>1rem = 10px 기준으로 사용</td>
            </tr>
            <tr>
              <td>모바일 퍼스트</td>
              <td>모바일(기본 스타일)을 우선 작성하고 데스크탑은 <code>.pc</code> 클래스로 예외 처리</td>
            </tr>
            <tr>
              <td>상대 단위 사용</td>
              <td><code>rem</code>, <code>%</code>, <code>vw</code>, <code>vh</code> 등 상대 단위 사용 (<code>px</code> 최소화)</td>
            </tr>
          </tbody>
        </table>

        <h4>2. 화면 대응 기준</h4>
        <table class="ui-guide-table">
          <thead>
            <tr>
              <th>기기 구분</th>
              <th>적용 방식</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mobile (기본)</td>
              <td>별도 클래스 없이 기본 적용</td>
              <td>모든 요소의 기본 스타일</td>
            </tr>
            <tr>
              <td>Desktop (PC)</td>
              <td><code>.pc</code> 클래스 활용 예외처리</td>
              <td>데스크탑에서만 동작하는 스타일은 <code>.pc</code> 사용</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!--커밋 메세지 작성 가이드-->
      <section>
        <h3>커밋 메시지 작성 가이드</h3>

        <h4>1. 작성 원칙</h4>
        <ul class="text_list bull">
          <li>커밋 메시지는 <strong>어떤 작업을 했는지 구체적으로 작성</strong></li>
          <li><strong>의미 없는 단어</strong>는 사용 금지 (예: <code>ㅁㄴㅇㄹ</code>, <code>수정</code>, <code>ㅇㅇ</code>)</li>
          <li><strong>한글 문장형</strong>으로 작성 권장 (예: 알닷 마크업 가이드 수정)</li>
        </ul>

        <h4>2. 좋은 예</h4>
        <ul class="text_list bull">
          <li>마이페이지 - 닉네임 변경 UI 수정</li>
          <li>공통 모달 컴포넌트 CSS 변경</li>
        </ul>

        <h4>3. 나쁜 예</h4>
        <ul class="text_list bull">
          <li><code>수정</code></li>
          <li><code>ㅁㄴㅇㄹ</code></li>
          <li><code>test</code></li>
          <li><code>asdf</code></li>
          <li><code>ㅇㅇ</code></li>
        </ul>

        <h4>4. 기타 권장 사항</h4>
        <ul class="text_list bull">
          <li>변경한 파일이나 기능명을 명시적으로 작성 (예: <code>번호이동 인증영역 변경 불가능하도록 수정</code>)</li>
          <li>작업이 반복되더라도 <strong>매번 커밋의 대상과 내용을 구체적으로 작성</strong></li>
          <li>커밋 메시지 본문에 "왜" 변경했는지를 추가해도 좋음 (선택사항)</li>
        </ul>
      </section>


    </div>
  </div>
</template>

<script setup>
  const search = ref('')

  const items = ref([
    { label: 'Input', examples: ['input', 'input-text'], description: '텍스트 입력 필드' },
    { label: 'Button', examples: ['button', 'button-primary', 'button-disabled'], description: '버튼' },
    { label: 'Popup / Modal', examples: ['popup', 'modal', 'popup-wrap'], description: '팝업 또는 모달' },
    { label: 'Dropdown', examples: ['dropdown', 'dropdown-item'], description: '드롭다운 셀렉트 박스' },
    { label: 'Checkbox', examples: ['checkbox', 'checkbox-checked'], description: '체크박스' },
    { label: 'Radio Button', examples: ['radio', 'radio-checked'], description: '라디오 버튼' },
    { label: 'Toggle Switch', examples: ['toggle', 'toggle-on'], description: '토글 스위치' },
    { label: 'Tooltip', examples: ['tooltip'], description: '툴팁 텍스트' },
    { label: 'Label', examples: ['label', 'form-label'], description: '입력 필드 라벨' },
    { label: 'Tag / Chip', examples: ['tag', 'chip', 'tag-remove'], description: '태그 혹은 칩' },
    { label: 'Icon', examples: ['icon', 'icon-left', 'icon-right'], description: '아이콘' },
    { label: 'Badge', examples: ['badge', 'badge-notification'], description: '뱃지' },
    { label: 'Navigation', examples: ['navigation', 'nav-bar', 'nav-item'], description: '네비게이션' },
    { label: 'Tab', examples: ['tab', 'tab-item', 'tab-active'], description: '탭 UI' },
    { label: 'List', examples: ['list', 'list-item', 'list-horizontal'], description: '리스트' },
    { label: 'Item', examples: ['item', 'item-selected'], description: '개별 아이템 요소' },
    { label: 'Section / Panel', examples: ['section', 'panel', 'panel-header'], description: '영역 구분용' },
    { label: 'Dialog', examples: ['dialog', 'dialog-message'], description: '다이얼로그창' },
    { label: 'Alert / Message Box', examples: ['message', 'alert-success', 'alert-error'], description: '메시지 박스' },
    { label: 'Loading Spinner', examples: ['loading', 'loading-spinner'], description: '로딩 UI' },
    { label: 'Pagination', examples: ['pagination', 'pagination-button'], description: '페이지네이션' },
    { label: 'Search', examples: ['search', 'search-input'], description: '검색창' },
    { label: 'File Upload', examples: ['file-upload', 'upload-button'], description: '파일 업로드' },
    { label: 'Progress Bar', examples: ['progress', 'progress-bar'], description: '진행 바' },
    { label: 'Calendar', examples: ['calendar', 'datepicker', 'calendar-day'], description: '달력 UI' }
  ])


  const uiStateMap = [
    {
      category: 'button',
      description: '버튼 컴포넌트 및 변형 상태',
      items: [
        {
          label: 'btn-rounded',
          states: ['btn-line', 'btn-line-mono', 'btn-sm', 'btn-xs', 'chip', 'close', 'disabled', 'outline', 'primary', 'white']
        }
      ]
    },
    {
      category: 'content',
      description: '콘텐츠 레이아웃 요소 또는 상태',
      items: [
        {
          label: 'content-item',
          states: ['bgnone', 'confirm', 'item-nobox']
        }
      ]
    },
    {
      category: 'form',
      description: '입력, 텍스트영역, 폼 관련 요소',
      items: [
        {
          label: 'form_label',
          states: ['required']
        },
        {
          label: 'form_item',
          states: ['certified', 'val_chk']
        },
        {
          label: 'input_box',
          states: ['auth_num', 'combobox-border', 'combobox-bottom', 'datepicker', 'dropdown', 'inp-datepicker', 'search', 'w220']
        },
        {
          label: 'textarea_box',
          states: ['disabled', 'focus']
        },
        {
          label: 'form_wrap',
          states: ['no_label']
        }
      ]
    },
    {
      category: 'list',
      description: '리스트 및 리스트 아이템 관련 클래스',
      items: [
        {
          label: 'listbox',
          states: ['disabled', 'list-multi', 'selected']
        }
      ]
    },
    {
      category: 'navigation',
      description: '화면 내 내비게이션 및 페이징 관련 요소',
      items: [
        {
          label: 'swiper-button-prev',
          states: ['swiper-button-disabled']
        },
        {
          label: 'swiper-button-next',
          states: ['swiper-button-disabled']
        }
      ]
    },
    {
      category: 'panel',
      description: '패널, 아코디언 형태의 UI',
      items: [
        {
          label: 'v-expansion-panel',
          states: ['readonly', 'v-expansion-panel--active']
        }
      ]
    },
    {
      category: 'popup',
      description: '팝업 또는 모달 형태 UI',
      items: [
        {
          label: 'pop_layer',
          states: ['alert', 'alert-gray', 'alert-v2', 'confirm', 'filter_pop', 'full', 'map_pop', 'none-ani', 'normal', 'notice', 'pop-uplus-info', 'pop_window']
        }
      ]
    },
    {
      category: 'tab',
      description: '탭 인터페이스 관련 요소',
      items: [
        {
          label: 'content-tabs',
          states: ['normal']
        }
      ]
    },
    {
      category: 'tag',
      description: '태그, 칩 스타일 컴포넌트',
      items: [
        {
          label: 'tag_list',
          states: ['block', 'on', 'variable']
        }
      ]
    }
  ]


  const filteredItems = computed(() => {
    const keyword = search.value.toLowerCase()

    return items.value.filter((item) => {
      const inLabel = item.label.toLowerCase().includes(keyword)
      const inDescription = item.description.toLowerCase().includes(keyword)

      const inExamples = item.examples.some(example =>
        example.toLowerCase().includes(keyword)
      )

      return inLabel || inDescription || inExamples
    })
  })

</script>
<style scoped>
  h3 {
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 15px;
  }
  h4 {
    margin-top: 10px;
  }

  section {
    max-width: 1440px;
    margin: 0 auto;
  }

  .text_list {
    margin-top: 8px;
  }

  code {
    background-color: #ececec;
    border-radius: .25rem;
    color: #424242;
    /* font-size: .875em; */
    font-weight: 600;
    padding: .15rem .3rem;
  }
  
  .guide-list li {
    margin-top: 8px;
  }

  .guide-list p {
    margin-bottom: 3px;
  }

  p.sub {
    padding-left: 14px;
  }

  .ui-guide-table-wrap {
    max-height: 300px;
    overflow-y: scroll;
  }

  .ui-guide-table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'Inter', 'Segoe UI', sans-serif;
    margin: 1.5rem 0;
    border: 1px solid #e0e0e0;

  }

  .ui-guide-table th,
  .ui-guide-table td {
    padding: 12px 16px;
    text-align: left;
    border: 1px solid #e0e0e0;
    font-size: 1.4rem;
  }

  .ui-guide-table th {
    background-color: #f6f8fa;
    font-weight: 600;
    color: #333;
  }

  .ui-guide-table td {
    background-color: #fff;
    color: #444;
  }

  .ui-guide-table tr:nth-child(even) td {
    background-color: #fafafa;
  }

  .ui-guide-table code {
    background: #f1f1f1;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: monospace;
  }

</style>