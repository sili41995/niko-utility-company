import { Messages, ErrorMessages } from '@/constants';
import { selectAddPeriod, selectIsLoading } from '@/store/periods/selectors';
import { usePeriodsStore } from '@/store/store';
import { IUseAddPeriod } from '@/types/hooks.types';
import { BtnClickEvent } from '@/types/types';
import { makeBlur, toasts } from '@/utils';

const useAddPeriod = (): IUseAddPeriod => {
  const addPeriod = usePeriodsStore(selectAddPeriod);
  const isLoading = usePeriodsStore(selectIsLoading);

  const addNewPeriod = async () => {
    try {
      await addPeriod();
      toasts.successToast(Messages.addPeriodSuccess);
    } catch (error) {
      if (error instanceof Error) {
        const isDuplicatePeriodErr =
          error.message.toLowerCase() === 'period already use';
        const errorMessage = isDuplicatePeriodErr
          ? ErrorMessages.duplicatePeriodErr
          : error.message;
        toasts.errorToast(errorMessage);
      }
    }
  };

  const onAddPeriodBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    addNewPeriod();
  };
  return { isLoading, onAddPeriodBtnClick };
};

export default useAddPeriod;
