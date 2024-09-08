import { ISelectData, SelectData } from '@/types/types';
import useHousesLocation from './useHousesLocation';
import { IUseHousesLocationSelectData } from '@/types/hooks.types';

const useHousesLocationSelectData = (
  streetId: string
): IUseHousesLocationSelectData => {
  const { housesData, streetsData } = useHousesLocation(streetId);

  const allHouses: ISelectData = { title: 'Всі будинки', value: '' };

  const housesSelectData: SelectData = streetId
    ? [allHouses, ...housesData]
    : [allHouses];
  const streetsSelectData: SelectData = [
    { title: 'Всі вулиці', value: '' },
    ...streetsData,
  ];

  return { housesSelectData, streetsSelectData };
};

export default useHousesLocationSelectData;
