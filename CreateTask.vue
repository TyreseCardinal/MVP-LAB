<template>
  <div>
    <h2>Create Task</h2>
    <form @submit.prevent="createTask">
      <label>
        Title:
        <input v-model="task.title" required />
      </label>
      <label>
        Description:
        <textarea v-model="task.description"></textarea>
      </label>
      <label>
        Due Date:
        <input v-model="task.dueDate" type="date" />
      </label>
      <button type="submit">Create Task</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: {
        title: '',
        description: '',
        dueDate: ''
      }
    };
  },
  methods: {
    createTask() {
      // Logic to create the task and redirect to Kanban board
    }
  }
};
</script>
