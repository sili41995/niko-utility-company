import { ServiceCategories } from '@/constants';

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
  username: string;
  password: string;
  email: string;
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

export type NewUser = Pick<IUser, 'username' | 'name' | 'password' | 'email'>;

export type UserData = Omit<IUser, 'password'>;

export type Password = Pick<IUser, 'password'>;

export type Username = Pick<IUser, 'username'>;

export type Name = Pick<IUser, 'name'>;

export type Email = Pick<IUser, 'email'>;

export type Credentials = Pick<IUser, 'username' | 'password'>;

export type Users = UserData[];
