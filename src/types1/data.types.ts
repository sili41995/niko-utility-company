import { ServiceCategories } from '@/constants';
import { ISubscriberAccount } from './subscriberAccount.types';

export interface IService {
  id: number;
  name: string;
  category: ServiceCategories;
  isActive: boolean;
}

export type Services = IService[];

export interface IGetUpdatedUsersProps {
  users: Users;
  updatedUser: UserData;
}

export interface IGeneralSettingsFormData
  extends Omit<IGeneralSettings, 'id' | 'mfi'> {
  mfi: string;
  adsInPayments: string;
}

export interface IGeneralSettingsData extends Omit<IGeneralSettings, 'id'> {}

export interface IGetGeneralSettingsFormDefaultValues
  extends Omit<IGeneralSettingsData, 'mfi'> {
  mfi: string;
}

export interface IHouse {
  id: number;
  number: string;
  street: number;
}

export type Houses = IHouse[];

export interface ISelectData {
  value: string;
  title: string;
}

export type SelectData = ISelectData[];

export interface IDocument {
  id: number;
  name: string;
  comment: string;
  createdAt: Date;
}

export type Documents = IDocument[];

export interface IPeriod {
  id: number;
  isCurrentPeriod: boolean;
  start: Date;
  payments: Payments;
}

export type Periods = IPeriod[];

export interface IPriceAdjustment {
  id: number;
  price: number;
  date: Date;
  comment: string;
  subscriberAccountId: number;
  subscriberAccount: ISubscriberAccount;
  periodId: number;
  period: IPeriod;
}

export type PriceAdjustments = IPriceAdjustment[];

export type NewPayments = NewPaymentData[];

export type PaymentSource = Pick<IPayment, 'source'>;

export interface IHousesLocationData {
  streetId: string;
  houseId: string;
}
