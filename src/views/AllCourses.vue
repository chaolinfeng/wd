<template>
  <div class="all-courses">
    <div class="page-header">
      <div class="back-btn" @click="goBack">‹</div>
      <h1 class="page-title">所有课程</h1>
    </div>

    <!-- 课程分类 -->
    <div class="category-tabs">
      <div 
        class="category-tab" 
        v-for="category in categories" 
        :key="category"
        :class="{ active: selectedCategory === category }"
        @click="selectedCategory = category"
      >
        {{ category }}
      </div>
    </div>

    <!-- 课程列表 -->
    <div class="courses-list">
      <div 
        class="course-card" 
        v-for="course in filteredCourses" 
        :key="course.id"
        @click="goToCourseDetail(course)"
      >
        <div class="course-image" :style="{ background: course.image }"></div>
        <div class="course-info">
          <div class="course-name">{{ course.name }}</div>
          <div class="course-type">{{ course.type }}</div>
          <div class="course-time">🕐 {{ course.time }}</div>
          <div class="course-teacher">👨‍🏫 {{ course.teacher }}</div>
          <div class="course-price">
            <span class="price">¥{{ course.price }}</span>
            <span class="unit">/课时</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const selectedCategory = ref('全部')

const categories = ['全部', '爵士舞', '街舞', '中国舞', '拉丁舞', '芭蕾舞']

// 课程数据
const courses = ref([
  {
    id: 1,
    name: '爵士舞蹈',
    category: '爵士舞',
    type: '团课',
    time: '每周三、周五 19:00-20:30',
    teacher: '李老师',
    price: 88,
    image: 'url(https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&sig=1)'
  },
  {
    id: 2,
    name: '街舞入门',
    category: '街舞',
    type: '团课',
    time: '每周一、周四 18:00-19:30',
    teacher: '王老师',
    price: 88,
    image: 'url(https://images.unsplash.com/photo-1485963631004-f2f00b5e2a8c?w=600&h=400&fit=crop&sig=2)'
  },
  {
    id: 3,
    name: '中国舞',
    category: '中国舞',
    type: '团课',
    time: '每周二、周六 10:00-11:30',
    teacher: '张老师',
    price: 98,
    image: 'url(https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&h=400&fit=crop&sig=3)'
  },
  {
    id: 4,
    name: '拉丁舞',
    category: '拉丁舞',
    type: '团课',
    time: '每周三、周日 14:00-15:30',
    teacher: '赵老师',
    price: 98,
    image: 'url(https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=600&h=400&fit=crop&sig=4)'
  },
  {
    id: 5,
    name: '爵士舞进阶',
    category: '爵士舞',
    type: '团课',
    time: '每周一、周三 19:00-20:30',
    teacher: '李老师',
    price: 98,
    image: 'url(https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&sig=12)'
  },
  {
    id: 6,
    name: '街舞进阶',
    category: '街舞',
    type: '团课',
    time: '每周二、周五 19:00-20:30',
    teacher: '王老师',
    price: 98,
    image: 'url(https://images.unsplash.com/photo-1485963631004-f2f00b5e2a8c?w=600&h=400&fit=crop&sig=13)'
  },
  {
    id: 7,
    name: '中国古典舞',
    category: '中国舞',
    type: '团课',
    time: '每周四、周日 14:00-15:30',
    teacher: '张老师',
    price: 108,
    image: 'url(https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&h=400&fit=crop&sig=14)'
  },
  {
    id: 8,
    name: '拉丁舞进阶',
    category: '拉丁舞',
    type: '团课',
    time: '每周一、周五 19:00-20:30',
    teacher: '赵老师',
    price: 108,
    image: 'url(https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=600&h=400&fit=crop&sig=15)'
  },
  {
    id: 9,
    name: '芭蕾舞基础',
    category: '芭蕾舞',
    type: '团课',
    time: '每周二、周六 14:00-15:30',
    teacher: '陈老师',
    price: 108,
    image: 'url(https://images.unsplash.com/photo-1531935557961-c5a1ed6d284d?w=600&h=400&fit=crop&sig=16)'
  }
])

// 根据分类过滤课程
const filteredCourses = computed(() => {
  if (selectedCategory.value === '全部') {
    return courses.value
  }
  return courses.value.filter(course => course.category === selectedCategory.value)
})

const goBack = () => {
  router.back()
}

const goToCourseDetail = (course) => {
  router.push({ name: 'course-detail', params: { id: course.id } })
}
</script>

<style scoped>
.all-courses {
  min-height: 100vh;
  background: #f5f5f5;
  padding-bottom: 20px;
}

.page-header {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: white;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  z-index: 10;
}

.back-btn {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #333;
  cursor: pointer;
}

.page-title {
  flex: 1;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-right: 36px;
}

/* 分类切换 */
.category-tabs {
  display: flex;
  gap: 8px;
  padding: 12px;
  background: white;
  overflow-x: auto;
  position: sticky;
  top: 57px;
  z-index: 9;
}

.category-tab {
  flex-shrink: 0;
  padding: 8px 16px;
  background: #f5f5f5;
  border-radius: 16px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
}

.category-tab.active {
  background: #ff6b9d;
  color: white;
}

/* 课程列表 */
.courses-list {
  padding: 12px;
  display: grid;
  gap: 12px;
}

.course-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s;
}

.course-card:active {
  transform: scale(0.98);
}

.course-image {
  width: 100%;
  height: 180px;
  background-size: cover;
  background-position: center;
}

.course-info {
  padding: 12px;
}

.course-name {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 6px;
}

.course-type {
  display: inline-block;
  padding: 2px 8px;
  background: #f0f9ff;
  color: #42a5f5;
  font-size: 12px;
  border-radius: 4px;
  margin-bottom: 8px;
}

.course-time {
  font-size: 13px;
  color: #666;
  margin-bottom: 4px;
}

.course-teacher {
  font-size: 13px;
  color: #666;
  margin-bottom: 8px;
}

.course-price {
  display: flex;
  align-items: baseline;
}

.price {
  font-size: 20px;
  font-weight: bold;
  color: #ff6b9d;
}

.unit {
  font-size: 12px;
  color: #999;
  margin-left: 4px;
}
</style>

