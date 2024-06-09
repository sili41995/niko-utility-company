import AuthParams from './authParams';

const enum Messages {
  greetings = 'Ласкаво просимо!',
  signInSuccess = 'Привіт!',
  addUser = 'Додати користувача',
  loginReqErr = 'Поле Логін має бути заповнене',
  nameReqErr = 'Поле ПІБ має бути заповнене',
  emailReqErr = 'Поле Email має бути заповнене',
  emailRegExpErr = 'Поле Email повинно містити літери, цифри, крапку та символ @',
  passReqErr = 'Поле Пароль має бути заповнене',
  passMinLengthErr = `Мінімальна довжина паролю - ${AuthParams.passMinLength} символів`,
  passMaxLengthErr = `Максимальна довжина паролю - ${AuthParams.passMaxLength} символів`,
  userAddSuccess = 'Користувача успішно додано',
  dataUpdateSuccess = 'Дані успішно оновлені',
}

export default Messages;
