import { IGetDefaultAccountTypesValueProps } from '@/types/accountType';

const getDefaultAccountTypesValue = ({
  accountTypes,
  category,
}: IGetDefaultAccountTypesValueProps): string | undefined =>
  accountTypes.find(({ title }) => category === title)?.value;

export default getDefaultAccountTypesValue;
