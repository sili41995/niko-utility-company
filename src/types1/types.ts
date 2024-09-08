// import { PagePaths, SectorTypes } from '@/constants';
// import {
//   IPriceAdjustmentFormData,
//   INewPaymentFormData,
//   SelectData,
//   Tariffs,
// } from './data.types';
// import {
//   ISubscriberAccount,
//   SubscriberAccounts,
// } from './subscriberAccount.types';

// export interface INavSection {
//   path: PagePaths;
//   title: string;
//   desc: string;
// }

// export type NavSections = INavSection[];

// export interface IPaths {
//   [PagePaths.subscriberAccounts]: string;
//   [PagePaths.accounting]: string;
// }

// export interface IOnPageBtnClickProps {
//   e: BtnClickEvent;
//   page: number;
// }

// export interface IApartmentType {
//   title: string;
//   value: BooleanValue;
// }

// export type ApartmentTypes = IApartmentType[];

// export interface IIndividualHeating {
//   title: string;
//   value: BooleanValue;
// }

// export type IndividualHeating = IIndividualHeating[];

// export type BooleanValue = 'true' | 'false';

// export interface IGetDefaultAccountTypesValueProps {
//   accountTypes: SelectData;
//   type: string;
// }

// export interface IFormatDateProps {
//   date: Date | string;
//   dateFormat: string;
// }

// export interface IGetUpdatedSubscriberAccountsProps {
//   subscriberAccounts: SubscriberAccounts;
//   updatedSubscriberAccount: ISubscriberAccount;
// }

// export interface IFilterTariffsBySectorProps {
//   tariffs: Tariffs;
//   sector: SectorTypes;
// }

// export interface IGetPriceAdjustmentDataProps {
//   data: IPriceAdjustmentFormData;
//   id: number;
// }

// export interface IGetNewPaymentDataProps {
//   data: INewPaymentFormData;
//   id: number;
// }

// export interface IGetSubscriberAccountBalanceByPeriod {
//   totalPrices: number;
//   totalPriceAdjustments: number;
//   totalBenefits: number;
//   totalPayments: number;
//   balance: number;
//   isDebt: boolean;
// }
