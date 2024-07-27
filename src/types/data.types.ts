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
}

export type PriceAdjustments = IPriceAdjustment[];

export type PriceAdjustmentData = Pick<
  IPriceAdjustment,
  'price' | 'date' | 'comment' | 'subscriberAccountId'
>;

export interface IPriceAdjustmentFormData
  extends Pick<IPriceAdjustment, 'comment'> {
  date: string;
  price: string;
}

export type Price = Pick<IPriceAdjustment, 'price'>;

export type PriceAdjustmentComment = Pick<IPriceAdjustment, 'comment'>;

export type PriceAdjustmentDate = Pick<IPriceAdjustment, 'date'>;

export interface IPayment {
  id: number;
  amount: number;
  source: PaymentSources;
  date: Date;
  period?: IPeriod;
  subscriberAccountId: number;
  subscriberAccount?: ISubscriberAccount;
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

export interface ITimePeriod {
  from: string;
  to: string;
}

export type DateFrom = Pick<ITimePeriod, 'from'>;

export type DateTo = Pick<ITimePeriod, 'to'>;

export interface IPrice {
  id: number;
  amount: number;
  date: Date;
  residents: number;
  tariff: number;
  subscriberAccountId: number;
  periodId: number;
  period: IPeriod;
}

export type Prices = IPrice[];
