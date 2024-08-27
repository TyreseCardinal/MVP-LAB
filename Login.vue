<template>
  <main>
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    <div>
      <h3 class="create-account">
        Not registered? Create an account
        <router-link to="/register"> here</router-link>
      </h3>
    </div>
  </main>
</template>

<script>
import Cookies from 'vue-cookies';
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },

  methods: {
    async login() {
      try {
        const response = await axios.post('http://127.0.0.1:5000/login', {
          email: this.email,
          password: this.password,
        });

        if (response.status === 200) {
          console.log('Login Successful:', response);
          Cookies.set('access_token', response.data.access_token, '1h'); // Set the token with expiration
          Cookies.set('id', response.data.id, '1h'); // Set the ID with expiration

          // Redirect to profile page
          this.$router.push('/profile');
        }

      } catch (error) {
        console.log(error);
        alert('Login failed. Please check your credentials.');
      }
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  padding: 10px 15px;
  background-color: #2C1555;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #6F50C9;
}

.create-account {
  margin-top: 20px;
}
</style>
