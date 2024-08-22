<template>
  <div class="ui-input-c">
    <div
      class="input-wrapper"
      :class="[
        { small: size === 'small', medium: size === 'medium', large: size === 'large' },
        { 'with-icon': computedIcon, 'without-icon': !computedIcon },
        { disabled: disabled }
      ]"
      :style="{ borderColor: borderColor }"
    >
      <div v-if="computedIconRight" class="icon-right-wrapper" :class="{ disabled: disabled }">
        <IconSvg
          :name="computedIconRight"
          :size="iconSize"
          class="icon"
          :class="{ disabled: disabled }"
        />
      </div>
      <div v-if="computedIcon" class="icon-wrapper" :class="{ disabled: disabled }">
        <IconSvg
          :name="computedIcon"
          :size="iconSize"
          class="icon"
          :class="{ disabled: disabled }"
        />
      </div>

      <input
        :disabled="disabled"
        :type="inputType"
        :id="id"
        :value="modelValue"
        @input="onInput"
        @focus="isFocused = true"
        @blur="onBlur"
        :class="['input', inputSize, { disabled: disabled }]"
        required
        placeholder=" "
      />
      <label :for="id" class="user-label">{{ label }}</label>
    </div>

    <p v-if="errorMessage" class="ui-input-error">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
import IconSvg from '../components/IconSvg.vue'

export default {
  name: 'UIInput',
  components: {
    IconSvg
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
    },
    disabled: {
      type: Boolean,
      default: false
    },
    iconRight: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
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
    computedIconRight() {
      if (this.iconRight) return this.iconRight.trim() ? this.iconRight : ''
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
    inputType() {
      return this.type === 'password' ? 'text' : this.type
    },
    borderColor() {
      return this.color
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

  .icon-right-wrapper {
    display: flex;
    position: absolute;
    right: 8px; /* İkon için sağa yer açmak */
    top: 50%;
    transform: translateY(-50%);
    .icon {
      cursor: pointer;
      &.disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }

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
    border: 1.5px solid #666;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    transition: border-color 150ms ease-in-out;

    &.with-icon .input {
      padding-left: 3rem; /* İkon için solda daha fazla yer açmak */
    }

    &.with-icon-right .input {
      padding-right: 3rem; /* Sağda ikon varsa sağda yer açmak */
    }

    &.without-icon .input {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    &.disabled {
      background-color: #f1f1f1;
      color: #666;
      cursor: not-allowed;
      box-shadow: none;
      border-color: #ddd;
    }

    .icon-wrapper {
      display: flex;
      position: absolute;
      left: 8px; /* İkon için solda yer açmak */
      top: 50%;
      transform: translateY(-50%);
      &.disabled .icon {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .icon {
        cursor: pointer;

        &.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
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
      background: transparent;

      &.disabled {
        background-color: #f1f1f1;
        color: #666;
        cursor: not-allowed;
      }
    }

    .user-label {
      position: absolute;
      bottom: 24px;
      left: 1rem;
      transform: translateY(1rem);
      transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
      background-color: transparent;
      padding: 0 0.2em;
      color: gray;
      pointer-events: none;

      /* Eğer ikon varsa, label'ı biraz sağa kaydır */
      .with-icon & {
        left: 2.5rem;
      }
    }

    &:focus-within {
      border-color: #1a73e8;
    }

    .input:focus ~ .user-label,
    .input:not(:placeholder-shown) ~ .user-label {
      transform: translateY(-0.7rem) scale(0.75);
      padding: 0 0.2em;
      color: #2196f3;
      background: white;
    }
  }

  .ui-input-error {
    color: #ff0000;
    font-size: 0.8rem;
  }
}
</style>
