<template>
  <div class="booked">
    <div v-if="bookedCourses.length === 0" class="empty-state">
      <div class="empty-icon">📅</div>
      <div class="empty-text">暂无已预约的课程</div>
      <div class="empty-tip">快去约课吧~</div>
    </div>

    <div v-else>
      <!-- 即将开始的课程 -->
      <div class="section" v-if="upcomingCourses.length > 0">
        <div class="section-title">
          <span class="title-text">⏰ 即将开始</span>
        </div>
        <div class="course-card" v-for="course in upcomingCourses" :key="course.id">
          <div class="course-header">
            <div class="course-image" :style="{ backgroundImage: `url(${course.image})` }"></div>
            <div class="course-basic">
              <div class="course-name">{{ course.name }}</div>
              <div class="course-teacher">👨‍🏫 {{ course.teacher }}</div>
              <div class="course-type-badge">{{ course.type === 'group' ? '团课' : '私课' }}</div>
            </div>
          </div>
          <div class="course-details">
            <div class="detail-item">
              <span class="label">📅 上课日期</span>
              <span class="value">{{ course.date }}</span>
            </div>
            <div class="detail-item">
              <span class="label">🕐 上课时间</span>
              <span class="value">{{ course.time }}</span>
            </div>
            <div class="detail-item">
              <span class="label">📍 教室</span>
              <span class="value">{{ course.classroom }}</span>
            </div>
          </div>
          <div class="course-actions">
            <div class="btn cancel-btn" @click="handleCancel(course)">取消预约</div>
            <div class="btn remind-btn">设置提醒</div>
          </div>
        </div>
      </div>

      <!-- 今日课程 -->
      <div class="section" v-if="todayCourses.length > 0">
        <div class="section-title">
          <span class="title-text">📆 今日课程</span>
        </div>
        <div class="course-card" v-for="course in todayCourses" :key="course.id">
          <div class="course-header">
            <div class="course-image" :style="{ backgroundImage: `url(${course.image})` }"></div>
            <div class="course-basic">
              <div class="course-name">{{ course.name }}</div>
              <div class="course-teacher">👨‍🏫 {{ course.teacher }}</div>
              <div class="course-type-badge today">今日</div>
            </div>
          </div>
          <div class="course-details">
            <div class="detail-item">
              <span class="label">🕐 上课时间</span>
              <span class="value">{{ course.time }}</span>
            </div>
            <div class="detail-item">
              <span class="label">📍 教室</span>
              <span class="value">{{ course.classroom }}</span>
            </div>
          </div>
          <div class="course-actions">
            <div class="btn remind-btn">查看路线</div>
          </div>
        </div>
      </div>

      <!-- 已完成课程 -->
      <div class="section" v-if="completedCourses.length > 0">
        <div class="section-title">
          <span class="title-text">✅ 已完成</span>
        </div>
        <div class="course-card completed" v-for="course in completedCourses" :key="course.id">
          <div class="course-header">
            <div class="course-image" :style="{ backgroundImage: `url(${course.image})` }"></div>
            <div class="course-basic">
              <div class="course-name">{{ course.name }}</div>
              <div class="course-teacher">👨‍🏫 {{ course.teacher }}</div>
              <div class="course-status">已完成</div>
            </div>
          </div>
          <div class="course-details">
            <div class="detail-item">
              <span class="label">📅 上课日期</span>
              <span class="value">{{ course.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const bookedCourses = ref([
  {
    id: 1,
    name: '爵士舞基础班',
    teacher: '李老师',
    type: 'group',
    date: '2024-03-15',
    time: '19:00-20:30',
    classroom: '教室A',
    status: 'upcoming',
    image: 'url(https://source.unsplash.com/400x400/?jazz,dance)'
  },
  {
    id: 2,
    name: '街舞入门班',
    teacher: '王老师',
    type: 'group',
    date: '2024-03-11',
    time: '18:00-19:30',
    classroom: '教室B',
    status: 'today',
    image: 'url(https://source.unsplash.com/400x400/?hiphop,breakdance)'
  },
  {
    id: 3,
    name: '爵士舞私课',
    teacher: '李老师',
    type: 'private',
    date: '2024-03-08',
    time: '14:00-15:00',
    classroom: 'VIP教室',
    status: 'completed',
    image: 'url(https://source.unsplash.com/400x400/?dance,solo)'
  }
])

const upcomingCourses = computed(() => {
  return bookedCourses.value.filter(course => course.status === 'upcoming')
})

const todayCourses = computed(() => {
  return bookedCourses.value.filter(course => course.status === 'today')
})

const completedCourses = computed(() => {
  return bookedCourses.value.filter(course => course.status === 'completed')
})

const handleCancel = (course) => {
  if (confirm(`确定要取消预约《${course.name}》吗？`)) {
    bookedCourses.value = bookedCourses.value.filter(c => c.id !== course.id)
    alert('已取消预约')
  }
}
</script>

<style scoped>
.booked {
  padding-bottom: 20px;
}

/* 空状态 */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 40px;
}

.empty-icon {
  font-size: 80px;
  margin-bottom: 20px;
  opacity: 0.6;
}

.empty-text {
  font-size: 18px;
  color: #666;
  margin-bottom: 10px;
}

.empty-tip {
  font-size: 14px;
  color: #999;
}

/* 章节标题 */
.section {
  margin-top: 20px;
}

.section-title {
  padding: 0 16px;
  margin-bottom: 12px;
}

.title-text {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

/* 课程卡片 */
.course-card {
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin: 0 12px 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.course-card.completed {
  opacity: 0.7;
}

.course-header {
  display: flex;
  margin-bottom: 14px;
}

.course-image {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  margin-right: 12px;
}

.course-basic {
  flex: 1;
}

.course-name {
  font-size: 17px;
  font-weight: bold;
  color: #333;
  margin-bottom: 6px;
}

.course-teacher {
  font-size: 13px;
  color: #666;
  margin-bottom: 8px;
}

.course-type-badge {
  display: inline-block;
  padding: 4px 10px;
  background: #f0f9ff;
  color: #42a5f5;
  font-size: 12px;
  border-radius: 4px;
  font-weight: bold;
}

.course-type-badge.today {
  background: #fff3cd;
  color: #d68910;
}

.course-status {
  display: inline-block;
  padding: 4px 10px;
  background: #e8f5e9;
  color: #4caf50;
  font-size: 12px;
  border-radius: 4px;
}

/* 课程详情 */
.course-details {
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  padding: 12px 0;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.detail-item:last-child {
  margin-bottom: 0;
}

.label {
  font-size: 13px;
  color: #999;
}

.value {
  font-size: 13px;
  color: #333;
  font-weight: 500;
}

/* 操作按钮 */
.course-actions {
  display: flex;
  gap: 10px;
  margin-top: 14px;
}

.btn {
  flex: 1;
  padding: 10px;
  text-align: center;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.cancel-btn {
  background: #fff;
  color: #ff6b9d;
  border: 1px solid #ff6b9d;
}

.cancel-btn:active {
  background: #fff5f8;
}

.remind-btn {
  background: #ff6b9d;
  color: white;
}

.remind-btn:active {
  background: #ff5a88;
}
</style>
