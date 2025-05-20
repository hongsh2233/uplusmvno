<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/23 -->
      <ProgressBar :barInfo="{type: 'ty02' }" />
      <!-- //progress bar -->

      <div class="page_info">eSIM 단말기의 모델 정보 <br>(일련번호, 모델코드)를 <br>입력해 주세요</div>

      <div class="section">
        <div class="item_list02">
          <ul>
            <li>
              <div class="radio_item ty06">
                <input type="radio" name="ty_list_01" id="ty_list_01_01" value="ty_list_01_01" v-model="radioValues">
                <label for="ty_list_01_01" class="img_os01">아이폰</label>
              </div>
            </li>
            <li>
              <div class="radio_item ty06">
                <input type="radio" name="ty_list_01" id="ty_list_01_02" value="ty_list_01_02" v-model="radioValues">
                <label for="ty_list_01_02" class="img_os02">갤럭시</label>
              </div>
            </li>
          </ul>
        </div>
      </div> <!-- // section -->

      <div class="section enter_esim_info" v-if="radioValues == 'ty_list_01_01'">

        <!-- 위치 이동 23/11/14 -->
        <!-- 일련번호 없을 경우 생성되는 영역 :: start -->
        <div class="form_group">
          <strong class="form_label">모델명을 선택 해 주세요</strong>
          <div class="form_item">
            <button type="button" class="btn_select" ref="btn_iphone" @click="$refs.iphone.open">선택하세요</button>
          </div>
          <PopupSelect ref="iphone" :option="{ data:'iphone', popupTitle:'휴대폰 모델명 선택', targetBtn:'btn_iphone' }" @selectItem="console.log($event)" />
        </div>
        <button type="button" class="btn_text">휴대폰 정보 확인 방법</button>
        <!-- 일련번호 없을 경우 생성되는 영역 :: end -->

        <!-- tit02 삭제 23/11/14 -->
        <!-- <h3 class="tit02">모델코드</h3> --> <!-- 일련번호 있을 경우 생성되는 제목 -->
        <strong class="form_tit">이용할 휴대폰과 일치하는 모델코드를 선택하세요</strong> <!-- 셀렉트 박스로 모델명 선택 시 생성되는 제목 -->
        <div class="table ty02"> <!-- 일련번호 조회 또는 모델명 셀렉트 선택 시 노출 -->
          <table>
            <caption>모델정보</caption>
            <colgroup>
              <col style="width:4.5rem">
              <col style="width:auto">
              <col style="width:auto">
              <col style="width:auto">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">선택</th>
                <th scope="col">모델명</th>
                <th scope="col">모델코드</th>
                <th scope="col">용량</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="radio_st">
                    <input type="radio" id="radio01_00" name="radio01">
                    <label for="radio01_00"></label>
                  </div>
                </td>
                <td>iPhone13 Pro</td>
                <td>A2538</td>
                <td>128GB</td>
              </tr>
              <tr>
                <td>
                  <div class="radio_st">
                    <input type="radio" id="radio01_02" name="radio01">
                    <label for="radio01_02"></label>
                  </div>
                </td>
                <td>iPhone13 Pro</td>
                <td>A2538</td>
                <td>128GB</td>
              </tr>
              <tr>
                <td>
                  <div class="radio_st">
                    <input type="radio" id="radio01_03" name="radio01">
                    <label for="radio01_03"></label>
                  </div>
                </td>
                <td>iPhone13 Pro</td>
                <td>A2538</td>
                <td>128GB</td>
              </tr>
              <tr>
                <td>
                  <div class="radio_st">
                    <input type="radio" id="radio01_04" name="radio01">
                    <label for="radio01_04"></label>
                  </div>
                </td>
                <td>iPhone13 Pro</td>
                <td>A2538</td>
                <td>128GB</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //위치 이동 23/11/14 -->

        <div class="form_group">
          <strong class="form_label">휴대폰 일련번호</strong>
          <div class="form_item">
            <InputBox :option="{ placeholder:'일련번호를 입력하세요 (숫자, 영문만 입력가능)' }" @inputValue="console.log($event)" />
          </div>
          <div class="error">아이폰 일련번호는 8자리 이상 입력해주세요.</div>
          <div class="error">숫자/영문만 입력 가능합니다.</div>
          <!-- <div class="info">일련번호를 입력하세요 (숫자, 영문만 입력가능)</div> --> <!-- 추가 23/11/14 --> <!-- 기획 요청으로 삭제 ; 23/11/24 -->
        </div>
        <!-- 삭제 23/11/14 -->
        <!-- <div class="btn_group">
          <button type="button" class="btn md c03">일련번호 조회하기</button>
        </div> -->

        <v-expansion-panels class="acd_wrap" v-model="acd_iphone">
          <v-expansion-panel class="acd_item">
            <div class="acd_title">
              <v-expansion-panel-title>일련번호 확인 방법</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <ul class="text_list bull">
                  <li>휴대폰 설정 > 일반 > 정보 > 일련번호 확인</li>
                </ul>
                <div class="guid_img">
                  <img src="/images/content/img_s_num_03.png" alt="일련번호 예시 G6CJE02EMD84">
                </div>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
        </v-expansion-panels>

        <!-- 삭제 23/11/14 -->
        <!-- <h3 class="tit02">휴대폰 모델명으로 확인해주세요</h3> -->

        <!-- 추가 23/11/14 -->
        <div class="box_gray">
          <ul class="text_list bull">
            <li>모델명과, 모델코드, 일련번호가 정확하지 않을 경우, 개통이 안되거나, 서비스 이용에 문제가 발생할 수 있어요.</li>
            <li>반드시 정확한 정보를 입력해 주세요.</li>
          </ul>
        </div>

      </div><!-- .section -->

      <div class="section enter_esim_info" v-if="radioValues == 'ty_list_01_02'">

        <!-- 위치 이동 23/11/14 -->
        <!-- 일련번호 없을 경우 생성되는 영역 -->
        <div class="form_group">
          <strong class="form_label">모델명을 선택 해 주세요</strong>
          <div class="form_item">
            <button type="button" class="btn_select" ref="btn_galaxy" @click="$refs.galaxy.open">선택하세요</button>
          </div>
          <PopupSelect ref="galaxy" :option="{ data:'galaxy', popupTitle:'휴대폰 모델명 선택', targetBtn:'btn_galaxy' }" @selectItem="console.log($event)" />
        </div>
        <button type="button" class="btn_text">휴대폰 정보 확인 방법</button>
 
        <!-- tit02 삭제 23/11/14 -->
        <!-- <h3 class="tit02">⁠모델코드</h3> --> <!-- 일련번호 있을 경우 생성되는 제목 -->
        <strong class="form_tit">이용할 휴대폰과 일치하는 모델코드를 선택하세요</strong> <!-- 셀렉트 박스로 모델명 선택 시 생성되는 제목 -->
        <div class="table ty02"> <!-- 일련번호 조회 또는 모델명 셀렉트 선택 시 노출 -->
          <table>
            <caption>모델정보</caption>
            <colgroup>
              <col style="width:4.5rem">
              <col style="width:auto">
              <col style="width:auto">
              <col style="width:auto">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">선택</th>
                <th scope="col">모델명</th>
                <th scope="col">모델코드</th>
                <th scope="col">용량</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="radio_st">
                    <input type="radio" id="radio02_00" name="radio02">
                    <label for="radio02_00"></label>
                  </div>
                </td>
                <td>갤럭시 S23 Ultra</td>
                <td>SM-S918N</td>
                <td>128GB</td>
              </tr>
              <tr>
                <td>
                  <div class="radio_st">
                    <input type="radio" id="radio02_02" name="radio02">
                    <label for="radio02_02"></label>
                  </div>
                </td>
                <td>갤럭시 S23 Ultra</td>
                <td>SM-S918N</td>
                <td>128GB</td>
              </tr>
              <tr>
                <td>
                  <div class="radio_st">
                    <input type="radio" id="radio02_03" name="radio02">
                    <label for="radio02_03"></label>
                  </div>
                </td>
                <td>갤럭시 S23 Ultra</td>
                <td>SM-S918N</td>
                <td>128GB</td>
              </tr>
              <tr>
                <td>
                  <div class="radio_st">
                    <input type="radio" id="radio02_04" name="radio02">
                    <label for="radio02_04"></label>
                  </div>
                </td>
                <td>갤럭시 S23 Ultra</td>
                <td>SM-S918N</td>
                <td>128GB</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //위치 이동 23/11/14 -->

        <div class="form_group">
          <strong class="form_label">휴대폰 일련번호</strong>
          <div class="form_item">
            <InputBox :option="{ placeholder:'일련번호를 입력하세요 (숫자만 입력가능)' }" @inputValue="console.log($event)" />
          </div>
          <div class="error">갤럭시 일련번호는 6자리 이상 입력해주세요.</div>
          <div class="error">숫자만 입력 가능합니다.</div>
          <!-- <div class="info">일련번호를 입력하세요 (숫자, 영문만 입력가능)</div> --> <!-- 추가 23/11/14 --> <!-- 기획 요청으로 삭제 ; 23/11/24 -->
        </div>
        <!-- 삭제 23/11/14 -->
        <!-- <div class="btn_group">
          <button type="button" class="btn md c03">일련번호 조회하기</button>
        </div> -->

        <v-expansion-panels class="acd_wrap" v-model="acd_galaxy">
          <v-expansion-panel class="acd_item">
            <div class="acd_title">
              <v-expansion-panel-title>일련번호 확인 방법</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <ul class="text_list bull">
                  <li>설정 > 휴대전화 정보 > 규제 정보 > 일련번호 확인</li>
                </ul>
                <div class="guid_img">
                  <img src="/images/content/img_s_num_04.png" alt="일련번호 예시 4865914">
                </div>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
        </v-expansion-panels>

        <!-- 삭제 23/11/14 -->
        <!-- <h3 class="tit02">휴대폰 모델명으로 확인해주세요</h3> -->

        <!-- 추가 23/11/14 -->
        <div class="box_gray">
          <ul class="text_list bull">
            <li>모델명과, 모델코드, 일련번호가 정확하지 않을 경우, 개통이 안되거나, 서비스 이용에 문제가 발생할 수 있어요.</li>
            <li>반드시 정확한 정보를 입력해 주세요.</li>
          </ul>
        </div>

      </div> <!-- // section -->

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c02" v-bind:disabled="prev == false">이전으로</button>
              <button type="button" class="btn lg c01" v-bind:disabled = "next == false">다음으로</button>
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->


    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
import PopupSelect from '@/components/PopupSelect';
import InputBox from '@/components/InputBox'

export default {
  name: 'ALFM-PR03-PG05',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: 'eSIM 단말기 정보 입력', floatMenu: 'none' },

      radioValues: '',
      acd_iphone: [false],
      acd_galaxy: [false],
      prev: true,
      next: false,
    }
  },
  watch: {
    radioValues(a){
      this.next = a ? true : false;
      // setTimeout(() => { input.init() }, 100);
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components:{
    PopupSelect,
    InputBox
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>