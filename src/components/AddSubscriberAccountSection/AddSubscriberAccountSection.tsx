import { FC } from 'react';
import Loader from '@/components/Loader';
import ErrorMessage from '@/components/ErrorMessage';
import AddSubscriberAccountForm from '@/components/AddSubscriberAccountForm';
import { useStreetsData } from '@/hooks';
import { Container, ContentWrap } from './AddSubscriberAccountSection.styled';
import FormDataTitle from '@/components/FormDataTitle';

const AddSubscriberAccountSection: FC = () => {
  const { isLoadingData, housesError, streetsError } = useStreetsData();

  return (
    <Container>
      <FormDataTitle title='Створення нового Абонентського рахунку:' />
      <ContentWrap>
        {isLoadingData ? <Loader /> : <AddSubscriberAccountForm />}
      </ContentWrap>
      {housesError && <ErrorMessage error={housesError} />}
      {streetsError && <ErrorMessage error={streetsError} />}
    </Container>
  );
};

export default AddSubscriberAccountSection;
