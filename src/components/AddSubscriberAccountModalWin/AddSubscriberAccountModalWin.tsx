import { FC } from 'react';
import ModalWin from '../ModalWin';
import { IProps } from './AddSubscriberAccountModalWin.types';
import AddSubscriberAccountSection from '../AddSubscriberAccountSection';

const AddSubscriberAccountModalWin: FC<IProps> = ({ setModalWinState }) => {
  return (
    <ModalWin setModalWinState={setModalWinState}>
      <AddSubscriberAccountSection />
    </ModalWin>
  );
};

export default AddSubscriberAccountModalWin;
