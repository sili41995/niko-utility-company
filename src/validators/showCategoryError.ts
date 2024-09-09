import { Messages } from '@/constants';
import { Category } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showCategoryError = (errors: FieldErrors<Category>): void => {
  errors.category && toasts.errorToast(Messages.categoryReqErr);
};

export default showCategoryError;
