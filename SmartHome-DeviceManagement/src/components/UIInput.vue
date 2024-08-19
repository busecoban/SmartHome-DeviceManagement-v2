<template>
  <div class="ui-input-c">
    <label v-if="label" :for="id" class="ui-input-label">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      :class="['ui-input', inputSize]"
      @input="onInput"
      @blur="validate"
    />
    <p v-if="errorMessage" class="ui-input-error">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
import { validateEmail, validatePassword } from '@/validators/validatorHelper.js'

export default {
  name: 'UIInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    id: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
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
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    }
  },
  computed: {
    inputSize() {
      return `ui-input--${this.size}`
    }
  },
  methods: {
    onInput(event) {
      this.$emit('update:modelValue', event.target.value)
    },
    validate() {
      let error = ''
      if (this.type === 'email') {
        error = validateEmail(this.modelValue)
      } else if (this.type === 'password') {
        error = validatePassword(this.modelValue)
      }

      if (error) {
        this.$emit('update:errorMessage', error)
      } else {
        this.$emit('update:errorMessage', '')
      }
    }
  }
}
</script>

<style scoped>
.ui-input-c {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.ui-input-label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.ui-input {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease;
}

.ui-input:focus {
  border-color: #007bff;
  outline: none;
}

.ui-input--small {
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
}

.ui-input--medium {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

.ui-input--large {
  padding: 0.75rem 1.5rem;
  font-size: 1.2rem;
}

.ui-input-error {
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}
</style>
