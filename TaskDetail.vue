<template>
  <div>
    <h2>{{ task.title }}</h2>
    <p><strong>Due Date:</strong> {{ task.dueDate }}</p>
    <p><strong>Description:</strong> {{ task.description }}</p>
    <button @click="editTask">Edit Task</button>
    <button @click="deleteTask">Delete Task</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: {}  // This would be fetched from your API
    };
  },
  methods: {
    editTask() {
      this.$router.push({ name: 'EditTask', params: { id: this.task.id } });
    },
    deleteTask() {
      // Logic to delete the task
    }
  },
  created() {
    // Fetch task details by ID from API
  }
};
</script>
