<template>
  <div class="teacher-detail">
    <!-- 头部 -->
    <div class="header-section">
      <div class="back-btn" @click="goBack">‹</div>
      <div class="teacher-header">
        <div class="teacher-avatar-large" :style="{ background: teacherData.avatar }"></div>
        <h1 class="teacher-name">{{ teacherData.name }}</h1>
        <div class="teacher-title">{{ teacherData.title }}</div>
      </div>
    </div>

    <!-- 统计信息 -->
    <div class="stats-section">
      <div class="stat-item">
        <div class="stat-value">{{ teacherData.experience }}</div>
        <div class="stat-label">年经验</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">{{ teacherData.studentsCount }}</div>
        <div class="stat-label">名学员</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">{{ teacherData.rating }}</div>
        <div class="stat-label">分评分</div>
      </div>
    </div>

    <!-- 个人介绍 -->
    <div class="content-section">
      <h2 class="section-title">👤 个人介绍</h2>
      <p class="description">{{ teacherData.description }}</p>
    </div>

    <!-- 擅长领域 -->
    <div class="content-section">
      <h2 class="section-title">💼 擅长领域</h2>
      <div class="skills-grid">
        <div class="skill-item" v-for="skill in teacherData.skills" :key="skill">{{ skill }}</div>
      </div>
    </div>

    <!-- 教学特色 -->
    <div class="content-section">
      <h2 class="section-title">✨ 教学特色</h2>
      <ul class="features-list">
        <li v-for="(feature, index) in teacherData.features" :key="index">
          <span class="feature-icon">✓</span>
          <span class="feature-text">{{ feature }}</span>
        </li>
      </ul>
    </div>

    <!-- 学员评价 -->
    <div class="content-section">
      <h2 class="section-title">💬 学员评价</h2>
      <div class="reviews-list">
        <div class="review-item" v-for="review in teacherData.reviews" :key="review.id">
          <div class="review-header">
            <span class="reviewer-name">{{ review.name }}</span>
            <span class="review-rating">⭐⭐⭐⭐⭐</span>
          </div>
          <p class="review-content">{{ review.content }}</p>
          <div class="review-time">{{ review.time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const teacherData = ref({
  id: 1,
  name: '李老师',
  title: '爵士舞高级导师',
  experience: 8,
  studentsCount: 320,
  rating: 4.9,
  avatar: 'url(https://source.unsplash.com/200x200/?dance,teacher,instructor,female&sig=1)',
  description: '毕业于北京舞蹈学院，拥有8年教学经验，曾获得多项国际舞蹈大奖。擅长爵士舞、现代舞等多种舞蹈风格，教学风格生动有趣，深受学员喜爱。',
  skills: ['爵士舞', '现代舞', 'Contemporary', '舞台表演'],
  features: [
    '因材施教，根据学员基础制定教学计划',
    '注重基本功训练，确保动作规范',
    '生动有趣的教学风格，让学习充满乐趣',
    '关注每位学员的进步，及时调整教学方法',
    '提供舞台表演机会，增强学员自信心'
  ],
  reviews: [
    {
      id: 1,
      name: '学员小李',
      content: '李老师教学非常认真负责，动作讲解很详细，让我从零基础到现在能跳出完整的舞蹈，非常感谢！',
      time: '2024-03-10'
    },
    {
      id: 2,
      name: '学员小张',
      content: '老师超级棒！课堂氛围很好，同学们都很喜欢上李老师的课，我已经报名继续学习了。',
      time: '2024-03-05'
    },
    {
      id: 3,
      name: '学员小王',
      content: '非常有耐心的老师，会根据每个人的情况调整教学方法，进步很快，强烈推荐！',
      time: '2024-02-28'
    }
  ]
})

const goBack = () => {
  router.back()
}

onMounted(() => {
  const teacherId = route.params.id
  console.log('加载老师详情:', teacherId)
})
</script>

<style scoped>
.teacher-detail {
  min-height: 100vh;
  background: #f5f5f5;
  padding-bottom: 20px;
}

.header-section {
  position: relative;
  background: linear-gradient(135deg, #ff6b9d 0%, #ff8eb8 100%);
  padding: 20px 16px 40px;
}

.back-btn {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
}

.teacher-header {
  text-align: center;
}

.teacher-avatar-large {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 16px;
  border: 4px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.teacher-name {
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-bottom: 8px;
}

.teacher-title {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
}

.stats-section {
  display: flex;
  background: white;
  margin: -20px 12px 0;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  position: relative;
  z-index: 1;
}

.stat-item {
  flex: 1;
  text-align: center;
}

.stat-value {
  font-size: 28px;
  font-weight: bold;
  color: #ff6b9d;
  margin-bottom: 6px;
}

.stat-label {
  font-size: 13px;
  color: #999;
}

.content-section {
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin: 20px 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.section-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 12px;
}

.description {
  font-size: 15px;
  line-height: 1.6;
  color: #666;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-item {
  padding: 8px 16px;
  background: linear-gradient(135deg, #ff6b9d 0%, #ff8eb8 100%);
  color: white;
  font-size: 14px;
  border-radius: 16px;
  font-weight: 500;
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  display: flex;
  align-items: start;
  gap: 12px;
  padding: 10px 0;
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

.feature-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  background: #ff6b9d;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

.feature-text {
  flex: 1;
}

.reviews-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.review-item {
  padding: 12px;
  background: #f9f9f9;
  border-radius: 8px;
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.reviewer-name {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}

.review-rating {
  font-size: 12px;
}

.review-content {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 8px;
}

.review-time {
  font-size: 12px;
  color: #999;
}
</style>

