import accountingService from '@/services/accounting.service';
import operationWrapper from '@/store/periods/operationWrapper';
import { IPeriod } from '@/types/data.types';
import { IFetchCurrentPeriodProps } from '@/types/periodsStore.types';

const fetchCurrentPeriodOperation = async ({
  set,
}: IFetchCurrentPeriodProps): Promise<IPeriod | undefined> => {
  const response = await accountingService.fetchCurrentPeriod();
  set({
    currentPeriod: response,
    isLoaded: true,
  });
  return response;
};

const addPeriodOperation = async ({
  set,
}: IFetchCurrentPeriodProps): Promise<IPeriod | undefined> => {
  const response = await accountingService.addPeriod();
  set({
    currentPeriod: response,
  });
  return response;
};

export const fetchCurrentPeriod = operationWrapper(fetchCurrentPeriodOperation);
export const addPeriod = operationWrapper(addPeriodOperation);
