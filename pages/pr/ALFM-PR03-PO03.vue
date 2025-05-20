<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_PR03PO03" @click="this.$emit('openPopup', ['PR03PO03', 'btn_PR03PO03', 101]);">희망번호 찾기</button>
        </div>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_PR03PO03B" @click="this.$emit('openAlert', ['PR03PO03B', 'btn_PR03PO03B', 101]);">검색된 번호가 없습니다.</button>
        </div>
      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-PR03-PO03',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: '희망번호 찾기', floatMenu:'none' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);

    this.$emit('openPopup', ['PR03PO03', 'btn_PR03PO03', 101]);
  }
}
</script>
