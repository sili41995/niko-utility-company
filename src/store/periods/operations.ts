import accountingService from '@/services/accounting.service';
import operationWrapper from '@/store/periods/operationWrapper';
import { IPeriod, Periods } from '@/types/data.types';
import {
  IFetchPeriodsProps,
  IAddPeriodProps,
  IAddPaymentProps,
} from '@/types/periodsStore.types';
import { getUpdatedPeriods, updatePeriods } from '@/utils';

const fetchPeriodsOperation = async ({
  set,
}: IFetchPeriodsProps): Promise<Periods | undefined> => {
  const response = await accountingService.fetchPeriods();
  set({
    items: response,
    isLoaded: true,
  });
  return response;
};

const addPeriodOperation = async ({
  set,
  get,
}: IAddPeriodProps): Promise<IPeriod | undefined> => {
  const { items: periods } = get();

  const response = await accountingService.addPeriod();
  const updatedPeriods = updatePeriods({ periods, newPeriod: response });
  set({
    items: updatedPeriods,
  });
  return response;
};

const addLocalPaymentOperation = ({ set, data, get }: IAddPaymentProps) => {
  const { items: periods } = get();
  const currentPeriod = periods.find(({ isCurrentPeriod }) => isCurrentPeriod)!;
  const updatedCurrentPeriod = {
    ...currentPeriod,
    payments: [...currentPeriod.payments, data],
  };

  const updatedPeriods = getUpdatedPeriods({
    periods,
    updatedPeriod: updatedCurrentPeriod,
  });

  set({ items: updatedPeriods });

  return updatedCurrentPeriod;
};

export const fetchPeriods = operationWrapper(fetchPeriodsOperation);
export const addPeriod = operationWrapper(addPeriodOperation);
export const addLocalPayment = addLocalPaymentOperation;
