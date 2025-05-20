<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav" v-html="layout.title"></h2>

      <div class="section">
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_BE02PG00" @click="this.$emit('openAlert', ['BE02PG00', 'btn_BE02PG00', 101]);">댓글을 삭제하시겠어요?</button>
        </div>
      </div>

      <div class="section">
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_BE02PG00B" @click="this.$emit('openAlert', ['BE02PG00B', 'btn_BE02PG00B', 101]);">댓글이 삭제되었습니다.</button>
        </div>
      </div>


    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
export default {
  name: 'BE02PG00',
  emits: ['setLayout', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '댓글 삭제 알럿' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
}
</script>
