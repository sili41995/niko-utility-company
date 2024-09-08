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

// export type AccountType = Pick<ISubscriberAccount, 'accountType'>;

// export type Utr = Pick<IOwner, 'utr'>;

// export type Passport = Pick<IOwner, 'passport'>;

// export type SubscriberAccounts = ISubscriberAccount[];
