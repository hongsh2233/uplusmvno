<template>
  <div class="AL-MS-04-003">
    <div class="container">
      <div class="content" id="content">
        <div class="section">
          <h2 class="ro-nav-title">공항 로밍센터 위치 안내</h2>
          <Tab class="type-outline" :titles="['인천공항', '김포공항', '김해공항']">
            <template #content1>
              <div class="inner-section">
                <h3 class="title">인천공항 제1여객터미널</h3>
                <p class="title-description">
                  임대 및 자동 해외 로밍 안내<br />
                  오전 6시~오후 10시 연중무휴
                </p>
                <div class="map_gallery-wrap">
                  <div class="info-box-list">
                    <div class="item">
                      <div class="info-box type-round">
                        <div class="gallery-title">3층 출국장</div>
                        <div class="gallery-wrap">
                          <img src="/images/roaming/img_info_airport_1_1.png" alt="F카운터 사이" />
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="info-box type-round">
                        <div class="gallery-title">1층 입국장</div>
                        <div class="gallery-wrap">
                          <img src="/images/roaming/img_info_airport_1_2.png" alt="12 게이트, 3게이트" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="inner-section">
                <h3 class="title">인천공항 제2여객터미널</h3>
                <p class="title-description">임대 및 자동 해외 로밍 안내<br />오전 6시~오후 10시 연중무휴</p>
                <div class="map_gallery-wrap">
                  <div class="info-box-list">
                    <div class="item">
                      <div class="info-box type-round">
                        <div class="gallery-title">3층 출국장</div>
                        <div class="gallery-wrap">
                          <img src="/images/roaming/img_info_airport_1_3.png" alt="F카운터 사이" />
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="info-box type-round">
                        <div class="gallery-title">1층 입국장</div>
                        <div class="gallery-wrap">
                          <img src="/images/roaming/img_info_airport_1_4.png" alt="12 게이트, 3게이트" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template #content2>
              <div class="inner-section">
                <h3 class="title">국제선 청사</h3>
                <p class="title-description">
                  임대 및 자동 해외 로밍 안내<br />
                  오전 6시 30분 ~ 오후 10시 연중무휴
                </p>
                <div class="map_gallery-wrap">
                  <div class="info-box-list">
                    <div class="item">
                      <div class="info-box type-round">
                        <div class="gallery-title">1층 출국/입국장</div>
                        <div class="gallery-wrap">
                          <img
                            src="/images/roaming/img_info_airport_2_1.png"
                            alt="GATE1 지하철 연결 에스컬레이터 입국 게이트"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template #content3>
              <div class="inner-section">
                <h3 class="title">국제선 청사</h3>
                <p class="title-description">
                  임대 및 자동 해외 로밍 안내<br />
                  오전 6시 ~ 오후 10시 연중무휴
                </p>
                <div class="map_gallery-wrap">
                  <div class="info-box-list">
                    <div class="item">
                      <div class="info-box type-round">
                        <div class="gallery-title">3층 출국장</div>
                        <div class="gallery-wrap">
                          <img src="/images/roaming/img_info_airport_3_1.png" alt="KT 오른쪽 U+로밍센터" />
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="info-box type-round">
                        <div class="gallery-title">1층 입국장</div>
                        <div class="gallery-wrap">
                          <img src="/images/roaming/img_info_airport_3_2.png" alt="SK KT 사이 U+로밍센터" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </Tab>
        </div>
        <div class="section">
          <div class="box-round type-outline has-pd has-title">
            <h3 class="ro-sec-title">로밍 이용가이드 보러가기</h3>
            <ul class="adbvice-list">
              <li class="item info-1">
                <NuxtLink to="/" class="bg-vivid-apricot">
                  <i class="icon"><img src="/images/roaming/icons/ico_mappin.svg" alt="" /></i>
                  <p class="text">로밍 이용방법을 알려드려요</p>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LayoutOptions } from "@/types/layout";
import Tab from "@/components/v2/common/Tab.vue";
// import SwiperroamingBnr from "@/components/SwiperRoamingBnr.vue";

const emit = defineEmits<{
  (e: "setLayout", payload: LayoutOptions): void;
}>();

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: "",
  floatMenu: "",
  title: "공항 로밍센터 찾기",
  wrapClass: "selfcare roaming",
});

const isMobile = ref(front.isMobile());

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/pages/ro/page-al-ms-04-003.scss" as *;
</style>
