import { IFormatDateProps } from '@/types/types';
import { format, setDefaultOptions } from 'date-fns';
import { uk } from 'date-fns/locale';

const formatDate = ({ date, dateFormat }: IFormatDateProps): string => {
  setDefaultOptions({ locale: uk });

  return format(date, dateFormat);
};

export default formatDate;
