export interface AccountType {
  id: number;
  category: AccountCategory;
  label: string;
}

const enum AccountCategory {
  naturalPerson = 'naturalPerson',
  juridicalPerson = 'juridicalPerson',
}

export type Category = Pick<AccountType, 'category'>;
