<template>
  <div class="icon-svg-c" :class="`icon-size-${size}`">
    <img :src="iconContent" :alt="`icon-${name}`" />
  </div>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true,
      default: 'search'
    },
    size: {
      type: String,
      default: 'm',
      validator: (value) => ['s', 'm', 'l'].includes(value)
    }
  },
  computed: {
    iconContent() {
      try {
        // `import.meta.url` kullanarak SVG dosyasının yolunu oluşturma
        const iconUrl = new URL(`../assets/icons/${this.name}.svg`, import.meta.url).href
        console.log('SVG URL:', iconUrl) // Dosya yolunu kontrol etmek için loglayın
        return iconUrl
      } catch (error) {
        console.error('SVG dosyası yüklenemedi:', error)
        return '' // Hata durumunda boş bir string döndürme
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-svg-c {
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &.icon-size-s {
    width: 32px;
    height: 32px;
  }
  &.icon-size-m {
    width: 42px;
    height: 42px;
  }
  &.icon-size-l {
    width: 50px;
    height: 50px;
  }
  &.icon-size-Xl {
    width: 90px;
    height: 90px;
  }

  img {
    width: 100%; /* Konteyner boyutuna tam uyması için */
    height: 100%; /* Konteyner boyutuna tam uyması için */
    display: block;
  }
}
</style>
