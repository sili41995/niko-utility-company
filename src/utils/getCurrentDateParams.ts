import { IGetCurrentDateParams } from '@/types/types';
import { format, setDefaultOptions } from 'date-fns';
import { uk } from 'date-fns/locale';

const getCurrentDateParams = (): IGetCurrentDateParams => {
  setDefaultOptions({ locale: uk });
  const date = new Date();
  const currentMonth = format(date, 'LLLL');
  const currentYear = format(date, 'yyyy');
  const firstDayOfMonth = format(date, 'yyyy-MM-01');

  return { currentMonth, currentYear, firstDayOfMonth };
};

export default getCurrentDateParams;
