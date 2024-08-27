<template>
  <div>
    <Header />
    <main>
      <h2>Your Projects</h2>
      <button @click="createProject">Create New Project</button>
      <ul>
        <li v-for="project in projects" :key="project.id" @click="goToProject(project.id)">
          {{ project.name }}
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'; // Adjust the path if necessary

export default {
  components: {
    Header
  },
  data() {
    return {
      projects: []  // This would be fetched from your API
    };
  },
  methods: {
    goToProject(id) {
      this.$router.push({ name: 'Project', params: { id } });
    },
    createProject() {
      // Logic to create a new project
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  padding: 20px;
}

button {
  background-color: $detail-color;
  /* Detail/Fill color */
  color: #fff;
  border: none;
  padding: 6px 12px;
  /* Adjust padding for better fit */
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  /* Adjust font size */
  margin-bottom: 10px;
  /* Space between button and list */
}

button:hover {
  background-color: $secondary-color;
  /* Secondary color */
}

ul {
  list-style: none;
  padding: 0;
}

li {
  cursor: pointer;
  padding: 8px 10px;
  /* Adjust padding for list items */
  border-bottom: 1px solid #eee;
  font-size: 16px;
  /* Adjust font size */
}

li:hover {
  background-color: #8D92E7;
  /* Background color */
}
</style>
