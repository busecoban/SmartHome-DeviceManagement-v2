<template>
  <div class="ui-input-c">
    <div
      class="input-wrapper"
      :class="[
        { small: size === 'small', medium: size === 'medium', large: size === 'large' },
        { 'with-icon': computedIcon, 'without-icon': !computedIcon }
      ]"
    >
      <div v-if="computedIcon" class="icon-wrapper">
        <SvgIcon :name="computedIcon" :size="iconSize" class="icon"></SvgIcon>
      </div>
      <input
        :type="type"
        :id="id"
        :value="modelValue"
        @input="onInput"
        @focus="isFocused = true"
        @blur="onBlur"
        :class="['input', inputSize]"
        required
      />
    </div>

    <label :for="id" class="user-label">{{ label }}</label>
    <p v-if="errorMessage" class="ui-input-error">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
import SvgIcon from '../components/IconSvg.vue'

export default {
  name: 'UIInput',
  components: {
    SvgIcon
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    id: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    errorMessage: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'small',
      validator: (value) => ['small', 'medium', 'large'].includes(String(value))
    },
    icon: {
      type: String
    }
  },
  data() {
    return {
      isFocused: false
    }
  },
  computed: {
    computedIcon() {
      if (this.type === 'email') return 'mail'
      if (this.type === 'password') return 'lock'
      if (this.icon) return this.icon.trim() ? this.icon : 'search'
      return ''
    },
    inputSize() {
      return `ui-input--${this.size}`
    },
    iconSize() {
      if (this.size === 'small') return 's'
      if (this.size === 'medium') return 'm'
      if (this.size === 'large') return 'l'
      return 'm'
    },
    iconPosition() {
      const baseTop = 8
      const iconHeight = this.size === 'small' ? 2 : this.size === 'medium' ? 14 : 24
      return `${baseTop - iconHeight / 2}px`
    }
  },
  methods: {
    onInput(event: InputEvent) {
      this.$emit('update:modelValue', (event.target as HTMLInputElement).value)
    },
    onBlur() {
      this.isFocused = false
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-input-c {
  user-select: none;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  padding: 0.5rem;

  .input-wrapper {
    cursor: pointer;
    height: 3rem;
    &.small {
      width: 240px;
      .input {
        font-size: 0.8rem;
      }
    }
    &.medium {
      width: 320px;
      .input {
        font-size: 1rem;
      }
    }
    &.large {
      width: 400px;
      .input {
        font-size: 1.2rem;
      }
    }
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid #666;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

    &.with-icon .input {
      margin-inline-start: 24px;
    }

    &.without-icon .input {
      margin-inline-start: 0;
    }

    .icon-wrapper {
      display: flex;
      position: absolute;
      left: 2px;
      top: v-bind(iconPosition);

      .icon {
        cursor: pointer;
      }
    }

    .input {
      height: 2rem;
      font-size: 0.8rem;
      outline: none;
      border: none;
      border-radius: 8px;
      padding: 1rem;
      width: 100%;
    }
  }
}
</style>
