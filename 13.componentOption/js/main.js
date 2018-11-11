Vue.component('hello-component', {
	template: '<p>hello</p>'
})

var helloComponent2 = {
	template: '<p>hello2</p>'
}

Vue.component('button-counter', {
	//コンポーネント内で扱うdataはfunctionで定義する
  //そーするとインスタンス毎に別々で生成される
	data: function() {
  	return {
    	count: 0
    }
  },
  //テンプレートのroot要素は単一でなければならない。
  //もしspanとかで色々定義したい場合は、最終的に
  //divで全体をくくってやる必要がある。
  //↓のはエラー
//template: '<span>button:</span><button @click="count++">{{ count }}</button>'
  template: '<div><span>button:</span><button @click="count++">{{ count }}</button></div>'
})


var app = new Vue({
	el: '#app',
  components: {
		'hello-component2': helloComponent2  
  }
})