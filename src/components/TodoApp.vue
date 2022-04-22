<template>
  <div>
      <div v-for="el in todo" :key="el.id" data-test="tag" :class="[el.isDone ? 'doned': '']">
          {{ el.text }}
          <input 
            type="checkbox"
            v-model="el.isDone"
            data-test="todo-checkbox"
          />
      </div>

      <form data-test="form" @submit.prevent="onSubmit()">
          <input data-test="newTag" v-model="newTag" />
      </form>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data() {
      return {
        newTag: '',
        todo: [
            {
                id: 1,
                text: 'aaa!',
                isDone: false
            }
        ]
      }
  },
  methods: {
      onSubmit() {
          this.todo.push({
              id: this.todo.length + 1,
              text: this.newTag,
              isDone: false
          })
      }
  }
}
</script>
<style>
.doned {
    color: red;
}

</style>