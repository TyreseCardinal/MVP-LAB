<template>
  <header>
    <button @click="toggleDrawer" class="drawer-toggle">☰</button>
    <Drawer ref="drawer">
      <!-- Drawer content -->
      <h2>Kanban Task Manager</h2>
      <button @click="goToDashboard">Dashboard</button>
      <button @click="goToProfile">Profile</button>
      <button @click="logout">Logout</button>
    </Drawer>
  </header>
</template>

<script>
import Drawer from './Drawer.vue';

export default {
  components: {
    Drawer
  },
  methods: {
    toggleDrawer() {
      this.$refs.drawer.toggleDrawer();
    },
    goToDashboard() {
      this.$router.push({ name: 'Dashboard' });
    },
    goToProfile() {
      this.$router.push({ name: 'Profile' });
    },
    logout() {
      this.$cookies.remove('authToken');
      this.$router.push({ name: 'Login' });
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #2C1555;
  /* Primary color */
  color: #fff;
}

.drawer-toggle {
  font-size: 24px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  margin-right: 20px;
}

nav button {
  background-color: #6F50C9;
  /* Detail/Fill color */
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
}

nav button:hover {
  background-color: #CD84D4;
  /* Secondary color */
}
</style>
