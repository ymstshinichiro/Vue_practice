var app = new Vue({
  el: '#app',
  data: {
    message: 'hello vue.js',
    baseprice: 100
  },
  computed: {
    // 算出プロパティ = computed
    // getter,setter キャッシュされる
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    },
    taxInceludedPrice: {
      get: function() {
        return parseInt(this.baseprice * 1.08)},
      set: function(taxInceludedPrice) {
        this.baseprice = Math.ceil(taxInceludedPrice / 1.08)
      }
    },
    computedNumber: function() {
    	console.log('computed!')
      return Math.random()      
    },
  },
  methods: {
    // メソッド = methods
    // getterのみ キャッシュされない 
    reversedMessageMethod: function() {
      return this.message.split('').reverse().join('')
    },
    methodsNumber: function() {
    	console.log('methods!')
      return Math.random()      
    },
  },
  filters: {

  }
})
