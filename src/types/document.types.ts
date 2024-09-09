export interface IDocument {
  id: number;
  name: string;
  comment: string;
  subscriberAccountId: number;
  createdAt: Date;
}

export type Documents = IDocument[];

export type NewDocument = Pick<IDocument, 'comment' | 'name'>;

export type DocumentName = Pick<IDocument, 'name'>;

export type Comment = Pick<IDocument, 'comment'>;
