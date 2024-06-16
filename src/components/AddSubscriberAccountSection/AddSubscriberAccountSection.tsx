import { FC, useEffect } from 'react';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';
import AddSubscriberAccountForm from '../AddSubscriberAccountForm';
import {
  selectError,
  selectFetchStreets,
  selectIsLoaded,
  selectIsLoading,
} from '@/store/streets/selectors';
import { useStreetsStore } from '@/store/store';

const AddSubscriberAccountSection: FC = () => {
  const fetchStreets = useStreetsStore(selectFetchStreets);
  const isLoading = useStreetsStore(selectIsLoading);
  const isLoaded = useStreetsStore(selectIsLoaded);
  const isLoadingData = !isLoaded && isLoading;
  const error = useStreetsStore(selectError);

  useEffect(() => {
    fetchStreets();
  }, [fetchStreets]);

  return isLoadingData ? (
    <Loader />
  ) : (
    <>
      {isLoaded && <AddSubscriberAccountForm />}
      {error && <ErrorMessage error={error} />}
    </>
  );
};

export default AddSubscriberAccountSection;
