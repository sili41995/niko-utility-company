export interface IHouse {
  location: string;
  street: string;
  houseNumber: string;
  floors: null | number;
  exploitation: string;
  houseType: null | string;
  house: string[];
  territory: string[];
  services: string;
  rate: number;
  rateSecondary: number;
}

export type Houses = IHouse[];

export interface ISubscriber {
  subscriberAccount: string;
  accountType: string;
  location: string;
  street: string;
  houseNumber: number;
  apartmentNumber: number;
  typeOfRoom: string;
  parameters: string[];
  services: string;
  accountBalance: number;
  consumers: number;
}

export type Subscribers = ISubscriber[];

export interface IDocument {
  documentType: number;
  number: string;
  date: string;
  name: string;
}

export type Documents = IDocument[];
