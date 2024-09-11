import { IPaymentSource, PaymentSourceType } from './paymentSource.types';
import { IPeriod } from './period.types';
import { ISubscriberAccount } from './subscriberAccount.types';

export interface IPayment {
  id: number;
  amount: number;
  date: Date;
  periodId: number;
  subscriberAccountId: number;
  paymentSourceId: number;
}

export type Payments = IPayment[];

export interface IFullPayment extends IPayment {
  paymentSource: IPaymentSource;
  subscriberAccount: ISubscriberAccount;
  period: IPeriod;
}

export type FullPayments = IFullPayment[];

export type PaymentsDataFromCsv = string[][];

export interface IPaymentData
  extends Pick<IPayment, 'amount' | 'date' | 'subscriberAccountId'> {
  name: PaymentSourceType;
}

export type PaymentsData = IPaymentData[];

export interface IPaymentFormData extends Pick<IPaymentData, 'name'> {
  amount: string;
  date: string;
}

export interface IConvertStringsToPaymentsBankProps {
  data: PaymentsDataFromCsv;
  name: PaymentSourceType;
}

export interface IGetNewPaymentDataProps {
  data: IPaymentFormData;
  id: number;
}
