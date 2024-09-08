import { IDocument } from '@/types/document.types';

export interface IProps {
  document: IDocument;
}

export interface IStyledTableDataTextProps {
  trimText?: boolean;
  center?: boolean;
}

export interface IStyledTableDataProps {
  center?: boolean;
}
