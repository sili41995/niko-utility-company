export interface IPayment {
  id: number;
  amount: number;
  date: Date;
  periodId: number;
  subscriberAccountId: number;
  paymentSourceId: number;
}

export type Payments = IPayment[];

export type PaymentsDataFromCsv = string[][];

export interface IPaymentData
  extends Pick<IPayment, 'amount' | 'date' | 'subscriberAccountId'> {
  source: string;
}

export interface IPaymentFormData extends Pick<IPaymentData, 'source'> {
  amount: string;
  date: string;
}

export type PaymentDate = Pick<IPayment, 'date'>;

export type Amount = Pick<IPayment, 'amount'>;

export interface IConvertStringsToPaymentsBankProps {
  data: PaymentsDataFromCsv;
  source: PaymentSourceType;
}
