import { Messages } from '@/constants';
import DefaultMessage from '@/components/DefaultMessage';
import PaymentsTable from '@/components/PaymentsTable';
import { FC } from 'react';
import { IProps } from './PaymentsCategory.types';

const PaymentsCategory: FC<IProps> = ({ payments }) => {
  const showPaymentsTable = Boolean(payments.length);

  return showPaymentsTable ? (
    <PaymentsTable payments={payments} />
  ) : (
    <DefaultMessage message={Messages.emptyPaymentsList} />
  );
};

export default PaymentsCategory;
