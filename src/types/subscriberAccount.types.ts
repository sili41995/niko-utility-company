import {
  PriceAdjustments,
  Documents,
  IHouse,
  IStreet,
  Payments,
} from './data.types';
import { BooleanValue } from './types';
import { AccountTypes, SectorTypes } from '@/constants';

export interface IOwner {
  id: number;
  utr: string;
  passport: string;
  surname: string;
  name: string;
  middleName: string;
  phone: string;
  additionalPhone: string;
  email: string | null;
  birthday: Date | null;
  subscriberAccountId: number;
}

export interface IAdditionalOwnerData {
  email: string | undefined;
  birthday: Date | undefined;
}

export interface INewOwner
  extends Omit<IOwner, 'id' | 'email' | 'birthday' | 'subscriberAccountId'>,
    IAdditionalOwnerData {}

export interface IUpdatableOwnerData
  extends Pick<IOwner, 'phone' | 'additionalPhone'>,
    IAdditionalOwnerData {}

export interface ISubscriberAccount {
  id: number;
  apartment?: string;
  subscriberAccount: string;
  contract: string;
  contractDate: Date;
  accountType: AccountTypes;
  isLivingApartment: boolean;
  residents: number;
  period: Date;
  isRemovalHouseholdWaste: boolean;
  isEligibleForBenefit: boolean;
  sector: SectorTypes;
  balance: number;
  documents: Documents;
  streetId: number;
  street: IStreet;
  houseId: number;
  house: IHouse;
  owner: IOwner;
  payments: Payments;
  priceAdjustments: PriceAdjustments;
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
  | 'sector'
  | 'balance'
>;

export interface ISubscriberAccountData
  extends InitialSubscriberAccountFormData,
    INewOwner {
  streetId: string;
  houseId: string;
  isLivingApartment: BooleanValue;
  contractDate: string;
  period: string;
  residents: string;
}

export interface IAddSubscriberAccountFormData extends ISubscriberAccountData {}

export interface IEditSubscriberAccountFormData extends ISubscriberAccountData {
  street: string;
  house: string;
  document: string;
  comment: string;
}

export type Document = Pick<IEditSubscriberAccountFormData, 'document'>;

export type Comment = Pick<IEditSubscriberAccountFormData, 'comment'>;

export type EditableSubscriberAccountData = Pick<
  ISubscriberAccount,
  | 'isEligibleForBenefit'
  | 'isLivingApartment'
  | 'isRemovalHouseholdWaste'
  | 'period'
  | 'residents'
>;

export interface IEditSubscriberAccountData
  extends EditableSubscriberAccountData {
  document: string;
  comment: string;
  owner: IUpdatableOwnerData;
}

export type NewSubscriberAccountData = Omit<
  ISubscriberAccount,
  | 'id'
  | 'street'
  | 'house'
  | 'email'
  | 'owner'
  | 'documents'
  | 'balance'
  | 'payments'
  | 'priceAdjustments'
>;

export interface INewSubscriberAccountData extends NewSubscriberAccountData {
  owner: INewOwner;
}

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

export type Utr = Pick<IOwner, 'utr'>;

export type Passport = Pick<IOwner, 'passport'>;

export type Surname = Pick<IOwner, 'surname'>;

export type SubscriberAccountName = Pick<IOwner, 'name'>;

export type MiddleName = Pick<IOwner, 'middleName'>;

export type Phone = Pick<IOwner, 'phone'>;

export type AdditionalPhone = Pick<IOwner, 'additionalPhone'>;

export type SubscriberAccountEmail = Pick<IOwner, 'email'>;

export type SubscriberAccounts = ISubscriberAccount[];

export type IsRemovalHouseholdWaste = Pick<
  ISubscriberAccount,
  'isRemovalHouseholdWaste'
>;

export type IsEligibleForBenefit = Pick<
  ISubscriberAccount,
  'isEligibleForBenefit'
>;

export type SetSubscriberAccountFunc = (data: ISubscriberAccount) => void;
