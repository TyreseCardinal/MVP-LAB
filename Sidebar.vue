<template>
  <aside>
    <nav>
      <ul>
        <li @click="goToProjects">Projects</li>
        <li @click="goToSettings">Settings</li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  methods: {
    goToProjects() {
      this.$router.push({ name: 'Projects' });
    },
    goToSettings() {
      this.$router.push({ name: 'Settings' });
    }
  }
};
</script>

<style scoped>
aside {
  width: 200px;
  background-color: #e9ecef;
  padding: 10px;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav li {
  padding: 10px;
  cursor: pointer;
}
</style>
