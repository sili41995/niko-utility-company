export interface IPriceAdjustment {
  id: number;
  price: number;
  date: Date;
  comment: string;
  subscriberAccountId: number;
  periodId: number;
}

export type PriceAdjustments = IPriceAdjustment[];

export type PriceAdjustmentData = Pick<
  IPriceAdjustment,
  'price' | 'date' | 'comment' | 'subscriberAccountId'
>;

export interface IPriceAdjustmentFormData
  extends Pick<IPriceAdjustment, 'comment'> {
  date: string;
  price: string;
}

export interface IGetPriceAdjustmentDataProps {
  data: IPriceAdjustmentFormData;
  id: number;
}
