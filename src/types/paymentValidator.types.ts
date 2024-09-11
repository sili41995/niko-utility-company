import { IPaymentFormData } from './payment.types';

export type Date = Pick<IPaymentFormData, 'date'>;

export type Amount = Pick<IPaymentFormData, 'amount'>;

export type Name = Pick<IPaymentFormData, 'name'>;
