import { ILastCalculate } from '@/types/accountingStore.types';
import HttpService from './http.service';
import {
  PriceAdjustmentData,
  IPriceAdjustment,
  IPayment,
  ITimePeriod,
  NewPaymentData,
  NewPayments,
  IReportsBySubscribersData,
  IHousesLocationData,
} from '@/types/data.types';
import {
  IFetchPaymentsFilters,
  IFetchPaymentsRes,
} from '@/types/paymentsStore.types';

class AccountingService extends HttpService {
  constructor() {
    super();
  }

  async fetchPrices(): Promise<ILastCalculate | null> {
    const response = await this.get<ILastCalculate | null>({
      url: 'accounting/prices',
    });

    return response.data;
  }

  async calculatePrices(): Promise<ILastCalculate> {
    const response = await this.patch<ILastCalculate, undefined>({
      url: 'accounting/prices',
    });

    return response.data;
  }

  async addPriceAdjustment(
    data: PriceAdjustmentData
  ): Promise<IPriceAdjustment> {
    const response = await this.post<IPriceAdjustment, PriceAdjustmentData>({
      url: 'accounting/prices',
      data,
    });

    return response.data;
  }

  async fetchPayments({
    limit,
    page = 1,
  }: IFetchPaymentsFilters): Promise<IFetchPaymentsRes> {
    const response = await this.get<IFetchPaymentsRes>({
      url: `accounting/payments?page=${page}&limit=${limit}`,
    });

    return response.data;
  }

  async addPayment(data: NewPaymentData): Promise<IPayment> {
    const response = await this.post<IPayment, NewPaymentData>({
      url: 'accounting/payments',
      data,
    });

    return response.data;
  }

  async addPayments(data: NewPayments): Promise<number> {
    const response = await this.post<number, NewPayments>({
      url: 'accounting/payments/multiple',
      data,
    });

    return response.data;
  }

  async fetchInvoices({
    houseId,
    streetId,
  }: IHousesLocationData): Promise<BlobPart> {
    const response = await this.get<BlobPart>({
      url: `accounting/invoices?streetId=${streetId}&houseId=${houseId}`,
      responseType: 'blob',
    });

    return response.data;
  }

  async fetchPaymentsBySourcePostage(): Promise<string> {
    const response = await this.get<string>({
      url: 'accounting/payments/postage',
    });

    return response.data;
  }

  async fetchPaymentsBySourcePrivatbank(): Promise<string> {
    const response = await this.get<string>({
      url: 'accounting/payments/privatbank',
    });

    return response.data;
  }

  async fetchPaymentsBySourceOshchadbank(): Promise<string> {
    const response = await this.get<string>({
      url: 'accounting/payments/oshchadbank',
    });

    return response.data;
  }

  async fetchPaymentsBySourceAbank(): Promise<string> {
    const response = await this.get<string>({
      url: 'accounting/payments/abank',
    });

    return response.data;
  }

  async fetchReportsByStreets({ from, to }: ITimePeriod): Promise<BlobPart> {
    const response = await this.get<BlobPart>({
      url: `accounting/reports/streets?from=${from}&to=${to}`,
      responseType: 'blob',
    });

    return response.data;
  }

  async fetchReportsByHouses({ from, to }: ITimePeriod): Promise<BlobPart> {
    const response = await this.get<BlobPart>({
      url: `accounting/reports/houses?from=${from}&to=${to}`,
      responseType: 'blob',
    });

    return response.data;
  }

  async fetchReportsBySubscribers({
    houseId,
    minDebt,
    periodId,
    streetId,
  }: IReportsBySubscribersData): Promise<BlobPart> {
    const response = await this.get<BlobPart>({
      url: `accounting/reports/subscribers?debt=${minDebt}&houseId=${houseId}&streetId=${streetId}&periodId=${periodId}`,
      responseType: 'blob',
    });

    return response.data;
  }
}

const accountingService = new AccountingService();

export default accountingService;
