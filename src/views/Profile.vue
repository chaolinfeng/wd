<template>
  <div class="profile">
    <!-- 个人信息头部 -->
    <div class="profile-header">
      <div class="profile-bg"></div>
      <div class="profile-info">
        <div class="avatar" :style="{ backgroundImage: `url(${userInfo.avatar})` }"></div>
        <div class="user-name">{{ userInfo.name }}</div>
        <div class="user-desc">{{ userInfo.desc }}</div>
      </div>
    </div>

    <!-- 数据统计 -->
    <div class="stats">
      <div class="stat-item">
        <div class="stat-value">{{ stats.totalClasses }}</div>
        <div class="stat-label">总课程</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">{{ stats.totalHours }}</div>
        <div class="stat-label">总课时</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">{{ stats.consecutiveDays }}</div>
        <div class="stat-label">连续签到</div>
      </div>
    </div>

    <!-- 我的课程 -->
    <div class="menu-section">
      <div class="section-title">🎓 我的课程</div>
      <div class="menu-list">
        <div class="menu-item" @click="goToBooked">
          <div class="menu-icon">📅</div>
          <div class="menu-text">已预约课程</div>
          <div class="menu-badge" v-if="stats.upcomingCount > 0">{{ stats.upcomingCount }}</div>
          <div class="menu-arrow">›</div>
        </div>
        <div class="menu-item" @click="goToBooking">
          <div class="menu-icon">📚</div>
          <div class="menu-text">所有课程</div>
          <div class="menu-arrow">›</div>
        </div>
        <div class="menu-item" @click="goToProgress">
          <div class="menu-icon">📊</div>
          <div class="menu-text">学习进度</div>
          <div class="menu-arrow">›</div>
        </div>
      </div>
    </div>

    <!-- 设置 -->
    <div class="menu-section">
      <div class="section-title">⚙️ 设置</div>
      <div class="menu-list">
        <div class="menu-item">
          <div class="menu-icon">📞</div>
          <div class="menu-text">客服中心</div>
          <div class="menu-arrow">›</div>
        </div>
        <div class="menu-item">
          <div class="menu-icon">📝</div>
          <div class="menu-text">意见反馈</div>
          <div class="menu-arrow">›</div>
        </div>
        <div class="menu-item">
          <div class="menu-icon">ℹ️</div>
          <div class="menu-text">关于我们</div>
          <div class="menu-arrow">›</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const userInfo = ref({
  name: '舞动青春',
  desc: '让舞蹈成为生活的一部分',
  avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop'
})

const stats = ref({
  totalClasses: 24,
  totalHours: 48,
  consecutiveDays: 5,
  upcomingCount: 2
})

const goToBooked = () => {
  router.push({ name: 'booked' })
}

const goToBooking = () => {
  router.push({ name: 'booking' })
}

const goToProgress = () => {
  alert('学习进度功能开发中...')
}
</script>

<style scoped>
.profile {
  padding-bottom: 20px;
  background: #f5f5f5;
}

/* 个人信息头部 */
.profile-header {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.profile-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #ff6b9d 0%, #ff8eb8 50%, #fce4ec 100%);
}

.profile-info {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 10px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background-color: rgba(255, 255, 255, 0.5);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.user-name {
  font-size: 22px;
  font-weight: bold;
  color: white;
  margin-top: 12px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.user-desc {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 6px;
}

/* 数据统计 */
.stats {
  display: flex;
  background: white;
  margin: -10px 12px 0;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  position: relative;
  z-index: 2;
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

/* 菜单区块 */
.menu-section {
  margin-top: 20px;
}

.section-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  padding: 0 16px;
  margin-bottom: 8px;
}

.menu-list {
  background: white;
  margin: 0 12px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #f5f5f5;
  cursor: pointer;
  transition: background 0.2s;
}

.menu-item:last-child {
  border-bottom: none;
}

.menu-item:active {
  background: #f9f9f9;
}

.menu-icon {
  font-size: 22px;
  margin-right: 12px;
}

.menu-text {
  flex: 1;
  font-size: 15px;
  color: #333;
}

.menu-value {
  font-size: 14px;
  color: #ff6b9d;
  font-weight: 500;
  margin-right: 8px;
}

.menu-badge {
  min-width: 20px;
  height: 20px;
  line-height: 20px;
  padding: 0 6px;
  background: #ff6b9d;
  color: white;
  font-size: 12px;
  border-radius: 10px;
  text-align: center;
  margin-right: 8px;
}

.menu-arrow {
  font-size: 20px;
  color: #ccc;
  font-weight: bold;
}
</style>
