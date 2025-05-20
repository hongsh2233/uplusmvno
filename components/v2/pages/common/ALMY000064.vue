<template>
  <div class="first-content-item confirm-area care-comp">
    <div class="content-inner">
      <div class="cont-head">
        <h3 class="cont-title-main">
          홍길동님, <br />U<sup>+</sup>알뜰폰 사용 고객으로<strong class="txt-primary"
            ><br />확인</strong
          >되었어요
        </h3>
        <span class="title-exp">이제 알닷케어 서비스를 이용해 보세요!</span>
      </div>
    </div>

    <p class="icon">
      <object
        v-if="front.isMobile()"
        type="image/svg+xml"
        data="/images/v2/content/img_careinfo_comp_m.svg"
      >
        Your browser does not support SVG
      </object>
      <object v-else type="image/svg+xml" data="/images/v2/content/img_careinfo_comp.svg">
        Your browser does not support SVG
      </object>
    </p>

    <div class="content-item">
      <div class="content-inner">
        <div class="cont-head">
          <h3 class="cont-title">
            <span
              ><strong class="import">휴대폰을 등록</strong>하여<br />
              더 편리한 서비스를 누려 보세요</span
            >
          </h3>
        </div>
        <ul class="text-list bull">
          <li>
            자급제 휴대폰으로 분실/파손보험 가입이 필요한 고객님(휴대폰 정보가 등록된 단말만 분실
            접수가 가능해요)
          </li>
          <li>번호를 변경하고 싶으신 고객님</li>
          <li>유심만 개통 후 일부 서비스 이용이 안되시는 고객님</li>
        </ul>
        <div class="btn_group btn-service">
          <NuxtLink to="/" class="btn lg c02">휴대폰 등록하기</NuxtLink>
          <NuxtLink v-if="!front.isMobile()" to="/" class="btn lg c01"
            >가입 회선 관리 보러 가기</NuxtLink
          >
        </div>
      </div>
    </div>

    <BottomFixMenu
      v-if="front.isMobile()"
      :btnText="'가입 회선 관리 보러 가기'"
      @click="nextLineView"
    />
    <BottomFixMenu v-else :btnText="'확인'" @click="$emit('confirm')" />
    <!-- // bottom_button -->
  </div>
</template>

<script setup>
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";

const emit = defineEmits(["confirm"]);

// mobile 가입 회선 관리 보러 가기
const nextLineView = () => {
  console.log("가입 회선 관리 보러 가기");
};
</script>
