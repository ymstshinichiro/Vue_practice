<template>
    <div class="compvs">
      <h2>computedとmethodsの違い</h2>
      <h3>computed</h3>
      <p>{{ reversedMessage }}</p>
      <h3>methods</h3>
      <p>{{ reversedMessageMethod() }}</p>
    
      <h2>getter/setter実装</h2>
      <p>base price: <input type="text" v-model="baseprice"></p>
      <p>tax included price: <input type="text" v-model="taxInceludedPrice"></p>
    
      <h2>算出プロパティのキャッシュ</h2>
      <p>computedはキャッシュされるので全部同じのが表示される</p>
      <h3>Computed</h3>
      <ol>
        <li>{{ computedNumber }}</li>
        <li>{{ computedNumber }}</li>
        <li>{{ computedNumber }}</li>  
      </ol>
      <h3>Methods</h3>
      <ol>
        <li>{{ methodsNumber() }}</li>
        <li>{{ methodsNumber() }}</li>
        <li>{{ methodsNumber() }}</li>
      </ol>
      <p>開発者ツールでコンソールを見るとmethodsは3回動作してるのが見れます。</p>      
    </div>
</template>

<script>
export default {
  name: 'compvs',
  data: function() {
    return{
        message: 'hello vue.js',
        baseprice: 100
    }
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
    // getterのみ キャッシュされない 
    reversedMessageMethod: function() {
      return this.message.split('').reverse().join('')
    },
    methodsNumber: function() {
    	console.log('methods!')
      return Math.random()      
    },
  }
}
</script>

<style scoped>
      
</style>    