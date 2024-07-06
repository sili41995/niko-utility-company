import { Messages } from '@/constants';
import {
  selectAddPeriod,
  selectError,
  selectIsLoading,
} from '@/store/periods/selectors';
import { usePeriodsStore } from '@/store/store';
import { IUseAddPeriod } from '@/types/hooks.types';
import { BtnClickEvent } from '@/types/types';
import { makeBlur, toasts } from '@/utils';

const useAddPeriod = (): IUseAddPeriod => {
  const addPeriod = usePeriodsStore(selectAddPeriod);
  const isLoading = usePeriodsStore(selectIsLoading);
  const error = usePeriodsStore(selectError);

  const addNewPeriod = async () => {
    try {
      await addPeriod();
      toasts.successToast(Messages.periodAddSuccess);
    } catch (error) {
      if (error instanceof Error) {
        const isDuplicatePeriodErr =
          error.message.toLowerCase() === 'period already use';
        const errorMessage = isDuplicatePeriodErr
          ? Messages.duplicatePeriodErr
          : error.message;
        toasts.errorToast(errorMessage);
      }
    }
  };

  const onAddPeriodBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    addNewPeriod();
  };
  return { isLoading, error, onAddPeriodBtnClick };
};

export default useAddPeriod;
