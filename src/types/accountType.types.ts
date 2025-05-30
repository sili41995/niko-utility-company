import { SelectData } from './types';

export interface IAccountType {
  id: number;
  category: AccountCategory;
  label: string;
}

export enum AccountCategory {
  naturalPerson = 'naturalPerson',
  juridicalPerson = 'juridicalPerson',
}

export interface IGetDefaultAccountTypesValueProps {
  accountTypes: SelectData;
  category: string;
}
