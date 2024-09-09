import { AccountCategory, IAccountType } from './accountType.types';
import { FullBalances } from './balance.types';
import { IContract, NewContract } from './contract.types';
import { Documents, NewDocument } from './document.types';
import { IHouse } from './house.types';
import { IOwner, NewOwner } from './owner.types';
import { FullPayments } from './payment.types';
import { FullPrices } from './price.types';
import { PriceAdjustments } from './priceAdjustment.types';
import { IStreet } from './street.types';
import { BooleanValue } from './types';

export interface ISubscriberAccount {
  id: number;
  apartment: string | null;
  number: string;
  isLivingApartment: boolean;
  residents: number;
  period: Date;
  isRemovalHouseholdWaste: boolean;
  comment: string | null;
  accountTypeId: number;
  contractId: number;
  ownerId: number;
  sectorId: number;
  houseId: number;
  streetId: number;
}

export type SubscriberAccounts = ISubscriberAccount[];

export interface IFullSubscriberAccount extends ISubscriberAccount {
  prices: FullPrices;
  priceAdjustments: PriceAdjustments;
  payments: FullPayments;
  balances: FullBalances;
  house: IHouse;
  street: IStreet;
  documents: Documents;
  owner: IOwner;
  accountType: IAccountType;
  contract: IContract;
}

export type FullSubscriberAccounts = IFullSubscriberAccount[];

export interface IUpdateSubscriberAccountData
  extends Partial<ISubscriberAccount> {
  document: NewDocument;
  owner: Partial<NewOwner>;
}

export type SubscriberAccountNumber = Pick<ISubscriberAccount, 'number'>;

export type StreetId = Pick<ISubscriberAccount, 'streetId'>;

export type HouseId = Pick<ISubscriberAccount, 'houseId'>;

export type Residents = Pick<ISubscriberAccount, 'residents'>;

export type Period = Pick<ISubscriberAccount, 'period'>;

export type IsRemovalHouseholdWaste = Pick<
  ISubscriberAccount,
  'isRemovalHouseholdWaste'
>;

export type IsLivingApartment = Pick<ISubscriberAccount, 'isLivingApartment'>;

export type Apartment = Pick<ISubscriberAccount, 'apartment'>;

export interface ISubscriberAccountWithOwner extends ISubscriberAccount {
  owner: IOwner;
}

export type InitialSubscriberAccountFormData = Omit<
  ISubscriberAccount,
  'id' | 'streetId' | 'houseId' | 'isLivingApartment' | 'period' | 'residents'
>;

export interface ISubscriberAccountData
  extends InitialSubscriberAccountFormData,
    NewOwner {
  streetId: string;
  houseId: string;
  isLivingApartment: BooleanValue;
  contractDate: Date;
  period: string;
  residents: string;
}

export interface IAddSubscriberAccountFormData extends ISubscriberAccountData {
  category: AccountCategory;
  contractNumber: string;
}

export interface IUpdateSubscriberAccountFormData
  extends ISubscriberAccountData {
  street: string;
  house: string;
  name: string;
  comment: string;
  documentName: string;
}

export interface INewSubscriberAccountData
  extends Omit<
    ISubscriberAccount,
    | 'id'
    | 'streetId'
    | 'apartment'
    | 'comment'
    | 'accountTypeId'
    | 'contractId'
    | 'ownerId'
    | 'sectorId'
  > {
  category: AccountCategory;
  apartment: string | undefined;
  owner: NewOwner;
  contract: NewContract;
}

export type SetSubscriberAccountFunc = (data: IFullSubscriberAccount) => void;
