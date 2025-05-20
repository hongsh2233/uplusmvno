<template>
  <!-- 24.11.28 container 에 main 클래스 확인 -->
  <div class="container main">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- 회원 정보 -->
      <div class="section">
        <div class="box_yellow">
          <!-- 미로그인 시 -->
          <div class="my_login">
            <strong
              ><NuxtLink to="https://www.uplusmvno.com/login" class="fc01">로그인</NuxtLink>을
              하시면</strong
            >
            <span>신청 내역을 더 빠르게 확인하실 수 있어요!</span>
          </div>
        </div>
        <br />
        <div class="box_yellow">
          <!-- 로그인 시 -->
          <div class="my_login">
            <strong
              >강*훈님
              <!-- 24.12.12 정회원 badge 추가 -->
              <span class="badge-box green">U<sup>+</sup>알뜰폰</span>
            </strong>
            <span>알닷에 오신 것을 환영합니다!</span>
          </div>
        </div>
      </div>
      <!-- // 회원 정보 -->

      <!-- 신청중인 요금제 -->
      <div class="section">
        <strong class="sub">신청중인 요금제가 없어요</strong>
        <button class="line_btn_arrw">
          <span><strong>나에게 꼭 맞는 요금제</strong>를 찾아</span>
          <span class="desc">손쉽게 신청해보세요!</span>
        </button>
      </div>
      <!-- // 신청중인 요금제 -->

      <!-- 내가 신청했어요 -->
      <div class="section">
        <strong class="sub">내가 신청했어요</strong>
        <div class="item_list02">
          <ul>
            <li>
              <NuxtLink :to="{}" class="box_ico">
                <div class="box_ico_info">
                  <span>내가 신청한 요금제</span>
                  <strong>1건</strong>
                </div>
                <div class="box_ico_ico"></div>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{}" class="box_ico ty02">
                <div class="box_ico_info">
                  <span>내가 구매한 USIM</span>
                  <strong>3건</strong>
                </div>
                <div class="box_ico_ico"></div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- // 내가 신청했어요 -->

      <!-- 내가 사용중이에요 -->
      <div class="section">
        <strong class="sub">내가 사용중이에요</strong>
        <div class="content-item">
          <div class="content-inner">
            <ul class="chart-list main">
              <li>
                <p class="bar-title">
                  대표 번호
                  <NuxtLink to="" class="max link"><strong>010-12**-34**</strong></NuxtLink>
                </p>
              </li>
              <li>
                <p class="bar-title">
                  데이터
                  <NuxtLink to="" class="max link">총 <span class="data">1GB</span> 제공</NuxtLink>
                </p>
                <div class="bar-progress">
                  <span class="progress data" style="width: 10%"></span>
                </div>
                <div class="bar-value">
                  <span class="use">899MB 사용</span><span class="remain">125MB 남음</span>
                </div>
              </li>
              <li>
                <p class="bar-title">
                  통화/문자
                  <NuxtLink to="" class="max link"><strong>5시간/무제한</strong></NuxtLink>
                </p>
              </li>
              <li>
                <p class="bar-title">
                  7월 청구요금
                  <NuxtLink to="" class="max link"><strong>20,200원</strong></NuxtLink>
                </p>
                <p class="date">2024.07.10 ~ 2024.07.31</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- // 내가 사용중이에요 -->

      <!-- 후기 등록 배너 -->
      <div class="section">
        <div class="bnr_area">
          <NuxtLink :to="{}">
            <img
              src="/images/data/img_bnr03_pc.png"
              alt="후기 등록해 주시면 시원한 혜택을 드립니다! 알닷 요금제 경험을 알려주세요"
              class="pc_show"
            />
            <img
              src="/images/data/img_bnr03.png"
              alt="후기 등록해 주시면 시원한 혜택을 드립니다! 알닷 요금제 경험을 알려주세요"
              class="pc_hide"
            />
          </NuxtLink>
        </div>
      </div>
      <!-- // 후기 등록 배너 -->

      <!-- 내가 관심있어요 -->
      <div class="section">
        <strong class="sub">내가 관심있어요</strong>
        <div class="list_ico">
          <ul>
            <li>
              <NuxtLink :to="{}" class="list_ico_item">
                <div class="tit_box">
                  <div class="tit_ico">
                    <img src="/images/common/ico_my01.png" alt="" />
                  </div>
                  <span class="tit">내가 찜한 요금제</span>
                </div>
                <span class="count">2건</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{}" class="list_ico_item">
                <div class="tit_box">
                  <div class="tit_ico">
                    <img src="/images/common/ico_my02.png" alt="" />
                  </div>
                  <span class="tit">최근 둘러본 요금제</span>
                </div>
                <span class="count">3건</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- // 내가 관심있어요 -->

      <!-- 내가 작성했어요 -->
      <div class="section">
        <strong class="sub">내가 작성했어요</strong>

        <div class="list_ico">
          <ul>
            <li>
              <NuxtLink :to="{}" class="list_ico_item">
                <div class="tit_box">
                  <div class="tit_ico">
                    <img src="/images/common/ico_my03.png" alt="" />
                  </div>
                  <span class="tit">1:1 문의내역</span>
                </div>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{}" class="list_ico_item">
                <div class="tit_box">
                  <div class="tit_ico">
                    <img src="/images/common/ico_my04.png" alt="" />
                  </div>
                  <span class="tit">사용자 평점/후기 관리</span>
                </div>
                <span class="bag new">N</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- // 내가 작성했어요 -->

      <!-- 내가 추천했어요 -->
      <div class="section">
        <strong class="sub">내가 추천했어요</strong>
        <div class="list_ico">
          <ul>
            <li>
              <NuxtLink :to="{}" class="list_ico_item">
                <div class="tit_box">
                  <div class="tit_ico">
                    <img src="/images/common/ico_my05.png" alt="" />
                  </div>
                  <span class="tit">추천 활동내역 확인하기</span>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- // 내가 추천했어요 -->
    </div>
  </div>
  <!-- // container -->
</template>

<script setup>
import { onMounted, defineEmits } from "vue";

const emit = defineEmits(["setLayout"]);
const layout = reactive({ header: "sub", footer: "", title: "마이페이지", floatMenu: "none" });

onMounted(() => {
  emit("setLayout", layout);
});
</script>
