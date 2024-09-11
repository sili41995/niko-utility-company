import { AccountCategory } from '@/types/accountType.types';

const translatedAccountCategory: { [key in AccountCategory]: string } = {
  [AccountCategory.juridicalPerson]: 'Юридична особа',
  [AccountCategory.naturalPerson]: 'Фізична особа',
};

export default translatedAccountCategory;
