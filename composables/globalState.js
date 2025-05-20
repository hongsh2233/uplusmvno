import { reactive } from "vue";

export const globalState = reactive({
  isLoggedIn: false, // 로그인 상태 (true: 로그인, false: 비로그인)
});
