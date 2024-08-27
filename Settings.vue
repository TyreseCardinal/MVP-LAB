<template>
  <div>
    <h2>Settings</h2>
    <label>
      Dark Theme:
      <input type="checkbox" v-model="settings.darkTheme" />
    </label>
    <button @click="saveSettings">Save Settings</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: {
        darkTheme: false
      }
    };
  },
  methods: {
    saveSettings() {
      // Logic to save settings
    }
  },
  created() {
    // Fetch current settings from API or local storage
  }
};
</script>
