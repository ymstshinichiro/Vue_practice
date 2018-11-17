<template>
    <div class="classes">
      <!-- クラス名にハイフンを含む場合はシングルクォートで囲まないとだめ -->
      <p>Hello <span class="bg-gray text-blue" v-bind:class="{large: isLarge, 'text-danger': hasError}">Vue.js</span></p>

      <!-- 配列でクラスを渡すこともできる -->
      <p>Array <span v-bind:class="[largeClass, dangerClass]">Vue.js</span></p>

      <!-- オブジェクトでクラスを渡すこともできる -->
      <p>Object <span v-bind:class="classObj">Vue.js</span></p>

      <!-- クラスの条件に三項演算子を使う。配列にしてdangerClassは必ず当たるようにしてる -->
      <p>If <span v-bind:class="[isLarge2 ? largeClass2 : '', dangerClass]">Vue.js</span></p>

      <!-- インラインでスタイルを当てる -->
      <p>InLine <span v-bind:style="{color: color, fontSize: fontSize + 'px'}">Vue.js</span></p>
    </div>
</template>

<script>
export default {
  name: 'classes',
  data: function() {
    return{
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
    }
  }
}
</script>

<style scoped>
.large {
  font-size: 36px;
}

.text-danger {
  color: red;
}

.bg-gray {
  background-color: gray;
}

.text-blue {
  color: blue;
}      
</style>    