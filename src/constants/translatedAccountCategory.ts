import { AccountCategory } from '@/types/accountType.types';

const translatedAccountCategory: { [key in AccountCategory]: string } = {
  juridicalPerson: 'Юридична особа',
  naturalPerson: 'Фізична особа',
};

export default translatedAccountCategory;