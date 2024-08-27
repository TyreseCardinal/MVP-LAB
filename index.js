import Vue from 'vue';
import VueRouter from 'vue-router';

// Import views
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Dashboard from '@/views/Dashboard.vue';
import ProjectPage from '@/views/ProjectPage.vue';
import TaskDetail from '@/views/TaskDetail.vue';
import Profile from '@/views/Profile.vue';
import Settings from '@/views/Settings.vue';

// Import components
import KanbanBoard from '@/components/KanbanBoard.vue';
import CreateTask from '@/components/CreateTask.vue';
import EditTask from '@/components/EditTask.vue';
// import Header from '@/components/Header.vue';  // Add this if it's used in views
// import Sidebar from '@/components/Sidebar.vue';  // Add this if it's used in views
// import TaskCard from '@/components/TaskCard.vue';  // Add this if it's used in views

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/project/:id', name: 'Project', component: ProjectPage },
  { path: '/kanban/:id', name: 'Kanban', component: KanbanBoard },
  { path: '/task/:id', name: 'TaskDetail', component: TaskDetail },
  { path: '/task/create', name: 'CreateTask', component: CreateTask },
  { path: '/task/edit/:id', name: 'EditTask', component: EditTask },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/settings', name: 'Settings', component: Settings }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
