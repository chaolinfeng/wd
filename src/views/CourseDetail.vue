<template>
  <div class="course-detail">
    <div class="detail-header">
      <div class="course-banner" :style="{ background: courseData.image }">
        <div class="back-btn" @click="goBack">‹</div>
      </div>
      <div class="course-header-info">
        <h1 class="course-title">{{ courseData.name }}</h1>
        <div class="course-meta">
          <span class="type-badge">{{ courseData.type }}</span>
          <span class="teacher">👨‍🏫 {{ courseData.teacher }}</span>
        </div>
      </div>
    </div>

    <div class="detail-content">
      <!-- 课程简介 -->
      <div class="info-section">
        <h2 class="section-title">📖 课程简介</h2>
        <p class="course-desc">{{ courseData.description }}</p>
      </div>

      <!-- 课程安排 -->
      <div class="info-section">
        <h2 class="section-title">⏰ 上课时间</h2>
        <div class="time-item">
          <span class="time-label">上课时间：</span>
          <span class="time-value">{{ courseData.time }}</span>
        </div>
        <div class="time-item">
          <span class="time-label">课程时长：</span>
          <span class="time-value">{{ courseData.duration }}</span>
        </div>
        <div class="time-item">
          <span class="time-label">开班人数：</span>
          <span class="time-value">{{ courseData.students }}/{{ courseData.maxStudents }} 人</span>
        </div>
      </div>

      <!-- 适合人群 -->
      <div class="info-section">
        <h2 class="section-title">👥 适合人群</h2>
        <ul class="target-list">
          <li v-for="(target, index) in courseData.targetAudience" :key="index">{{ target }}</li>
        </ul>
      </div>

      <!-- 课程内容 -->
      <div class="info-section">
        <h2 class="section-title">📚 课程内容</h2>
        <ul class="content-list">
          <li v-for="(content, index) in courseData.contents" :key="index">
            <span class="content-num">{{ index + 1 }}</span>
            <span class="content-text">{{ content }}</span>
          </li>
        </ul>
      </div>

      <!-- 价格信息 -->
      <div class="price-section">
        <div class="price-info">
          <span class="price-label">课程价格</span>
          <div class="price-value">
            <span class="price">¥{{ courseData.price }}</span>
            <span class="unit">/课时</span>
          </div>
        </div>
        <div class="price-tips">
          <p>💡 单次课程体验价 ¥58</p>
          <p>💡 套餐购买更优惠，详情咨询客服</p>
        </div>
      </div>

      <!-- 固定底部按钮 -->
      <div class="fixed-actions">
        <button class="book-btn" @click="handleBook">立即预约</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const courseData = ref({
  id: 1,
  name: '爵士舞蹈',
  type: '团课',
  teacher: '李老师',
  time: '每周三、周五 19:00-20:30',
  duration: '每课时90分钟',
  students: 12,
  maxStudents: 20,
  price: 88,
  image: 'url(https://source.unsplash.com/800x400/?jazz,dance,performance&sig=1)',
  description: '爵士舞是一种充满活力和节奏感的舞蹈，能有效提升身体协调性和节奏感。本课程适合零基础学员，从基础步伐开始，循序渐进掌握爵士舞技巧。通过系统训练，不仅能学会优美的舞姿，还能增强身体素质，提升自信。',
  targetAudience: [
    '对爵士舞感兴趣的零基础学员',
    '想要提升气质和体态的朋友',
    '希望通过舞蹈来锻炼身体的人群',
    '想要学习舞台表演的朋友'
  ],
  contents: [
    '爵士舞基础步伐和动作',
    '节奏感培养和音乐理解',
    '身体协调性训练',
    '爵士舞经典组合套路',
    '舞台表现力提升',
    '成品舞编排和表演'
  ]
})

const goBack = () => {
  router.back()
}

const handleBook = () => {
  alert('预约功能开发中...')
}

onMounted(() => {
  // 根据路由参数加载课程详情
  const courseId = route.params.id
  console.log('加载课程详情:', courseId)
})
</script>

<style scoped>
.course-detail {
  min-height: 100vh;
  background: #f5f5f5;
  padding-bottom: 80px;
}

.detail-header {
  background: white;
}

.course-banner {
  height: 220px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.back-btn {
  position: absolute;
  top: 16px;
  left: 16px;
  width: 36px;
  height: 36px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.course-header-info {
  padding: 16px;
}

.course-title {
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-bottom: 12px;
}

.course-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.type-badge {
  padding: 4px 12px;
  background: #ff6b9d;
  color: white;
  font-size: 13px;
  border-radius: 12px;
}

.teacher {
  font-size: 14px;
  color: #666;
}

.detail-content {
  padding: 16px;
}

.info-section {
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.section-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 12px;
}

.course-desc {
  font-size: 15px;
  line-height: 1.6;
  color: #666;
}

.time-item {
  display: flex;
  margin-bottom: 8px;
  font-size: 14px;
}

.time-label {
  color: #999;
  width: 80px;
  flex-shrink: 0;
}

.time-value {
  color: #333;
  font-weight: 500;
}

.target-list, .content-list {
  list-style: none;
  padding: 0;
}

.target-list li, .content-list li {
  padding: 8px 0;
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

.content-list li {
  display: flex;
  align-items: start;
  gap: 12px;
}

.content-num {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  background: #ff6b9d;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

.content-text {
  flex: 1;
}

.price-section {
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.price-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.price-label {
  font-size: 15px;
  color: #666;
}

.price-value {
  display: flex;
  align-items: baseline;
}

.price {
  font-size: 28px;
  font-weight: bold;
  color: #ff6b9d;
}

.unit {
  font-size: 14px;
  color: #999;
  margin-left: 4px;
}

.price-tips {
  padding: 12px;
  background: #fff9e6;
  border-radius: 8px;
}

.price-tips p {
  font-size: 13px;
  color: #d68910;
  margin: 4px 0;
}

.fixed-actions {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 16px;
  background: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.book-btn {
  width: 100%;
  padding: 14px;
  background: #ff6b9d;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.book-btn:active {
  background: #ff5a88;
}
</style>

