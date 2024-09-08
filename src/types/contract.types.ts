export interface IContract {
  id: number;
  number: string;
  date: Date;
}

export type ContractNumber = Pick<IContract, 'number'>;

export type ContractDate = Pick<IContract, 'date'>;

export type NewContract = Omit<IContract, 'id'>;
