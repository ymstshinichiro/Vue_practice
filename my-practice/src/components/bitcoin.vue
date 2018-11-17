<template>
    <div class="bitcoin">
        <h2>bitcoin price</h2>
        <section v-if="hasError">Connection error.</section>
        <section v-else>
            <div v-if="loading">loading coin data...</div>
            <div v-else>
            <ul v-cloak>
                <!-- v-cloakはちらつき防止 -->
                <li v-for="(rate, currency) in bpi" :key="currency">
                {{ currency }} : {{ rate.rate_float | currencyDecimal }}
                </li>
            </ul>
            </div>
        </section>
        <pre>{{ $data }}</pre>
    </div>
</template>

<script>
const axios = require('axios');
export default {
  name: 'bitcoin',
  data: function() {
    return{
      bpi: null,
      hasError: false,
      loading: true
    }
  },
  mounted(){
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(function(response) {
        //console.log(response.data.bpi)
        //console.log(response.data.bpi.USD.rate_float)
        this.bpi = response.data.bpi
    }.bind(this))
    .catch(function(error) {
        // 通信にエラーがあったりAPIのURL間違ったりするとここに来る
        this.hasError = true
    }.bind(this))
    .finally(function() {
        this.loading = false
    }.bind(this))
  },
  filters: {
    currencyDecimal(value) {
    return value.toFixed(2)
    }
  }
}
</script>

<style scoped>
[v-cloak] {
    display: none
  }      
</style>    