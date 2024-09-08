import { FC, useState } from 'react';
import { IProps } from './PriceAdjustmentsModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, ContentContainer } from './PriceAdjustmentsModalWin.styled';
import FindSubscriberAccountForm from '@/components/FindSubscriberAccountForm';
import { IFullSubscriberAccount } from '@/types/subscriberAccount.types';
import PriceAdjustmentForm from '@/components/PriceAdjustmentForm';
import { makeBlur } from '@/utils';
import { BtnClickEvent } from '@/types/types';

const PriceAdjustmentsModalWin: FC<IProps> = ({ setModalWinState }) => {
  const [data, setData] = useState<IFullSubscriberAccount | null>(null);

  const setSubscriberAccount = (data: IFullSubscriberAccount): void => {
    setData(data);
  };

  const resetSubscriberAccount = (e: BtnClickEvent): void => {
    makeBlur(e.currentTarget);
    setData(null);
  };

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Коригування нарахувань:' />
        <ContentContainer>
          {data ? (
            <PriceAdjustmentForm
              subscriberAccount={data}
              resetSubscriberAccount={resetSubscriberAccount}
            />
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

export default PriceAdjustmentsModalWin;
