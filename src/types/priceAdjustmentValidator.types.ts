import { IPriceAdjustmentFormData } from './priceAdjustment.types';

export type Comment = Pick<IPriceAdjustmentFormData, 'comment'>;

export type Date = Pick<IPriceAdjustmentFormData, 'date'>;

export type Price = Pick<IPriceAdjustmentFormData, 'price'>;
