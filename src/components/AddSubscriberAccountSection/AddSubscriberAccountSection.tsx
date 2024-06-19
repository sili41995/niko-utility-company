import { FC } from 'react';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';
import AddSubscriberAccountForm from '../AddSubscriberAccountForm';
import { useStreetsData } from '@/hooks';
import { Container } from './AddSubscriberAccountSection.styled';
import AddDataTitle from '../AddDataTitle';

const AddSubscriberAccountSection: FC = () => {
  const { isLoadingData, housesError, streetsError, isError } =
    useStreetsData();

  return (
    <Container>
      <AddDataTitle title='Створення нового Абонентського рахунку:' />
      {isLoadingData ? (
        <Loader />
      ) : (
        <>
          {!isError && <AddSubscriberAccountForm />}
          {housesError && <ErrorMessage error={housesError} />}
          {streetsError && <ErrorMessage error={streetsError} />}
        </>
      )}
    </Container>
  );
};

export default AddSubscriberAccountSection;
