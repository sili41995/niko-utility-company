import accountingService from '@/services/accounting.service';
import operationWrapper from '@/store/periods/operationWrapper';
import { IPeriod, Periods } from '@/types/data.types';
import {
  IFetchPeriodsProps,
  IAddPeriodProps,
} from '@/types/periodsStore.types';
import { updatePeriods } from '@/utils';

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

export const fetchPeriods = operationWrapper(fetchPeriodsOperation);
export const addPeriod = operationWrapper(addPeriodOperation);
