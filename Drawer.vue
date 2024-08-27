<!-- src/components/Drawer.vue -->
<template>
  <div :class="['drawer', { 'drawer--open': isOpen }]">
    <button @click="closeDrawer" class="drawer-close-btn">✖</button>
    <slot></slot> <!-- This will allow you to pass content into the drawer -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    openDrawer() {
      this.isOpen = true;
    },
    closeDrawer() {
      this.isOpen = false;
    },
    toggleDrawer() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
.drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #6F50C9; /* Example color */
  color: #fff;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 1000;
  overflow: auto;
}

.drawer--open {
  transform: translateX(0);
}

.drawer-close-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
