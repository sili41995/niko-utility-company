import { FC } from 'react';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';
import AddSubscriberAccountForm from '../AddSubscriberAccountForm';
import {
  selectError as selectStreetsError,
  selectIsLoaded as selectIsLoadedStreets,
  selectIsLoading as selectIsLoadingStreets,
} from '@/store/streets/selectors';
import {
  selectError as selectHousesError,
  selectIsLoaded as selectIsLoadedHouses,
  selectIsLoading as selectIsLoadingHouses,
} from '@/store/houses/selectors';
import { useHousesStore, useStreetsStore } from '@/store/store';

const AddSubscriberAccountSection: FC = () => {
  const isLoadingStreets = useStreetsStore(selectIsLoadingStreets);
  const isLoadedStreets = useStreetsStore(selectIsLoadedStreets);
  const isLoadingStreetsData = !isLoadedStreets && isLoadingStreets;
  const isLoadedHouses = useHousesStore(selectIsLoadedHouses);
  const isLoadingHouses = useHousesStore(selectIsLoadingHouses);
  const isLoadingHousesData = !isLoadedHouses && isLoadingHouses;
  const isLoadingData = isLoadingStreetsData || isLoadingHousesData;
  const streetsError = useStreetsStore(selectStreetsError);
  const housesError = useHousesStore(selectHousesError);
  const isError = streetsError || housesError;

  return isLoadingData ? (
    <Loader />
  ) : (
    <>
      {!isError && <AddSubscriberAccountForm />}
      {streetsError && <ErrorMessage error={streetsError} />}
      {housesError && <ErrorMessage error={housesError} />}
    </>
  );
};

export default AddSubscriberAccountSection;
