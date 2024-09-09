import { IAddSubscriberAccountFormData } from './subscriberAccount.types';

export type Residents = Pick<IAddSubscriberAccountFormData, 'residents'>;

export type Surname = Pick<IAddSubscriberAccountFormData, 'surname'>;

export type Phone = Pick<IAddSubscriberAccountFormData, 'phone'>;

export type Period = Pick<IAddSubscriberAccountFormData, 'period'>;

export type Email = Pick<IAddSubscriberAccountFormData, 'email'>;

export type SubscriberAccountNumber = Pick<
  IAddSubscriberAccountFormData,
  'number'
>;

export type Name = Pick<IAddSubscriberAccountFormData, 'name'>;

export type MiddleName = Pick<IAddSubscriberAccountFormData, 'middleName'>;

export type IsRemovalHouseholdWaste = Pick<
  IAddSubscriberAccountFormData,
  'isRemovalHouseholdWaste'
>;

export type IsLivingApartment = Pick<
  IAddSubscriberAccountFormData,
  'isLivingApartment'
>;

export type IsEligibleForBenefit = Pick<
  IAddSubscriberAccountFormData,
  'isEligibleForBenefit'
>;

export type ContractNumber = Pick<
  IAddSubscriberAccountFormData,
  'contractNumber'
>;

export type ContractDate = Pick<IAddSubscriberAccountFormData, 'contractDate'>;

export type Category = Pick<IAddSubscriberAccountFormData, 'category'>;

export type Apartment = Pick<IAddSubscriberAccountFormData, 'apartment'>;

export type AdditionalPhone = Pick<
  IAddSubscriberAccountFormData,
  'additionalPhone'
>;
