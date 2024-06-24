import { FC } from 'react';
import ModalWin from '../ModalWin';
import { IProps } from './EditSubscriberAccountModalWin.types';
import FormDataTitle from '../FormDataTitle';
import { Container } from './EditSubscriberAccountModalWin.styled';
import EditSubscriberAccountForm from '../EditSubscriberAccountForm';

const EditSubscriberAccountModalWin: FC<IProps> = ({
  setModalWinState,
  subscriberAccount,
}) => {
  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Редагування Абонентського рахунку:' />
        <EditSubscriberAccountForm subscriberAccount={subscriberAccount} />
      </Container>
    </ModalWin>
  );
};

export default EditSubscriberAccountModalWin;
