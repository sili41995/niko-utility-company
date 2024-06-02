import { ServiceCategories } from '@/constants';
import { Services } from '@/types/data';

export const services: Services = [
  {
    id: 1,
    name: 'Централізоване водопостачання1',
    category: ServiceCategories.centralizedWaterSupply,
    isActive: true,
  },
  {
    id: 2,
    name: 'Централізоване водопостачання2',
    category: ServiceCategories.centralizedWaterSupply,
    isActive: false,
  },
  {
    id: 3,
    name: 'Централізоване водовідведення1',
    category: ServiceCategories.centralizedDrainage,
    isActive: false,
  },
  {
    id: 4,
    name: 'Централізоване водовідведення2',
    category: ServiceCategories.centralizedDrainage,
    isActive: true,
  },
];
