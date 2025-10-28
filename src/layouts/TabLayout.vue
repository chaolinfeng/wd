<template>
  <div class="tab-layout">
    <div class="tab-content">
      <router-view />
    </div>
    <div class="tab-bar">
      <div 
        class="tab-item" 
        :class="{ active: currentTab === 'home' }"
        @click="switchTab('home')"
      >
        <div class="tab-icon">🏠</div>
        <div class="tab-label">首页</div>
      </div>
      <div 
        class="tab-item" 
        :class="{ active: currentTab === 'booking' }"
        @click="switchTab('booking')"
      >
        <div class="tab-icon">📅</div>
        <div class="tab-label">约课</div>
      </div>
      <div 
        class="tab-item" 
        :class="{ active: currentTab === 'booked' }"
        @click="switchTab('booked')"
      >
        <div class="tab-icon">✅</div>
        <div class="tab-label">已约</div>
      </div>
      <div 
        class="tab-item" 
        :class="{ active: currentTab === 'profile' }"
        @click="switchTab('profile')"
      >
        <div class="tab-icon">👤</div>
        <div class="tab-label">个人</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const currentTab = ref('home')

const switchTab = (tabName) => {
  currentTab.value = tabName
  router.push({ name: tabName })
}

watch(() => route.name, (newName) => {
  if (newName) {
    currentTab.value = newName
  }
}, { immediate: true })
</script>

<style scoped>
.tab-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
}

.tab-content {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 60px;
  margin: 0;
  padding-top: 0;
}

.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #fff;
  display: flex;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  z-index: 100;
}

.tab-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
}

.tab-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.tab-label {
  font-size: 12px;
  color: #999;
  transition: color 0.3s;
}

.tab-item.active .tab-label {
  color: #ff6b9d;
  font-weight: 500;
}
</style>
