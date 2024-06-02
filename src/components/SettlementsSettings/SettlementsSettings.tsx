import { FC } from 'react';
import {
  Container,
  ListItem,
  Locality,
  SettlementsList,
  Title,
} from './SettlementsSettings';

const SettlementsSettings: FC = () => {
  return (
    <Container>
      <Title>Підприємство працює з населеними пунктами:</Title>
      <SettlementsList>
        <ListItem>
          <Locality>
            м. Нікополь, Дніпропетровська область (Нікопольський)
          </Locality>
        </ListItem>
      </SettlementsList>
    </Container>
  );
};

export default SettlementsSettings;
