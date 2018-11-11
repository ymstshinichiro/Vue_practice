<template>
    <div class="todo">
      <h2>TODO list</h2>
      <form v-on:submit.prevent>
        <input type="text" v-model="newItem">
        <button v-on:click="additem">AddTODO</button>
      </form>
      <ul>
        <li v-for="(todo, key, index) in todos" :key="index">
          <input type="checkbox" v-model="todo.isDone">
          <span v-bind:class="{ done: todo.isDone }">{{ todo.item }}</span>
          <button v-on:click="deleteItem(index)">delete</button>
        </li>
      </ul>
      <pre>{{ $data }}</pre>
    </div>
</template>

<script>
export default {
  name: 'todo',
  data: function() {
    return{
        newItem: '',
        todos: [],
    }
  },
  methods: {
    additem: function(event) {
      var todo = {
        item: this.newItem,
        isDone: false
      };
    //   if (this.newItem == '') return;

      this.todos.push(todo);
      this.newItem = '';

    },
    deleteItem: function(index) {
      alert(index);
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style scoped>
ul {
    list-style: none;
}
  
li>span.done {
  text-decoration: line-through;
}
      
</style>    