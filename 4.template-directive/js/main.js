// グローバルフィルタは最初に定義しておく
Vue.filter('numFormat', function(value) {
  return value.toLocaleString()
})

Vue.filter('toUSD', function(jpy) {
  // 1ドル=100円
  return jpy / 100
})

// suffix は日本語で言うと接尾辞
Vue.filter('readmore', function(text, length, suffix) {
  return text.substring(0, length) + suffix
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello vue.js',
    secondmessage: 'Hello vue.js2',
    thirdmessage: 'Hello <span style="color:red;">vue.js3</span>',
    fourthmessage: 'Hello vue.js4',
    fifthmessage: 'Hello vue.js5',
    number: 100,
    ok: true,
    price: 29800,
    price2: 2980000000000,
    jpyPrice: 29800000,
    dummytext: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    url: 'https://www.google.co.jp/' 
  },
  methods: {
    // 文字を反転させる
    clickHandler: function(event) {
      this.message = this.message.split('').reverse().join('')
    }
  },
  filters: {
    numberformat: function(value) {
      return value.toLocaleString()
    }
  }
})
