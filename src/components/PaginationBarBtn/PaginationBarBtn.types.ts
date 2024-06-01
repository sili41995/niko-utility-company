import { SetPage } from '@/types/hooks';

export interface IProps {
  number: number;
  currentPage: number;
  step: number;
  setPage: SetPage;
}
