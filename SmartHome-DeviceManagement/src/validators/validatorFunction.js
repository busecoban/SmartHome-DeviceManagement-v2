// Email doğrulama fonksiyonu
String.prototype.isValidEmail = function () {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  return emailPattern.test(this)
}

// Şifre doğrulama fonksiyonu
String.prototype.isValidPassword = function () {
  // Şifrenin en az 8 karakter uzunluğunda olması, bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermesi gerekiyor
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  return passwordPattern.test(this)
}
