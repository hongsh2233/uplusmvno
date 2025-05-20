---
outline: deep
---

# Contents Example
This page demonstrates usage of some of the admin write provided by Alpah Project.

## 종류
이벤트 등록, 가족/친구 추천, 혜택, 카드 등록 샘플에 관한 페이지 입니다.

## 방법
주석으로 어드민 등록이 되어야할 컨텐츠 부분만 카피하여 등록하시면 됩니다. 

## <strong class="danger">꼭 지켜야할 사항</strong>
::: details 등록하는 부분에서 style, js는 최상단에 존재하여야 한다.
::: danger
```예시
<style>
</style>
<div class="event-sample-240502">
</div>
<script>
</script>
```
:::

::: details 각각 페이지들의 class명은 unique하게 들어가야함.(단, unique한 클래스에 상속 하면 됨)
::: danger
```예시
<div class="event-240502">
  <div class="section-sample-240502"></div>
</div>
```
:::

::: details admin contents image 등록시에도 이미지명이 unique하게 들어가야함<br />&nbsp;&nbsp;&nbsp;&nbsp;(같으면 모든 이미지가 다 바뀜)
::: danger
```예시
<img src="section_sample_240502.png" />
```
:::