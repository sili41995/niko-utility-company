export interface IOwner {
  id: number;
  surname: string;
  name: string;
  middleName: string;
  phone: string;
  additionalPhone: string;
  isEligibleForBenefit: boolean;
  email: string | undefined;
  birthday: Date | undefined;
}

export type NewOwner = Omit<IOwner, 'id'>;
