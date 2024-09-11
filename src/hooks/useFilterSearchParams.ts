import { GeneralParams, SearchParamsKeys } from '@/constants';
import useSetSearchParams from './useSetSearchParams';
import { IUseSubscriberAccountsFilterSearchParams } from '@/types/hooks.types';

const useFilterSearchParams = (): IUseSubscriberAccountsFilterSearchParams => {
  const { searchParams } = useSetSearchParams();
  const page = Number(searchParams.get(SearchParamsKeys.page) ?? '1');
  const limit = Number(GeneralParams.recordLimit);
  const surname = searchParams.get(SearchParamsKeys.surname) ?? '';
  const name = searchParams.get(SearchParamsKeys.name) ?? '';
  const number = searchParams.get(SearchParamsKeys.number) ?? '';
  const category = searchParams.get(SearchParamsKeys.category) ?? '';
  const street = searchParams.get(SearchParamsKeys.street) ?? '';
  const house = searchParams.get(SearchParamsKeys.house) ?? '';
  const apartment = searchParams.get(SearchParamsKeys.apartment) ?? '';
  const comment = searchParams.get(SearchParamsKeys.comment) ?? '';

  return {
    page,
    limit,
    surname,
    name,
    number,
    category,
    street,
    house,
    apartment,
    comment,
  };
};

export default useFilterSearchParams;
