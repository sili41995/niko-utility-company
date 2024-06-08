import { ServiceCategories } from '@/constants';
import { Services } from '@/types/data.types';

const groupServicesByCategory = (services: Services) => {
  const centralizedWaterSupply = services.filter(
    ({ category }) => category === ServiceCategories.centralizedWaterSupply
  );
  const centralizedDrainage = services.filter(
    ({ category }) => category === ServiceCategories.centralizedDrainage
  );

  return { centralizedWaterSupply, centralizedDrainage };
};

export default groupServicesByCategory;
