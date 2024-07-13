import { SetURLSearchParams } from 'react-router-dom';
import {
  BooleanValue,
  Func,
  IOnPageBtnClickProps,
  InputChangeEvent,
  InputChangeFunc,
  OnBtnClickFunc,
  SelectChangeEvent,
} from './types';
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import {
  Credentials,
  IGeneralSettings,
  NewUser,
  SelectData,
  INewTariffFormData,
  Tariffs,
  IAccrualAdjustmentFormData,
} from './data.types';
import { RefObject } from 'react';
import { AccountTypes } from '@/constants';
import {
  IAddSubscriberAccountFormData,
  IEditSubscriberAccountFormData,
  SubscriberAccount,
} from './subscriberAccount.types';

export interface IUpdateSearchParamsProps {
  key: string;
  value: string;
}

export interface IUseSetSearchParams {
  updateSearchParams: ({ key, value }: IUpdateSearchParamsProps) => void;
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}

export interface IUsePaginationBarProps {
  totalCount: number;
  step?: number;
}

export type SetPage = (data: IOnPageBtnClickProps) => void;

export interface IUsePaginationBar {
  isBackNavBtnDisable: boolean;
  isShowFirstPageBtn: boolean;
  isShowPrevTemplateBtn: boolean;
  isValidPage: boolean;
  isShowNextTemplateBtn: boolean;
  isNextNavBtnDisable: boolean;
  isShowLastPageBtn: boolean;
  isLastPage: boolean;
  firstPage: number;
  pageNumbers: number[];
  currentPage: number;
  lastPage: number;
  step: number;
  onPrevPageBtnClick: OnBtnClickFunc;
  onFirstPageBtnClick: OnBtnClickFunc;
  setPage: SetPage;
  onLastPageBtnClick: OnBtnClickFunc;
  onNextPageBtnClick: OnBtnClickFunc;
}

export interface IUseSignInForm {
  handleFormSubmit: SubmitHandler<Credentials>;
  handleSubmit: UseFormHandleSubmit<Credentials, undefined>;
  register: UseFormRegister<Credentials>;
  isLoading: boolean;
}

export interface IUseAddUserForm {
  handleFormSubmit: SubmitHandler<NewUser>;
  handleSubmit: UseFormHandleSubmit<NewUser, undefined>;
  register: UseFormRegister<NewUser>;
  isLoading: boolean;
}

export interface IUseGeneralSettingsForm {
  handleSubmit: UseFormHandleSubmit<IGeneralSettings, undefined>;
  register: UseFormRegister<IGeneralSettings>;
  handleFormSubmit: SubmitHandler<IGeneralSettings>;
  isLoading: boolean;
  adsInPayments: string;
  mfi: string;
  currentAccount: string;
  helpPhone: string;
}

export interface IUseAddSubscriberAccountForm {
  apartmentTypes: SelectData;
  handleSubmit: UseFormHandleSubmit<IAddSubscriberAccountFormData, undefined>;
  handleFormSubmit: SubmitHandler<IAddSubscriberAccountFormData>;
  register: UseFormRegister<IAddSubscriberAccountFormData>;
  firstDayOfMonth: string;
  isLoading: boolean;
  isRemovalHouseholdWaste: boolean;
  isEligibleForBenefit: boolean;
  onCheckboxChange: InputChangeFunc;
  houses: SelectData;
  streets: SelectData;
  streetDefaultValue: number;
  accountTypes: SelectData;
}

export interface IUseStreetsData {
  isLoadingData: boolean;
  housesError: string | null;
  streetsError: string | null;
}

export interface IUseGeneralSettings {
  isLoadingData: boolean;
  id: number | null;
  error: string | null;
}

export interface IUseHeader {
  isLoggedIn: boolean;
  onSettingsBtnClick: OnBtnClickFunc;
  showModalWin: boolean;
  setModalWinState: Func;
}

export interface IUseUsersSettings {
  isLoadingData: boolean;
  onAddBntClick: OnBtnClickFunc;
  showAddUserForm: boolean;
  toggleShowAddUserForm: Func;
  error: string | null;
}

export interface IUseSubscriberAccountsPage {
  isLoadingData: boolean;
  showSubscriberAccountsTable: boolean;
  count: number;
  totalCount: number | null;
  filteredCount: number | null;
  error: string | null;
  setModalWinState: Func;
  showModalWin: boolean;
  isLoading: boolean;
  isEmptyFilteredList: boolean;
}

export interface IUseSubscriberAccountsFilter {
  onFilterChange: (e: InputChangeEvent | SelectChangeEvent) => void;
  surname: string;
  name: string;
  account: string;
  accountTypes: SelectData;
  defaultAccountTypesValue: string | undefined;
  street: string;
  house: string;
  apartment: string;
  clearSurnameFilter: OnBtnClickFunc;
  clearNameFilter: OnBtnClickFunc;
  clearAccountFilter: OnBtnClickFunc;
  clearStreetFilter: OnBtnClickFunc;
  clearHouseFilter: OnBtnClickFunc;
  clearApartmentFilter: OnBtnClickFunc;
  surnameInputRef: RefObject<HTMLInputElement>;
  nameInputRef: RefObject<HTMLInputElement>;
  accountInputRef: RefObject<HTMLInputElement>;
  streetInputRef: RefObject<HTMLInputElement>;
  houseInputRef: RefObject<HTMLInputElement>;
  apartmentInputRef: RefObject<HTMLInputElement>;
  showClearSurnameFilterBtn: boolean;
  showClearNameFilterBtn: boolean;
  showClearAccountFilterBtn: boolean;
  showClearStreetFilterBtn: boolean;
  showClearHouseFilterBtn: boolean;
  showClearApartmentFilterBtn: boolean;
}

export interface IUseSubscriberAccountsFilterSearchParams {
  page: number;
  limit: number;
  surname: string;
  name: string;
  account: string;
  type: string;
  street: string;
  house: string;
  apartment: string;
  comment: string;
  document: string;
}

export interface IUseEditSubscriberAccountForm {
  handleSubmit: UseFormHandleSubmit<IEditSubscriberAccountFormData, undefined>;
  handleFormSubmit: SubmitHandler<IEditSubscriberAccountFormData>;
  register: UseFormRegister<IEditSubscriberAccountFormData>;
  fullStreetName: string;
  house: string;
  apartment: string;
  apartmentType: BooleanValue;
  period: string;
  subscriberAccountValue: string;
  contract: string;
  contractDateValue: string;
  accountType: AccountTypes;
  birthday: string;
  residents: number;
  isRemovalHouseHoldWaste: boolean;
  onCheckboxChange: InputChangeFunc;
  email: string;
  utr: string;
  passport: string;
  surname: string;
  name: string;
  middleName: string;
  isEligibleForBenefit: boolean;
  phone: string;
  additionalPhone: string;
  isLoading: boolean;
}

export interface IUseUser {
  name: string;
  login: string;
  fullAccess: boolean;
  isCurrentUser: boolean;
  houses: boolean;
  subscribers: boolean;
  accounting: boolean;
  documents: boolean;
  counters: boolean;
  oneOffJobs: boolean;
  settings: boolean;
  onInputChange: InputChangeFunc;
}

export interface IUseTariffsList {
  showAddPrivateSectorTariffForm: boolean;
  showPrivateSectorTariffsHistory: boolean;
  showAddMultiApartmentSectorTariffForm: boolean;
  showMultiApartmentSectorTariffsHistory: boolean;
  showAddOtherSectorTariffForm: boolean;
  showOtherSectorTariffsHistory: boolean;
  multiApartmentSectorTariffValue: number;
  multiApartmentSectorTariffStartDate: string;
  privateSectorTariffValue: number;
  privateSectorTariffStartDate: string;
  otherSectorTariffStartDate: string;
  otherSectorTariffValue: number;
  toggleShowAddPrivateSectorTariffForm: OnBtnClickFunc;
  toggleShowPrivateSectorTariffsHistory: OnBtnClickFunc;
  toggleShowAddMultiApartmentSectorTariffForm: OnBtnClickFunc;
  toggleShowMultiApartmentSectorTariffsHistory: OnBtnClickFunc;
  toggleShowAddOtherSectorTariffForm: OnBtnClickFunc;
  toggleShowOtherSectorTariffsHistory: OnBtnClickFunc;
  multiApartmentSectorTariffs: Tariffs;
  privateSectorTariffs: Tariffs;
  otherSectorTariffs: Tariffs;
}

export interface IUseAddTariffForm {
  tariffLabel: string;
  isLoading: boolean;
  handleSubmit: UseFormHandleSubmit<INewTariffFormData, undefined>;
  handleFormSubmit: SubmitHandler<INewTariffFormData>;
  register: UseFormRegister<INewTariffFormData>;
}

export interface IUseDocumentsPage {
  isLoadingData: boolean;
  showDocumentsTable: boolean;
  isEmptyFilteredList: boolean;
  count: number;
  totalCount: number | null;
  isLoading: boolean;
  filteredCount: number | null;
  error: string | null;
}

export interface IUseDocumentsFilter {
  onFilterChange: InputChangeFunc;
  document: string;
  comment: string;
  documentInputRef: RefObject<HTMLInputElement>;
  commentInputRef: RefObject<HTMLInputElement>;
  clearDocumentFilter: OnBtnClickFunc;
  clearCommentFilter: OnBtnClickFunc;
  showClearDocumentFilterBtn: boolean;
  showClearCommentFilterBtn: boolean;
}

export interface IUseCalculatePrices {
  lastPricesCalculate: string;
  isLoading: boolean;
  calculatePrices: () => Promise<void>;
  error: string | null;
}

export interface IUseAddPeriod {
  isLoading: boolean;
  error: string | null;
  onAddPeriodBtnClick: OnBtnClickFunc;
}

export interface IUseAccountingSections {
  setAddPeriodModalWinState: Func;
  setCalculatePricesModalWinState: Func;
  setAccrualsAdjustmentModalWinState: Func;
  setPaymentsAdjustmentModalWinState: Func;
  setPaymentsModalWinState: Func;
  setBenefitsAdjustmentModalWinState: Func;
  setTariffsModalWinState: Func;
  setAccountsMessageModalWinState: Func;
  setPayPostageModalWinState: Func;
  setPayPrivatbankModalWinState: Func;
  setPayOshchadbankModalWinState: Func;
  setPayAbankModalWinState: Func;
  showTariffsModalWin: boolean;
  showCalculatePricesModalWin: boolean;
  showAddPeriodModalWin: boolean;
  showAccrualsAdjustmentModalWin: boolean;
  showPaymentsAdjustmentModalWin: boolean;
  showPaymentsModalWin: boolean;
  showBenefitsAdjustmentModalWin: boolean;
  showAccountsMessageModalWin: boolean;
  showPayPostageModalWin: boolean;
  showPayPrivatbankModalWin: boolean;
  showPayOshchadbankModalWin: boolean;
  showPayOAbankModalWin: boolean;
}

export interface IUseFindSubscriberAccountForm {
  handleSubmit: UseFormHandleSubmit<SubscriberAccount, undefined>;
  handleFormSubmit: SubmitHandler<SubscriberAccount>;
  register: UseFormRegister<SubscriberAccount>;
  error: string | null;
  isLoading: boolean;
}

export interface IUseSubscriberAccountsTableRow {
  subscriberAccountNumber: string;
  fullName: string;
  accountType: AccountTypes;
  fullStreetName: string;
  house: string;
  apartment: string;
  apartmentType: string | undefined;
  period: string;
  balance: number;
  residents: number;
  isEligibleForBenefit: boolean;
  document: string;
  comment: string;
  toggleEditAccount: Func;
  editAccount: boolean;
}

export interface IUseAccrualsAdjustmentForm {
  address: string;
  subscriberAccountInfo: string;
  handleSubmit: UseFormHandleSubmit<IAccrualAdjustmentFormData, undefined>;
  handleFormSubmit: SubmitHandler<IAccrualAdjustmentFormData>;
  register: UseFormRegister<IAccrualAdjustmentFormData>;
  currentDate: string;
  isLoading: boolean;
}
