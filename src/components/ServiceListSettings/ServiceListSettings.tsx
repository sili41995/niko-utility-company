import { FC } from 'react';
import SettingsSectionTitle from '../SettingsSectionTitle';
import { services } from '@/data/services';
import { ServiceCategories } from '@/constants';
import ServiceListItem from '../ServiceListItem';
import { groupServicesByCategory } from '@/utils';
import { Item, List } from './ServiceListSettings.styled';

const ServiceListSettings: FC = () => {
  const { centralizedDrainage, centralizedWaterSupply } =
    groupServicesByCategory(services);

  return (
    <>
      <SettingsSectionTitle title='Перелік послуг підприємства' />
      <List>
        <Item>
          <ServiceListItem
            services={centralizedWaterSupply}
            title={ServiceCategories.centralizedWaterSupply}
          />
        </Item>
        <Item>
          <ServiceListItem
            services={centralizedDrainage}
            title={ServiceCategories.centralizedDrainage}
          />
        </Item>
      </List>
    </>
  );
};

export default ServiceListSettings;
