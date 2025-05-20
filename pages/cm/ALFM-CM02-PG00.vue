<template>

  <div class="container">
    <div class="content check_system" id="content" ref="fullH">
      <h2 class="title_nav blind">{{ layout.title }}</h2>

      <div class="error_area ty02">
        <div class="ttl">
          <h2>지금은<br>시스템 점검중입니다</h2>
          <p>
            보다 나은 서비스 제공을 위해<br>
            서비스 점검 작업을 진행하고 있습니다.<br>
            이용에 불편을 드려 죄송합니다.<br>
            빠른 시간 내에 정상적인 서비스가 가능하도록<br>
            최선을 다하겠습니다.<br><br>

            감사합니다.
          </p>
          <div class="error_time">
            <strong>점검시간</strong>
            <span>1월 25일 00:00 ~ 1월 25일 04:00</span>
          </div>
        </div>
      </div>

    </div> <!-- // content -->
  </div><!-- // container -->
  
</template>
  
<script>
export default {
  name: 'ALFM-CM02-PG00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'none', footer: 'none', floatMenu: 'none', title: '시스템 점검중'},
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);

    setTimeout(()=>{
      console.log(this.$parent);
    }, 100)
  },
}
</script>