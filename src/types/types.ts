import { Messages, PagePaths, PaymentSources, SectorTypes } from '@/constants';
import { ChangeEvent, MouseEvent } from 'react';
import {
  Houses,
  IPriceAdjustmentFormData,
  INewPaymentFormData,
  INewTariffFormData,
  IPeriod,
  ITariff,
  Periods,
  SelectData,
  Streets,
  Tariffs,
} from './data.types';
import {
  ISubscriberAccount,
  SubscriberAccounts,
} from './subscriberAccount.types';

export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

export type DivClickEvent = MouseEvent<HTMLDivElement>;

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

export type SelectChangeEvent = ChangeEvent<HTMLSelectElement>;

export type InputChangeFunc = (e: InputChangeEvent) => void;

export type SelectChangeFunc = (e: SelectChangeEvent) => void;

export type OnBtnClickFunc = (e: BtnClickEvent) => void;

export type onDivClickFunc = (e: DivClickEvent) => void;

export type Func = () => void;

export interface INavSection {
  path: PagePaths;
  title: string;
  desc: string;
}

export type NavSections = INavSection[];

export interface IPaths {
  [PagePaths.subscriberAccounts]: string;
  [PagePaths.accounting]: string;
}

export interface IOnPageBtnClickProps {
  e: BtnClickEvent;
  page: number;
}

export interface IGetPaginationBarSettingsProps {
  pageNumbers: number[];
  currentPage: number;
  step: number;
}

export interface IGetPaginationBarSettings {
  isValidPage: boolean;
  firstPage: number;
  lastPage: number;
  isBackNavBtnDisable: boolean;
  isNextNavBtnDisable: boolean;
  isShowNextTemplateBtn: boolean;
  isShowLastPageBtn: boolean;
  isShowFirstPageBtn: boolean;
  isShowPrevTemplateBtn: boolean;
  isLastPage: boolean;
}

export interface ISetBtnDisplayProps {
  currentPage?: number;
  page?: number;
  step?: number;
}

export interface IErrorMessage {
  [key: string]: Messages;
}

export interface IRegExp {
  email: RegExp;
  phone: RegExp;
  currentAccount: RegExp;
  mfi: RegExp;
  login: RegExp;
}

export interface IApartmentType {
  title: string;
  value: BooleanValue;
}

export type ApartmentTypes = IApartmentType[];

export interface IIndividualHeating {
  title: string;
  value: BooleanValue;
}

export type IndividualHeating = IIndividualHeating[];

export type BooleanValue = 'true' | 'false';

export interface IGetDefaultAccountTypesValueProps {
  accountTypes: SelectData;
  type: string;
}

export interface IFormatDateProps {
  date: Date | string;
  dateFormat: string;
}

export interface IGetSubscriberAccountDataProps {
  streets: Streets;
  houses: Houses;
}

export interface IGetSubscriberAccountData {
  streetsData: SelectData;
  housesData: SelectData;
}

export interface IGetUpdatedSubscriberAccountsProps {
  subscriberAccounts: SubscriberAccounts;
  updatedSubscriberAccount: ISubscriberAccount;
}

export interface IGetCurrentTariffs {
  privateSectorTariff: ITariff | undefined;
  multiApartmentSectorTariff: ITariff | undefined;
  otherSectorTariff: ITariff | undefined;
}

export interface IGetUpdatedTariffDataProps {
  data: INewTariffFormData;
  sector: SectorTypes;
}

export interface IFilterTariffsBySectorProps {
  tariffs: Tariffs;
  sector: SectorTypes;
}

export interface IUpdatePeriodsProps {
  periods: Periods;
  newPeriod: IPeriod;
}

export interface IGetPriceAdjustmentDataProps {
  data: IPriceAdjustmentFormData;
  id: number;
}

export interface IGetNewPaymentDataProps {
  data: INewPaymentFormData;
  id: number;
}

export interface ISaveFileProps {
  data: BlobPart;
  fileName: string;
}

export interface IGetUpdatedPeriodsProps {
  periods: Periods;
  updatedPeriod: IPeriod;
}

export type PaymentsDataFromCsv = string[][];

export interface IConvertStringsToPaymentsBankProps {
  data: PaymentsDataFromCsv;
  source: PaymentSources;
}

export interface IGetSubscriberAccountBalanceByPeriod {
  totalPrices: number;
  totalPriceAdjustments: number;
  totalBenefits: number;
  totalPayments: number;
  balance: number;
  isDebt: boolean;
}

export interface IPeriodId {
  periodId: number;
}

export interface IAmount {
  amount: number;
}
