import { Houses } from '@/types/house.types';
import { SelectData } from '@/types/types';

const getHousesSelectData = (houses: Houses): SelectData =>
  houses.map(({ id, number }) => ({
    title: number,
    value: String(id),
  }));

export default getHousesSelectData;
