import {
  selectError,
  selectIsLoaded,
  selectIsLoading,
} from '@/store/houses/selectors';
import { useHousesStore, useStreetsStore } from '@/store/store';
import {
  selectError as selectStreetsError,
  selectFetchStreets,
  selectIsLoaded as selectIsLoadedStreets,
  selectIsLoading as selectIsLoadingStreets,
} from '@/store/streets/selectors';
import { IUseStreetsData } from '@/types/hooks.types';
import { useEffect } from 'react';

const useStreetsData = (): IUseStreetsData => {
  const isLoadingStreets = useStreetsStore(selectIsLoadingStreets);
  const isLoadedStreets = useStreetsStore(selectIsLoadedStreets);
  const isLoadingStreetsData = !isLoadedStreets && isLoadingStreets;
  const fetchStreets = useStreetsStore(selectFetchStreets);
  const isLoadedHouses = useHousesStore(selectIsLoaded);
  const isLoadingHouses = useHousesStore(selectIsLoading);
  const isLoadingHousesData = !isLoadedHouses && isLoadingHouses;
  const isLoadingData = isLoadingHousesData || isLoadingStreetsData;
  const streetsError = useStreetsStore(selectStreetsError);
  const housesError = useHousesStore(selectError);
  const isError = Boolean(housesError || streetsError);

  useEffect(() => {
    fetchStreets();
  }, [fetchStreets]);

  return { isLoadingData, housesError, streetsError, isError };
};

export default useStreetsData;
