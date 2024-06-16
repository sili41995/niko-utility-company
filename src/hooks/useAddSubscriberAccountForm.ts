import { AccountTypes, apartmentTypes, individualHeating } from '@/constants';
import { selectFetchHouses, selectHouses } from '@/store/houses/selectors';
import { useHousesStore, useStreetsStore } from '@/store/store';
import { selectStreets } from '@/store/streets/selectors';
import { ISubscriberAccount } from '@/types/data.types';
import { IUseAddSubscriberAccountForm } from '@/types/hooks.types';
import { getCurrentDateParams } from '@/utils';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const useAddSubscriberAccountForm = (): IUseAddSubscriberAccountForm => {
  const { register, handleSubmit, watch } = useForm<ISubscriberAccount>();
  const streets = useStreetsStore(selectStreets);
  const streetId = watch('street');
  const fetchHouses = useHousesStore(selectFetchHouses);
  const houses = useHousesStore(selectHouses);
  const { currentMonth, currentYear, firstDayOfMonth } = getCurrentDateParams();
  const currentDate = `${currentYear}р. ${currentMonth}`;
  const accountTypes = Object.values(AccountTypes);

  const defaultValue = streets[0]?.id;

  useEffect(() => {
    if (!streetId) {
      return;
    }

    fetchHouses(Number(streetId));
  }, [fetchHouses, streetId]);

  return {
    streets,
    register,
    handleSubmit,
    defaultValue,
    houses,
    currentDate,
    firstDayOfMonth,
    accountTypes,
    apartmentTypes,
    individualHeating,
  };
};

export default useAddSubscriberAccountForm;
