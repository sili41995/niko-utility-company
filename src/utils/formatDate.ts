import { IFormatDateProps } from '@/types/types';
import { format } from 'date-fns';

const formatDate = ({ date, dateFormat }: IFormatDateProps) =>
  format(date, dateFormat);

export default formatDate;
