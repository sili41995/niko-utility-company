import { Messages, PagePaths } from '@/constants';
import { ChangeEvent, MouseEvent } from 'react';

export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

export type DivClickEvent = MouseEvent<HTMLDivElement>;

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

export type InputChangeFunc = (e: InputChangeEvent) => void;

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
  [key: string]: string;
  [PagePaths.enterprises]: string;
  [PagePaths.subscribers]: string;
  [PagePaths.counters]: string;
  [PagePaths.accounting]: string;
  [PagePaths.oneOffJobs]: string;
  [PagePaths.materials]: string;
  [PagePaths.documents]: string;
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
}

export interface IPeriod {
  period: string;
  title: 'Поточний період' | 'Наступний період';
}

export type Period = IPeriod[];

export interface IGetCurrentDateParams {
  currentMonth: string;
  currentYear: string;
  firstDayOfMonth: string;
  period: Period;
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
