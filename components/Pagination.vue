<template>
  <div class="pagination" :class="{pc_show : option.pcShow}">
    <button type="button" class="first" aria-label="처음 페이지로 이동">처음 페이지로 이동</button>
    <button type="button" class="prev" aria-label="이전 페이지로 이동">이전 페이지로 이동</button>
    <ul>
      <li><button type="button" aria-label="페이지 1">1</button></li>
      <li class="on"><button type="button" aria-label="페이지 2" title="현재 페이지">2</button></li>
      <li><button type="button" aria-label="페이지 3">3</button></li>
      <li><button type="button" aria-label="페이지 4">4</button></li>
      <li><button type="button" aria-label="페이지 5">5</button></li>
      <li><button type="button" aria-label="페이지 6">6</button></li>
      <li><button type="button" aria-label="페이지 7">7</button></li>
      <li><button type="button" aria-label="페이지 8">8</button></li>
      <li><button type="button" aria-label="페이지 9">9</button></li>
      <li><button type="button" aria-label="페이지 10">10</button></li>
    </ul>
    <button type="button" class="next" aria-label="다음 페이지로 이동">다음 페이지로 이동</button>
    <button type="button" class="last" aria-label="마지막 페이지로 이동">마지막 페이지로 이동</button>
  </div>
</template>
  
<script>
export default {
  name: "Pagination",
  props: {
    option: Object
  }
};
</script>
  