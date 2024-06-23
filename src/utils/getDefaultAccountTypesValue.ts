import { IGetDefaultAccountTypesValueProps } from '@/types/types';

const getDefaultAccountTypesValue = ({
  accountTypes,
  type,
}: IGetDefaultAccountTypesValueProps): string | undefined =>
  accountTypes.find(({ title }) => type === title)?.value;

export default getDefaultAccountTypesValue;
