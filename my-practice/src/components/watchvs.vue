<template>
    <div class="watchvs">
      <h1>監視プロパティ</h1>
      <h2>基本の動作</h2>
      <p>開発者ツールでコンソールを見ながら実行してみましょう</p>
      <p>{{ message }}</p>
      <p><input text="text" v-model="message"></p>
    
      <h2>単位を換算してみる</h2>
      <p><input text="text" v-model="km">km</p>
      <p><input text="text" v-model="m">m</p>
      <p><input text="text" v-model="mm">mm</p>
    
      <h2>算出プロパティと監視プロパティの比較</h2>
      同じ処理を実現しているが、算出プロパティのほうがシンプルなJSソースになっている。
      <h3>監視プロパティ</h3>  
      <p>firstName:<input text="text" v-model="firstName"></p>
      <p>lastName:<input text="text" v-model="lastName"></p>
      <p>fullName:{{ fullName }}</p>
    
      <h3>算出プロパティ</h3>  
      <p>firstName:<input text="text" v-model="c_firstName"></p>
      <p>lastName:<input text="text" v-model="c_lastName"></p>
      <p>fullName:{{ c_fullName }}</p>
    
      <pre>{{ $data }}</pre>
    </div>
</template>

<script>
export default {
  name: 'watchvs',
  data: function() {
    return{
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
    }
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
  }
}
</script>

<style scoped>
      
</style>    