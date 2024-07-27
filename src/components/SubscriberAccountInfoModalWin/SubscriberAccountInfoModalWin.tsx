import { FC, useEffect, useState } from 'react';
import ModalWin from '@/components/ModalWin';
import { IProps } from './SubscriberAccountInfoModalWin.types';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, ContentWrap } from './SubscriberAccountInfoModalWin.styled';
import { SubscriberAccountInfoCategories } from '@/constants';
import { InputChangeEvent } from '@/types/types';
import SubscriberAccountInfoModalWinControls from '@/components/SubscriberAccountInfoModalWinControls';
import EditSubscriberAccountForm from '@/components/EditSubscriberAccountForm';
import PaymentsTable from '@/components/PaymentsTable';
import PricesTable from '@/components/PricesTable';

const SubscriberAccountInfoModalWin: FC<IProps> = ({
  setModalWinState,
  subscriberAccount,
}) => {
  const [category, setCategory] = useState<string>(
    () => SubscriberAccountInfoCategories.balance
  );

  const isBalanceCategory =
    category === SubscriberAccountInfoCategories.balance;
  const isPricesCategory = category === SubscriberAccountInfoCategories.prices;
  const isPriceAdjustmentsCategory =
    category === SubscriberAccountInfoCategories.priceAdjustments;
  const isPaymentsCategory =
    category === SubscriberAccountInfoCategories.payments;
  const isEditingCategory =
    category === SubscriberAccountInfoCategories.editing;

  const title = `Абонентський рахунок ${subscriberAccount.subscriberAccount}:`;

  const onInputChange = (e: InputChangeEvent): void => {
    setCategory(e.currentTarget.value);
  };

  useEffect(() => {
    console.log(subscriberAccount);
  });

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title={title} />
        <ContentWrap>
          <SubscriberAccountInfoModalWinControls
            isBalanceCategory={isBalanceCategory}
            isPricesCategory={isPricesCategory}
            isPriceAdjustmentsCategory={isPriceAdjustmentsCategory}
            isPaymentsCategory={isPaymentsCategory}
            isEditingCategory={isEditingCategory}
            onChange={onInputChange}
          />
          {isPriceAdjustmentsCategory && (
            <PricesTable prices={subscriberAccount.priceAdjustments} />
          )}
          {isPaymentsCategory && (
            <PaymentsTable payments={subscriberAccount.payments} />
          )}
          {isEditingCategory && (
            <EditSubscriberAccountForm subscriberAccount={subscriberAccount} />
          )}
        </ContentWrap>
      </Container>
    </ModalWin>
  );
};

export default SubscriberAccountInfoModalWin;
