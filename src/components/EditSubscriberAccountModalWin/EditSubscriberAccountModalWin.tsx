import { FC } from 'react';
import ModalWin from '@/components/ModalWin';
import { IProps } from './EditSubscriberAccountModalWin.types';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, ContentWrap } from './EditSubscriberAccountModalWin.styled';
import EditSubscriberAccountForm from '@/components/EditSubscriberAccountForm';

const EditSubscriberAccountModalWin: FC<IProps> = ({
  setModalWinState,
  subscriberAccount,
}) => {
  const title = `Редагування Абонентського рахунку ${subscriberAccount.subscriberAccount}:`;

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title={title} />
        <ContentWrap>
          <EditSubscriberAccountForm subscriberAccount={subscriberAccount} />
        </ContentWrap>
      </Container>
    </ModalWin>
  );
};

export default EditSubscriberAccountModalWin;
