<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <label>
        Username:
        <input v-model="username" required />
      </label>
      <label>
        Email:
        <input v-model="email" type="email" required />
      </label>
      <label>
        Password:
        <input v-model="password" type="password" required />
      </label>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
      // Logic to register a new user
      // Redirect to login page after successful registration
    }
  }
};
</script>
