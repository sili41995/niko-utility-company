import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import {
  BooleanValue,
  Func,
  IHousesLocationData,
  InputChangeEvent,
  InputChangeFunc,
  IOnPageBtnClickProps,
  OnBtnClickFunc,
  SelectChangeEvent,
  SelectData,
} from './types';
import { FullPayments, IPaymentFormData } from './payment.types';
import {
  IAddSubscriberAccountFormData,
  IFullSubscriberAccount,
  IUpdateSubscriberAccountFormData,
  SubscriberAccountNumber,
} from './subscriberAccount.types';
import { NewUser } from './user.types';
import { RefObject } from 'react';
import { AccountCategory } from './accountType.types';
import { IPriceAdjustmentFormData } from './priceAdjustment.types';
import { ITimePeriod } from './period.types';
import { IReportsBySubscribersFormData } from './report.types';
import { SetURLSearchParams } from 'react-router-dom';
import { Credentials } from './auth.types';
import { FullTariffs } from './tariff.types';
import { IGeneralSettingsFormData } from './generalSettings.types';

export type SetPage = (data: IOnPageBtnClickProps) => void;

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
  quantity: number;
  step?: number;
}

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

export interface IUseAccountingReports {
  showReportsByStreetsModalWin: boolean;
  showReportsByHousesModalWin: boolean;
  showReportsBySubscribersModalWin: boolean;
  showStatementsBySubscriberAccountModalWin: boolean;
  showPaymentsBySubscriberAccountModalWin: boolean;
  showPriceAdjustmentsReportsModalWin: boolean;
  showPriceAdjustmentsReportsTotalModalWin: boolean;
  showPricesReportsModalWin: boolean;
  showPricesReportsTotalModalWin: boolean;
  showPaymentsReportsModalWin: boolean;
  showPaymentsAdjustmentsReportsModalWin: boolean;
  showPaymentsReportsTotalModalWin: boolean;
  showPaymentsReportsTotalByDateModalWin: boolean;
  setReportsByStreetsModalWinState: Func;
  setReportsByHousesModalWinState: Func;
  setReportsBySubscribersModalWinState: Func;
  setStatementsBySubscriberAccountModalWinState: Func;
  setPaymentsBySubscriberAccountModalWinState: Func;
  setPriceAdjustmentsReportsModalWinState: Func;
  setPriceAdjustmentsReportsTotalModalWinState: Func;
  setPricesReportsModalWinState: Func;
  setPricesReportsTotalModalWinState: Func;
  setPaymentsReportsModalWinState: Func;
  setPaymentsAdjustmentsReportsModalWinState: Func;
  setPaymentsReportsTotalModalWinState: Func;
  setPaymentsReportsTotalByDateModalWinState: Func;
}

export interface IUseAccountingSections {
  setAddPeriodModalWinState: Func;
  setPricesModalWinState: Func;
  setPriceAdjustmentsModalWinState: Func;
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
  showPricesModalWin: boolean;
  showAddPeriodModalWin: boolean;
  showPriceAdjustmentsModalWin: boolean;
  showPaymentsAdjustmentModalWin: boolean;
  showPaymentsModalWin: boolean;
  showBenefitsAdjustmentModalWin: boolean;
  showAccountsMessageModalWin: boolean;
  showPayPostageModalWin: boolean;
  showPayPrivatbankModalWin: boolean;
  showPayOshchadbankModalWin: boolean;
  showPayAbankModalWin: boolean;
}

export interface IUseInvoicesForm {
  isLoading: boolean;
  register: UseFormRegister<IHousesLocationData>;
  handleSubmit: UseFormHandleSubmit<IHousesLocationData, undefined>;
  handleFormSubmit: SubmitHandler<IHousesLocationData>;
  houses: SelectData;
  streets: SelectData;
}

export interface IUseAddPaymentForm {
  handleSubmit: UseFormHandleSubmit<IPaymentFormData, undefined>;
  handleFormSubmit: SubmitHandler<IPaymentFormData>;
  register: UseFormRegister<IPaymentFormData>;
  paymentSources: SelectData;
  currentDate: string;
  isLoading: boolean;
  disabledSubmitBtn: boolean;
}

export interface IUseAddPeriod {
  isLoading: boolean;
  onAddPeriodBtnClick: OnBtnClickFunc;
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
  accountTypes: SelectData;
}

export interface IUseAddUserForm {
  handleFormSubmit: SubmitHandler<NewUser>;
  handleSubmit: UseFormHandleSubmit<NewUser, undefined>;
  register: UseFormRegister<NewUser>;
  isLoading: boolean;
}

export interface IUseAttachFile {
  file: File | null;
  onAttachFileInputChange: InputChangeFunc;
  resetFile: OnBtnClickFunc;
  targetFileExtension: string;
}

export interface IUseCalculatePrices {
  lastPricesCalculate: string;
  isLoading: boolean;
  calculatePrices: () => Promise<void>;
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

export interface IUseDownloadPaymentsFile {
  isDownload: boolean;
  onDownloadPaymentsBtnClick: OnBtnClickFunc;
}

export interface IUseUpdateSubscriberAccountForm {
  handleSubmit: UseFormHandleSubmit<
    IUpdateSubscriberAccountFormData,
    undefined
  >;
  handleFormSubmit: SubmitHandler<IUpdateSubscriberAccountFormData>;
  register: UseFormRegister<IUpdateSubscriberAccountFormData>;
  fullStreetName: string;
  house: string;
  apartment: string;
  apartmentType: BooleanValue;
  period: string;
  number: string;
  contract: string;
  contractDateValue: string;
  accountType: AccountCategory;
  birthday: string;
  residents: number;
  isRemovalHouseHoldWaste: boolean;
  onCheckboxChange: InputChangeFunc;
  email: string;
  surname: string;
  name: string;
  middleName: string;
  isEligibleForBenefit: boolean;
  phone: string;
  additionalPhone: string;
  isLoading: boolean;
}

export interface IUseSubscriberAccountsFilterSearchParams {
  page: number;
  limit: number;
  surname: string;
  name: string;
  number: string;
  category: string;
  street: string;
  house: string;
  apartment: string;
  comment: string;
  document: string;
}

export interface IUseFindSubscriberAccountForm {
  handleSubmit: UseFormHandleSubmit<SubscriberAccountNumber, undefined>;
  handleFormSubmit: SubmitHandler<SubscriberAccountNumber>;
  register: UseFormRegister<SubscriberAccountNumber>;
  isLoading: boolean;
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

export interface IUseHousesLocation {
  housesData: SelectData;
  allHousesData: SelectData;
  streetsData: SelectData;
}

export interface IUseHousesLocationSelectData {
  housesSelectData: SelectData;
  streetsSelectData: SelectData;
}

export interface IUseFetchFile {
  isLoading: boolean;
  onActionBtnClick: OnBtnClickFunc;
}

export interface IUsePaymentsModalWin {
  subscriberAccount: IFullSubscriberAccount | null;
  onSubscriberAccountInputChange: InputChangeFunc;
}

export interface IUsePaymentsSection {
  isLoaded: boolean;
  isLoading: boolean;
  showPagination: boolean;
  totalCount: number | null;
  count: number;
  showPaymentsTable: boolean;
  payments: FullPayments;
}

export interface IUsePeriodsRange {
  nimMonthDate: string;
  maxMonthDate: string;
}

export interface IUsePriceAdjustmentForm {
  handleSubmit: UseFormHandleSubmit<IPriceAdjustmentFormData, undefined>;
  handleFormSubmit: SubmitHandler<IPriceAdjustmentFormData>;
  register: UseFormRegister<IPriceAdjustmentFormData>;
  currentDate: string;
  isLoading: boolean;
}

export interface IUseReportsByHousesForm {
  isLoading: boolean;
  handleSubmit: UseFormHandleSubmit<ITimePeriod, undefined>;
  handleFormSubmit: SubmitHandler<ITimePeriod>;
  register: UseFormRegister<ITimePeriod>;
  maxMonthDate: string;
  nimMonthDate: string;
}

export interface IUseReportsByStreetsForm {
  isLoading: boolean;
  handleSubmit: UseFormHandleSubmit<ITimePeriod, undefined>;
  handleFormSubmit: SubmitHandler<ITimePeriod>;
  register: UseFormRegister<ITimePeriod>;
  maxMonthDate: string;
  nimMonthDate: string;
}

export interface IUseReportsBySubscribersForm {
  isLoading: boolean;
  register: UseFormRegister<IReportsBySubscribersFormData>;
  handleSubmit: UseFormHandleSubmit<IReportsBySubscribersFormData, undefined>;
  handleFormSubmit: SubmitHandler<IReportsBySubscribersFormData>;
  houses: SelectData;
  streets: SelectData;
  periods: SelectData;
}

export interface IUseSignInForm {
  handleFormSubmit: SubmitHandler<Credentials>;
  handleSubmit: UseFormHandleSubmit<Credentials, undefined>;
  register: UseFormRegister<Credentials>;
  isLoading: boolean;
}

export interface IUseStreetsData {
  isLoadingData: boolean;
  housesError: string | null;
  streetsError: string | null;
  isLoadingStreets: boolean;
}

export interface IUseSubscriberAccountsFilter {
  onFilterChange: (e: InputChangeEvent | SelectChangeEvent) => void;
  surname: string;
  name: string;
  number: string;
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

export interface IUseSubscriberAccountsPage {
  isLoadingData: boolean;
  showSubscriberAccountsTable: boolean;
  count: number;
  totalCount: number | null;
  filteredCount: number | null;
  setModalWinState: Func;
  showModalWin: boolean;
  isLoading: boolean;
  isEmptyFilteredList: boolean;
}

export interface IUseSubscriberAccountsTableRow {
  number: string;
  fullName: string;
  accountType: string;
  fullStreetName: string;
  house: string;
  apartment: string;
  apartmentType: string | undefined;
  period: string;
  residents: number;
  isEligibleForBenefit: boolean;
  documentName: string;
  comment: string;
  toggleShowInfo: Func;
  showInfo: boolean;
  isDebt: boolean;
  balance: number;
}

export interface IUseTariffsList {
  showAddPrivateSectorTariffForm: boolean;
  showPrivateSectorTariffsHistory: boolean;
  showAddMultiApartmentSectorTariffForm: boolean;
  showMultiApartmentSectorTariffsHistory: boolean;
  showAddOtherSectorTariffForm: boolean;
  showOtherSectorTariffsHistory: boolean;
  multiApartmentSectorTariff: number;
  multiApartmentSectorTariffStartDate: string;
  privateSectorTariff: number;
  privateSectorTariffStartDate: string;
  otherSectorTariffStartDate: string;
  otherSectorTariff: number;
  toggleShowAddPrivateSectorTariffForm: OnBtnClickFunc;
  toggleShowPrivateSectorTariffsHistory: OnBtnClickFunc;
  toggleShowAddMultiApartmentSectorTariffForm: OnBtnClickFunc;
  toggleShowMultiApartmentSectorTariffsHistory: OnBtnClickFunc;
  toggleShowAddOtherSectorTariffForm: OnBtnClickFunc;
  toggleShowOtherSectorTariffsHistory: OnBtnClickFunc;
  multiApartmentSectorTariffs: FullTariffs;
  privateSectorTariffs: FullTariffs;
  otherSectorTariffs: FullTariffs;
}

export interface IUseUploadPaymentsFile {
  targetFileExtension: string;
  onAttachFileInputChange: InputChangeFunc;
  file: File | null;
  resetFile: OnBtnClickFunc;
  isUpload: boolean;
  onUploadPaymentsBtnClick: OnBtnClickFunc;
}

export interface IUseUsersSettings {
  isLoadingData: boolean;
  onAddBntClick: OnBtnClickFunc;
  showAddUserForm: boolean;
  toggleShowAddUserForm: Func;
  error: string | null;
}

export interface IUseGeneralSettingsForm {
  handleSubmit: UseFormHandleSubmit<IGeneralSettingsFormData, undefined>;
  register: UseFormRegister<IGeneralSettingsFormData>;
  handleFormSubmit: SubmitHandler<IGeneralSettingsFormData>;
  isLoading: boolean;
  adsInPayments: string;
  mfi: string;
  currentAccount: string;
  helpPhone: string;
}
