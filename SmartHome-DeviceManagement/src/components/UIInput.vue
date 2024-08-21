<template>
  <div class="ui-input-c">
    <input
      :type="type"
      :id="id"
      :value="modelValue"
      :class="['input', inputSize]"
      @input="onInput"
      @focus="isFocused = true"
      @blur="onBlur"
      required
    />
    <label :for="id" class="user-label">{{ label }}</label>
    <p v-if="errorMessage" class="ui-input-error">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
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
    }
  },
  data() {
    return {
      isFocused: false
    }
  },
  computed: {
    inputSize() {
      return `ui-input--${this.size}`
    }
  },
  methods: {
    onInput(event: InputEvent) {
      if (event.target) {
        this.$emit('update:modelValue', (event.target as HTMLInputElement).value)
      }
    },
    onBlur() {
      this.isFocused = false
    }
  }
}
</script>

<style scoped>
.ui-input-c {
  position: relative;
  margin-bottom: 0.8rem;
}

.input {
  border: solid 1.5px #9e9e9e;
  border-radius: 1rem;
  background: none;
  padding: 1rem;
  font-size: 1rem;
  color: black;
  transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
}

.ui-input--small {
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  width: 16rem;
}

.ui-input--medium {
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  width: 18rem;
}

.ui-input--large {
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  width: 20rem;
}

.input:focus,
.input:valid {
  outline: none;
  border: 1.5px solid #1a73e8;
}

.user-label {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: grey;
  pointer-events: none;
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.input:focus ~ .user-label,
.input:valid ~ .user-label {
  top: -0.2rem; /* Label'ın tam olarak yukarı çıkmasını sağlar */
  transform: translateY(-50%) scale(0.8); /* Yukarı çıkarken küçültür */
  background: white;
  padding: 0 0.2rem; /* Label etrafında boşluk bırakır */
  color: #2196f3;
}
</style>
