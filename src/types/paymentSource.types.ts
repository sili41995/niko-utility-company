export enum PaymentSourceType {
  cash = 'cash',
  privatbank = 'privatbank',
  oshchadbank = 'oshchadbank',
  postage = 'postage',
  ukrsibbank = 'ukrsibbank',
  benefits = 'benefits',
  adjustment = 'adjustment',
  aval = 'aval',
  ukrgasbank = 'ukrgasbank',
  abank = 'abank',
}

export interface IPaymentSource {
  name: PaymentSourceType;
  label: string;
}
