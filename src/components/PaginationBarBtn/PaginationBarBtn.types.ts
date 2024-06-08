import { SetPage } from '@/types/hooks.types';

export interface IProps {
  number: number;
  currentPage: number;
  step: number;
  setPage: SetPage;
}
