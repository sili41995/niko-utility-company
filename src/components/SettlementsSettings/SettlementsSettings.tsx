import { FC } from 'react';
import {
  ListItem,
  Locality,
  SettlementsList,
  Title,
} from './SettlementsSettings.styled';

const SettlementsSettings: FC = () => {
  return (
    <>
      <Title>Підприємство працює з населеними пунктами:</Title>
      <SettlementsList>
        <ListItem>
          <Locality>
            м. Нікополь, Дніпропетровська область (Нікопольський)
          </Locality>
        </ListItem>
      </SettlementsList>
    </>
  );
};

export default SettlementsSettings;
