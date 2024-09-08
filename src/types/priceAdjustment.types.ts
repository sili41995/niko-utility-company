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

export type PriceAdjustmentDate = Pick<IPriceAdjustment, 'date'>;

export type Price = Pick<IPriceAdjustment, 'price'>;

export type PriceAdjustmentComment = Pick<IPriceAdjustment, 'comment'>;

export interface IGetPriceAdjustmentDataProps {
  data: IPriceAdjustmentFormData;
  id: number;
}
