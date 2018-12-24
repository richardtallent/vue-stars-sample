import Vue from "vue"
import App from "./App.vue"
import { VueStars } from "vue-stars"

Vue.component("vue-stars", VueStars)
Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount("#app")
