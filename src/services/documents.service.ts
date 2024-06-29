import {
  IFetchDocumentsFilters,
  IFetchDocumentsRes,
} from '@/types/documentsStore.types';
import HttpService from './http.service';

class DocumentsService extends HttpService {
  constructor() {
    super();
  }

  async fetchDocuments({
    limit,
    page = 1,
    comment,
    document,
  }: IFetchDocumentsFilters): Promise<IFetchDocumentsRes> {
    const response = await this.get<IFetchDocumentsRes>({
      url: `documents?page=${page}&limit=${limit}&document=${document}&comment=${comment}`,
    });

    return response.data;
  }
}

const documentsService = new DocumentsService();

export default documentsService;
