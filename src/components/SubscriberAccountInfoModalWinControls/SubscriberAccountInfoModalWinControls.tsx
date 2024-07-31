import { FC } from 'react';
import { InputTypes, SubscriberAccountInfoCategories } from '@/constants';
import { IProps } from './SubscriberAccountInfoModalWinControls.types';
import { Form } from './SubscriberAccountInfoModalWinControls.styled';
import SubscriberAccountInfoModalWinBtn from '@/components/SubscriberAccountInfoModalWinBtn';

const SubscriberAccountInfoModalWinControls: FC<IProps> = ({
  isPricesCategory,
  isPriceAdjustmentsCategory,
  isBalancesCategory,
  isEditingCategory,
  isPaymentsCategory,
  onChange,
}) => (
  <Form>
    <SubscriberAccountInfoModalWinBtn
      checked={isBalancesCategory}
      name={SubscriberAccountInfoCategories.name}
      onChange={onChange}
      type={InputTypes.radio}
      value={SubscriberAccountInfoCategories.balances}
      title='Стан рахунку'
    />
    <SubscriberAccountInfoModalWinBtn
      checked={isPricesCategory}
      name={SubscriberAccountInfoCategories.name}
      onChange={onChange}
      type={InputTypes.radio}
      value={SubscriberAccountInfoCategories.prices}
      title='Нарахування'
    />
    <SubscriberAccountInfoModalWinBtn
      checked={isPriceAdjustmentsCategory}
      name={SubscriberAccountInfoCategories.name}
      onChange={onChange}
      type={InputTypes.radio}
      value={SubscriberAccountInfoCategories.priceAdjustments}
      title='Коригування
'
    />
    <SubscriberAccountInfoModalWinBtn
      checked={isPaymentsCategory}
      name={SubscriberAccountInfoCategories.name}
      onChange={onChange}
      type={InputTypes.radio}
      value={SubscriberAccountInfoCategories.payments}
      title='Оплати'
    />
    <SubscriberAccountInfoModalWinBtn
      checked={isEditingCategory}
      name={SubscriberAccountInfoCategories.name}
      onChange={onChange}
      type={InputTypes.radio}
      value={SubscriberAccountInfoCategories.editing}
      title='Редагування'
    />
  </Form>
);

export default SubscriberAccountInfoModalWinControls;
