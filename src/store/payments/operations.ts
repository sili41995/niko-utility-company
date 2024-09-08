import accountingService from '@/services/accounting.service';
import operationWrapper from '@/store/payments/operationWrapper';
import { IPayment } from '@/types/payment.types';
import {
  IAddPaymentProps,
  IFetchPaymentsProps,
  IFetchPaymentsRes,
} from '@/types/paymentsStore.types';

const fetchPaymentsOperation = async ({
  set,
  data,
}: IFetchPaymentsProps): Promise<IFetchPaymentsRes | undefined> => {
  const response = await accountingService.fetchPayments(data);
  set({
    items: response.data,
    count: response.count,
    isLoaded: true,
  });

  return response;
};

const addPaymentOperation = async ({
  data,
}: IAddPaymentProps): Promise<IPayment | undefined> => {
  const response = await accountingService.addPayment(data);

  return response;
};

export const fetchPayments = operationWrapper(fetchPaymentsOperation);
export const addPayment = operationWrapper(addPaymentOperation);
