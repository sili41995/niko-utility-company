import { FC } from 'react';
import ModalWin from '../ModalWin';
import { IProps } from './AddSubscriberAccountModalWin.types';
import AddSubscriberAccountSection from '../AddSubscriberAccountSection';
import AddDataTitle from '../AddDataTitle';
import { Container } from './AddSubscriberAccountModalWin.styled';

const AddSubscriberAccountModalWin: FC<IProps> = ({ setModalWinState }) => {
  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <AddDataTitle title='Створення нового Абонентського рахунку:' />
        <AddSubscriberAccountSection />
      </Container>
    </ModalWin>
  );
};

export default AddSubscriberAccountModalWin;
