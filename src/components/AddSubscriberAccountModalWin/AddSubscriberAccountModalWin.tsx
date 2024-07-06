import { FC } from 'react';
import ModalWin from '@/components/ModalWin';
import { IProps } from './AddSubscriberAccountModalWin.types';
import AddSubscriberAccountSection from '@/components/AddSubscriberAccountSection';

const AddSubscriberAccountModalWin: FC<IProps> = ({ setModalWinState }) => {
  return (
    <ModalWin setModalWinState={setModalWinState}>
      <AddSubscriberAccountSection />
    </ModalWin>
  );
};

export default AddSubscriberAccountModalWin;
