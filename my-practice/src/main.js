import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// グローバルフィルタは最初に定義しておく
Vue.filter('numFormat', function (value) {
  return value.toLocaleString()
})

Vue.filter('toUSD', function (jpy) {
  // 1ドル=100円
  return jpy / 100
})

// suffix は日本語で言うと接尾辞
Vue.filter('readmore', function (text, length, suffix) {
  return text.substring(0, length) + suffix
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// css normalize
// https://qiita.com/hogesuke_1/items/b12c65e8485289da4146
