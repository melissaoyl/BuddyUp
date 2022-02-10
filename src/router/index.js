import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import MyBuddies from '@/views/MyBuddies.vue'
import MyCalendar from '@/views/MyCalendar.vue'
import Profile from '@/views/Profile.vue'
import Register from '@/views/Register.vue'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/mybuddies',
        name: 'MyBuddies',
        component: MyBuddies
    },
    {
        path: '/mycalendar',
        name: 'MyCalendar',
        component: MyCalendar
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router