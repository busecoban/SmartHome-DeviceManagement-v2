<template>
  <button :class="['ui-button', buttonSize, buttonType]" :disabled="disabled" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'UIButton',
  props: {
    type: {
      type: String,
      default: 'primary', // Varsayılan buton tipi
      validator: (value) => ['primary', 'secondary', 'danger', 'success'].includes(value)
    },
    size: {
      type: String,
      default: 'medium', // Varsayılan buton boyutu
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonType() {
      return `ui-button--${this.type}`
    },
    buttonSize() {
      return `ui-button--${this.size}`
    }
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    }
  }
}
</script>

<style scoped>
.ui-button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Buton Tipleri */
.ui-button--primary {
  background-color: #007bff;
  color: #fff;
}

.ui-button--secondary {
  background-color: #6c757d;
  color: #fff;
}

.ui-button--danger {
  background-color: #dc3545;
  color: #fff;
}

.ui-button--success {
  background-color: #28a745;
  color: #fff;
}

/* Buton Boyutları */
.ui-button--small {
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
}

.ui-button--medium {
  font-size: 1rem;
  padding: 0.5rem 1rem;
}

.ui-button--large {
  font-size: 1.2rem;
  padding: 0.75rem 1.5rem;
}

/* Disabled Durumu */
.ui-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
