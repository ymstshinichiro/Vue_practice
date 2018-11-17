<template>
    <div class="vifvon">
      <p v-if="color === 'red'">
        stop
      </p>
      <p v-else-if="color === 'yellow'">
        caution
      </p>
      <p v-else-if="color === 'blue'">
        Go
      </p>
      <p v-else>
        not/red/yellow/blue
      </p>
    
      <p> ---------------------------  </p>
    
      <p v-show="toggle">Hello, vue.js</p>
    
    
      <p>
        v-ifはDOM単位で表示/非表示を切り替える。<br>
        v-onはCSSのDisplayプロパティで切り替える。else/else-ifが使えない。描画コストはその分少ない。
        
      </p>
    </div>
</template>

<script>
export default {
  name: 'vifvon',
  data: function() {
    return{
      color: 'red',
      toggle: true
    }
  }
}
</script>