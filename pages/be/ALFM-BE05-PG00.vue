<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <div class="invite_event">
          <!-- 비추천인 case -->
          <div class="box_yellow">
            <div class="my_event">
              <p><strong><span>홍*동</span>님</strong>이 추천한 <sup>+</sup>알뜰폰 파트너스 <br /> 요금제 가입하고 혜택 받기</p>
              <NuxtLink :to="{}" class="btn sm c01">요금제 가입하기</NuxtLink>
            </div>
          </div>
          <!-- //비추천인 case -->
          <!-- 공통 -->
          <div class="box_gray box_no_space">
            <div class="center">이벤트 영역(임시)</div>
          </div>
          <!-- //공통 -->
          <!-- 비추천인 case -->
          <div class="box_gray box_no_space">
            <div class="center">요금제 추천 영역(임시)</div>
          </div>
          <!-- //비추천인 case -->

          <!-- 추천인 case -->
          <div class="page_info">초대 링크 생성하기</div>
          <h3 class="tit02">본인 인증</h3> <!-- 문구 수정 ; 23/11/24 -->
          <div class="form_wrap">
            <div class="form_group">
              <strong class="form_label">이름</strong>
              <div class="form_item"> <!-- class="form_item val_chk" 유효성 check -->
                <InputBox :option="{ placeholder:'이름 입력' }" @inputValue="console.log($event)" /> <!-- 문구 수정 ; 23/11/24 -->
              </div>
              <div class="error">이름을 입력해 주세요</div>
              <div class="form_item">
                <InputBox :option="{ placeholder:'김알파', disabled:true }" @inputValue="console.log($event)" />
              </div>
            </div>
            <div class="form_group">
              <strong class="form_label">휴대폰번호</strong>
              <div class="form_item"> <!-- class="form_item val_chk" 유효성 check -->
                <InputBox :option="{ placeholder:'&lsquo;-&rsquo; 없이 숫자만 입력' }" @inputValue="console.log($event)" />
                <button type="button" class="btn md c03">인증번호 받기</button>
              </div>
              <div class="error">휴대폰번호를 확인해주세요</div>
              <div class="form_item">
                <InputBox :option="{ value:'010-12**-56**', placeholder:'&lsquo;-&rsquo; 없이 숫자만 입력', disabled:true }" @inputValue="console.log($event)" />
                <button type="button" class="btn md c03" disabled>인증번호 재전송</button>
              </div>
              <div class="form_item"> <!-- class="form_item val_chk" 유효성 check -->
                <InputBox :option="{ value:'322115', disabled:true, placeholder:'4자리 숫자', authNum:true }" @inputValue="console.log($event)" />
              </div>
              <div class="error">인증번호를 정확히 입력해주세요</div>
              <div class="error">인증번호 입력시간이 초과되었습니다</div>
            </div>
            <!-- 인증 완료 전 -->
            <div class="btn_group"><button type="button" class="btn md c03">인증 확인</button></div>
            <!-- 인증 완료 후 -->
            <div class="btn_group"><button type="button" class="btn md c03" disabled>인증 완료</button></div>
          </div>

          <div class="box_gray mgt32">
            <ul class="text_list bull">
              <li>인증요청 후 3분 안에 인증번호를 입력하셔야 하며, 3분 이내 인증번호 입력 또는 재전송하지 않는 경우 다시 휴대폰 인증을 요청하여야 합니다.</li>
              <li>인증문자가 오지 않을 경우 아래와 같이 단말기 설정을 변경해주세요.
                <ul class="text_list dash">
                  <li>휴대폰 문자 설정 메뉴 중 스팸 관련 항목의 번호 없는 메시지 차단 선택 해제</li>
                </ul>
              </li>
              <li>수집된 개인정보 (이름, 생년월일, 성별, 휴대폰 번호)는 본인 인증에 사용됩니다.</li>
            </ul>
          </div>

          <h3 class="tit02">요금제가입 추천 링크 공유하기</h3>
          <div class="cir_icon_link invite">
            <ul>
              <li>
                <NuxtLink :to="{}" class="icon_link kakao"><span>카카오톡</span></NuxtLink>
              </li>
              <li>
                <NuxtLink :to="{}" class="icon_link url"><span>URL 복사</span></NuxtLink>
              </li>
            </ul>
          </div>

          <h3 class="tit02">추천 활동내역 확인하기</h3>
          <div class="txt">최근 3개월동안 추천한 지인이 유심 개통완료한 내역</div>

          <div class="sort_wrap">
            <div>총 <span>16</span>건</div>
          </div>
          <div class="table ty03" v-show="tableShow">
            <table>
              <caption>추천 활동내역</caption>
              <colgroup>
                <col style="width:7rem">
                <col style="width:auto">
                <col style="width:12rem">
              </colgroup>
              <tbody>
                <tr v-for="(d, i) in dataTable" :key="i">
                  <th scope="row">{{ d.name }}</th>
                  <td>{{ d.phone }}</td>
                  <td class="date">{{ d.date }} 개통</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- markup 변경 ; 23/11/08 -->
          <div class="btn_wrap center">
            <button type="button" class="btn round more_d">더 볼래요</button>
          </div>
          <!-- //markup 변경 ; 23/11/08 -->

          <div class="sort_wrap">
            <div>총 <span>0</span>건</div>
          </div>
          <!-- 조회 오류 case -->
          <NoData :option="{type:'his', html:'<p>일시적으로 추천활동 내역을 불러올 수 없습니다<br>나중에 다시 시도해 주세요</p>'}" />
          <!-- 내역없음 case -->
          <NoData :option="{type:'his', html:'<p>등록된 추천활동 내역이 없습니다</p>'}" />
          <!-- //추천인 case -->

          <!-- 공통 -->
          <div class="box_gray box_no_space">
            <div class="center">혜택 안내 영역(임시)</div>
          </div>
          <div class="box_gray box_no_space">
            <div class="center">유의사항 영역(임시)</div>
          </div>
          <!-- //공통 -->
        </div>

      </div>

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import InputBox from '@/components/InputBox'
import NoData from '@/components/NoData'

export default {
  name: 'ALFM-BE05-PG00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '가족/친구 추천하기' },
      tableShow: true,
      dataTable:[
        { name: '이*신', phone: '010-12**-34**', date: '2023.02.28' },
        { name: '이*신', phone: '010-12**-34**', date: '2023.02.28' },
        { name: '이*신', phone: '010-12**-34**', date: '2023.02.28' },
        { name: '이*신', phone: '010-12**-34**', date: '2023.02.28' },
        { name: '이*신', phone: '010-12**-34**', date: '2023.02.28' },
      ],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components:{
    InputBox,
    NoData,
  },
}
</script>
