/*
 author : Taddy
 file : gtag.ts
*/
import { defineNuxtPlugin } from '#app'
import VueGtag, { trackRouter } from 'vue-gtag-next'

export default defineNuxtPlugin((NuxtApp) => {
  NuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'GA_MEASUREMENT_ID'
    }
  })
  // trackRouter(useRouter())
})