import AuthParams from './authParams';
import GeneralParams from './generalParams';

const enum ErrorMessages {
  // email
  emailReqErr = 'Поле Email має бути заповнене',
  emailRegExpErr = 'Поле Email повинно містити літери, цифри, крапку та символ @',
  // user
  loginReqErr = 'Поле Логін має бути заповнене',
  loginRegExpErr = 'Поле Логін не повинно містити пробілів',
  fullNameReqErr = 'Поле ПІБ має бути заповнене',
  passwordReqErr = 'Поле Пароль має бути заповнене',
  passwordMinLengthErr = `Мінімальна довжина паролю - ${AuthParams.passMinLength} символів`,
  passwordMaxLengthErr = `Максимальна довжина паролю - ${AuthParams.passMaxLength} символів`,
  // period
  periodIdReqErr = 'Поле Період має бути заповнене',
  toReqErr = 'Поле По має бути заповнене',
  fromReqErr = 'Поле З має бути заповнене',
  // tariff
  tariffPriceReqErr = 'Поле Тариф має бути заповнене',
  startReqErr = 'Поле Початок дії має бути заповнене',
  // subscriber account
  apartmentReqErr = 'Поле № квартири має бути заповнене',
  numberReqErr = 'Поле Абонентський рахунок має бути заповнене',
  periodReqErr = 'Поле Послуги надаються з має бути заповнене',
  surnameReqErr = 'Поле Прізвище має бути заповнене',
  nameReqErr = "Поле Ім'я має бути заповнене",
  middleNameReqErr = 'Поле По-батькові має бути заповнене',
  residentsReqErr = 'Поле Мешканців має бути заповнене',
  phoneReqErr = 'Поле Телефон має бути заповнене',
  phoneRegExpErr = 'Телефон повинен містити  цифри, а також може містити символи +, - та пробіли',
  isRemovalHouseholdWasteReqErr = 'Поле Вивезення побутових відходів має бути заповнене',
  isLivingApartmentReqErr = 'Поле Тип приміщення має бути заповнене',
  isEligibleForBenefitReqErr = 'Поле Має право на пільгу має бути заповнене',
  documentNameReqErr = 'Поле Документ має бути заповнене',
  contractNumberReqErr = 'Поле Договір № має бути заповнене',
  contractDateReqErr = 'Поле Від має бути заповнене',
  categoryReqErr = 'Поле Тип рахунку має бути заповнене',
  additionalPhoneReqErr = 'Поле Телефон додатковий має бути заповнене',
  additionalPhoneRegExpErr = 'Телефон додатковий повинен містити  цифри, а також може містити символи +, - та пробіли',
  // location
  streetIdReqErr = 'Поле Вулиця має бути заповнене',
  houseIdReqErr = 'Поле Будинок має бути заповнене',
  // payment
  paymentSourceNameReqErr = 'Поле Спосіб оплати має бути заповнене',
  amountReqErr = 'Поле Сума оплати має бути заповнене',
  // price adjustment
  priceAdjustmentPriceReqErr = 'Поле Сума має бути заповнене',
  // general settings
  mfiReqErr = 'Поле МФО має бути заповнене',
  mfiLengthErr = `Довжина МФО має бути ${GeneralParams.mfiLength} символів`,
  helpPhoneReqErr = 'Поле Телефони для довідок має бути заповнене',
  helpPhoneRegExpErr = 'Телефони для довідок повинен містити  цифри, а також може містити символи +, - та пробіли',
  currentAccountReqErr = 'Поле Розрахунковий рахунок має бути заповнене',
  currentAccountRegExpErr = 'Розрахунковий рахунок повинен починатись з символів UA та має містити 29 символів',
  adsInPaymentsReqErr = 'Поле Оголошення в платіжках має бути заповнене',
  // other
  dateReqErr = 'Поле Дата має бути заповнене',
  commentReqErr = 'Поле Коментар має бути заповнене',
  minDebtReqErr = 'Поле Мінімальний борг має бути заповнене',
  invalidDataErr = 'Невалідні дані',
  csvFileExtensionErr = 'Виберіть файл з розширенням .csv',
  // conflict
  duplicateDocumentErr = 'Такий документ вже існує',
  duplicatePeriodErr = 'Період вже існує',
  duplicateSubscriberAccountErr = 'Такий абонентський рахунок вже існує',
  duplicateContractErr = 'Такий контракт вже існує',
  // not found
  subscriberAccountNotFoundErr = 'Абонентський рахунок не знайдено',
}

export default ErrorMessages;
