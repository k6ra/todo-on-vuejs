<template>
    <div>
        <p>
            Date:
            <input type="datetime-local" v-model="todo.date" />
        </p>
        <p>
            Task:
            <input v-model="todo.task" />
        </p>
        <button @click="add">Add</button>
    </div>
</template>

<script>
export default {
    name: 'todo',
    data() {
        return {
            todo: {
                date: '',
                task: '',
            }
        }
    },
    methods: {
        add() {
            this.$store.commit('add', { date: this.todo.date, task: this.todo.task });
            this.$router.push({ name: 'home' });
        }
    }
}
</script>