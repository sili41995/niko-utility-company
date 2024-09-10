import { ErrorMessages } from '@/constants';
import { HouseId } from '@/types/locationValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showHouseIdError = (errors: FieldErrors<HouseId>): void => {
  errors.houseId && toasts.errorToast(ErrorMessages.houseIdReqErr);
};

export default showHouseIdError;
