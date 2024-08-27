<template>
  <div @click="goToTaskDetail" class="task-card">
    <h4>{{ task.title }}</h4>
    <p>{{ task.dueDate }}</p>
    <p>{{ task.description }}</p>
  </div>
</template>

<script>
export default {
  props: ['task'],
  methods: {
    goToTaskDetail() {
      this.$router.push({ name: 'TaskDetail', params: { id: this.task.id } });
    }
  }
};
</script>

<style scoped>
.task-card {
  background-color: #f9f9f9;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  cursor: pointer;
}
</style>
