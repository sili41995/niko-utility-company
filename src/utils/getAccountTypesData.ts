import { AccountCategory } from '@/types/accountType.types';
import { SelectData } from '@/types/types';

const getAccountTypesData = (isFilter?: boolean): SelectData =>
  Object.values(AccountCategory).map((type) => {
    const title =
      type === AccountCategory.naturalPerson
        ? 'Фізична особа'
        : type === AccountCategory.juridicalPerson
        ? 'Юридична особа'
        : 'інше';
    const value = isFilter ? title : type;

    return {
      title,
      value,
    };
  });

export default getAccountTypesData;
