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

`

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

`