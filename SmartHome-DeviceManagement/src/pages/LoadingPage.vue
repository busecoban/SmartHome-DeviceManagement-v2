<template>
  <div class="intro">
    <div class="logo-container">
      <img ref="logo" src="@/assets/icons/BIMO2.svg" alt="BIMO Logo" class="logo" />
      <span ref="logoText" class="logo-text">BIMO</span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

export default {
  name: 'IntroAnimation',
  setup() {
    const logo = ref(null)
    const logoText = ref(null)

    onMounted(() => {
      const tl = gsap.timeline()

      // 1. Fade-in effect
      tl.fromTo(logo.value, { opacity: 0 }, { opacity: 1, duration: 1 })

      // 2. Draw effect - Çizim animasyonu
      const paths = logo.value.querySelectorAll('path')
      paths.forEach((path, index) => {
        const length = path.getTotalLength()
        path.style.strokeDasharray = length
        path.style.strokeDashoffset = length
        path.style.fill = 'none'
        path.style.stroke = '#52afe6'
        path.style.strokeWidth = '2'

        tl.to(path, {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power2.out',
          delay: index * 0.2
        })
      })

      // 3. Scale and bounce effect
      tl.to(logo.value, {
        scale: 1.2,
        duration: 0.5,
        ease: 'bounce.out'
      })

      // 4. Text reveal effect
    })

    return {
      logo,
      logoText
    }
  }
}
</script>

<style scoped>
.intro {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.logo-container {
  text-align: center;
}

.logo {
  width: 540px;
  height: 540px;
  margin-bottom: 20px;
}

.logo-text {
  font-size: 24px;
  color: #333;
  opacity: 0;
}
</style>
