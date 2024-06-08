import { FC } from 'react';
import ModalWin from '../ModalWin';
import { IProps } from './AddSubscriberAccountModalWin.types';

const AddSubscriberAccountModalWin: FC<IProps> = ({ setModalWinState }) => {
  return (
    <ModalWin setModalWinState={setModalWinState}>
      <p>AddSubscriberAccountModalWin</p>
    </ModalWin>
  );
};

export default AddSubscriberAccountModalWin;
