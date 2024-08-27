<template>
  <div>
    <div class="column">
      <h3>To-Do</h3>
      <div v-for="task in toDoTasks" :key="task.id" class="task-card">
        <task-card :task="task" />
      </div>
    </div>
    <div class="column">
      <h3>In Progress</h3>
      <div v-for="task in inProgressTasks" :key="task.id" class="task-card">
        <task-card :task="task" />
      </div>
    </div>
    <div class="column">
      <h3>Done</h3>
      <div v-for="task in doneTasks" :key="task.id" class="task-card">
        <task-card :task="task" />
      </div>
    </div>
  </div>
</template>

<script>
import TaskCard from './TaskCard.vue';

export default {
  components: {
    TaskCard
  },
  data() {
    return {
      toDoTasks: [],
      inProgressTasks: [],
      doneTasks: []
    };
  },
  created() {
    // Fetch tasks by project ID from API and categorize them
  }
};
</script>

<style scoped>
.column {
  float: left;
  width: 30%;
  margin-right: 10px;
}

.task-card {
  background-color: #f1f1f1;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
