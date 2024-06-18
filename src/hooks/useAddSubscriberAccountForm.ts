import { AccountTypes, apartmentTypes } from '@/constants';
import { selectFetchHouses, selectHouses } from '@/store/houses/selectors';
import { useHousesStore, useStreetsStore } from '@/store/store';
import { selectStreets } from '@/store/streets/selectors';
import { ISubscriberAccount, SelectData } from '@/types/data.types';
import { IUseAddSubscriberAccountForm } from '@/types/hooks.types';
import { filterAddSubscriberAccountData, getCurrentDateParams } from '@/utils';
import { validateAddSubscriberAccountForm } from '@/validators';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const useAddSubscriberAccountForm = (): IUseAddSubscriberAccountForm => {
  const [checked, setChecked] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<ISubscriberAccount>();
  const streets = useStreetsStore(selectStreets);
  const streetId = watch('street');
  const fetchHouses = useHousesStore(selectFetchHouses);
  const houses = useHousesStore(selectHouses);
  const { currentMonth, currentYear, firstDayOfMonth } = getCurrentDateParams();
  const currentDate = `${currentYear}р. ${currentMonth}`;
  const accountTypes = Object.values(AccountTypes);
  const isLoading = false;
  //  const isLoading = false;
  const streetDefaultValue = streets[0]?.id;
  const streetsSelectData: SelectData = streets.map(({ name, type, id }) => ({
    title: `${type} ${name}`,
    value: String(id),
  }));
  const housesSelectData: SelectData = houses.map(({ id, number }) => ({
    title: number,
    value: String(id),
  }));

  useEffect(() => {
    if (!streetId) {
      return;
    }

    fetchHouses(Number(streetId));
  }, [fetchHouses, streetId]);

  useEffect(() => {
    const invalidFields = Object.keys(errors);
    if (invalidFields.length) {
      validateAddSubscriberAccountForm(errors);
    }
  }, [isSubmitting, errors]);

  const toggleCheckedStatus = () => {
    setChecked((prevState) => !prevState);
  };

  const handleFormSubmit: SubmitHandler<ISubscriberAccount> = (data) => {
    const filteredAddSubscriberAccountData =
      filterAddSubscriberAccountData(data);
    console.log(filteredAddSubscriberAccountData);
  };

  return {
    streets: streetsSelectData,
    houses: housesSelectData,
    register,
    handleSubmit,
    handleFormSubmit,
    streetDefaultValue,
    currentDate,
    firstDayOfMonth,
    accountTypes,
    apartmentTypes,
    isLoading,
    checked,
    onCheckboxChange: toggleCheckedStatus,
  };
};

export default useAddSubscriberAccountForm;
