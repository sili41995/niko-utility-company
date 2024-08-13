import { SelectData, Streets } from '@/types/data.types';

const getStreetsSelectData = (streets: Streets): SelectData =>
  streets.map(({ name, type, id }) => ({
    title: `${type} ${name}`,
    value: String(id),
  }));

export default getStreetsSelectData;
