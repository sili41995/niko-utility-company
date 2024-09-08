import { IFullPayment } from '@/types/payment.types';

export interface IProps {
  payment: IFullPayment;
  fullInfo: boolean;
}

export interface IStyledTableDataProps {
  center?: boolean;
  capitalize?: boolean;
}
