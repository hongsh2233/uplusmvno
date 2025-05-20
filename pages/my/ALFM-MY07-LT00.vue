<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <Tag :data="frontData.tag.review" :option="{ type: 'expandedResize', multi: false }" />
        <div class="table ty03" v-show="tableShow">
          <table>
            <caption>
              추천 활동 내역
            </caption>
            <colgroup>
              <col style="width: 30%" />
              <col style="width: auto" />
              <col style="width: 10rem" />
              <!-- width 수정 23/11/08 -->
            </colgroup>
            <tbody>
              <tr v-for="(a, i) in dataTable" :key="i">
                <th scope="row">{{ a.agent }}</th>
                <td>
                  <NuxtLink :to="{}">{{ a.data }}</NuxtLink>
                </td>
                <td class="tb_stat" v-html="a.status"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- markup 변경 ; 23/11/08 -->
        <div class="btn_wrap center pc_hide">
          <button type="button" class="btn round more_d">더 볼래요</button>
        </div>
        <!-- //markup 변경 ; 23/11/08 -->
        <Pagination :option="{ pcShow: true }" />

        <NoData
          :option="{
            type: 'his review',
            html: '<strong>지금 바로 셀프개통하고<br>사용자 평점·후기를 남겨보세요!</strong><p>셀프개통이 완료된 건만 평점·후기를 남길 수 있습니다.</p>',
          }"
        />

        <div class="btn_group">
          <button type="button" class="btn md c03">요금제 보러가기</button>
        </div>
      </div>

      <!-- 24.01.31 수정 -->
      <div class="section">
        <div class="bnr_review bnr_grade">
          <img
            src="/images/data/img_review_banner_pc.png"
            alt="지금배송 2시간이면 OK!"
            class="pc_show"
          />
          <img
            src="/images/data/img_review_banner.png"
            alt="지금배송 2시간이면 OK!"
            class="pc_hide"
          />
        </div>
      </div>
      <!-- // 24.01.31 수정 -->
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script>
import Tag from "@/components/Tag";
import Pagination from "@/components/Pagination";
import NoData from "@/components/NoData";

export default {
  name: "ALFM-MY07-LT00",
  emits: ["setLayout", "openPopup"],
  data() {
    return {
      layout: { header: "sub", footer: "", floatMenu: "", title: "사용자 평점·후기 관리" },
      tableShow: true,
      dataTable: [
        {
          agent: "프리티",
          data: "5G 더빠른 180GB+",
          status: '<button type="button" class="btn xsm c07">후기등록</button>',
        },
        { agent: "프리티", data: "데이터안심무제한 7G+", status: "등록완료" },
        { agent: "프리티", data: "인스 유심 스피드 180 1123123", status: "등록완료" },
        {
          agent: "프리티",
          data: "데이터안심무제한 7G+",
          status: '<button type="button" class="btn xsm c07">후기등록</button>',
        },
      ],
    };
  },
  mounted() {
    this.$emit("setLayout", this.layout);
  },
  components: {
    Tag,
    Pagination,
    NoData,
  },
  props: {
    frontData: Object, // @/assets/frontData.js
  },
};
</script>
