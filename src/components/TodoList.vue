<template>
  <div class="todolist">
    <ul v-for="(todo, index) in getTodoList" :key="todo.date">
      {{ todo.date }} {{ todo.task }} <button @click="done(index)">Done</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'todolist',
  data() {
    return {
      todolist: []
    }
  },
  computed: {
    getTodoList() {
      let list = [];
      this.$store.state.todolist.forEach( (value) =>
        list.push({ date: value.date, task: value.task })
      );
      return list;
    }
  },
  methods: {
      done(index) {
          this.$store.commit('done', index);
      }
  }
}
</script>
