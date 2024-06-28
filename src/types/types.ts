import { Messages, PagePaths } from '@/constants';
import { ChangeEvent, MouseEvent } from 'react';
import { SelectData } from './data.types';

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

export interface IPathes {
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

export interface IGetCurrentDateParams {
  currentMonth: string;
  currentYear: string;
  firstDayOfMonth: string;
  currentDate: string;
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
