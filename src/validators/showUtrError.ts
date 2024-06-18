import { Messages } from '@/constants';
import { Utr } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showUtrError = (errors: FieldErrors<Utr>): void => {
  errors.utr && toasts.errorToast(Messages.utrReqErr);
};

export default showUtrError;
