// Email doğrulama helper'ı
export function validateEmail(email) {
  if (!email) {
    return 'Email is required'
  } else if (!email.isValidEmail()) {
    return 'Please enter a valid email address'
  }
  return ''
}

// Şifre doğrulama helper'ı
export function validatePassword(password) {
  if (!password) {
    return 'Password is required'
  } else if (!password.isValidPassword()) {
    return 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character'
  }
  return ''
}
