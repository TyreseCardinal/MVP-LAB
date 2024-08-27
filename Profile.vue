<template>
  <div class="profile">
    <h1>Profile</h1>
    <button @click="toggleEditMode">
      {{ isEditMode ? 'Save' : 'Edit' }}
    </button>
    <div v-if="errorMessage" class="error">
      {{ errorMessage }}
    </div>
    <div v-if="isEditMode">
      <ul>
        <li>
          <label>Username:</label>
          <input v-model="profile.username" placeholder="Edit Username">
        </li>
        <li>
          <label>Email:</label>
          <input v-model="profile.email" placeholder="Edit Email">
        </li>
        <li>
          <label>First Name:</label>
          <input v-model="profile.first_name" placeholder="Edit First Name">
        </li>
        <li>
          <label>Last Name:</label>
          <input v-model="profile.last_name" placeholder="Edit Last Name">
        </li>
        <li>
          <label>Bio:</label>
          <textarea v-model="profile.bio" placeholder="Edit Bio"></textarea>
        </li>
      </ul>
    </div>
    <div v-else>
      <ul>
        <li><strong>Username:</strong> {{ profile.user.username }}</li>
        <li><strong>Email:</strong> {{ profile.email }}</li>
        <li><strong>Name:</strong> {{ profile.first_name }} {{ profile.last_name }}</li>
        <li><strong>Bio:</strong> {{ profile.bio }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'vue-cookies';

export default {
  data() {
    return {
      profile: {},
      isEditMode: false,
    };
  },
  mounted() {
    this.fetchProfile();
  },
  methods: {
    fetchProfile() {
      const access_token = Cookies.get("access_token");
      axios.get('http://127.0.0.1:5000/user_profile', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`,
        },
      })
        .then(response => {
          this.profile = response.data;
        })
        .catch(error => {
          console.error('Error Response:', error);
        });
    },
  },
  toggleEditMode() {
    if (this.isEditMode) {
      this.saveProfile();
    }
    this.isEditMode = !this.isEditMode;
  },
  saveProfile() {
    axios.post('http://127.0.0.1:5000/user_profile', this.profile, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log("Profile updated successfully:", response.data);
        this.errorMessage = '';
      })
      .catch(error => {
        if (error.response) {
          console.error("Error Response:", error.response.data);
          this.errorMessage = error.response.data.message || 'Failed to update profile.';
        } else if (error.request) {
          console.error("No Response Received:", error.request);
          this.errorMessage = 'No response from server.';
        } else {
          console.error("Error Setting Up Request:", error.message);
          this.errorMessage = 'Error setting up request.';
        }
      });
  }
};
</script>

<style scoped>
.profile {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

.error {
  color: red;
  margin-bottom: 10px;
}

.profile ul {
  list-style-type: none;
  padding: 0;
}

.profile li {
  margin-bottom: 10px;
}

.profile label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.profile input,
.profile textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
</style>
