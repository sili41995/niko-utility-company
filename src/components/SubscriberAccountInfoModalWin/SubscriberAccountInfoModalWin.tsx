import { FC, useEffect, useState } from 'react';
import ModalWin from '@/components/ModalWin';
import { IProps } from './SubscriberAccountInfoModalWin.types';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, ContentWrap } from './SubscriberAccountInfoModalWin.styled';
import { Messages, SubscriberAccountInfoCategories } from '@/constants';
import { InputChangeEvent } from '@/types/types';
import SubscriberAccountInfoModalWinControls from '@/components/SubscriberAccountInfoModalWinControls';
import EditSubscriberAccountForm from '@/components/EditSubscriberAccountForm';
import PaymentsTable from '@/components/PaymentsTable';
import PricesTable from '@/components/PricesTable';
import DefaultMessage from '../DefaultMessage';

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
  const { priceAdjustments, payments } = subscriberAccount;
  const showPricesTable = Boolean(priceAdjustments.length);
  const showPaymentsTable = Boolean(payments.length);

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
          {isPriceAdjustmentsCategory &&
            (showPricesTable ? (
              <PricesTable prices={priceAdjustments} />
            ) : (
              <DefaultMessage message={Messages.emptyPricesList} />
            ))}
          {isPaymentsCategory &&
            (showPaymentsTable ? (
              <PaymentsTable payments={payments} />
            ) : (
              <DefaultMessage message={Messages.emptyPaymentsList} />
            ))}
          {isEditingCategory && (
            <EditSubscriberAccountForm subscriberAccount={subscriberAccount} />
          )}
        </ContentWrap>
      </Container>
    </ModalWin>
  );
};

export default SubscriberAccountInfoModalWin;
