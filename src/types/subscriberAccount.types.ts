import { NewDocument } from './document.types';
import { IOwner } from './owner.types';

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

export interface IUpdateSubscriberAccountData extends ISubscriberAccount {
  document: NewDocument;
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
