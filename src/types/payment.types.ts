// import { PaymentSourceType } from './paymentSource.types';
// import { IPeriod } from './period.types';
// import { ISubscriberAccount } from './subscriberAccount.types';

export interface IPayment {
  id: number;
  amount: number;
  date: Date;
  periodId: number;
  subscriberAccountId: number;
  paymentSourceId: number;
}

// export type Payments = IPayment[];

// export interface IFullPayment extends IPayment {
//   paymentSource: PaymentSourceType;
//   subscriberAccount: ISubscriberAccount;
//   period: IPeriod;
// }

// export type FullPayments = IFullPayment[];

// export type PaymentsDataFromCsv = string[][];

export interface IPaymentData
  extends Pick<IPayment, 'amount' | 'date' | 'subscriberAccountId'> {
  source: string;
}

// export type PaymentsData = IPaymentData[];

export interface IPaymentFormData extends Pick<IPaymentData, 'source'> {
  amount: string;
  date: string;
}

// export type PaymentDate = Pick<IPayment, 'date'>;

// export type Amount = Pick<IPayment, 'amount'>;

// export interface IConvertStringsToPaymentsBankProps {
//   data: PaymentsDataFromCsv;
//   source: PaymentSourceType;
// }

// export interface IGetNewPaymentDataProps {
//   data: IPaymentFormData;
//   id: number;
// }
