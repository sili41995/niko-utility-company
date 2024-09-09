import { Messages } from '@/constants';
import { HouseId } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showHouseIdError = (errors: FieldErrors<HouseId>): void => {
  errors.houseId && toasts.errorToast(Messages.houseIdReqErr);
};

export default showHouseIdError;
