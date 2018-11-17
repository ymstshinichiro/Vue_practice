<template>
    <div class="fromprop">
      <p> v-model利用時は value, checked, selectedといった属性は無視される  </p>

      <p> {{ message }} </p>
      valueあり<br>
      <input type="text" v-model="message" value="hogehoge">

      <br>valueなし<br>
      <input type="text" v-model="message" >
      
    
      <p> ---------------------------  </p>

      <p> 複数行テキストを扱うときはtextareaで</p>
      <pre> {{message}} </pre>
      <textarea v-model="message"></textarea>
      <pre> {{$data}}</pre>
      
      <p> ---------------------------  </p>

      <p> チェックボックス(単体=boolean)</p>
      <input type="checkbox" id="checkbox" v-model="checked">check<br>
      <label for="checkbox">{{checked}}</label>

      <p> ---------------------------  </p>

      <p> チェックボックス(複数=list) </p>
      <input type="checkbox" id="red" value="Red" v-model="colors">red<br>
      <input type="checkbox" id="green" value="Blue" v-model="colors">green<br>
      <input type="checkbox" id="vlue" value="Green" v-model="colors">blue<br>
      
      <pre>{{colors}}</pre>
      
      <p> 単数と複数で挙動が変わるので要注意。どちらかに統一するようプロジェクトで決めておいたほうが良いかも </p>
      <p> ---------------------------  </p>

      <p> ラジオボタン </p>
      <input type="radio" id="radio-red" value="Red" v-model="radiocolors" >Red<br>
      <input type="radio" id="radio-blue" value="Blue" v-model="radiocolors" >Blue<br>
      <input type="radio" id="radio-green" value="Green" v-model="radiocolors" >Green<br>

      <pre>{{radiocolors}}</pre>
      
      <p> ---------------------------  </p>
      <p> セレクトボックス単体 = 文字列 </p>
      <select v-model="selectedText">
        <option disable value="">Please Select One</option>
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>      
      </select>
      <p> {{ selectedText }} </p>

      <p> ---------------------------  </p>
      <p> セレクトボックス複数 = list </p>
      <select v-model="selectedTextMulti" multiple>
        <option disable value="">Please Select multiple</option>
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>      
      </select>
      <p> {{ selectedTextMulti }} </p>

      <p> ---------------------------  </p>
      <p> フォームの修飾子 .lazy バインドのタイミングを遅延させる</p>
      lazyあり (Enterで確定)<br>
      <input type="text" v-model.lazy="lazymessage" >
      <p>{{lazymessage}}</p>

      lazyなし<br>
      <input type="text" v-model="lazymessage" >
      <p>{{lazymessage}}</p>

      <p> ---------------------------  </p>
      <p> フォームの修飾子 .trim </p>
      trimあり<br>
      <input type="text" v-model.trim="trimmessage" >
      <br>
      trimなし<br>
      <input type="text" v-model="trimmessage" >
      <pre>{{ $data.trimmessage }}</pre>

      <p> ---------------------------  </p>
      <p> フォームの修飾子 .number (string->intにキャスト) </p>

      numbeあり<br>
      <input type="number" v-model.number="age" >
      <pre>{{ age+10 }}</pre>

      numbeなし<br>
      <input type="number" v-model="age" >
      <pre>{{ age+10 }}</pre>    
    </div>
</template>

<script>
export default {
  name: 'fromprop',
  data: function() {
    return{
      message: 'hello vue.js',
      checked: false,
      colors: [],
      radiocolors: [],
      selectedText: '',
      selectedTextMulti: [],
      lazymessage: 'lazy',
      trimmessage: 'trim',
      age: 0,
    }
  }
}
</script>
