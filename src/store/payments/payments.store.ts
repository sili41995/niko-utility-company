import setState from '@/store/setState';
import initialState from './initialState';
import {
  GetPaymentsStateFunc,
  IFetchPaymentsFilters,
  IFetchPaymentsRes,
  IPaymentsState,
  SetPaymentsStateFunc,
} from '@/types/paymentsStore.types';
import { addPayment, fetchPayments } from './operations';
import { IPayment, IPaymentData } from '@/types/payment.types';

const paymentsSlice = (
  set: SetPaymentsStateFunc,
  get: GetPaymentsStateFunc
): IPaymentsState => ({
  ...initialState,
  fetchPayments: async (
    data: IFetchPaymentsFilters
  ): Promise<IFetchPaymentsRes | undefined> =>
    await fetchPayments({
      set: setState({ set, name: 'fetchPayments' }),
      data,
      get,
    }),
  addPayment: async (data: IPaymentData): Promise<IPayment | undefined> =>
    await addPayment({
      data,
      set: setState({ set, name: 'addPayment' }),
      get,
    }),
});

const params = {
  name: 'paymentsStore',
};

const paymentsStore = {
  store: paymentsSlice,
  params,
};

export default paymentsStore;
