export interface IContract {
  id: number;
  number: string;
  date: Date;
}

export type NewContract = Omit<IContract, 'id'>;
