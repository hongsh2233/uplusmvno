<template>
  <div v-for="(a, i) in data" :key="i">
    <Vue3Lottie v-if="a.show" :animationLink="a.data" loop autoplay />
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";

export default {
  name: "Lottie",
  data() {
    return {
      // },
      data: [
        { name: "loading", show: false, data: "/images/animation/loading.json" },
        { name: "complete", show: false, data: "/images/animation/ani_complete.json" },
        { name: "mainChar", show: false, data: "/images/animation/ani_main_char.json" },
        { name: "plan01", show: false, data: "/images/animation/ani_plan01.json" },
        { name: "plan02", show: false, data: "/images/animation/ani_plan02.json" },
        { name: "plan03", show: false, data: "/images/animation/ani_plan03.json" },
        { name: "plan04", show: false, data: "/images/animation/ani_plan04.json" },
        { name: "deliveryMean", show: false, data: "/images/animation/ani_delivery_mean.json" },
        { name: "emailResult", show: false, data: "/images/animation/ani_email_results.json" },
        { name: "myBanner", show: false, data: "/images/animation/ani_mypage_banner.json" },
      ],
    };
  },
  mounted() {
    const name = this.name;
    this.data.forEach((a) => {
      if (name == a.name) a.show = true;
    });
  },
  props: {
    name: String,
  },
  components: {
    Vue3Lottie,
  },
};
</script>
