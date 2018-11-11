var app = new Vue({
  el: '#app',
  data: {
    isLarge: true,
    hasError: true,

    // Array
    largeClass: 'large',
    dangerClass: 'text-danger',  

    classObj: {
      // この場合はCSSのクラス名を直接書く
      large: true,
      'text-danger': false,  
    },

    largeClass2: {
      large: true,
      'bg-gray': true
    },
    dangerClass: {
      'text-danger': true
    },
    isLarge2: true,

    // インラインで
    color: 'blue',
    fontSize: 36
  },
})
