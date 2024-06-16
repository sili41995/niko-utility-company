import { FC } from 'react';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';
import AddSubscriberAccountForm from '../AddSubscriberAccountForm';
import { useStreetsData } from '@/hooks';

const AddSubscriberAccountSection: FC = () => {
  const { isLoadingData, housesError, streetsError, isError } =
    useStreetsData();

  return isLoadingData ? (
    <Loader />
  ) : (
    <>
      {!isError && <AddSubscriberAccountForm />}
      {housesError && <ErrorMessage error={housesError} />}
      {streetsError && <ErrorMessage error={streetsError} />}
    </>
  );
};

export default AddSubscriberAccountSection;
