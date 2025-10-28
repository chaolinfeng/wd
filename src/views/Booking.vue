<template>
  <div class="booking">
    <!-- Tab切换 -->
    <div class="booking-tabs">
      <div 
        class="tab-item" 
        :class="{ active: activeTab === 'group' }"
        @click="activeTab = 'group'"
      >
        团课
      </div>
      <div 
        class="tab-item" 
        :class="{ active: activeTab === 'private' }"
        @click="activeTab = 'private'"
      >
        私课
      </div>
    </div>

    <!-- 固定在顶部的日期筛选（整体） -->
    <div class="schedule-days-fixed">
      <div class="schedule-days">
        <div 
          class="day-item" 
          v-for="(day, index) in scheduleDays" 
          :key="index"
          :class="{ active: selectedDay === index }"
          @click="selectedDay = index"
        >
          <div class="day-name">{{ day.name }}</div>
          <div class="day-date">{{ day.date }}</div>
        </div>
      </div>
    </div>

    <!-- 团课内容 -->
    <div v-show="activeTab === 'group'" class="tab-content">
      <div class="schedule-content">
        <div 
          class="schedule-item" 
          v-for="course in todayCourses" 
          :key="course.id"
          @click="handleBook(course)"
        >
          <div class="course-image" :style="{ background: course.image }"></div>
          <div class="course-info">
            <div class="course-name">{{ course.name }}</div>
            <div class="course-teacher">👨‍🏫 {{ course.teacher }}</div>
            <div class="course-time">🕐 {{ course.time }}</div>
            <div class="course-student">👥 已报名 {{ course.students }}/{{ course.maxStudents }} 人</div>
            <div class="course-price">
              <span class="price">¥{{ course.price }}</span>
              <span class="unit">/课时</span>
            </div>
            <div class="book-btn">立即约课</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 私课内容 -->
    <div v-show="activeTab === 'private'" class="tab-content">
      <div class="private-courses">
        <div 
          class="course-item" 
          v-for="course in privateCourses" 
          :key="course.id"
          @click="handleBook(course)"
        >
          <div class="course-image" :style="{ background: course.image }"></div>
          <div class="course-info">
            <div class="course-name">{{ course.name }}</div>
            <div class="course-teacher">👨‍🏫 {{ course.teacher }}</div>
            <div class="course-desc">{{ course.desc }}</div>
            <div class="course-time-range">{{ course.timeRange }}</div>
            <div class="course-price">
              <span class="price">¥{{ course.price }}</span>
              <span class="unit">/课时</span>
            </div>
            <div class="book-btn">立即约课</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('group')
const selectedDay = ref(0)

// 生成未来7天的日期
const getScheduleDays = () => {
  const days = []
  const weekNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  const today = new Date()
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    const dayOfWeek = date.getDay()
    
    let dayName = ''
    if (i === 0) {
      dayName = '今天'
    } else if (i === 1) {
      dayName = '明天'
    } else {
      dayName = weekNames[dayOfWeek]
    }
    
    days.push({
      name: dayName,
      date: `${date.getMonth() + 1}/${date.getDate()}`,
      fullDate: date
    })
  }
  
  return days
}

const scheduleDays = ref(getScheduleDays())

// 今日课程数据
const todayCourses = ref([
  {
    id: 1,
    name: '爵士舞基础班',
    teacher: '李老师',
    time: '19:00-20:30',
    students: 12,
    maxStudents: 20,
    price: 88,
    image: 'url(https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&sig=5)'
  },
  {
    id: 2,
    name: '街舞入门班',
    teacher: '王老师',
    time: '18:00-19:30',
    students: 15,
    maxStudents: 20,
    price: 88,
    image: 'url(https://images.unsplash.com/photo-1485963631004-f2f00b5e2a8c?w=600&h=400&fit=crop&sig=6)'
  },
  {
    id: 3,
    name: '中国舞基础',
    teacher: '张老师',
    time: '10:00-11:30',
    students: 9,
    maxStudents: 20,
    price: 98,
    image: 'url(https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&h=400&fit=crop&sig=7)'
  },
  {
    id: 4,
    name: '拉丁舞入门',
    teacher: '赵老师',
    time: '14:00-15:30',
    students: 11,
    maxStudents: 20,
    price: 98,
    image: 'url(https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=600&h=400&fit=crop&sig=8)'
  }
])

// 私课数据
const privateCourses = ref([
  {
    id: 101,
    name: '爵士舞私课',
    teacher: '李老师',
    desc: '一对一专业指导，根据个人水平定制课程',
    timeRange: '周一至周日 10:00-21:00',
    price: 280,
    image: 'url(https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&sig=9)'
  },
  {
    id: 102,
    name: '街舞私课',
    teacher: '王老师',
    desc: '针对性训练，快速提升舞蹈技巧',
    timeRange: '周一至周日 10:00-21:00',
    price: 280,
    image: 'url(https://images.unsplash.com/photo-1485963631004-f2f00b5e2a8c?w=600&h=400&fit=crop&sig=10)'
  },
  {
    id: 103,
    name: '中国舞私课',
    teacher: '张老师',
    desc: '专业古典舞指导，传承中华文化之美',
    timeRange: '周一至周日 10:00-21:00',
    price: 280,
    image: 'url(https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&h=400&fit=crop&sig=11)'
  }
])

const handleBook = (course) => {
  alert(`预约课程：${course.name}\n老师：${course.teacher}\n价格：¥${course.price}`)
}
</script>

<style scoped>
.booking {
  padding-bottom: 20px;
}

/* Tab切换 */
.booking-tabs {
  display: flex;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  position: sticky;
  top: 0;
  z-index: 20;
}

.tab-item {
  flex: 1;
  padding: 16px;
  text-align: center;
  font-size: 16px;
  color: #666;
  cursor: pointer;
  position: relative;
  transition: color 0.3s;
}

.tab-item.active {
  color: #ff6b9d;
  font-weight: bold;
}

.tab-item.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: #ff6b9d;
  border-radius: 3px 3px 0 0;
}

/* 固定在顶部的日程表 */
.schedule-days-fixed {
  position: sticky;
  top: 52px;
  background: #f5f5f5;
  z-index: 10;
  padding-bottom: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.schedule-days {
  display: flex;
  gap: 8px;
  padding: 12px 12px 0;
  overflow-x: auto;
}

.day-item {
  flex-shrink: 0;
  min-width: 80px;
  padding: 12px 8px;
  text-align: center;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}

.day-item.active {
  background: #ff6b9d;
  color: white;
}

.day-name {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
}

.day-date {
  font-size: 12px;
  opacity: 0.8;
}

.schedule-content {
  padding: 12px;
  padding-top: 12px;
}

.schedule-item {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.schedule-item:active {
  transform: scale(0.98);
}

.course-image {
  width: 100%;
  height: 140px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.course-info {
  padding: 14px;
}

.course-name {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
}

.course-teacher,
.course-time,
.course-student {
  font-size: 13px;
  color: #666;
  margin-bottom: 6px;
}

.course-price {
  display: flex;
  align-items: baseline;
  margin: 10px 0;
}

.price {
  font-size: 22px;
  font-weight: bold;
  color: #ff6b9d;
}

.unit {
  font-size: 13px;
  color: #999;
  margin-left: 4px;
}

.book-btn {
  margin-top: 12px;
  padding: 10px;
  background: #ff6b9d;
  color: white;
  text-align: center;
  border-radius: 8px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
}

/* 私课样式 */
.private-courses {
  padding: 12px;
  padding-top: 12px;
}

.course-item {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s;
}

.course-item:active {
  transform: scale(0.98);
}

.course-desc {
  font-size: 13px;
  color: #666;
  margin: 8px 0;
  line-height: 1.5;
}

.course-time-range {
  font-size: 13px;
  color: #666;
  margin: 8px 0;
}
</style>
