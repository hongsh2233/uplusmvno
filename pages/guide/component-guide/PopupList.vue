<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info">Popup</div>

      <div class="section">
        <h3 class="tit02">호출하기 <span style="font-size:1.2rem;">( 'ID', 'buttonID', z-index )</span></h3>
        <div class="box_yellow">
          <p>this.$emit('<b class="fc01">openPopup</b>', ['BU01PO00', 'btn_BU01PO00', 101]);</p>
          <p class="mgt4">this.$emit('<b class="fc01">openAlert</b>', ['BU01PO00', 'btn_BU01PO00', 101]);</p>
        </div>
        <p style="font-size:1.2rem; margin-top:1rem">(페이지 내 컴포넌트) &lt;Compare @openPopup="this.$emit('openPopup', $event)" /></p>
        <p style="font-size:1.2rem;">emits: ['openPopup', 'closePopup', 'openAlert']</p>
      </div>



      <div class="section">
        <div class="btn_group">
          <button type="button" class="btn lg c01" id="btn_Alert" @click="this.$emit('openAlert', ['PR02Alert', 'btn_Alert', 101]);">Alert</button>
        </div>
        <div class="btn_group">
          <button type="button" class="btn lg c02" id="btn_PR01PG00" @click="this.$emit('openPopup', ['PR01PG00', 'btn_PR01PG00', 101]);">Popup Normal (filterPop)</button>
        </div>
        <div class="btn_group">
          <button type="button" class="btn lg c03" id="btn_CS02PG00" @click="this.$emit('openPopup', ['CS02PG00', 'btn_CS02PG00', 101]);">Popup Full (위치정보 활용 동의)</button>
        </div>
        <div class="btn_group">
          <button type="button" class="btn lg c04" id="btn_notice" @click="this.$emit('openPopup', ['notice', 'btn_notice', 101]);">Popup notice</button>
        </div>
      </div> <!-- // section -->
      
      



      <div class="section ty02">
        <h3 class="tit02">tooltip VUETIFY</h3>

        <div>
          데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
          <v-btn id="tooltip0" class="btn_tooltip" :class="{on : tooltip[0]}" title="툴팁" @click="tooltip[0] = !tooltip[0]">툴팁</v-btn>
          <v-tooltip v-model="tooltip[0]" activator="#tooltip0" location="top" offset="0" scroll-strategy="close" :open-on-hover="false" no-click-animation>
            <div class="tooltip_content">
              데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
            </div>
          </v-tooltip>
        </div>

        <br><br><br><br>

        <div>
          데이터 소진 시 유튜브 화질 1080p로 <v-btn id="tooltip1" class="btn_tooltip" :class="{on : tooltip[1]}" title="툴팁" @click="tooltip[1] = !tooltip[1]">툴팁</v-btn> 원활히 볼 수 있어요
          <v-tooltip v-model="tooltip[1]" activator="#tooltip1" location="top" offset="0" scroll-strategy="close" :open-on-hover="false" no-click-animation>
            <div class="tooltip_content">
              데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
            </div>
          </v-tooltip>
        </div>
        
        <br><br><br><br>

        <div>
          <v-btn id="tooltip2" class="btn_tooltip" :class="{on : tooltip[2]}" title="툴팁" @click="tooltip[2] = !tooltip[2]">툴팁</v-btn>
          데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
          <v-tooltip v-model="tooltip[2]" activator="#tooltip2" location="top" offset="0" scroll-strategy="close" :open-on-hover="false" no-click-animation>
            <div class="tooltip_content">
              데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
            </div>
          </v-tooltip>
        </div>
        
        <br><br><br><br>

        <div style="width:30rem; margin:0 auto; padding:2rem; position:relative; border:1px solid #ddd; border-radius:1.2rem;">
          데이터 소진 시 유튜브 화질 1080p로
          <v-btn id="tooltip3" class="btn_tooltip" :class="{on : tooltip[3]}" title="툴팁" @click="tooltip[3] = !tooltip[3]">툴팁</v-btn>
          원활히 볼 수 있어요
          contained
          <v-tooltip v-model="tooltip[3]" activator="#tooltip3" location="top" offset="0" scroll-strategy="close" :open-on-hover="false" no-click-animation contained>
            <div class="tooltip_content">
              v-tooltip contained 옵션, 부모에 position:relative
            </div>
          </v-tooltip>
        </div>
        <br><br>

        <button type="button" class="btn md c03" @click="snackbar = true">toast message</button>
        <v-snackbar v-model="snackbar" :timeout="timeout">
          {{message}}
        </v-snackbar>
        <br><br><br><br>


      </div>
      

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
export default {
  name: 'GuidePopup',
  emits: ['setLayout', 'openPopup', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: '' },
      tooltip: [false, false, false, false, false],
      snackbar: false ,
      timeout: 20000,
      message: 'toast message',
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
}
</script>