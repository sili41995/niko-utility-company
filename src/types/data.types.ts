import { AccountTypes, ServiceCategories } from '@/constants';

export interface IDocument {
  documentType: number;
  number: string;
  date: string;
  name: string;
}

export type Documents = IDocument[];

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
  [key: string]: number | string | Date | boolean | undefined;
  id: number;
  street: string;
  house: string;
  apartment: string;
  subscriberAccount: string;
  contract: string;
  contractDate: Date;
  accountType: AccountTypes;
  isLivingApartment: boolean;
  residents: string;
  period: string;
  isRemovalHouseholdWaste: boolean;
  utr: string;
  passport: string;
  surname: string;
  name: string;
  middleName: string;
  isEligibleForBenefit: boolean;
  phone: string;
  additionalPhone: string;
  email?: string;
  birthday?: Date;
  comment?: string;
}

export type NewSubscriberAccount = Omit<ISubscriberAccount, 'id'>;

export type IsRemovalHouseholdWaste = Pick<
  ISubscriberAccount,
  'isRemovalHouseholdWaste'
>;

export type IsEligibleForBenefit = Pick<
  ISubscriberAccount,
  'isEligibleForBenefit'
>;

export type Street = Pick<ISubscriberAccount, 'street'>;

export type House = Pick<ISubscriberAccount, 'house'>;

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
