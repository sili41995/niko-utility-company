import { Messages } from '@/constants';
import { House } from '@/types/subscriberAccount.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showHouseIdError = (errors: FieldErrors<House>): void => {
  errors.houseId && toasts.errorToast(Messages.houseReqErr);
};

export default showHouseIdError;
