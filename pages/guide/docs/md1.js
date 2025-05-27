export const result_message_1 = `
  <br><br>
  <h3 class="title-h3">1. 납부 내역이 없습니다 </h3>

  \`\`\`html
  <template>

    <div class="result-message-box no-data">
      <p class="message-icon">
        <i class="img-payment"></i>
      </p>
      <p class="message-txt">납부 내역이 없습니다</p>
    </div>

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
}
\`\`\`

</div>

<div class="pub-code-wrap">

<p class="code-title">template code:</p>

\`\`\` html
<body>
  <h1>테스트</h1>
</body>
\`\`\`

</div>

<div class="pub-code-wrap">

<p class="code-title">scss code:</p>

\`\`\` scss
@charset "UTF-8";
@use "@/assets/scss/abstract/_mixin.scss" as *;
\`\`\`

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
}
\`\`\`

</div>

<div class="pub-code-wrap">

<p class="code-title">template code:</p>

\`\`\` html
<body>
  <h1>테스트</h1>
</body>
\`\`\`

</div>

<div class="pub-code-wrap">

<p class="code-title">scss code:</p>

\`\`\` scss
@charset "UTF-8";
@use "@/assets/scss/abstract/_mixin.scss" as *;
\`\`\`

</div>

`;
