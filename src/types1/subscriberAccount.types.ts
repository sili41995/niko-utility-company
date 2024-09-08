// import { PriceAdjustments, IStreet, Payments, Balances } from './data.types';
// import { BooleanValue } from './types';

// export interface IAdditionalOwnerData {
//   email: string | undefined;
//   birthday: Date | undefined;
// }

// export interface INewOwner
//   extends Omit<IOwner, 'id' | 'email' | 'birthday' | 'subscriberAccountId'>,
//     IAdditionalOwnerData {}

// export interface IUpdatableOwnerData
//   extends Pick<IOwner, 'phone' | 'additionalPhone'>,
//     IAdditionalOwnerData {}

// export interface ISubscriberAccount {
//   id: number;
//   apartment?: string;
//   number: string;
//   isLivingApartment: boolean;
//   residents: number;
//   period: Date;
//   isRemovalHouseholdWaste: boolean;
//   streetId: number;
//   street: IStreet;
//   houseId: number;
// }

// export interface IFullSubscriberAccount extends ISubscriberAccount {
//   balances: Balances;
//   priceAdjustments: PriceAdjustments;
//   prices: FullPrices;
//   payments: Payments;
//   owner: Owner;
//   house: IFullHouse;
// }

// export type InitialSubscriberAccountFormData = Omit<
//   ISubscriberAccount,
//   'id' | 'streetId' | 'houseId' | 'isLivingApartment' | 'period' | 'residents'
// >;

// export interface ISubscriberAccountData
//   extends InitialSubscriberAccountFormData,
//     INewOwner {
//   streetId: string;
//   houseId: string;
//   isLivingApartment: BooleanValue;
//   contractDate: string;
//   period: string;
//   residents: string;
// }

// export interface IAddSubscriberAccountFormData extends ISubscriberAccountData {}

// export interface IEditSubscriberAccountFormData extends ISubscriberAccountData {
//   street: string;
//   house: string;
//   name: string;
//   comment: string;
// }

// export type NewSubscriberAccountData = Omit<
//   ISubscriberAccount,
//   | 'id'
//   | 'street'
//   | 'house'
//   | 'email'
//   | 'owner'
//   | 'documents'
//   | 'payments'
//   | 'priceAdjustments'
//   | 'prices'
//   | 'balances'
// >;

// export interface INewSubscriberAccountData extends NewSubscriberAccountData {
//   owner: INewOwner;
// }

// export type AccountType = Pick<ISubscriberAccount, 'accountType'>;

// export type Utr = Pick<IOwner, 'utr'>;

// export type Passport = Pick<IOwner, 'passport'>;

// export type SubscriberAccounts = ISubscriberAccount[];

// export type SetSubscriberAccountFunc = (data: ISubscriberAccount) => void;
