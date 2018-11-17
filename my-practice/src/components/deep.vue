<template>
    <div class="deep">
      <ul>
        <li v-for="color in colors" :key="color" >{{ color.name }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'deep',
  data: function() {
    return{
      colors: [
        { name: 'Red' },
        { name: 'Green' },
        { name: 'Blue' }
      ]
    }
  },
  watch: {
    colors: {
      handler: function(newValue, oldValue) { 
        console.log('update!')
        console.log('new: %s, old: %s', 
        JSON.stringify(newValue, null, '\t'),
        JSON.stringify(oldValue, null, '\t')
        )
        // 補足: deepの仕様
        // オブジェクトまたは配列を変更する場合、
        // それらは同じオブジェクト/配列を参照するため、
        // ハンドラの引数で取得できる古い値は、
        // 新しい値と同じになるという仕様である点に注意。
      },
      deep: true,
      // deepがtrueになっていないと、 console.log('update!')　は実行されない
      // 画面の表示は切り替わる。
      // colors:のネスト内に入るためのオプションとしてdeepが必要とのこと
      // デフォルトでは deep: false になっている。

      immediate: true
      // immediateをつけておくとマウント直後に値を変更するらしいが。。よくわからんオプション
    }
  }
}
</script>

<style scoped>
      
</style>    