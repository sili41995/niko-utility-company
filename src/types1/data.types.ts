// import { ServiceCategories } from '@/constants';
// import { ISubscriberAccount } from './subscriberAccount.types';

// export interface IService {
//   id: number;
//   name: string;
//   category: ServiceCategories;
//   isActive: boolean;
// }

// export type Services = IService[];

// export interface IGetUpdatedUsersProps {
//   users: Users;
//   updatedUser: UserData;
// }

// export interface IGetGeneralSettingsFormDefaultValues
//   extends Omit<IGeneralSettingsData, 'mfi'> {
//   mfi: string;
// }

// export interface IPeriod {
//   id: number;
//   isCurrentPeriod: boolean;
//   start: Date;
//   payments: Payments;
// }

// export type Periods = IPeriod[];

// export interface IPriceAdjustment {
//   id: number;
//   price: number;
//   date: Date;
//   comment: string;
//   subscriberAccountId: number;
//   subscriberAccount: ISubscriberAccount;
//   periodId: number;
//   period: IPeriod;
// }

// export type PriceAdjustments = IPriceAdjustment[];

// export type NewPayments = NewPaymentData[];

// export type PaymentSource = Pick<IPayment, 'source'>;
