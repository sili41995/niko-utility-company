export interface Contract {
  id: number;
  number: string;
  date: Date;
}

export type ContractNumber = Pick<Contract, 'number'>;

export type ContractDate = Pick<Contract, 'date'>;
