<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>
      
            
      <div class="section">
        <div class="form_group">
          <div class="form_item">
            <InputBox :option="{ placeholder:'검색어를 입력해주세요', search:true }" @inputValue="console.log($event)" />
          </div>
        </div>
        <!-- 중간 section 삭제 ; 23/11/10  -->
        <div class="filter_wrap">
          <Tag :data="frontData.tag.FAQ" :option="{ type:'default', multi: false }" />
        </div>


        <v-expansion-panels class="acd_wrap" v-model="acd" multiple>

          <v-expansion-panel class="acd_item ty05" v-for="(a) in data" :key="a">
            <div class="acd_title qna_tit">
              <v-expansion-panel-title>
                <strong><b>Q</b> {{ a.title }}</strong>
                <div class="qna_ty">
                    <div class="bag clr" :class="a.color">{{ a.type }}</div>
                    <span>공통</span>
                </div>
              </v-expansion-panel-title>
            </div>
            <div class="acd_panel qna_con">
              <v-expansion-panel-text>
                <div role="region">
                  <p>{{ a.content }}</p>
                  <div class="box_gray">
                    <span>
                      더 자세히 알고 싶으시면, 
                      1:1 문의하기를 이용해주세요.
                    </span>
                    <NuxtLink :to="{}" role="button" class="btn xsm c07">1:1문의하기</NuxtLink>
                  </div>
                </div>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>

        </v-expansion-panels>

      </div> <!-- // section -->



    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
import Tag from '@/components/Tag'
import InputBox from '@/components/InputBox'

export default {
  name: 'ALFM-CS04-PG00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '자주하는 질문' },
      
      acd: [],
      data: [
        {
          title: '납기일은 어떻게 되나요?',
          type: '요금 및 납부',
          color: 'c01',
          content:'요금 납기일(납부기한)은 해당 청구월의 말일까지 입니다. 납기일 경과 후 납부된 경우에는 연체료(이용요금의 2%)가 다음달 청구요금에 포함되어 청구됩니다.'
        },
        {
          title: '미납 문자메시지를 받았어요. 어떻게 해야 하나요?',
          type: '가입 및 변경',
          color: 'c09',
          content:'요금 납기일(납부기한)은 해당 청구월의 말일까지 입니다. 납기일 경과 후 납부된 경우에는 연체료(이용요금의 2%)가 다음달 청구요금에 포함되어 청구됩니다.'
        },
        {
          title: '신용카드로 자동이체가 되어 있는데, 요금이 왜 결제되지 않나요?',
          type: '혜택/이벤트',
          color: 'c03',
          content:'요금 납기일(납부기한)은 해당 청구월의 말일까지 입니다. 납기일 경과 후 납부된 경우에는 연체료(이용요금의 2%)가 다음달 청구요금에 포함되어 청구됩니다.'
        },
        {
          title: '미납 문자메시지를 받았어요. 어떻게 해야 하나요?',
          type: '요금 및 납부',
          color: 'c01',
          content:'요금 납기일(납부기한)은 해당 청구월의 말일까지 입니다. 납기일 경과 후 납부된 경우에는 연체료(이용요금의 2%)가 다음달 청구요금에 포함되어 청구됩니다.'
        },
        {
          title: '미납 문자메시지를 받았어요. 어떻게 해야 하나요?',
          type: '결합할인',
          color: 'c04',
          content:'요금 납기일(납부기한)은 해당 청구월의 말일까지 입니다. 납기일 경과 후 납부된 경우에는 연체료(이용요금의 2%)가 다음달 청구요금에 포함되어 청구됩니다.'
        },
        {
          title: '미납 문자메시지를 받았어요. 어떻게 해야 하나요?',
          type: '회원가입',
          color: 'c05',
          content:'요금 납기일(납부기한)은 해당 청구월의 말일까지 입니다. 납기일 경과 후 납부된 경우에는 연체료(이용요금의 2%)가 다음달 청구요금에 포함되어 청구됩니다.'
        },
      ],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components: {
    Tag,
    InputBox
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>