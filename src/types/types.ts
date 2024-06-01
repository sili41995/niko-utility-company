import { PagePaths } from '@/constants';
import { MouseEvent } from 'react';

export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

export type Func = () => void;

export interface INavSection {
  path: PagePaths;
  title: string;
  desc: string;
}

export type NavSections = INavSection[];

export interface IPathes {
  [key: string]: string;
  [PagePaths.houses]: string;
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
