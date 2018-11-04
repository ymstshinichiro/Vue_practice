var app = new Vue({
  el: '#app',
  data: {
    message: 'hello vue.js',
    km: 0,
    m: 0,
    mm: 0,
    firstName: '',
    lastName: '',
    fullName: '',    
    c_firstName: '',
    c_lastName: '',
    // c_fullName は算出プロパティなのでここには記載しなくても良い点に注意
  },
  watch: {
    message: function(value) {
      console.log(value)
    },
    km: function(value) {
      this.km = value
      this.m = value * 1000
      this.mm = value * 1000000
    },
    m: function(value) {
      this.km = value / 1000
      this.m = value 
      this.mm = value * 1000
    },
    mm: function(value) {
      this.km = value / 1000000
      this.m = value / 1000
      this.mm = value
    },
    // watchはこの範囲が必要 ------------
    firstName: function(value) {
      this.fullName = value + ' ' + this.lastName
    },
    lastName: function(value) {
      this.fullName = this.lastName + ' ' + value 
    }
    // ---------------------------------
  },
  computed: {
    // computedはこれだけでいい ---------
  	c_fullName: function() {
    	return this.c_firstName + ' ' + this.c_lastName
    // ---------------------------------
    }
  },
  methods: {}
})
