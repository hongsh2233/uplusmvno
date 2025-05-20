<template>
  
  <div class="bottom_float">
    <div class="inner">
      <div class="compare_pop" :class="{ 'open' : this.state.compare, 'wide': wide }">
        <button type="button" class="comp_hea" @click="compare">
          <span>비교하기</span>
          <em>1</em>
        </button>
        <Transition name="compCon">
          <div v-if="this.state.compare">
            <div class="comp_con">
              <p class="info pc_hide">최대 2개의 상품을 비교할 수 있습니다</p>
              <p class="info pc_show">최대 3개의 상품을 비교할 수 있습니다</p>
              <div class="comp_item_area">
                <div class="comp_item">
                  <div>
                    <em>인스 모바일 인터넷결합 5G 150GB+</em>
                    <strong>월 <span>14,900</span>원</strong>
                    <button type="button"><span class="blind">삭제</span></button>
                  </div>
                </div>
                <div class="comp_item">
                  <p>요금제를 선택해주세요</p>
                </div>
                <div class="comp_item pc_show">
                  <p>요금제를 선택해주세요</p>
                </div>
              </div>
              <div class="btn_group">
                <button type="button" class="btn lg c01" id="btn_PR01PG00B" @click="this.$emit('openPopup', ['PR01PG00B', 'content', 101]); state.compare=false;">비교하기</button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div> <!-- // bottom_float -->

</template>
  
<script>
export default {
  name: "Compare",
  data(){
    return {
      wide: false,
      state: { compare: false, },
    }
  },
  methods: {
    compare(){
      this.state.compare = !this.state.compare;
    },
  },
  mounted(){
    if( this.option != undefined ) this.wide = this.option.wide;
  },
  props: {
    option: Object
  }
};
</script>