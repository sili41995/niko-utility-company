import { Messages } from '@/constants';
import { House } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showHouseError = (errors: FieldErrors<House>): void => {
  errors.house && toasts.errorToast(Messages.houseReqErr);
};

export default showHouseError;
