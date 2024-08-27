<template>
  <div>
    <h2>{{ project.name }}</h2>
    <button @click="goToKanban">Open Kanban Board</button>
    <ul>
      <li v-for="task in project.tasks" :key="task.id" @click="goToTask(task.id)">
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: {}  // This would be fetched from your API
    };
  },
  methods: {
    goToKanban() {
      this.$router.push({ name: 'Kanban', params: { id: this.project.id } });
    },
    goToTask(id) {
      this.$router.push({ name: 'TaskDetail', params: { id } });
    }
  },
  created() {
    // Fetch project details by ID from API
  }
};
</script>
