import { SectorTypes, ServiceCategories, PaymentSources } from '@/constants';
import { ISubscriberAccount } from './subscriberAccount.types';

export interface IService {
  id: number;
  name: string;
  category: ServiceCategories;
  isActive: boolean;
}

export type Services = IService[];

export interface IUser {
  id: number;
  name: string;
  login: string;
  email: string;
  password: string;
  token: string | null;
  fullAccess: boolean;
  houses: boolean;
  subscribers: boolean;
  accounting: boolean;
  documents: boolean;
  counters: boolean;
  oneOffJobs: boolean;
  settings: boolean;
}

export type NewUser = Pick<IUser, 'login' | 'name' | 'password' | 'email'>;

export type UserData = Omit<IUser, 'password'>;

export type Password = Pick<IUser, 'password'>;

export type Login = Pick<IUser, 'login'>;

export type UserName = Pick<IUser, 'name'>;

export type UserEmail = Pick<IUser, 'email'>;

export type Credentials = Pick<IUser, 'login' | 'password'>;

export type Users = UserData[];

export interface IGetUpdatedUsersProps {
  users: Users;
  updatedUser: UserData;
}

export interface IGeneralSettings {
  [key: string]: string | number;
  id: number;
  currentAccount: string;
  mfi: string;
  helpPhone: string;
  adsInPayments: string;
}

export type IGetGeneralSettingsFormDefaultValues = Pick<
  IGeneralSettings,
  'adsInPayments' | 'currentAccount' | 'helpPhone' | 'mfi'
>;

export type CurrentAccount = Pick<IGeneralSettings, 'currentAccount'>;

export type MFI = Pick<IGeneralSettings, 'mfi'>;

export type HelpPhone = Pick<IGeneralSettings, 'helpPhone'>;

export type AdsInPayments = Pick<IGeneralSettings, 'adsInPayments'>;

export interface IStreet {
  id: number;
  name: string;
  type: string;
}

export type Streets = IStreet[];

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

export interface ITariff {
  id: number;
  tariff: number;
  sector: SectorTypes;
  start: Date;
}

export type Tariff = Pick<ITariff, 'tariff'>;

export type Start = Pick<ITariff, 'start'>;

export type Tariffs = ITariff[];

export type NewTariff = Omit<ITariff, 'id'>;

export interface INewTariffFormData
  extends Omit<NewTariff, 'tariff' | 'start' | 'sector'> {
  tariff: string;
  start: string;
}

export interface IDocument {
  id: number;
  document: string;
  comment: string;
  createdAt: Date;
}

export type Documents = IDocument[];

export interface IStatistics {
  id: number;
  subscriberAccounts: number;
  residents: number;
  balanceStart: number;
  accrued: number;
  penalty: number;
  adjustment: number;
  benefits: number;
  subsidies: number;
  balanceEnd: number;
  periodId: number;
  period: IPeriod;
}

export interface IPeriod {
  id: number;
  isCurrentPeriod: boolean;
  start: Date;
  statistics: IStatistics;
}

export type Periods = IPeriod[];

export interface IAccrualAdjustment {
  id: number;
  price: number;
  date: Date;
  comment: string;
  subscriberAccountId: number;
  subscriberAccount: ISubscriberAccount;
}

export type AccrualAdjustmentData = Pick<
  IAccrualAdjustment,
  'price' | 'date' | 'comment' | 'subscriberAccountId'
>;

export interface IAccrualAdjustmentFormData
  extends Pick<IAccrualAdjustment, 'comment'> {
  date: string;
  price: string;
}

export type Price = Pick<IAccrualAdjustment, 'price'>;

export type AccrualAdjustmentComment = Pick<IAccrualAdjustment, 'comment'>;

export type AccrualAdjustmentDate = Pick<IAccrualAdjustment, 'date'>;

export interface IPayment {
  id: number;
  amount: number;
  source: PaymentSources;
  date: Date;
  period: IPeriod;
  subscriberAccountId: number;
  subscriberAccount: ISubscriberAccount;
}

export type Payments = IPayment[];

export type NewPaymentData = Pick<
  IPayment,
  'amount' | 'source' | 'date' | 'subscriberAccountId'
>;

export interface INewPaymentFormData extends Pick<IPayment, 'source'> {
  amount: string;
  date: string;
}

export type Amount = Pick<IPayment, 'amount'>;

export type PaymentSource = Pick<IPayment, 'source'>;

export type PaymentDate = Pick<IPayment, 'date'>;
