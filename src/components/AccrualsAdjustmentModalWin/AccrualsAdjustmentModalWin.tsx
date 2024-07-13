import { FC, useState } from 'react';
import { IProps } from './AccrualsAdjustmentModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import {
  Container,
  ContentContainer,
} from './AccrualsAdjustmentModalWin.styled';
import FindSubscriberAccountForm from '@/components/FindSubscriberAccountForm';
import { ISubscriberAccount } from '@/types/subscriberAccount.types';
import AccrualsAdjustmentForm from '@/components/AccrualsAdjustmentForm';

const AccrualsAdjustmentModalWin: FC<IProps> = ({ setModalWinState }) => {
  const [data, setData] = useState<ISubscriberAccount | null>(null);

  const setSubscriberAccount = (data: ISubscriberAccount): void => {
    setData(data);
  };

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Коригування нарахувань:' />
        <ContentContainer>
          {data ? (
            <AccrualsAdjustmentForm subscriberAccount={data} />
          ) : (
            <FindSubscriberAccountForm
              setSubscriberAccount={setSubscriberAccount}
            />
          )}
        </ContentContainer>
      </Container>
    </ModalWin>
  );
};

export default AccrualsAdjustmentModalWin;
