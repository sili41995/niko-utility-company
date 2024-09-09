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

// export type OwnerName = Pick<IOwner, 'name'>;

// export type MiddleName = Pick<IOwner, 'middleName'>;

// export type OwnerEmail = Pick<IOwner, 'email'>;

// export type Phone = Pick<IOwner, 'phone'>;

// export type AdditionalPhone = Pick<IOwner, 'additionalPhone'>;

// export type IsEligibleForBenefit = Pick<IOwner, 'isEligibleForBenefit'>;
