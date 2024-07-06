import { FC } from 'react';
import {
  Container,
  List,
  ListItem,
  PeriodWrap,
  ServiceWrap,
  Data,
  Text,
  Title,
  TitleWrap,
  Units,
  TariffWrap,
  EditBtn,
  ControlsWrap,
  ShowHistoryBtn,
} from './TariffsList.styled';
import { MdEditNote, MdListAlt } from 'react-icons/md';
import AddDataModalForm from '@/components/AddDataModalForm';
import { IconSizes, SectorTypes } from '@/constants';
import { useTariffsList } from '@/hooks';
import AddTariffForm from '@/components/AddTariffForm';
import TariffsHistoryList from '@/components/TariffsHistoryList';

const TariffsList: FC = () => {
  const {
    multiApartmentSectorTariffStartDate,
    multiApartmentSectorTariffValue,
    otherSectorTariffStartDate,
    otherSectorTariffValue,
    privateSectorTariffStartDate,
    privateSectorTariffValue,
    showAddMultiApartmentSectorTariffForm,
    showAddOtherSectorTariffForm,
    showAddPrivateSectorTariffForm,
    showMultiApartmentSectorTariffsHistory,
    showOtherSectorTariffsHistory,
    showPrivateSectorTariffsHistory,
    toggleShowAddMultiApartmentSectorTariffForm,
    toggleShowAddOtherSectorTariffForm,
    toggleShowAddPrivateSectorTariffForm,
    toggleShowMultiApartmentSectorTariffsHistory,
    toggleShowOtherSectorTariffsHistory,
    toggleShowPrivateSectorTariffsHistory,
    multiApartmentSectorTariffs,
    privateSectorTariffs,
    otherSectorTariffs,
  } = useTariffsList();

  return (
    <Container>
      <TitleWrap>
        <Title>Поводження з побутовими відходами:</Title>
      </TitleWrap>
      <List>
        <ListItem>
          <TariffWrap>
            <ControlsWrap>
              <EditBtn
                type='button'
                onClick={toggleShowAddMultiApartmentSectorTariffForm}
                disabled={showAddMultiApartmentSectorTariffForm}
              >
                <MdEditNote size={IconSizes.primary} />
              </EditBtn>
              <ShowHistoryBtn
                type='button'
                onClick={toggleShowMultiApartmentSectorTariffsHistory}
                disabled={showMultiApartmentSectorTariffsHistory}
              >
                <MdListAlt size={IconSizes.primary} />
              </ShowHistoryBtn>
            </ControlsWrap>
            <Data>
              <ServiceWrap>
                <Text>Вивезення побутових відходів (б/с)</Text>
                <Text>
                  {multiApartmentSectorTariffValue}{' '}
                  <Units>грн./мешк., Норма</Units>
                </Text>
              </ServiceWrap>
              <PeriodWrap>
                <Text>Діє з</Text>
                <Text>{multiApartmentSectorTariffStartDate}</Text>
              </PeriodWrap>
            </Data>
          </TariffWrap>
          {showAddMultiApartmentSectorTariffForm && (
            <AddDataModalForm
              title='Додати новий тариф (б/с)'
              onCloseBtnClick={toggleShowAddMultiApartmentSectorTariffForm}
              marginTop={1}
            >
              <AddTariffForm
                sector={SectorTypes.multiApartment}
                tariff={multiApartmentSectorTariffValue}
              />
            </AddDataModalForm>
          )}
          {showMultiApartmentSectorTariffsHistory && (
            <TariffsHistoryList
              tariffs={multiApartmentSectorTariffs}
              onCloseBtnClick={toggleShowMultiApartmentSectorTariffsHistory}
            />
          )}
        </ListItem>
        <ListItem>
          <TariffWrap>
            <ControlsWrap>
              <EditBtn
                type='button'
                onClick={toggleShowAddPrivateSectorTariffForm}
                disabled={showAddPrivateSectorTariffForm}
              >
                <MdEditNote size={IconSizes.primary} />
              </EditBtn>
              <ShowHistoryBtn
                type='button'
                onClick={toggleShowPrivateSectorTariffsHistory}
                disabled={showPrivateSectorTariffsHistory}
              >
                <MdListAlt size={IconSizes.primary} />
              </ShowHistoryBtn>
            </ControlsWrap>
            <Data>
              <ServiceWrap>
                <Text>Вивезення побутових відходів (п/с)</Text>
                <Text>
                  {privateSectorTariffValue} <Units>грн./мешк., Норма</Units>
                </Text>
              </ServiceWrap>
              <PeriodWrap>
                <Text>Діє з</Text>
                <Text>{privateSectorTariffStartDate}</Text>
              </PeriodWrap>
            </Data>
          </TariffWrap>
          {showAddPrivateSectorTariffForm && (
            <AddDataModalForm
              title='Додати новий тариф (п/с)'
              onCloseBtnClick={toggleShowAddPrivateSectorTariffForm}
              marginTop={1}
            >
              <AddTariffForm
                sector={SectorTypes.private}
                tariff={privateSectorTariffValue}
              />
            </AddDataModalForm>
          )}
          {showPrivateSectorTariffsHistory && (
            <TariffsHistoryList
              tariffs={privateSectorTariffs}
              onCloseBtnClick={toggleShowPrivateSectorTariffsHistory}
            />
          )}
        </ListItem>
        <ListItem>
          <TariffWrap>
            <ControlsWrap>
              <EditBtn
                type='button'
                onClick={toggleShowAddOtherSectorTariffForm}
                disabled={showAddOtherSectorTariffForm}
              >
                <MdEditNote size={IconSizes.primary} />
              </EditBtn>
              <ShowHistoryBtn
                type='button'
                onClick={toggleShowOtherSectorTariffsHistory}
                disabled={showOtherSectorTariffsHistory}
              >
                <MdListAlt size={IconSizes.primary} />
              </ShowHistoryBtn>
            </ControlsWrap>
            <Data>
              <ServiceWrap>
                <Text>Вивезення побутових відходів (за 1м3)</Text>
                <Text>{otherSectorTariffValue} грн.</Text>
              </ServiceWrap>
              <PeriodWrap>
                <Text>Діє з</Text>
                <Text>{otherSectorTariffStartDate}</Text>
              </PeriodWrap>
            </Data>
          </TariffWrap>
          {showAddOtherSectorTariffForm && (
            <AddDataModalForm
              title='Додати новий тариф'
              onCloseBtnClick={toggleShowAddOtherSectorTariffForm}
              marginTop={1}
            >
              <AddTariffForm
                sector={SectorTypes.other}
                tariff={otherSectorTariffValue}
              />
            </AddDataModalForm>
          )}
          {showOtherSectorTariffsHistory && (
            <TariffsHistoryList
              tariffs={otherSectorTariffs}
              onCloseBtnClick={toggleShowOtherSectorTariffsHistory}
            />
          )}
        </ListItem>
      </List>
    </Container>
  );
};

export default TariffsList;
