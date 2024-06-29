import { IDocument } from '@/types/data.types';

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
