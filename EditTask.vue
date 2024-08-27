<template>
  <div>
    <h2>Edit Task</h2>
    <form @submit.prevent="updateTask">
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
      <label>
        Priority:
        <select v-model="task.priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <button type="submit">Update Task</button>
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
        dueDate: '',
        priority: 'medium'
      }
    };
  },
  methods: {
    updateTask() {
      // Logic to update the task in the backend
      // After successful update, redirect to the task detail page or Kanban board
      this.$http.put(`/api/tasks/${this.$route.params.id}`, this.task)
        // .then(response => {
        // Handle success (e.g., redirect to Task Detail or Kanban Board)
        //  this.$router.push({ name: 'TaskDetail', params: { id: this.$route.params.id } });
        // })
        .catch(error => {
          // Handle error
          console.error('Error updating task:', error);
        });
    }
  },
  created() {
    // Fetch the task details by ID from the backend
    this.$http.get(`/api/tasks/${this.$route.params.id}`)
      .then(response => {
        this.task = response.data;
      })
      .catch(error => {
        console.error('Error fetching task details:', error);
      });
  }
};
</script>
