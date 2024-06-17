import { AccountTypes, apartmentTypes, individualHeating } from '@/constants';
import { selectFetchHouses, selectHouses } from '@/store/houses/selectors';
import { useHousesStore, useStreetsStore } from '@/store/store';
import { selectStreets } from '@/store/streets/selectors';
import { ISubscriberAccount } from '@/types/data.types';
import { IUseAddSubscriberAccountForm } from '@/types/hooks.types';
import { getCurrentDateParams } from '@/utils';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const useAddSubscriberAccountForm = (): IUseAddSubscriberAccountForm => {
  const [checked, setChecked] = useState<boolean>(false);
  const { register, handleSubmit, watch } = useForm<ISubscriberAccount>();
  const streets = useStreetsStore(selectStreets);
  const streetId = watch('street');
  const fetchHouses = useHousesStore(selectFetchHouses);
  const houses = useHousesStore(selectHouses);
  const { currentMonth, currentYear, firstDayOfMonth, period } =
    getCurrentDateParams();
  const currentDate = `${currentYear}р. ${currentMonth}`;
  const accountTypes = Object.values(AccountTypes);
  const isLoading = false;
  //  const isLoading = false;
  const defaultValue = streets[0]?.id;

  useEffect(() => {
    if (!streetId) {
      return;
    }

    fetchHouses(Number(streetId));
  }, [fetchHouses, streetId]);

  const toggleCheckedStatus = () => {
    setChecked((prevState) => !prevState);
  };

  const handleFormSubmit: SubmitHandler<ISubscriberAccount> = (data) => {
    console.log(data);
  };

  return {
    streets,
    register,
    handleSubmit,
    handleFormSubmit,
    defaultValue,
    houses,
    currentDate,
    firstDayOfMonth,
    accountTypes,
    apartmentTypes,
    individualHeating,
    period,
    isLoading,
    checked,
    onCheckboxChange: toggleCheckedStatus,
  };
};

export default useAddSubscriberAccountForm;
