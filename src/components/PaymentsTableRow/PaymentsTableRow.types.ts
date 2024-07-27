import { IPayment } from '@/types/data.types';

export interface IProps {
  payment: IPayment;
  fullInfo:boolean
}

export interface IStyledTableDataProps {
  center?: boolean;
  capitalize?: boolean;
}
