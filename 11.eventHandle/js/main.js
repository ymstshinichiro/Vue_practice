var app = new Vue({
	el: '#app',
  data: {
  	counter: 0,
    message: 'msg',
    times: '',
    usertext: '',
    usertext2: ''   
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
})