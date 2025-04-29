const form = document.querySelector('.form-request__filter');
const inputPhone = document.getElementById('phone');
const inputEmail = document.getElementById('email');

form.addEventListener('submit', (event) => {

  const isValidPhone = validatePhone(inputPhone); // Использование отдельной функции
  const isValidEmail = validateEmail(inputEmail); // Использование отдельной функции

  if (isValidPhone && isValidEmail) {
    form.submit();
  } else {
    event.preventDefault();
    clearError();
  }
});

form.addEventListener('click', (event) => {
  const target = event.target; // Элемент, на который кликнули

  // Проверяем, что кликнули *внутри* элемента form-request__form-group,
  // содержащего input с классом form-request__input
  const formGroup = target.closest('.form-request__form-group');
  if (formGroup && formGroup.querySelector('.form-request__input')) {

    const errorDiv = formGroup.querySelector('.error-message');

    if (errorDiv) {
      errorDiv.remove();
      formGroup.classList.remove('invalid');
    }
  }
});

// === Отображает сообщение об ошибке для поля ввода. ===

function displayError(inputElement, errorMessage) {
  const parentElement = inputElement.closest('.form-request__form-group');
  parentElement.classList.add('invalid');

  // Удаляем предыдущее сообщение об ошибке, если оно есть
  const existingErrorDiv = parentElement.querySelector('.error-message');
  if (existingErrorDiv) {
    existingErrorDiv.remove();
  }

  // Создаем и добавляем новое сообщение об ошибке
  const newErrorDiv = document.createElement('div');
  newErrorDiv.classList.add('error-message');
  newErrorDiv.textContent = errorMessage;
  parentElement.appendChild(newErrorDiv);
  inputElement.blur();
}

// === Убирает сообщение об ошибке и класс invalid с поля ввода ===

function clearError(inputElement) {
  const parentElement = inputElement.closest('.form-request__form-group');
  parentElement.classList.remove('invalid');

  const errorDiv = parentElement.querySelector('.error-message');
  if (errorDiv) {
    errorDiv.remove();
  }
}

// === Функции валидации поле email ===

function validateEmail(inputElement) {
  clearError(inputElement); // Сначала убираем старые ошибки

  const email = inputElement.value.trim(); // Получаем значение и убираем пробелы

  if (!email) {
    displayError(inputElement, inputElement.dataset.required); // Сообщение из data-required
    return false;
  }

  if (!email.includes('@')) {
    displayError(inputElement, inputElement.dataset.typeMismatch); // Сообщение из data-typeMismatch
    return false;
  }

  const [localPart, domainPart] = email.split('@');

  // Добавляем новую проверку на пропущенную точку
  if (!domainPart.includes('.')) {
    displayError(inputElement, inputElement.dataset.missingDot); // Сообщение из data-missing-dot
    return false;
  }

  const domainParts = domainPart.split('.');

  if (domainParts.length < 2) {
    displayError(inputElement, inputElement.dataset.patternMismatch); // Общая структура неверна
    return false;
  }

  // Проверяем символы в каждой части (латиница, цифры, символы, дефис)
  const allowedChars = '[a-zA-Z0-9._%+-]';
  const domainPartAllowedChars = '[a-zA-Z0-9-]';
  const tldAllowedChars = '[a-zA-Z0-9-]';

  const localPartPattern = new RegExp(`^${allowedChars}*$`);
  const domainPartPattern = new RegExp(`^${domainPartAllowedChars}*$`);
  const tldPattern = new RegExp(`^${tldAllowedChars}{2,}$`);

  if (!localPartPattern.test(localPart)) {
    displayError(inputElement, inputElement.dataset.patternMismatch); // Недопустимые символы в localPart
    return false;
  }

  if (!domainParts.slice(0, -1).every((part) => domainPartPattern.test(part))) {
    displayError(inputElement, inputElement.dataset.patternMismatch); // Недопустимые символы в domainPart
    return false;
  }

  if (!tldPattern.test(domainParts[domainParts.length - 1])) {
    displayError(inputElement, inputElement.dataset.patternMismatch); // Недопустимые символы в TLD
    return false;
  }

  return true; // Email прошел все проверки
}

// === Функции валидации поле phone ===

function validatePhone(inputElement) {
  clearError(inputElement); // Сначала убираем старые ошибки

  if (!inputElement.validity.valid) {
    if (!inputElement.value.trim()) {
      displayError(inputElement, inputElement.dataset.required); // Сообщение из data-required
      return false;
    } else if (inputElement.validity.patternMismatch) {
      displayError(inputElement, inputElement.dataset.patternMismatch); // Сообщение из data-patternMismatch
      return false;
    }
  }

  return true; // Телефон прошел все проверки
}

// const form = document.querySelector('.form-request__filter');
// const inputPhone = document.getElementById('phone');
// const inputEmail = document.getElementById('email');

// form.addEventListener('submit', (event) => {
//   const isValidPhone = validateField(inputPhone);
//   const isValidEmail = validateField(inputEmail);

//   if (isValidPhone && isValidEmail) {
//     form.submit();
//   } else {
//     event.preventDefault();
//     clearErrors();
//   }
// });

// function validateField(inputElement) {
//   const parentElement = inputElement.closest('.form-request__form-group');

//   if (!inputElement.validity.valid) {
//     parentElement.classList.add('invalid');

//     let errorMessage = '';
//     if (!inputElement.value.trim()) {
//       errorMessage = inputElement.dataset.required;
//     } else if (inputElement.validity.typeMismatch) {
//       errorMessage = inputElement.dataset.typeMismatch;
//     } else if (inputElement.validity.patternMismatch) {
//       errorMessage = inputElement.dataset.patternMismatch;
//     }

//     const errorDiv = document.createElement('div');
//     errorDiv.classList.add('error-message');
//     errorDiv.textContent = errorMessage;
//     parentElement.appendChild(errorDiv);
//   }

//   return inputElement.validity.valid;
// }

// function clearErrors() {
//   const errorMessages = document.querySelectorAll('.error-message');
//   errorMessages.forEach((error) => error.remove());

//   const invalidInputs = document.querySelectorAll('.form-request__form-grou.invalid');
//   invalidInputs.forEach((input) => input.classList.remove('invalid'));
// }
