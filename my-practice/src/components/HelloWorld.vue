<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img src="../assets/logo.png" >
    <ul>
      <li><router-link to="/directive">ディレクティブ</router-link></li>
      <li><router-link to="/comp">computed vs methods</router-link></li>
      <li><router-link to="/watchvs">watch vs computed</router-link></li>
      <li><router-link to="/deep">deep</router-link></li>
      <li><router-link to="/reals">リアルタイム検索</router-link></li>
      <li><router-link to="/classes">クラスオブジェクト</router-link></li>
      <li><router-link to="/vifvon">v-if v-on</router-link></li>
      <li><router-link to="/evhandle">イベントハンドラ</router-link></li>
      <li><router-link to="/formprop">プロパティ</router-link></li>
      <li><router-link to="/todo">TODOアプリ的なもの</router-link></li>
      <li><router-link to="/bitcoin">ビットコイン価格(API)</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 10px 0px;
}
a {
  color: #42b983;
}
</style>
