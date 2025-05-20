<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <div class="box_gray">
          <ul class="text_list bull">
            <li>최근 3개월동안 추천한 지인이 유심 개통완료한 내역을 확인할 수 있습니다.</li>
          </ul>
        </div>
      </div>
      <div class="section">
        <h3 class="tit02">총 <span class="fc01">16</span>건의 추천 활동 내역이 있습니다</h3>

        <div class="table ty03" v-show="tableShow">
          <table>
            <caption>추천 활동 내역</caption>
            <colgroup>
              <col style="width:7rem">
              <col style="width:auto">
              <col style="width:13rem">
            </colgroup>
            <tbody>
              <tr v-for="(d, i) in dataTable " :key="i">
                <td class="fc04">{{ d.name }}</td>
                <td>{{ d.data }}</td>
                <td class="fc04 tb_right"><span>{{ d.date }}</span> 개통</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- class name 변경 ; 23/11/08 -->
        <div class="btn_wrap center">
          <button type="button" class="btn round more_d">더 볼래요</button>
        </div>
        <!-- //class name 변경 ; 23/11/08 -->
        <NoData :option="{type:'his', html:'<p>추천 활동내역이 없습니다.</p>'}" />
        <div class="btn_group">
          <button type="button" class="btn md c03">가족/친구 추천하러가기</button>
        </div>
      </div>

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import NoData from '@/components/NoData'

export default {
  name: 'ALFM-MY09-LT00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '추천 활동 내역' },
      tableShow: true,
      dataTable: [
        { name: '이*신', data: '010-12**-34**', date: '2023.02.28', },
        { name: '황*정', data: '010-12**-34**', date: '2023.02.28', },
        { name: '김*혜', data: '010-12**-34**', date: '2023.02.28', },
        { name: '박*은', data: '010-12**-34**', date: '2023.02.28', },
      ]
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components: {
    NoData,
  },
}
</script>
