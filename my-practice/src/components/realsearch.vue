<template>
    <div class="realsearch">
      <p>
        <input type="text" v-model="keyword"> 
      </p>
      <p>
        {{ message }}
      </p>
      <ul>
        <li v-for="item in items" :key="item">
          <a v-bind:href="item.url" target="_blank">{{ item.title }}</a>
          <span>Likes : {{ item.likes_count }}</span>
        </li>
      </ul>
    </div>
</template>

<script>
const axios = require('axios');
export default {
  name: 'realsearch',
  data: function() {
    return{
      items: null,
      keyword: '',
      message: ''
    }
  },
  watch: {
    keyword: function(newKeyword, oldKeyword) {
      // console.log(newKeyword)
      this.message = 'Wating for you stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function() {
    // this.keyword = 'JavaScript'
    // this.getAnswer()
    //　このCDNがないと _.debounce は動作しないので要注意(コンポーネント内に書けなかったので今回はindex.htmlに直接貼った)
    // <script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
  },
  methods: {
    getAnswer: function() {
      if(this.keyword === '') {
        this.items = null
        this.message = ''
        return
      }

      this.message = 'loading...'
      var vm = this
      var params = { page: 1, per_page:20, query: this.keyword }
      axios.get('https://qiita.com/api/v2/items', { params })
      .then(function(response){
        console.log(response)
        vm.items = response.data
      })
      .catch(function(error) {
        vm.message = 'Error!' + error
      })
      .finally(function() {
        vm.message = ''
      })
    }
  },
}
</script>

<style scoped>
      
</style>    