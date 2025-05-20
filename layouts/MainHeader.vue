<template>
  <header class="header" v-if="layout.header != 'none'">
    <div class="inner" v-if="isMobile">
      <div class="h_left">
        <h1 v-if="layout.header == 'main'"><NuxtLink :to="{}" class="h_logo"><span class="blind">알뜰폰닷컴</span></NuxtLink></h1>
        <button type="button" class="h_back" v-if="layout.header != 'main'"><span class="blind">이전 화면으로 이동</span></button>
        <h2 class="h_title" v-if="layout.header != 'main'" v-html="layout.title"></h2>
      </div>
      <div class="h_right">
        <button type="button" class="h_rcmd" v-if="layout.header != 'sub2'"><span class="blind">친구추천</span></button>
        <button type="button" class="h_menu" ref="asideBtn" v-if="layout.header != 'sub2'" @click="asideOpen"><span class="blind">전체메뉴 열기</span></button>
      </div>
    </div>

    <div class="pc_header" v-else>
      <div class="inner">
        <h1><NuxtLink :to="'/ma/ALFM-MA01-PG00'" @focus="gnbClose"><span class="blind">알뜰폰닷컴</span></NuxtLink></h1>
        <nav class="nav" :class="{ on : gnbOn }" @mouseleave.stop="gnbClose" @mouseenter.stop="gnbOpen">
          <ul>
            <li v-for="(a, i) in menu" :key="i">
              <button @click.prevent="handlePadWebView(a)" class="menu_class" :class="{ on : a.isOn }" @focus="gnbOpen"><span v-html="a.menu"></span></button>
              <Transition name="gnb">
                <div class="sub_menu" v-if="!gnbOn">
                  <ul>
                    <li :class="{ on : b.isOn }" v-for="(b, idx) in a.sub" :key="idx">
                      <NuxtLink :to="b.url" :class="b.class" @click.prevent="handleSubPadWebView">
                        <span :class="{ blind : b.class=='img_delivery' }" v-html="b.menu"></span>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </Transition>
            </li>
          </ul>
        </nav>
        <div class="header_menu">
          <ul>
            <li v-if="!isLogin"><NuxtLink :to="{}" @focus="gnbClose">로그인</NuxtLink></li>
            <li v-if="!isLogin"><NuxtLink :to="{}">회원가입</NuxtLink></li>
            
            <li v-if="isLogin"><NuxtLink :to="{}" @focus="gnbClose">로그아웃</NuxtLink></li>
            <li v-if="isLogin"><NuxtLink :to="{}">내 정보 수정</NuxtLink></li>
            
            <li><NuxtLink :to="{}">마이페이지</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
  </header>


  <aside class="aside" :class="{ open : asideOn }" v-if=" (layout.header == 'main' || layout.header == 'sub') && isMobile ">
    <div tabindex="0" @focus="focus"></div>
    <div class="inner" tabindex="0" ref="asideWrap">
      <div class="aside_header">
        <div class="user" v-if="!isLogin">
          <div class="tit">
            <NuxtLink :to="{}" class="link_login">로그인</NuxtLink> 후<br> 이용하실 수 있어요
          </div>
          <NuxtLink :to="{}" class="link_join">회원가입</NuxtLink>
        </div>
        <div class="user" v-if="isLogin">
          <div class="tit">
            안녕하세요<br>
            <NuxtLink :to="{}" class="link_set">김알파님</NuxtLink>
          </div>
          <NuxtLink :to="{}" class="link_logout">로그아웃</NuxtLink>
        </div>
        <NuxtLink :to="{}" class="link_my">마이페이지</NuxtLink>
      </div>
      <nav class="aside_nav">
        <ul>
          <li :class="{ on : a.isOn }" v-for="(a, i) in menu" :key="i">
            <button type="button" :aria-expanded="a.isOpen" @click="asideMenuClick(a)" v-html="a.menu"></button>
            <Transition name="subMenu">
              <div class="sub_menu" role="region" v-if="a.isOpen">
                <ul>
                  <li v-for="(b, idx) in a.sub" :key="idx" :class="{ on : b.isOn }">
                    <NuxtLink :to="{}" :class="b.class">
                      <span :class="{ blind :b.class=='img_delivery' }" v-html="b.menu"></span>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </Transition>
          </li>
        </ul>
      </nav>
      <div class="aside_footer">
          <NuxtLink :to="{}" class="link_event">가족/친구 추천하기</NuxtLink>
          <NuxtLink :to="{}" class="link_plus">결합하고 할인받자</NuxtLink>
      </div>
      <div class="asd_top">
        <NuxtLink :to="{}" class="asd_home"><span class="blind">home</span></NuxtLink>
        <button type="button" class="asd_close" @click="asideClose"><span class="blind">전체메뉴 닫기</span></button>
      </div>
    </div>
    <div tabindex="0" @focus="focus"></div>
  </aside>

</template>

<script>
export default {
  name: 'MainHeader',
  data(){
    return {
      isMobile: false,
      isLogin: false,
      
      gnbOn: true,
      asideOn: false,

      menu: [
        {
          isOpen: false, isOn:false, menu: '유심구매',
          url: '/bu/ALFM-BU01-PG00',
          sub: [
            { isOn: false, menu:'지금배송', class:'img_delivery', url: '/bu/ALFM-BU01-PG00'},
            { isOn: false, menu:'편의점 픽업', class:'', },
          ],
        },
        {
          isOpen:true, isOn:true, menu: '요금제',
          url: '/pr/ALFM-PR01-PG00',
          sub: [
            { isOn: true, menu:'요금제 찾기', class:'', url: '/pr/ALFM-PR01-PG00'},
            { isOn: false, menu:'내게 맞는 요금제 찾기', class:'', },
          ],
        },
        {
          isOpen: false, isOn:false, menu: '혜택',
          url: '/be/ALFM-BE01-PG00',
          sub: [
            { isOn: false, menu:'알닷 활용하기', class:'', url: '/be/ALFM-BE01-PG00'},
            { isOn: false, menu:'이벤트', class:'', },
            { isOn: false, menu:'당첨자 발표', class:'', },
            { isOn: false, menu:'제휴카드 혜택', class:'', },
            { isOn: false, menu:'가족/친구 추천하기', class:'', },
          ],
        },
        {
          isOpen: false, isOn:false, menu: '고객지원',
          url: '/cs/ALFM-CS02-PG00',
          sub: [
            { isOn: false, menu:'내 주변 매장 찾기', class:'', url: '/cs/ALFM-CS02-PG00'},
            { isOn: false, menu:'공지사항', class:'', },
            { isOn: false, menu:'자주하는 질문', class:'', },
            { isOn: false, menu:'1:1 문의하기', class:'', },
          ],
        }
      ],
    }
  },
  methods: {
    // pc GNB
    gnbOpen(){
      const isTouchDevice = (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);
      if( this.gnbOn == false ) return;
      if (!front.isMobile() && !isTouchDevice) this.gnbOn = false;
    },
    gnbClose(){
      if( this.gnbOn == true ) return;
      this.gnbOn = true;
    },

    // mobile aside
    asideOpen(){
      this.asideOn = true;
      // setTimeout(()=>{ this.$refs.asideWrap.focus() }, 200); // style animation/transition 속도 고려
      this.$refs.asideWrap.focus();
      scroll.noScroll();
    },
    asideClose(){
      this.asideOn = false;
      this.$refs.asideBtn.focus();
      scroll.scroll();
    },
    focus(){
      this.$refs.asideWrap.focus();
    },
    asideMenuClick(a){
      a.isOpen = !a.isOpen;
      a.isOn = !a.isOn;
    },
    handleSubPadWebView() {
      this.gnbOn = false;
    },
    handlePadWebView(a) {
      this.gnbOn = !this.gnbOn;
      if (this.gnbOn) {
        this.$router.push(a.url);
      }
    },
  },
  mounted(){
    // this.isMobile = document.documentElement.classList.contains("mobile");
    this.isMobile = front.isMobile();
  },
  props: {
    layout: Object,
  }
}
</script>