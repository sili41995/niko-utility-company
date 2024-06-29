import { AccountTypes, SectorTypes, ServiceCategories } from '@/constants';
import { BooleanValue } from './types';

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

export interface ISubscriberAccount {
  id: number;
  streetId: number;
  street: IStreet;
  houseId: number;
  house: IHouse;
  apartment?: string;
  subscriberAccount: string;
  contract: string;
  contractDate: Date;
  accountType: AccountTypes;
  isLivingApartment: boolean;
  residents: number;
  period: Date;
  isRemovalHouseholdWaste: boolean;
  utr: string;
  passport: string;
  surname: string;
  name: string;
  middleName: string;
  isEligibleForBenefit: boolean;
  phone: string;
  additionalPhone: string;
  sector: SectorTypes;
  email: string | null;
  birthday: Date | null;
  documents: Documents;
}

export type InitialSubscriberAccountFormData = Omit<
  ISubscriberAccount,
  | 'id'
  | 'streetId'
  | 'houseId'
  | 'isLivingApartment'
  | 'contractDate'
  | 'period'
  | 'residents'
  | 'street'
  | 'house'
  | 'birthday'
  | 'sector'
>;

export interface IAddSubscriberAccountFormData
  extends InitialSubscriberAccountFormData {
  streetId: string;
  houseId: string;
  isLivingApartment: BooleanValue;
  contractDate: string;
  period: string;
  residents: string;
  birthday: string;
}

export interface IEditSubscriberAccountFormData
  extends InitialSubscriberAccountFormData {
  street: string;
  streetId: string;
  house: string;
  houseId: string;
  isLivingApartment: BooleanValue;
  contractDate: string;
  period: string;
  residents: string;
  birthday: string;
  document: string;
  comment: string;
}

export type Document = Pick<IEditSubscriberAccountFormData, 'document'>;

export type Comment = Pick<IEditSubscriberAccountFormData, 'comment'>;

export interface IEditSubscriberAccountData
  extends Pick<
    ISubscriberAccount,
    | 'additionalPhone'
    | 'isEligibleForBenefit'
    | 'isLivingApartment'
    | 'isRemovalHouseholdWaste'
    | 'period'
    | 'phone'
    | 'residents'
  > {
  document: string;
  comment: string;
  birthday?: Date;
  email?: string;
}

export interface INewSubscriberAccount
  extends Omit<
    ISubscriberAccount,
    'id' | 'street' | 'house' | 'email' | 'birthday'
  > {
  email?: string;
  birthday?: Date;
  comment?: string;
}

export type IsRemovalHouseholdWaste = Pick<
  ISubscriberAccount,
  'isRemovalHouseholdWaste'
>;

export type IsEligibleForBenefit = Pick<
  ISubscriberAccount,
  'isEligibleForBenefit'
>;

export type Street = Pick<ISubscriberAccount, 'streetId'>;

export type House = Pick<ISubscriberAccount, 'houseId'>;

export type Apartment = Pick<ISubscriberAccount, 'apartment'>;

export type SubscriberAccount = Pick<ISubscriberAccount, 'subscriberAccount'>;

export type Contract = Pick<ISubscriberAccount, 'contract'>;

export type ContractDate = Pick<ISubscriberAccount, 'contractDate'>;

export type AccountType = Pick<ISubscriberAccount, 'accountType'>;

export type IsLivingApartment = Pick<ISubscriberAccount, 'isLivingApartment'>;

export type Residents = Pick<ISubscriberAccount, 'residents'>;

export type Period = Pick<ISubscriberAccount, 'period'>;

export type Utr = Pick<ISubscriberAccount, 'utr'>;

export type Passport = Pick<ISubscriberAccount, 'passport'>;

export type Surname = Pick<ISubscriberAccount, 'surname'>;

export type SubscriberAccountName = Pick<ISubscriberAccount, 'name'>;

export type MiddleName = Pick<ISubscriberAccount, 'middleName'>;

export type Phone = Pick<ISubscriberAccount, 'phone'>;

export type AdditionalPhone = Pick<ISubscriberAccount, 'additionalPhone'>;

export type SubscriberAccountEmail = Pick<ISubscriberAccount, 'email'>;

export type SubscriberAccounts = ISubscriberAccount[];

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
