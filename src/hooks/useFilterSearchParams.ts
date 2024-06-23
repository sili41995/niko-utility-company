import { GeneralParams, SearchParamsKeys } from '@/constants';
import useSetSearchParams from './useSetSearchParams';
import { IUseFilterSearchParams } from '@/types/hooks.types';

const useFilterSearchParams = (): IUseFilterSearchParams => {
  const { searchParams } = useSetSearchParams();
  const page = Number(searchParams.get(SearchParamsKeys.page) ?? '1');
  const limit = Number(GeneralParams.recordLimit);
  const surname = searchParams.get(SearchParamsKeys.surname) ?? '';
  const name = searchParams.get(SearchParamsKeys.name) ?? '';
  const account = searchParams.get(SearchParamsKeys.account) ?? '';
  const type = searchParams.get(SearchParamsKeys.type) ?? '';
  const street = searchParams.get(SearchParamsKeys.street) ?? '';
  const house = searchParams.get(SearchParamsKeys.house) ?? '';
  const apartment = searchParams.get(SearchParamsKeys.apartment) ?? '';

  return {
    page,
    limit,
    surname,
    name,
    account,
    type,
    street,
    house,
    apartment,
  };
};

export default useFilterSearchParams;
