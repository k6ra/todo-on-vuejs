<template>
  <div class="home">
    <todolist />
  </div>
</template>

<script>
// @ is an alias to /src
import todolist from '@/components/TodoList.vue'

export default {
  name: 'home',
  components: {
    todolist
  }
}
</script>
