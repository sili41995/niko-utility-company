import { Messages } from '@/constants';
import { ChangeEvent, MouseEvent } from 'react';

export type Func = () => void;

export type DivClickEvent = MouseEvent<HTMLDivElement>;

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

export type SelectChangeEvent = ChangeEvent<HTMLSelectElement>;

export type InputChangeFunc = (e: InputChangeEvent) => void;

export type SelectChangeFunc = (e: SelectChangeEvent) => void;

export type OnBtnClickFunc = (e: BtnClickEvent) => void;

export type onDivClickFunc = (e: DivClickEvent) => void;

export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

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

export interface ISetBtnDisplayProps {
  currentPage?: number;
  page?: number;
  step?: number;
}

export interface ISaveFileProps {
  data: BlobPart;
  fileName: string;
}

export interface IAmount {
  amount: number;
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
