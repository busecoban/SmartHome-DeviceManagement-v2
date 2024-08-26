<template>
  <button
    :class="[
      'ui-button',
      sizeClass,
      colorClass,
      { 'is-disabled': disabled },
      { 'with-icon': icon }
    ]"
    :disabled="disabled"
    @click="onClick"
  >
    <div v-if="icon" class="icon-wrapper">
      <IconSvg :name="icon" :size="iconSize" />
    </div>
    <span class="button-label">{{ label }}</span>
  </button>
</template>

<script lang="ts">
import IconSvg from '../components/IconSvg.vue'

export default {
  name: 'UIButton',
  components: {
    IconSvg
  },
  props: {
    label: {
      type: String,
      default: 'Button'
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(String(value))
    },
    color: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'danger', 'success'].includes(String(value))
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    sizeClass() {
      return `ui-button--${this.size}`
    },
    colorClass() {
      return this.disabled ? 'ui-button--disabled' : `ui-button--${this.color}`
    },
    iconSize() {
      return this.size === 'small' ? 's' : this.size === 'large' ? 'l' : 'm'
    }
  },
  methods: {
    onClick(event: Event) {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition:
    transform 0.3s ease,
    background-size 0.3s ease;
  background-size: 200% 200%;
  color: #fff;
  border: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  min-width: 120px;
  padding: 0.5rem 1rem;
  margin: 10px;
  overflow: hidden;

  &--small {
    font-size: 0.85rem;
    width: 120px;
    height: 2rem;
  }

  &--medium {
    font-size: 1rem;
    width: 160px;
    height: 2rem;
  }

  &--large {
    font-size: 1.2rem;
    width: 200px;
    height: 2rem;
  }

  &:hover {
    transform: scale(1.1); /* Daha belirgin bir büyüme efekti */
    background-position: 100% 0;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Daha güçlü bir gölge efekti */
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent 70%);
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.5s ease;
    pointer-events: none;
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(1);
  }

  &.ui-button--primary {
    background: linear-gradient(135deg, #1a73e8, #4285f4, #3367d6, #1a73e8);
    &:hover {
      background: linear-gradient(135deg, #1665c1, #1a73e8, #1459a3, #4285f4);
    }
  }

  &.ui-button--secondary {
    background: linear-gradient(135deg, #6c757d, #5a6268, #4e555b, #343a40);
    &:hover {
      background: linear-gradient(135deg, #5a6268, #4e555b, #343a40, #6c757d);
    }
  }

  &.ui-button--danger {
    background: linear-gradient(135deg, #dc3545, #c82333, #a71d2a, #721c24);
    &:hover {
      background: linear-gradient(135deg, #c82333, #a71d2a, #721c24, #dc3545);
    }
  }

  &.ui-button--success {
    background: linear-gradient(135deg, #28a745, #218838, #1e7e34, #155724);
    &:hover {
      background: linear-gradient(135deg, #218838, #1e7e34, #155724, #28a745);
    }
  }

  &.ui-button--disabled {
    background-color: #f0f0f0;
    color: #999;
    cursor: not-allowed;
    pointer-events: none;
  }

  .icon-wrapper {
    display: flex;
    margin-right: 0.5rem;
    justify-content: center;
    align-items: center;
  }

  .button-label {
    white-space: nowrap;
  }
}
</style>
