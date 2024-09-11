import { PaymentSourceType } from '@/types/paymentSource.types';

const translatedPaymentSources: { [key in PaymentSourceType]: string } = {
  [PaymentSourceType.cash]: 'Каса',
  [PaymentSourceType.privatbank]: 'ПриватБанк',
  [PaymentSourceType.oshchadbank]: 'Ощадбанк',
  [PaymentSourceType.postage]: 'Пошта',
  [PaymentSourceType.ukrsibbank]: 'УкрСибБанк',
  [PaymentSourceType.benefits]: 'Компенсація пільг',
  [PaymentSourceType.adjustment]: 'Коригування',
  [PaymentSourceType.aval]: 'Аваль',
  [PaymentSourceType.ukrgasbank]: 'Укргаз',
  [PaymentSourceType.abank]: 'А-Банк',
};

export default translatedPaymentSources;
