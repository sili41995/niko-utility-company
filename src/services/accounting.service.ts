import { ILastCalculate } from '@/types/accountingStore.types';
import HttpService from './http.service';
import {
  IFetchPaymentsFilters,
  IFetchPaymentsRes,
} from '@/types/paymentsStore.types';
import { IPayment, IPaymentData, PaymentsData } from '@/types/payment.types';
import {
  IPriceAdjustment,
  PriceAdjustmentData,
} from '@/types/priceAdjustment.types';
import { IHousesLocationData } from '@/types/types';
import { ITimePeriod } from '@/types/period.types';
import { IReportsBySubscribersData } from '@/types/report.types';

class AccountingService extends HttpService {
  constructor() {
    super();
  }

  async fetchPrices(): Promise<ILastCalculate | null> {
    const response = await this.get<ILastCalculate | null>({
      url: 'prices',
    });

    return response.data;
  }

  async calculatePrices(): Promise<ILastCalculate> {
    const response = await this.patch<ILastCalculate, undefined>({
      url: 'prices',
    });

    return response.data;
  }

  async addPriceAdjustment(
    data: PriceAdjustmentData
  ): Promise<IPriceAdjustment> {
    const response = await this.post<IPriceAdjustment, PriceAdjustmentData>({
      url: 'prices',
      data,
    });

    return response.data;
  }

  async fetchPayments({
    limit,
    page = 1,
  }: IFetchPaymentsFilters): Promise<IFetchPaymentsRes> {
    const response = await this.get<IFetchPaymentsRes>({
      url: `payments?page=${page}&limit=${limit}`,
    });

    return response.data;
  }

  async addPayment(data: IPaymentData): Promise<IPayment> {
    const response = await this.post<IPayment, IPaymentData>({
      url: 'payments',
      data,
    });

    return response.data;
  }

  async addPayments(data: PaymentsData): Promise<number> {
    const response = await this.post<number, PaymentsData>({
      url: 'payments/multiple',
      data,
    });

    return response.data;
  }

  async fetchInvoices({
    houseId,
    streetId,
  }: IHousesLocationData): Promise<BlobPart> {
    const response = await this.get<BlobPart>({
      url: `invoices?streetId=${streetId}&houseId=${houseId}`,
      responseType: 'blob',
    });

    return response.data;
  }

  async fetchPaymentsBySourcePostage(): Promise<string> {
    const response = await this.get<string>({
      url: 'payments/postage',
    });

    return response.data;
  }

  async fetchPaymentsBySourcePrivatbank(): Promise<string> {
    const response = await this.get<string>({
      url: 'payments/privatbank',
    });

    return response.data;
  }

  async fetchPaymentsBySourceOshchadbank(): Promise<string> {
    const response = await this.get<string>({
      url: 'payments/oshchadbank',
    });

    return response.data;
  }

  async fetchPaymentsBySourceAbank(): Promise<string> {
    const response = await this.get<string>({
      url: 'payments/abank',
    });

    return response.data;
  }

  async fetchReportsByStreets({ from, to }: ITimePeriod): Promise<BlobPart> {
    const response = await this.get<BlobPart>({
      url: `reports/streets?from=${from}&to=${to}`,
      responseType: 'blob',
    });

    return response.data;
  }

  async fetchReportsByHouses({ from, to }: ITimePeriod): Promise<BlobPart> {
    const response = await this.get<BlobPart>({
      url: `reports/houses?from=${from}&to=${to}`,
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
      url: `reports/subscribers?debt=${minDebt}&houseId=${houseId}&streetId=${streetId}&periodId=${periodId}`,
      responseType: 'blob',
    });

    return response.data;
  }
}

const accountingService = new AccountingService();

export default accountingService;
