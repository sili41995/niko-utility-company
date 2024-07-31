import { FC, useState } from 'react';
import ModalWin from '@/components/ModalWin';
import { IProps } from './SubscriberAccountInfoModalWin.types';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, ContentWrap } from './SubscriberAccountInfoModalWin.styled';
import { SubscriberAccountInfoCategories } from '@/constants';
import { InputChangeEvent } from '@/types/types';
import SubscriberAccountInfoModalWinControls from '@/components/SubscriberAccountInfoModalWinControls';
import EditSubscriberAccountForm from '@/components/EditSubscriberAccountForm';
import PaymentsCategory from '@/components/PaymentsCategory';
import PriceAdjustmentsCategory from '@/components/PriceAdjustmentsCategory';
import PricesCategory from '../PricesCategory';
import SubscriberAccountInfo from '../SubscriberAccountInfo';
import BalancesCategory from '../BalancesCategory';

const SubscriberAccountInfoModalWin: FC<IProps> = ({
  setModalWinState,
  subscriberAccount,
}) => {
  const [category, setCategory] = useState<string>(
    () => SubscriberAccountInfoCategories.balances
  );

  const isBalancesCategory =
    category === SubscriberAccountInfoCategories.balances;
  const isPricesCategory = category === SubscriberAccountInfoCategories.prices;
  const isPriceAdjustmentsCategory =
    category === SubscriberAccountInfoCategories.priceAdjustments;
  const isPaymentsCategory =
    category === SubscriberAccountInfoCategories.payments;
  const isEditingCategory =
    category === SubscriberAccountInfoCategories.editing;
  const { priceAdjustments, payments, prices } = subscriberAccount;

  const title = `Абонентський рахунок ${subscriberAccount.number}:`;

  const onInputChange = (e: InputChangeEvent): void => {
    setCategory(e.currentTarget.value);
  };

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title={title} />
        <ContentWrap>
          <SubscriberAccountInfo subscriberAccount={subscriberAccount} />
          <SubscriberAccountInfoModalWinControls
            isBalancesCategory={isBalancesCategory}
            isPricesCategory={isPricesCategory}
            isPriceAdjustmentsCategory={isPriceAdjustmentsCategory}
            isPaymentsCategory={isPaymentsCategory}
            isEditingCategory={isEditingCategory}
            onChange={onInputChange}
          />
          {isBalancesCategory && (
            <BalancesCategory subscriberAccount={subscriberAccount} />
          )}
          {isPricesCategory && <PricesCategory prices={prices} />}
          {isPriceAdjustmentsCategory && (
            <PriceAdjustmentsCategory priceAdjustments={priceAdjustments} />
          )}
          {isPaymentsCategory && <PaymentsCategory payments={payments} />}
          {isEditingCategory && (
            <EditSubscriberAccountForm subscriberAccount={subscriberAccount} />
          )}
        </ContentWrap>
      </Container>
    </ModalWin>
  );
};

export default SubscriberAccountInfoModalWin;
