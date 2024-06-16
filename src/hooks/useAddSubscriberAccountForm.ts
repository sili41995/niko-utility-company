import { selectFetchHouses, selectHouses } from '@/store/houses/selectors';
import { useHousesStore, useStreetsStore } from '@/store/store';
import { selectFetchStreets, selectStreets } from '@/store/streets/selectors';
import { ISubscriberAccount } from '@/types/data.types';
import { IUseAddSubscriberAccountForm } from '@/types/hooks.types';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const useAddSubscriberAccountForm = (): IUseAddSubscriberAccountForm => {
  const { register, handleSubmit, watch } = useForm<ISubscriberAccount>();
  const streets = useStreetsStore(selectStreets);
  const streetId = watch('street');
  const fetchHouses = useHousesStore(selectFetchHouses);
  const houses = useHousesStore(selectHouses);
  const fetchStreets = useStreetsStore(selectFetchStreets);

  const defaultValue = streets[0]?.id;

  useEffect(() => {
    if (!streetId) {
      return;
    }

    fetchHouses(Number(streetId));
  }, [fetchHouses, streetId]);

  useEffect(() => {
    fetchStreets();
  }, [fetchStreets]);

  return {
    streets,
    register,
    handleSubmit,
    defaultValue,
    houses,
  };
};

export default useAddSubscriberAccountForm;
