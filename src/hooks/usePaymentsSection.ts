import {
  selectFetchPayments,
  selectIsLoaded,
  selectIsLoading,
  selectPayments,
  selectTotalCount,
} from '@/store/payments/selectors';
import { usePaymentsStore } from '@/store/store';
import { useFilterSearchParams } from '@/hooks';
import { useEffect } from 'react';
import { GeneralParams } from '@/constants';
import { IUsePaymentsSection } from '@/types/hooks.types';

const usePaymentsSection = (): IUsePaymentsSection => {
  const isLoaded = usePaymentsStore(selectIsLoaded);
  const fetchPayments = usePaymentsStore(selectFetchPayments);
  const totalCount = usePaymentsStore(selectTotalCount);
  const { page } = useFilterSearchParams();
  const payments = usePaymentsStore(selectPayments);
  const count = payments.length;
  const isLoading = usePaymentsStore(selectIsLoading);
  const showPagination = Boolean(totalCount && totalCount > count);
  const showPaymentsTable = Boolean(payments.length);

  useEffect(() => {
    fetchPayments({ page, limit: Number(GeneralParams.paymentsRecordLimit) });
  }, [fetchPayments, page]);

  return {
    isLoaded,
    isLoading,
    showPagination,
    totalCount,
    count,
    showPaymentsTable,
  };
};

export default usePaymentsSection;
