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
  const type = searchParams.get(SearchParamsKeys.type) ?? '';
  const street = searchParams.get(SearchParamsKeys.street) ?? '';
  const house = searchParams.get(SearchParamsKeys.house) ?? '';
  const apartment = searchParams.get(SearchParamsKeys.apartment) ?? '';
  const document = searchParams.get(SearchParamsKeys.document) ?? '';
  const comment = searchParams.get(SearchParamsKeys.comment) ?? '';

  return {
    page,
    limit,
    surname,
    name,
    number,
    type,
    street,
    house,
    apartment,
    comment,
    document,
  };
};

export default useFilterSearchParams;
