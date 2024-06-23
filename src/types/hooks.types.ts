import { SetURLSearchParams } from 'react-router-dom';
import {
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
  ISubscriberAccountFormData,
  NewUser,
  SelectData,
} from './data.types';

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
  handleSubmit: UseFormHandleSubmit<ISubscriberAccountFormData, undefined>;
  handleFormSubmit: SubmitHandler<ISubscriberAccountFormData>;
  register: UseFormRegister<ISubscriberAccountFormData>;
  currentDate: string;
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
  isError: boolean;
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
  isLoaded: boolean;
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
  error: string | null;
  setModalWinState: Func;
  showModalWin: boolean;
  isLoading: boolean;
}

export interface IUseFilter {
  onFilterChange: (e: InputChangeEvent | SelectChangeEvent) => void;
  surname: string;
  name: string;
  account: string;
  accountTypes: SelectData;
  defaultAccountTypesValue: string | undefined;
  street: string;
  house: string;
  apartment: string;
}

export interface IUseFilterSearchParams {
  page: number;
  limit: number;
  surname: string;
  name: string;
  account: string;
  type: string;
  street: string;
  house: string;
  apartment: string;
}
