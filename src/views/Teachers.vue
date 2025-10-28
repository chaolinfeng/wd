<template>
  <div class="teachers">
    <div class="page-header">
      <div class="back-btn" @click="goBack">‹</div>
      <h1 class="page-title">老师团队</h1>
    </div>

    <div class="teachers-list">
      <div class="teacher-item" v-for="teacher in teachers" :key="teacher.id" @click="goToTeacherDetail(teacher)">
        <div class="teacher-avatar" :style="{ background: teacher.avatar }"></div>
        <div class="teacher-info">
          <div class="teacher-name">{{ teacher.name }}</div>
          <div class="teacher-title">{{ teacher.title }}</div>
          <div class="teacher-experience">{{ teacher.experience }}年教学经验</div>
          <div class="teacher-skills">
            <span class="skill-tag" v-for="skill in teacher.skills" :key="skill">{{ skill }}</span>
          </div>
          <div class="teacher-stats">
            <span class="stat">👥 {{ teacher.studentsCount }}名学员</span>
            <span class="stat">⭐ {{ teacher.rating }}分</span>
          </div>
        </div>
        <div class="teacher-arrow">›</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const teachers = ref([
  {
    id: 1,
    name: '李老师',
    title: '爵士舞高级导师',
    experience: 8,
    studentsCount: 320,
    rating: 4.9,
    skills: ['Jazz', 'Contemporary', 'Modern'],
    avatar: 'url(https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop)',
    description: '毕业于北京舞蹈学院，拥有8年教学经验，曾获得多项国际舞蹈大奖。擅长爵士舞、现代舞等多种舞蹈风格，教学风格生动有趣，深受学员喜爱。'
  },
  {
    id: 2,
    name: '王老师',
    title: '街舞首席教练',
    experience: 10,
    studentsCount: 450,
    rating: 4.8,
    skills: ['Hip Hop', 'Breaking', 'Popping'],
    avatar: 'url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop)',
    description: '国际街舞大赛冠军，拥有10年街舞教学经验，曾在多家知名舞蹈工作室任教。精通多种街舞风格，教学方法独特，能够让学员快速掌握街舞技巧。'
  },
  {
    id: 3,
    name: '张老师',
    title: '中国舞导师',
    experience: 12,
    studentsCount: 280,
    rating: 5.0,
    skills: ['民族舞', '古典舞', '敦煌舞'],
    avatar: 'url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop)',
    description: '国家级舞蹈演员，从事舞蹈教学12年。精通中国古典舞、民族舞等多种传统舞蹈，曾多次参与大型演出和比赛，具有丰富的舞台表演经验。'
  },
  {
    id: 4,
    name: '赵老师',
    title: '拉丁舞金牌教练',
    experience: 9,
    studentsCount: 350,
    rating: 4.9,
    skills: ['拉丁舞', '恰恰', '桑巴'],
    avatar: 'url(https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop)',
    description: '国际拉丁舞锦标赛获奖选手，拥有9年教学经验。擅长拉丁舞、恰恰、桑巴等拉丁舞蹈风格，教学风格严谨细致，帮助众多学员在比赛中获得优异成绩。'
  },
  {
    id: 5,
    name: '陈老师',
    title: '芭蕾舞导师',
    experience: 7,
    studentsCount: 200,
    rating: 4.9,
    skills: ['芭蕾', '形体', '气质塑造'],
    avatar: 'url(https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop)',
    description: '专业芭蕾舞演员出身，拥有7年教学经验。专注于芭蕾基本功训练和形体塑造，能够帮助学员改善体态，提升气质。'
  }
])

const goBack = () => {
  router.back()
}

const goToTeacherDetail = (teacher) => {
  router.push({ name: 'teacher-detail', params: { id: teacher.id } })
}
</script>

<style scoped>
.teachers {
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

.teachers-list {
  padding: 12px;
}

.teacher-item {
  display: flex;
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  transition: all 0.3s;
}

.teacher-item:active {
  background: #f9f9f9;
}

.teacher-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 16px;
  flex-shrink: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.teacher-info {
  flex: 1;
}

.teacher-name {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 6px;
}

.teacher-title {
  font-size: 14px;
  color: #ff6b9d;
  margin-bottom: 6px;
  font-weight: 500;
}

.teacher-experience {
  font-size: 13px;
  color: #999;
  margin-bottom: 8px;
}

.teacher-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 8px;
}

.skill-tag {
  padding: 4px 10px;
  background: #f0f0f0;
  color: #666;
  font-size: 11px;
  border-radius: 12px;
}

.teacher-stats {
  display: flex;
  gap: 16px;
  font-size: 12px;
  color: #999;
}

.stat {
  display: flex;
  align-items: center;
}

.teacher-arrow {
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #ccc;
  margin-left: 12px;
}
</style>

