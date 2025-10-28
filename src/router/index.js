import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Booking from '../views/Booking.vue'
import Booked from '../views/Booked.vue'
import Profile from '../views/Profile.vue'
import CourseDetail from '../views/CourseDetail.vue'
import Teachers from '../views/Teachers.vue'
import TeacherDetail from '../views/TeacherDetail.vue'
import AllCourses from '../views/AllCourses.vue'

const routes = [
  {
    path: '/',
    component: () => import('../layouts/TabLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: 'booking',
        name: 'booking',
        component: Booking
      },
      {
        path: 'booked',
        name: 'booked',
        component: Booked
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile
      }
    ]
  },
  {
    path: '/course/:id',
    name: 'course-detail',
    component: CourseDetail
  },
  {
    path: '/teachers',
    name: 'teachers',
    component: Teachers
  },
  {
    path: '/teacher/:id',
    name: 'teacher-detail',
    component: TeacherDetail
  },
  {
    path: '/courses',
    name: 'all-courses',
    component: AllCourses
  }
]

const router = createRouter({
  // 使用hash模式，支持本地直接打开HTML文件预览
  history: createWebHashHistory(),
  routes
})

export default router
