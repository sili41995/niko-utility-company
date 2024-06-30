import { FC } from 'react';
import ModalWin from '../ModalWin';
import { IProps } from './EditSubscriberAccountModalWin.types';
import FormDataTitle from '../FormDataTitle';
import { Container, ContentWrap } from './EditSubscriberAccountModalWin.styled';
import EditSubscriberAccountForm from '../EditSubscriberAccountForm';

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
