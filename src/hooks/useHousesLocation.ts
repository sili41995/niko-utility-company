import { selectFetchHouses, selectHouses } from '@/store/houses/selectors';
import { useHousesStore, useStreetsStore } from '@/store/store';
import { selectStreets } from '@/store/streets/selectors';
import { IUseHousesLocation } from '@/types/hooks.types';
import { getHousesSelectData, getStreetsSelectData } from '@/utils';
import { useEffect } from 'react';

const useHousesLocation = (streetId: string): IUseHousesLocation => {
  const fetchHouses = useHousesStore(selectFetchHouses);

  const streets = useStreetsStore(selectStreets);
  const houses = useHousesStore(selectHouses);

  const streetDefaultValue = streets[0]?.id;

  const housesData = getHousesSelectData(houses);
  const streetsData = getStreetsSelectData(streets);

  const allHouses = { title: 'Всі будинки', value: '' };
  const allHousesData = streetId ? [allHouses, ...housesData] : [allHouses];

  useEffect(() => {
    if (!streetId) {
      return;
    }

    fetchHouses(Number(streetId));
  }, [fetchHouses, streetId]);

  return { housesData, allHousesData, streetsData, streetDefaultValue };
};

export default useHousesLocation;
