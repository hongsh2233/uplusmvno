export const page_popup_mobile = `
<br><br>

<h3 class="title-h3">
  <span>&#8226; 모바일 완료 페이지</span>
</h3>

- 모바일은 페이지로 제작됨.
- PC는 팝업으로 띄우도록 제작됨.

<div class="guide-code-btn-wrap mgy16">
    <button  type="button" class="btn-rounded btn-line"><span class="blind">CODE 닫힘</span></button>
    <button  type="button" class="btn-rounded primary"><span class="blind">CODE 펼침</span></button>
</div>

<div class="code-wrap">

\`\`\`html
<template>

  <div class="AL-MY-05-500-P05">
    <div class="first-content-item confirm-area phone-regist">
      <div class="content-inner">
        <div class="cont-head">
          <h3 class="cont-title-main">번호 변경이<br /><b class="txt-primary">완료</b>되었어요</h3>
        </div>
      </div>

      <p class="icon">
        <img src="/images/roaming/sc/Img-changenumber-complete.png" alt="" />
      </p>

      <div class="content-item">
        <div class="content-inner">
          <CardGroup :card-object="cardObject1" />

          <div class="gray-notice-box">
            <ul class="text-list bull">
              <li>신청 후 영업일 기준 5일 이내 등록하신 이메일로 발송됩니다.</li>
            </ul>
          </div>

          <div class="form-box mgt24">
            <div class="btn-area"><button type="button" class="btn-rounded btn-line">버튼명</button></div>
          </div>
        </div>
      </div>
      <!-- bottom_button -->
      <BottomFixMenu class="pd-0" :btnText="'확인'" :disabled="false" />
      <!-- // bottom_button -->
    </div>
  </div>

</template>

<script setup lang="ts">
import CardGroup from "@/components/v2/common/CardGroupRoaming.vue";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu.vue";

const cardObject1 = ref([
  {
    title: "",
    sub: "",
    chip: "",
    list: [
      { name: "타이틀", value: "값" },
      { name: "기존번호", nameDesc: "(설명)", value: "값", class: { value: "txt-orange", title: "has-desc" } },
    ],
  },
]);
</script>
<style scoped lang="scss">
@use "@/assets/scss/popup/al-my-05-500-p05" as *;
</style>
\`\`\`

</div>
`;

export const page_popup_pc = `
  <br><br>
  <h3 class="title-h3">1. 납부 내역이 없습니다 </h3>

\`\`\`html
<script setup lang="ts">
import Popup from "@/components/v2/common/Popup.vue";
import 컴포넌트이름 from "@/components/popup/파일이름.vue";

const route = useRoute();
const popupQuery = ref(route.query.popup);
</script>

<template>

  <Popup
  title="XXX 완료"
  popType="full no-title"
  confirmText="확인했어요"
  :isOpen="popupQuery === '1' && popupOpen"
  @update:isOpen="popupOpen = false"
  class="pcpopup"
  >
    <컴포넌트이름 />
  </Popup>

</template>
\`\`\`
`;

export const foundation_color_1 = `
  <h3 class="title-h3">1. Color </h3>

\`\`\`css
    :root {
    /* Grayscale */
    --gray-0: #000000;
    --gray-100: #333333;
    --gray-200: #66707a;
    --gray-300: #909090;
    --gray-400: #b3b3b3;
    --gray-500: #cccccc;
    --gray-600: #dbdbdb;
    --gray-700: #dce0e5;
    --gray-800: #eeeeee;
    --white: #ffffff;

    /* Colors */
    --color-background: #f3f5f6;
    --color-primary-light: #fc9696;
    --color-primary: #e34140;
  }
\`\`\`
`;

export const result_tabmenu_1 = `
  <br><br>
  <h3 class="title-h3">1. 탭메뉴 </h3>

\`\`\`html
  <script setup lang="ts">
  import Tab from "@/components/Tab.vue";
  import RectTab from "@/components/v2/common/Tab.vue";
  window.onTagShoHideHandler = htmlUI.tagShoHideHandler;
  </script>

  <template>

    <div class="section ty02">
      <Tab
        :data="{
          option: { type: 3 },
          data: [
            { selected: true, controls: 'tab_panel_01_01', title: '탭메뉴1' },
            { selected: false, controls: 'tab_panel_01_02', title: '탭메뉴2' },
            { selected: false, controls: 'tab_panel_01_03', title: '탭메뉴3' },
            { selected: false, controls: 'tab_panel_01_04', title: '탭메뉴4' },
          ],
        }"
      >
        <template v-slot:tab_panel_01_01>
          <h3 class="blind">탭메뉴1</h3>
          <div class="panel_cnt">
            <!-- 안쪽 탭메뉴 -->
            <RectTab :titles="['tab1', 'tab2']">
              <template #content1> 
                <!-- content1 -->
                <div class="tag-contents-wrap">
                  <div class="tag-header">
                    <div class="scroll-wrap">
                      <button class="item on" onclick="onTagShoHideHandler(this, '.contents .item')">
                        IOS
                      </button>
                      <button class="item" onclick="onTagShoHideHandler(this, '.contents .item')">
                        안드로이드
                      </button>
                    </div>
                  </div>
                  <div class="contents">
                    <div class="table-wrap tag">
                      <div class="scroll-wrap">
                        <!-- item-1 -->
                        <div class="item on">안에 내용은 AL-MS-04-002.vue 참고 바랍니다.</div>
                        <!-- //item-1 -->
                        <div class="item">안드로이드 내용</div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- //content1 -->
              </template>
              <template #content2> content2 </template>
            </RectTab>
            <!-- //안쪽 탭메뉴 -->
          </div>
        </template>
        <template v-slot:tab_panel_01_02>
          <h3 class="blind">탭메뉴2</h3>
          <div class="panel_cnt">내용2</div>
        </template>
        <template v-slot:tab_panel_01_03>
          <h3 class="blind">탭메뉴3</h3>
          <div class="panel_cnt">내용3</div>
        </template>
        <template v-slot:tab_panel_01_04>
          <h3 class="blind">탭메뉴4</h3>
          <div class="panel_cnt">내용4</div>
        </template>
      </Tab>
    </div>

  </template>
\`\`\`
`;

export const result_message_1 = `
  <br><br>
  <h3 class="title-h3">1. 납부 내역이 없습니다 </h3>

\`\`\`html
  <script setup lang="ts">
  import MessageResult from "@/components/MessageResult.vue";
  </script>
  <template>
    <!-- 
     1. description 생략시 기본: "등록된 데이터가 없습니다"
     2. icon-url 생략시 기본: "/images/roaming/icons/icon_result_no_data_1.svg"
    -->
    <MessageResult
      :description="'납부 내역이 없습니다'"
      :icon-url="'/images/roaming/icons/icon_result_no_data_1.svg'" 
    />

  </template>
\`\`\`
`;

export const alert1_1 = `
  <br><br>
  <h3 class="title-h3">1. 타이틀, 설명 확인창 </h3>

\`\`\`html
  <script setup lang="ts">
    import type { LayoutOptions } from "@/types/layout";
    const alert1 = ref(false);

    const handleClose = () => {
      console.log("닫기 버튼 클릭");
    };

    const handleProceed = () => {
      console.log("확인 버튼 클릭");
    };
  </script>

  <template>

    <!-- 타이틀, 설명 확인창  -->
    <AlertV2
      v-model="alert1"
      :textData="{
        title: '타이틀',
        description: '설명',
      }"
      :confirm="false"
      @close="handleClose"
      @proceed="handleProceed"
    />
    <!--// 타이틀, 설명 확인창 -->

  </template>
\`\`\`
  <br>
  
  <h3 class="title-h3">2. 타이틀, 설명 컨펌창</h3>

\`\`\`html
  <script setup lang="ts">
    ~ 생략 ~
  </script>

  <template>

    <!-- 타이틀, 설명 컨펌창  -->
    <AlertV2
      v-model="alert2"
      :textData="{
        title: '타이틀',
        description: '설명',
      }"
      :confirm="true"
      :buttonText="{ cancel: '취소', confirm: '버튼명' }"
      @close="handleClose"
      @proceed="handleProceed"
    />
    <!--// 타이틀, 설명 컨펌창 -->

  </template>
\`\`\`
  <br>

  <h3 class="title-h3">3. 타이틀, 설명, 텍스트상자 확인창</h3>
  
\`\`\`html
  <script setup lang="ts">
    ~ 생략 ~
  </script>

  <template>

    <!-- 타이틀, 설명, 텍스트상자 확인창  -->
    <AlertV2
      v-model="alert4"
      :textData="{
        title: '타이틀',
        description: '설명',
      }"
      :confirm="false"
      @close="handleClose"
      @proceed="handleProceed"
    >
      <dl class="brand-phone">
        <div>
          <dt>서브타이틀</dt>
          <dd>
            02-000-0000<br />
            02-000-0000(유료)
          </dd>
        </div>
      </dl>
    </AlertV2>
    <!--//타이틀, 설명, 텍스트상자 확인창 -->

  </template>
\`\`\`
  <br>

  <h3 class="title-h4">4. 타이틀, 설명, 텍스트상자 컨펌창</h3>

  
\`\`\`html
  <script setup lang="ts">
    ~ 생략 ~
  </script>

  <template>

    <!-- 타이틀, 설명, 텍스트상자 컨펌창  -->
    <AlertV2
      v-model="alert5"
      :textData="{
        title: '타이틀',
        description: '설명',
      }"
      :confirm="true"
      :buttonText="{ cancel: '취소', confirm: '버튼명' }"
      @close="handleClose"
      @proceed="handleProceed"
    >
      <dl class="brand-phone">
        <div>
          <dt>서브타이틀</dt>
          <dd>
            02-000-0000<br />
            02-000-0000(유료)
          </dd>
        </div>
      </dl>
    </AlertV2>
    <!--// 타이틀, 설명, 텍스트상자 컨펌창 -->

  </template>
\`\`\`
  <br>
`;

export const md1_1 = `
<h1 class="title-h1"><span>h1.title-h1>span{TITLE01}</span></h1>
<h2 class="title-h2"><span>h2.title-h2>span{TITLE02}</span></h2>
<h3 class="title-h3"><span>h3.title-h3>span{TITLE03}</span></h3>

문단 테그스티입니다. 문단 테그스티입니다.  문단 테그스티입니다. 문단 테그스티입니다. 문단 테그스티입니다. 문단 테그스티입니다. 문단 테그스티입니다. 문단 테그스티입니다. 문단 테그스티입니다. 문단 테그스티입니다. 문단 테그스티입니다.

문단 테그스티입니다. 문단 테그스티입니다. 문단 테그스티입니다. 문단 테그스티입니다. 문단 테그스티입니다. 문단 테그스티입니다. 문단 테그스티입니다. 문단 테그스티입니다.

- 테스트 리스트입니다.  *테스트 리스트입니다.*  **테스트 리스트입니다.** 테스트 리스트입니다. 테스트 리스트입니다. 테스트 리스트입니다. 테스트 리스트입니다. 테스트 리스트입니다. 테스트 리스트입니다.
- 리스트2
- 리스트3

1. 테스트이빈다.
2. 테스트이빈다.
3. 테스트이빈다.


| Left Tit |      Are      |  Cool |
|:---------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

Paragraphs can contain inline code 
\`const codeInline: string = 'highlighted code inline'\`{lang="ts"} 
with language prop.

<div class="pub-code-wrap">

<p class="code-title">script code:</p>
\`\`\` typescript [index.js] {1, 3 - 5} additional meta data
import {parseMarkdown} from '@nuxtjs/mdc/runtime'

async function main(mdc: string) {
  const ast = await parseMarkdown(mdc)

  return ast
}\`\`\`

</div>

<div class="pub-code-wrap">

<p class="code-title">template code:</p>
\`\`\` html
<body>
  <h1>테스트</h1>
</body>\`\`\`

</div>

<div class="pub-code-wrap">

<p class="code-title">scss code:</p>
\`\`\` scss
@charset "UTF-8";
@use "@/assets/scss/abstract/_mixin.scss" as *;\`\`\`

</div>

---

`;

export const md1_2 = `
<h1 class="title-h1"><span>h1.title-h1>span{TITLE02-1}</span></h1>
<h2 class="title-h2"><span>h2.title-h2>span{TITLE02-2}</span></h2>

- 테스트 리스트입니다.  *테스트 리스트입니다.*  **테스트 리스트입니다.** 테스트 리스트입니다. 테스트 리스트입니다. 테스트 리스트입니다. 테스트 리스트입니다. 테스트 리스트입니다. 테스트 리스트입니다.
- 리스트2
- 리스트3

1. 테스트이빈다.
2. 테스트이빈다.
3. 테스트이빈다.

| Left Tit |      Are      |  Cool |
|:---------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

Paragraphs can contain inline code 
\`const codeInline: string = 'highlighted code inline'\`{lang="ts"} 
with language prop.

<div class="pub-code-wrap">

<p class="code-title">script code:</p>
\`\`\` typescript [index.js] {1, 3 - 5} additional meta data
import {parseMarkdown} from '@nuxtjs/mdc/runtime'

async function main(mdc: string) {
  const ast = await parseMarkdown(mdc)

  return ast
}\`\`\`

</div>

<div class="pub-code-wrap">

<p class="code-title">template code:</p>
\`\`\` html
<body>
  <h1>테스트</h1>
</body>\`\`\`

</div>

<div class="pub-code-wrap">

<p class="code-title">scss code:</p>
\`\`\` scss
@charset "UTF-8";
@use "@/assets/scss/abstract/_mixin.scss" as *;\`\`\`

</div>

`;
