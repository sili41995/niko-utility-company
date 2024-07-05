import { DateFormats, Messages } from '@/constants';
import {
  selectAddPeriod,
  selectCurrentPeriod,
  selectError,
  selectIsLoading,
} from '@/store/periods/selectors';
import { usePeriodsStore } from '@/store/store';
import { IUseAddPeriod } from '@/types/hooks.types';
import { BtnClickEvent } from '@/types/types';
import { formatDate, makeBlur, toasts } from '@/utils';

const useAddPeriod = (): IUseAddPeriod => {
  const addPeriod = usePeriodsStore(selectAddPeriod);
  const isLoading = usePeriodsStore(selectIsLoading);
  const error = usePeriodsStore(selectError);
  const { start = new Date() } = usePeriodsStore(selectCurrentPeriod) || {};

  const currentPeriodDate = formatDate({
    date: start,
    dateFormat: DateFormats.period,
  });

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
  return { currentPeriodDate, isLoading, error, onAddPeriodBtnClick };
};

export default useAddPeriod;
