<template>
  <div class="directive">
      <h3>v-once</h3>
      <!-- v-onceはmount時しか要素を変更しない。-->
      <span v-once>{{ message }}</span>
      <span>{{ message }}</span>
      <button v-on:click="clickHandler">click!</button>
      
      <h3>v-pre</h3>
      <!-- v-preは要素のレンダリングをスキップする。下記がユースケース -->
      <!-- 生の要素名を見たいときや XSS対策、 -->
      <!-- ディレクティブのない大量のノードをスキップすることでコンパイルのスピードを上げる-->
      <p v-pre>{{ secondmessage }}</p>
    
      <h3>v-html</h3>
      <!-- v-html使うとSSRできるようになる-->
      <!-- が、XSS脆弱性を引き起こす可能性があるので、信頼できるデータオブジェクト以外では使用しないこと。特に、ユーザーが入力したコンテンツで使用するのはダメ絶対。-->
      <p v-html="thirdmessage" ></p>        
      <!-- v-htmlを使わないとタグはタグのまま出てくる-->
      <p>{{ thirdmessage }}</p>
  
      <h3>v-cloak</h3>
      <!-- v-cloakを入れるとレンダリングが完了するまで要素を表示しない-->
      <p v-cloak>{{ fourthmessage }}</p>
    
      <h3>v-text</h3>
      <!-- v-textを使うと{{}}を使わない書き方ができる。-->
      <!-- プロジェクト内ではどちらかに統一するのがおすすめ -->
      <p v-text="fifthmessage">
  
      <h3>動作確認</h3>
      <p>{{ number + 1 }}</p>
      <p>{{ message.split('').reverse().join('') }}</p>
      <!-- 三項演算子 dataのokをtrue/false切り替えて動作確認-->
      <p>{{ ok ? 'Yes' : 'No' }}</p>
      <p>
        <!-- 下記2例はエラーが出る（書けない式もある -->
        <!-- {{ var x = 1 }} -->
        <!-- {{ if(ok) { return message } }} -->
        {{ ok ? message : '' }}
      </p>
  
      <h3>ローカルフィルタ</h3>
      <p> {{ price | numberformat }} </p>
      <input type=text v-bind:value="price | numberformat">
  
      <h3>グローバルフィルタ</h3>
      <p> {{ price2 | numFormat }} </p>
  
      <h3>フィルタの連結</h3>
      <!-- 日本円 -> ドル -> カンマ区切り -->
      <p> {{ jpyPrice | toUSD | numFormat }} </p>
  
      <h3>フィルタに引数を持たせる</h3>
      <p> {{ dummytext | readmore(20, '....') }} </p>

      <h3>v-bind</h3>
      <!-- 通常 -->
      <a v-bind:href="url" target="_blank">Link1</a>
      <!-- 省略記法 -->
      <a :href="url" target="_blank">Link2</a>
  
  </div>
</template>

<script>
export default {
  name: 'directive',
  data: function() {
    return{
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
    }
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
}
</script>

<style scoped>
      
</style>