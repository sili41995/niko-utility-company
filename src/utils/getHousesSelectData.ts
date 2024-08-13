import { Houses, SelectData } from '@/types/data.types';

const getHousesSelectData = (houses: Houses): SelectData =>
  houses.map(({ id, number }) => ({
    title: number,
    value: String(id),
  }));

export default getHousesSelectData;
