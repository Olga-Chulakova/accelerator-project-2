const form = document.querySelector('.form-request__filter');
const inputPhone = document.getElementById('phone');
const inputEmail = document.getElementById('email');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isPhoneValid = validatePhone(inputPhone);
  const isEmailValid = validateEmail(inputEmail);

  if (isPhoneValid && isEmailValid) {
    form.submit();
  }
});

function validatePhone(inputElement) {
  clearError(inputElement);

  const value = inputElement.value;

  if (value.trim() === '') {
    showError(inputElement, inputElement.dataset.required || 'Заполните поле');
    return false;
  }

  const hasLetters = /[^\d\s()+\-]/.test(value);
  if (hasLetters) {
    showError(inputElement, inputElement.dataset.patternMismatch || 'Введите только цифры');
    return false;
  }

  if (!inputElement.checkValidity()) {
    showError(inputElement, inputElement.dataset.patternPhoneMessage || 'Неверный формат телефона');
    return false;
  }

  return true;
}

function validateEmail(inputElement) {
  clearError(inputElement);

  const email = inputElement.value.trim();

  if (!email) {
    showError(inputElement, inputElement.dataset.required || 'Заполните поле');
    return false;
  }

  if (!email.includes('@')) {
    showError(inputElement, inputElement.dataset.patternMismatch || 'Неверный формат email');
    return false;
  }

  const parts = email.split('@');

  if (parts.length !== 2) {
    showError(inputElement, inputElement.dataset.patternMismatch || 'Неверный формат email');
    return false;
  }

  const [localPart, domainPart] = parts;


  if (!domainPart.includes('.')) {
    showError(inputElement, inputElement.dataset.patternMismatch || 'Неверный формат email');
    return false;
  }


  const emailPattern = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Zа-яА-Я0-9-]+\.)+[a-zA-Zа-яА-Я]{2,}))$/);

  if (!emailPattern.test(email)) {
    showError(inputElement, inputElement.dataset.patternMismatch || 'Неверный формат email');
    return false;
  }

  return true;
}

function showError(inputElement, message) {
  const formGroup = inputElement.closest('.form-request__form-group');
  formGroup.classList.add('invalid');
  inputElement.setCustomValidity(message);
  inputElement.reportValidity();
}

function clearError(inputElement) {
  const formGroup = inputElement.closest('.form-request__form-group');
  formGroup.classList.remove('invalid');
  inputElement.setCustomValidity(' ');
}
