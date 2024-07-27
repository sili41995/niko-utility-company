import { FC } from 'react';
import { InputTypes, SubscriberAccountInfoCategories } from '@/constants';
import { IProps } from './SubscriberAccountInfoModalWinControls.types';
import { Form } from './SubscriberAccountInfoModalWinControls.styled';
import SubscriberAccountInfoModalWinBtn from '../SubscriberAccountInfoModalWinBtn';

const SubscriberAccountInfoModalWinControls: FC<IProps> = ({
  isAccrualsCategory,
  isAdjustmentCategory,
  isBalanceCategory,
  isEditingCategory,
  isPaymentsCategory,
  onChange,
}) => (
  <Form>
    <SubscriberAccountInfoModalWinBtn
      checked={isBalanceCategory}
      name={SubscriberAccountInfoCategories.name}
      onChange={onChange}
      type={InputTypes.radio}
      value={SubscriberAccountInfoCategories.balance}
      title='Стан рахунку'
    />
    <SubscriberAccountInfoModalWinBtn
      checked={isAccrualsCategory}
      name={SubscriberAccountInfoCategories.name}
      onChange={onChange}
      type={InputTypes.radio}
      value={SubscriberAccountInfoCategories.accruals}
      title='Нарахування'
    />
    <SubscriberAccountInfoModalWinBtn
      checked={isAdjustmentCategory}
      name={SubscriberAccountInfoCategories.name}
      onChange={onChange}
      type={InputTypes.radio}
      value={SubscriberAccountInfoCategories.adjustment}
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
