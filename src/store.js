import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todolist: []
  },
  mutations: {
    add(state, todo) {
      this.state.todolist.push(todo)
    },
    done(state, index) {
      this.state.todolist.splice(index, 1);
    }
  },
  actions: {

  }
})
