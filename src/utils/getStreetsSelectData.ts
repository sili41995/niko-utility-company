import { SelectData } from '@/types/types';
import { Streets } from '@/types/street.types';

const getStreetsSelectData = (streets: Streets): SelectData =>
  streets.map(({ name, type, id }) => ({
    title: `${type} ${name}`,
    value: String(id),
  }));

export default getStreetsSelectData;
