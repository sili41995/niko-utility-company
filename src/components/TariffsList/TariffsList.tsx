import { FC } from 'react';
import {
  Container,
  List,
  ListItem,
  PriceWrap,
  ServiceWrap,
  Data,
  Text,
  Title,
  TitleWrap,
  Units,
  TariffWrap,
  EditBtn,
} from './TariffsList.styled';
import { MdEditNote } from 'react-icons/md';
import { DateFormats, IconSizes } from '@/constants';
import { useTariffsStore } from '@/store/store';
import { selectTariffs } from '@/store/tariffs/selectors';
import { formatDate, getCurrentTariffs } from '@/utils';
import { IProps } from './TariffsList.types';

const TariffsList: FC<IProps> = ({ onAddPrivateSectorTariffBtnClick }) => {
  const tariffs = useTariffsStore(selectTariffs);
  const { multiApartmentSectorTariff, otherSectorTariff, privateSectorTariff } =
    getCurrentTariffs(tariffs);
  const {
    start: multiApartmentSectorTariffStart = new Date(),
    tariff: multiApartmentSectorTariffValue,
  } = multiApartmentSectorTariff || {};
  const multiApartmentSectorTariffStartDate = formatDate({
    date: multiApartmentSectorTariffStart,
    dateFormat: DateFormats.date,
  });
  const {
    start: otherSectorTariffStart = new Date(),
    tariff: otherSectorTariffValue,
  } = otherSectorTariff || {};
  const otherSectorTariffStartDate = formatDate({
    date: otherSectorTariffStart,
    dateFormat: DateFormats.date,
  });
  const {
    start: privateSectorTariffStart = new Date(),
    tariff: privateSectorTariffValue,
  } = privateSectorTariff || {};
  const privateSectorTariffStartDate = formatDate({
    date: privateSectorTariffStart,
    dateFormat: DateFormats.date,
  });

  return (
    <Container>
      <TitleWrap>
        <Title>Поводження з побутовими відходами:</Title>
      </TitleWrap>
      <List>
        <ListItem>
          <TariffWrap>
            <EditBtn type='button' onClick={onAddPrivateSectorTariffBtnClick}>
              <MdEditNote size={IconSizes.primary} />
            </EditBtn>
            <Data>
              <ServiceWrap>
                <Text>Вивезення побутових відходів (б/с)</Text>
                <Text>
                  {multiApartmentSectorTariffValue}{' '}
                  <Units>грн./мешк., Норма</Units>
                </Text>
              </ServiceWrap>
              <PriceWrap>
                <Text>Діє з</Text>
                <Text>{multiApartmentSectorTariffStartDate}</Text>
              </PriceWrap>
            </Data>
          </TariffWrap>
        </ListItem>
        <ListItem>
          <TariffWrap>
            <EditBtn type='button'>
              <MdEditNote size={IconSizes.primary} />
            </EditBtn>
            <Data>
              <ServiceWrap>
                <Text>Вивезення побутових відходів (п/с)</Text>
                <Text>
                  {privateSectorTariffValue} <Units>грн./мешк., Норма</Units>
                </Text>
              </ServiceWrap>
              <PriceWrap>
                <Text>Діє з</Text>
                <Text>{privateSectorTariffStartDate}</Text>
              </PriceWrap>
            </Data>
          </TariffWrap>
        </ListItem>
        <ListItem>
          <TariffWrap>
            <EditBtn type='button'>
              <MdEditNote size={IconSizes.primary} />
            </EditBtn>
            <Data>
              <ServiceWrap>
                <Text>Вивезення побутових відходів (за 1м3)</Text>
                <Text>{otherSectorTariffValue} грн.</Text>
              </ServiceWrap>
              <PriceWrap>
                <Text>Діє з</Text>
                <Text>{otherSectorTariffStartDate}</Text>
              </PriceWrap>
            </Data>
          </TariffWrap>
        </ListItem>
      </List>
    </Container>
  );
};

export default TariffsList;
