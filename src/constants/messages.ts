import AuthParams from './authParams';
import GeneralParams from './generalParams';

const enum Messages {
  greetings = 'Ласкаво просимо!',
  signInSuccess = 'Привіт!',
  addUser = 'Додати користувача',
  loginReqErr = 'Поле Логін має бути заповнене',
  nameReqErr = 'Поле ПІБ має бути заповнене',
  emailReqErr = 'Поле Email має бути заповнене',
  emailRegExpErr = 'Поле Email повинно містити літери, цифри, крапку та символ @',
  helpPhoneReqErr = 'Поле Телефони для довідок має бути заповнене',
  helpPhoneRegExpErr = 'Телефони для довідок повинен містити  цифри, а також може містити символи - та пробіли',
  passReqErr = 'Поле Пароль має бути заповнене',
  passMinLengthErr = `Мінімальна довжина паролю - ${AuthParams.passMinLength} символів`,
  passMaxLengthErr = `Максимальна довжина паролю - ${AuthParams.passMaxLength} символів`,
  userAddSuccess = 'Користувача успішно додано',
  dataUpdateSuccess = 'Дані успішно оновлені',
  mfiReqErr = 'Поле МФО має бути заповнене',
  mfiLengthErr = `Мінімальна довжина МФО - ${GeneralParams.mfiLength} символів`,
  currentAccountReqErr = 'Поле Розрахунковий рахунок має бути заповнене',
  currentAccountRegExpErr = 'Розрахунковий рахунок повинен починатись з символів UA та має містити 29 символів',
  generalSettingsUpdateSuccess = 'Загальні налаштування успішно оновлені',
}

export default Messages;
