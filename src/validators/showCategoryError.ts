import { ErrorMessages } from '@/constants';
import { Category } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showCategoryError = (errors: FieldErrors<Category>): void => {
  errors.category && toasts.errorToast(ErrorMessages.categoryReqErr);
};

export default showCategoryError;
