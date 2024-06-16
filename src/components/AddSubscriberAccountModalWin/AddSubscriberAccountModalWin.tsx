import { FC } from 'react';
import ModalWin from '../ModalWin';
import { IProps } from './AddSubscriberAccountModalWin.types';
import AddSubscriberAccountSection from '../AddSubscriberAccountSection';
import AddDataTitle from '../AddDataTitle';

const AddSubscriberAccountModalWin: FC<IProps> = ({ setModalWinState }) => {
  return (
    <ModalWin setModalWinState={setModalWinState}>
      <div>
        <AddDataTitle title='Створення нового Абонентського рахунку:' />
        <AddSubscriberAccountSection />
      </div>
    </ModalWin>
  );
};

export default AddSubscriberAccountModalWin;
