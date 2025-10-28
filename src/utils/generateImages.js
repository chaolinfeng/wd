// 生成舞蹈相关的SVG图片

export const generateDanceImage = (type, width = 600, height = 400) => {
  const images = {
    jazz: {
      gradient: 'linear-gradient(135deg, #ff6b9d 0%, #ff8eb8 100%)',
      icon: '💃',
      keywords: 'jazz,dance,performance'
    },
    hiphop: {
      gradient: 'linear-gradient(135deg, #42a5f5 0%, #64b5f6 100%)',
      icon: '🎤',
      keywords: 'hiphop,dance,street'
    },
    chinese: {
      gradient: 'linear-gradient(135deg, #66bb6a 0%, #81c784 100%)',
      icon: '🦋',
      keywords: 'chinese,dance,traditional'
    },
    latin: {
      gradient: 'linear-gradient(135deg, #ffa726 0%, #ffb74d 100%)',
      icon: '💃',
      keywords: 'latin,dance,ballroom'
    },
    ballet: {
      gradient: 'linear-gradient(135deg, #ab47bc 0%, #ba68c8 100%)',
      icon: '🩰',
      keywords: 'ballet,dance,classical'
    },
    default: {
      gradient: 'linear-gradient(135deg, #ff6b9d 0%, #ff8eb8 100%)',
      icon: '💃',
      keywords: 'dance,performance'
    }
  }

  const config = images[type] || images.default
  
  // 使用 Unsplash 生成舞蹈相关图片
  return `url(https://source.unsplash.com/${width}x${height}/?${config.keywords}&sig=${Date.now()})`
}

export const generateTeacherAvatar = (gender = 'female', index = 1) => {
  // 使用 Unsplash 生成舞蹈老师相关的头像
  const keywords = gender === 'female' ? 'dance,teacher,instructor,female' : 'dance,teacher,instructor,male'
  return `url(https://source.unsplash.com/200x200/?${keywords}&sig=${index})`
}

export const getDanceBannerImage = (type = 'jazz') => {
  const banners = {
    jazz: {
      keywords: 'jazz,dance,performance'
    },
    hiphop: {
      keywords: 'hiphop,dance,street'
    },
    ballet: {
      keywords: 'ballet,dance,classical'
    },
    latin: {
      keywords: 'latin,dance,ballroom'
    }
  }

  const banner = banners[type] || banners.jazz
  
  return `url(https://source.unsplash.com/800x400/?${banner.keywords}&sig=${Date.now()})`
}

