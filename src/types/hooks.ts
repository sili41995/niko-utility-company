import { SetURLSearchParams } from 'react-router-dom';
import { IOnPageBtnClickProps, OnBtnClickFunc } from './types';
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { Credentials } from './data';

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
