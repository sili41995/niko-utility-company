import AuthParams from './authParams';

const enum Messages {
  greetings = 'Ласкаво просимо!',
  signInSuccess = 'Привіт!',
  usernameReqErr = 'Поле username має бути заповнене',
  passReqErr = 'Поле password має бути заповнене',
  passMinLengthErr = `Мінімальна довжина паролю - ${AuthParams.passMinLength} символів`,
  passMaxLengthErr = `Максимальна довжина паролю - ${AuthParams.passMaxLength} символів`,
}

export default Messages;
