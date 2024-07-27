import { FC, useState } from 'react';
import ModalWin from '@/components/ModalWin';
import { IProps } from './SubscriberAccountInfoModalWin.types';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, ContentWrap } from './SubscriberAccountInfoModalWin.styled';
import { SubscriberAccountInfoCategories } from '@/constants';
import { InputChangeEvent } from '@/types/types';
import SubscriberAccountInfoModalWinControls from '../SubscriberAccountInfoModalWinControls';
import EditSubscriberAccountForm from '../EditSubscriberAccountForm';

const SubscriberAccountInfoModalWin: FC<IProps> = ({
  setModalWinState,
  subscriberAccount,
}) => {
  const [category, setCategory] = useState<string>(
    () => SubscriberAccountInfoCategories.balance
  );

  const isBalanceCategory =
    category === SubscriberAccountInfoCategories.balance;
  const isAccrualsCategory =
    category === SubscriberAccountInfoCategories.accruals;
  const isAdjustmentCategory =
    category === SubscriberAccountInfoCategories.adjustment;
  const isPaymentsCategory =
    category === SubscriberAccountInfoCategories.payments;
  const isEditingCategory =
    category === SubscriberAccountInfoCategories.editing;

  const title = `Абонентський рахунок ${subscriberAccount.subscriberAccount}:`;

  const onInputChange = (e: InputChangeEvent): void => {
    setCategory(e.currentTarget.value);
  };

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title={title} />
        <ContentWrap>
          <SubscriberAccountInfoModalWinControls
            isBalanceCategory={isBalanceCategory}
            isAccrualsCategory={isAccrualsCategory}
            isAdjustmentCategory={isAdjustmentCategory}
            isPaymentsCategory={isPaymentsCategory}
            isEditingCategory={isEditingCategory}
            onChange={onInputChange}
          />
          {isEditingCategory && (
            <EditSubscriberAccountForm subscriberAccount={subscriberAccount} />
          )}
        </ContentWrap>
      </Container>
    </ModalWin>
  );
};

export default SubscriberAccountInfoModalWin;
