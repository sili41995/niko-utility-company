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
import { GeneralParams, IconSizes } from '@/constants';
import { useTariffsList } from '@/hooks';
import AddTariffForm from '@/components/AddTariffForm';
import TariffsHistoryList from '@/components/TariffsHistoryList';
import { SectorType } from '@/types/sector.types';

const TariffsList: FC = () => {
  const {
    multiApartmentSectorTariffStartDate,
    multiApartmentSectorTariff,
    otherSectorTariffStartDate,
    otherSectorTariff,
    privateSectorTariffStartDate,
    privateSectorTariff,
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

  const multiApartmentSectorTariffValue = multiApartmentSectorTariff
    ? multiApartmentSectorTariff
    : GeneralParams.missingValue;
  const privateSectorTariffValue = privateSectorTariff
    ? privateSectorTariff
    : GeneralParams.missingValue;
  const otherSectorTariffValue = otherSectorTariff
    ? otherSectorTariff
    : GeneralParams.missingValue;

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
                sector={SectorType.multiApartment}
                tariff={multiApartmentSectorTariff}
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
                sector={SectorType.private}
                tariff={privateSectorTariff}
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
                <Text>
                  {otherSectorTariffValue} <Units>грн.</Units>
                </Text>
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
                sector={SectorType.other}
                tariff={otherSectorTariff}
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
