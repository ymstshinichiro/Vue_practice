<template>
    <div class="evhandle">
      <p> {{ counter }} </p>
      
      <p> v-on:clickの中にはJSの式を書ける </p>
      <button v-on:click="counter++">click!</button>

      <p> こんな感じでメソッド呼び出しもできる </p>
      <button v-on:click="clickHandler">click!</button>

      <p> ---------------------------  </p>

      <p> コンソールに色々出してみる </p>
      <button v-on:click="clickHandler2">click!</button>
    
      <p> ---------------------------  </p>

      <p> イベントハンドラで引数を渡す </p>
      <button v-on:click="clickHandler3('vue.js')">click!</button>
      <p> {{message}} </p>
      
      <p> ---------------------------  </p>

      <p> $eventでevent引数と独自の引数を渡す </p>
      <button v-on:click="clickHandler4($event, 'vue.js')">click!</button>
      <p> {{message}} </p>
      <p> $eventはグローバル変数ぽいな。 </p>

      <p> ---------------------------  </p>

      <p> イベント修飾子 .once 一回だけ実行 </p>
      <button v-on:click.once="clickHandler5">now</button>
      <p> {{times}}</p>

      <p> ---------------------------  </p>

      <p> キー修飾子 keyup 特定のキー入力に反応する </p>
      <input type="text" v-on:keyup.esc.space.up="clear" v-model="usertext" >
      <!--
      <input type="text" v-on:keyup.esc="clear" v-model="usertext" >
      <input type="text" v-on:keyup.27="clear" v-model="usertext" > -->
       <p> {{usertext}}</p>
      <p>ESC,space,upキーのどれかが来たら入力を消去する、という動作。コメントアウトした部分のように単一の記述や、数字での記述も可能https://jp.vuejs.org/v2/guide/events.html#%E3%82%AD%E3%83%BC%E4%BF%AE%E9%A3%BE%E5%AD%90
      </p>
      <p> ---------------------------  </p>
      <p> システム修飾子 .ctrl .alt .shift .meta が押された状態を感知（1クリックではない) </p>
      <p> example) Ctrl + C で入力クリア </p>
      <input type="text" v-on:keyup.ctrl.67="clear2" v-model="usertext2" >

      <p> ---------------------------  </p>
      <p> システム修飾子 .shift </p>
      <p> example) shift + clickでアラート </p>
      <div type="text" v-on:click.shift="clickalert" >
        click me!
      </div>

      <p> ---------------------------  </p>
      <p> v-on省略記法 </p>
      <button type="text" @click="atclick" >click@</button>
      <button type="text" v-on:click="atclick" >click v-on</button>
    </div>
</template>

<script>
export default {
  name: 'evhandle',
  data: function() {
    return{
      counter: 0,
      message: 'msg',
      times: '',
      usertext: '',
      usertext2: ''   
    }
  },
  methods: {
  	clickHandler: function() {
    	this.counter++
    },
  	clickHandler2: function(event) {
    	console.log(event);
    	console.log(event.target.tagName);
    	console.log(event.target.innerHTML);
    	console.log(event.target.type);
    },
  	clickHandler3: function(message) {
    	this.message = message
    },
  	clickHandler4: function($event, message) {
    	this.message = message;
      console.log($event)
    },
  	clickHandler5: function(message) {
    	this.times = new Date().toLocaleTimeString();
    },
  	clear: function(message) {
    	this.usertext = "";
    },
  	clear2: function(message) {
    	this.usertext2 = "";
    },
    clickalert: function() {
      alert('shift + click');
    },
    atclick: function() {
      alert('click');
    }
  }
}
</script>

<style scoped>
      
</style>    