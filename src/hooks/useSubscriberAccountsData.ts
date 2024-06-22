import { AccountTypes } from '@/constants';
import { selectHouses } from '@/store/houses/selectors';
import { useHousesStore, useStreetsStore } from '@/store/store';
import { selectStreets } from '@/store/streets/selectors';
import { IUseSubscriberAccountsData } from '@/types/hooks.types';
import { getSubscriberAccountSelectData } from '@/utils';

const useSubscriberAccountsData = (): IUseSubscriberAccountsData => {
  const streets = useStreetsStore(selectStreets);
  const houses = useHousesStore(selectHouses);
  const accountTypes = Object.values(AccountTypes);
  const { accountTypesData, housesData, streetsData } =
    getSubscriberAccountSelectData({ accountTypes, houses, streets });
  const streetDefaultValue = streets[0]?.id;

  return {
    accountTypes: accountTypesData,
    houses: housesData,
    streets: streetsData,
    streetDefaultValue,
  };
};

export default useSubscriberAccountsData;
