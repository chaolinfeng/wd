<template>
  <div class="home">
    <!-- 轮播图 -->
    <div class="banner" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
      <div class="swiper-container" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="swiper-item" v-for="(slide, index) in bannerSlides" :key="index">
          <div class="banner-image" :style="{ background: slide.background }"></div>
          <div class="banner-text">{{ slide.text }}</div>
        </div>
      </div>
      <div class="swiper-dots">
        <span 
          v-for="(slide, index) in bannerSlides" 
          :key="index"
          :class="['dot', { active: currentIndex === index }]"
        ></span>
      </div>
    </div>

    <!-- 横向滚动公告 -->
    <div class="notice">
      <div class="notice-icon">📢</div>
      <div class="notice-content" ref="noticeContentRef">
        <transition-group name="notice-fade" tag="div" class="notice-wrapper">
          <div class="notice-item" :key="noticeIndex">{{ notices[noticeIndex] }}</div>
        </transition-group>
      </div>
    </div>

    <!-- 舞蹈室地址 -->
    <div class="address-card" @click="goToMap">
      <div class="address-icon">📍</div>
      <div class="address-info">
        <div class="address-title">舞动青春舞蹈室</div>
        <div class="address-detail">深圳市南山区科技园南区创新大厦2楼201-203</div>
      </div>
      <div class="address-arrow">›</div>
    </div>

    <!-- 热门课程 -->
    <div class="section">
      <div class="section-title">
        <span class="title-text">🔥 热门课程</span>
        <span class="more-btn" @click="goToAllCourses">更多 ></span>
      </div>
      <div class="course-list" ref="courseListRef">
        <div class="course-card" v-for="course in hotCourses" :key="course.id" @click="goToCourseDetail(course)">
          <div class="course-image" :style="{ background: course.image }"></div>
          <div class="course-info">
            <div class="course-name">{{ course.name }}</div>
            <div class="course-type">{{ course.type }}</div>
            <div class="course-time">🕐 {{ course.time }}</div>
            <div class="course-price">
              <span class="price">¥{{ course.price }}</span>
              <span class="unit">/课时</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 老师团队 -->
    <div class="section">
      <div class="section-title">
        <span class="title-text">👥 老师团队</span>
        <span class="more-btn" @click="goToAllTeachers">更多 ></span>
      </div>
      <div class="teacher-list">
        <div class="teacher-card" v-for="teacher in teachers" :key="teacher.id" @click="goToTeacherDetail(teacher)">
          <div class="teacher-avatar" :style="{ background: teacher.avatar }"></div>
          <div class="teacher-info">
            <div class="teacher-name">{{ teacher.name }}</div>
            <div class="teacher-title">{{ teacher.title }}</div>
            <div class="teacher-skills">
              <span class="skill-tag" v-for="skill in teacher.skills" :key="skill">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentIndex = ref(0)
const noticeIndex = ref(0)
const courseListRef = ref(null)

// 轮播图数据
const bannerSlides = ref([
  {
    text: '专业舞蹈培训，成就更好的自己',
    background: 'url(https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=400&fit=crop)'
  },
  {
    text: '零基础也能学会的舞蹈课程',
    background: 'url(https://images.unsplash.com/photo-1485963631004-f2f00b5e2a8c?w=800&h=400&fit=crop)'
  },
  {
    text: '多位资深导师，因材施教',
    background: 'url(https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&h=400&fit=crop)'
  },
  {
    text: '优美的舞姿从这里开始',
    background: 'url(https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&h=400&fit=crop)'
  }
])

// 公告数据
const notices = ref([
  '🎉 新学员立减200元，限时优惠中',
  '🔥 春季课程火热报名中，名额有限',
  '💃 周末公开课免费体验，欢迎预约',
  '🌟 专业师资团队，一对一指导更贴心',
  '💰 办理季卡享受8折优惠，马上行动'
])

// 热门课程数据
const hotCourses = ref([
  {
    id: 1,
    name: '爵士舞蹈',
    type: '团课',
    time: '每周三、周五 19:00-20:30',
    price: 88,
    image: 'url(https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&sig=1)'
  },
  {
    id: 2,
    name: '街舞入门',
    type: '团课',
    time: '每周一、周四 18:00-19:30',
    price: 88,
    image: 'url(https://images.unsplash.com/photo-1485963631004-f2f00b5e2a8c?w=600&h=400&fit=crop&sig=2)'
  },
  {
    id: 3,
    name: '中国舞',
    type: '团课',
    time: '每周二、周六 10:00-11:30',
    price: 98,
    image: 'url(https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&h=400&fit=crop&sig=3)'
  },
  {
    id: 4,
    name: '拉丁舞',
    type: '团课',
    time: '每周三、周日 14:00-15:30',
    price: 98,
    image: 'url(https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=600&h=400&fit=crop&sig=4)'
  }
])

// 老师数据
const teachers = ref([
  {
    id: 1,
    name: '李老师',
    title: '爵士舞高级导师',
    skills: ['Jazz', 'Contemporary', 'Modern'],
    avatar: 'url(https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop)'
  },
  {
    id: 2,
    name: '王老师',
    title: '街舞首席教练',
    skills: ['Hip Hop', 'Breaking', 'Popping'],
    avatar: 'url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop)'
  },
  {
    id: 3,
    name: '张老师',
    title: '中国舞导师',
    skills: ['民族舞', '古典舞', '敦煌舞'],
    avatar: 'url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop)'
  }
])

// 轮播图触摸事件
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e) => {
  touchStartX = e.touches[0].clientX
}

const handleTouchMove = (e) => {
  touchEndX = e.touches[0].clientX
}

const handleTouchEnd = () => {
  const diff = touchStartX - touchEndX
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      // 向左滑动，下一张
      currentIndex.value = (currentIndex.value + 1) % bannerSlides.value.length
    } else {
      // 向右滑动，上一张
      currentIndex.value = (currentIndex.value - 1 + bannerSlides.value.length) % bannerSlides.value.length
    }
  }
}

// 自动轮播
let autoPlayTimer = null
const autoPlay = () => {
  autoPlayTimer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % bannerSlides.value.length
  }, 3000)
}

// 公告自动滚动
let noticeTimer = null
const autoNotice = () => {
  noticeTimer = setInterval(() => {
    noticeIndex.value = (noticeIndex.value + 1) % notices.value.length
  }, 3000)
}

// 跳转函数
const goToMap = () => {
  alert('跳转到地图页面')
}

const goToAllCourses = () => {
  router.push({ name: 'all-courses' })
}

const goToCourseDetail = (course) => {
  router.push({ name: 'course-detail', params: { id: course.id } })
}

const goToAllTeachers = () => {
  router.push({ name: 'teachers' })
}

const goToTeacherDetail = (teacher) => {
  router.push({ name: 'teacher-detail', params: { id: teacher.id } })
}

onMounted(() => {
  autoPlay()
  autoNotice()
})

onUnmounted(() => {
  if (autoPlayTimer) clearInterval(autoPlayTimer)
  if (noticeTimer) clearInterval(noticeTimer)
})
</script>

<style scoped>
.home {
  padding-bottom: 20px;
}

/* 轮播图 */
.banner {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.swiper-container {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease;
}

.swiper-item {
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
}

.banner-image {
  height: 200px;
  background-size: cover;
  background-position: center;
}

.banner-text {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.swiper-dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 2;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transition: all 0.3s;
}

.dot.active {
  width: 20px;
  border-radius: 3px;
  background: white;
}

/* 公告 */
.notice {
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #fff3cd 0%, #ffe8a1 100%);
  padding: 12px 16px;
  margin: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.notice-icon {
  font-size: 24px;
  margin-right: 10px;
  flex-shrink: 0;
}

.notice-content {
  flex: 1;
  overflow: hidden;
  height: 24px;
  position: relative;
}

.notice-wrapper {
  position: relative;
  height: 100%;
}

.notice-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  color: #d68910;
  font-weight: 500;
}

/* 公告切换动画 */
.notice-fade-enter-active,
.notice-fade-leave-active {
  transition: all 0.5s ease;
}

.notice-fade-enter-from {
  opacity: 0;
  transform: translateY(100%);
}

.notice-fade-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

/* 地址卡片 */
.address-card {
  display: flex;
  align-items: center;
  background: white;
  margin: 12px;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: all 0.3s;
}

.address-card:active {
  background: #f9f9f9;
}

.address-icon {
  font-size: 24px;
  margin-right: 12px;
}

.address-info {
  flex: 1;
}

.address-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 6px;
}

.address-detail {
  font-size: 13px;
  color: #666;
  line-height: 1.5;
}

.address-arrow {
  font-size: 24px;
  color: #ccc;
  margin-left: 12px;
}

/* 章节标题 */
.section {
  margin-top: 20px;
}

.section-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 12px;
}

.title-text {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.more-btn {
  font-size: 14px;
  color: #999;
  cursor: pointer;
}

.more-btn:active {
  color: #ff6b9d;
}

/* 课程列表 */
.course-list {
  padding: 0 12px;
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.course-card {
  flex-shrink: 0;
  width: 280px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  scroll-snap-align: start;
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

/* 老师列表 */
.teacher-list {
  padding: 0 12px;
  display: flex;
  gap: 12px;
  overflow-x: auto;
}

.teacher-card {
  flex-shrink: 0;
  width: 180px;
  background: white;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s;
}

.teacher-card:active {
  transform: scale(0.98);
}

.teacher-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 12px;
  background-size: cover;
  background-position: center;
  border: 3px solid #ff6b9d;
}

.teacher-name {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 6px;
}

.teacher-title {
  font-size: 13px;
  color: #999;
  margin-bottom: 10px;
}

.teacher-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
}

.skill-tag {
  padding: 4px 8px;
  background: #f0f0f0;
  color: #666;
  font-size: 11px;
  border-radius: 4px;
}
</style>
