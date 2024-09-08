import { DateFormats, GeneralParams } from '@/constants';
import { useTariffsStore } from '@/store/store';
import { selectTariffs } from '@/store/tariffs/selectors';
import {
  filterTariffsBySector,
  formatDate,
  getCurrentTariffs,
  makeBlur,
} from '@/utils';
import { BtnClickEvent } from '@/types/types';
import { useState } from 'react';
import { IUseTariffsList } from '@/types/hooks.types';
import { SectorType } from '@/types/sector.types';

const useTariffsList = (): IUseTariffsList => {
  const [showAddPrivateSectorTariffForm, setShowAddPrivateSectorTariffForm] =
    useState<boolean>(false);
  const [showPrivateSectorTariffsHistory, setShowPrivateSectorTariffsHistory] =
    useState<boolean>(false);
  const [
    showAddMultiApartmentSectorTariffForm,
    setShowAddMultiApartmentSectorTariffForm,
  ] = useState<boolean>(false);
  const [
    showMultiApartmentSectorTariffsHistory,
    setShowMultiApartmentSectorTariffsHistory,
  ] = useState<boolean>(false);
  const [showAddOtherSectorTariffForm, setShowAddOtherSectorTariffForm] =
    useState<boolean>(false);
  const [showOtherSectorTariffsHistory, setShowOtherSectorTariffsHistory] =
    useState<boolean>(false);
  const tariffs = useTariffsStore(selectTariffs);

  const { multiApartmentSectorTariff, otherSectorTariff, privateSectorTariff } =
    getCurrentTariffs(tariffs);
  const {
    start: multiApartmentSectorTariffStart,
    price: multiApartmentSectorTariffValue = 0,
  } = multiApartmentSectorTariff || {};
  const multiApartmentSectorTariffStartDate = multiApartmentSectorTariffStart
    ? formatDate({
        date: multiApartmentSectorTariffStart,
        dateFormat: DateFormats.date,
      })
    : GeneralParams.missingValue;
  const { start: otherSectorTariffStart, price: otherSectorTariffValue = 0 } =
    otherSectorTariff || {};
  const otherSectorTariffStartDate = otherSectorTariffStart
    ? formatDate({
        date: otherSectorTariffStart,
        dateFormat: DateFormats.date,
      })
    : GeneralParams.missingValue;
  const {
    start: privateSectorTariffStart,
    price: privateSectorTariffValue = 0,
  } = privateSectorTariff || {};
  const privateSectorTariffStartDate = privateSectorTariffStart
    ? formatDate({
        date: privateSectorTariffStart,
        dateFormat: DateFormats.date,
      })
    : GeneralParams.missingValue;
  const multiApartmentSectorTariffs = filterTariffsBySector({
    tariffs,
    sector: SectorType.multiApartment,
  });
  const privateSectorTariffs = filterTariffsBySector({
    tariffs,
    sector: SectorType.private,
  });
  const otherSectorTariffs = filterTariffsBySector({
    tariffs,
    sector: SectorType.other,
  });

  const setShowAddPrivateSectorTariffFormState = () => {
    setShowAddPrivateSectorTariffForm((prevState) => !prevState);
  };

  const setShowPrivateSectorTariffsHistoryState = () => {
    setShowPrivateSectorTariffsHistory((prevState) => !prevState);
  };

  const setShowAddMultiApartmentSectorTariffFormState = () => {
    setShowAddMultiApartmentSectorTariffForm((prevState) => !prevState);
  };

  const setShowMultiApartmentSectorTariffsHistoryState = () => {
    setShowMultiApartmentSectorTariffsHistory((prevState) => !prevState);
  };

  const setShowAddOtherSectorTariffFormState = () => {
    setShowAddOtherSectorTariffForm((prevState) => !prevState);
  };

  const setShowOtherSectorTariffsHistoryState = () => {
    setShowOtherSectorTariffsHistory((prevState) => !prevState);
  };

  const toggleShowAddPrivateSectorTariffForm = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    setShowAddPrivateSectorTariffFormState();
  };

  const toggleShowPrivateSectorTariffsHistory = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    setShowPrivateSectorTariffsHistoryState();
  };

  const toggleShowAddMultiApartmentSectorTariffForm = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    setShowAddMultiApartmentSectorTariffFormState();
  };

  const toggleShowMultiApartmentSectorTariffsHistory = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    setShowMultiApartmentSectorTariffsHistoryState();
  };

  const toggleShowAddOtherSectorTariffForm = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    setShowAddOtherSectorTariffFormState();
  };

  const toggleShowOtherSectorTariffsHistory = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    setShowOtherSectorTariffsHistoryState();
  };

  return {
    showAddPrivateSectorTariffForm,
    showPrivateSectorTariffsHistory,
    showAddMultiApartmentSectorTariffForm,
    showMultiApartmentSectorTariffsHistory,
    showAddOtherSectorTariffForm,
    showOtherSectorTariffsHistory,
    multiApartmentSectorTariff: multiApartmentSectorTariffValue,
    multiApartmentSectorTariffStartDate,
    privateSectorTariff: privateSectorTariffValue,
    privateSectorTariffStartDate,
    otherSectorTariffStartDate,
    otherSectorTariff: otherSectorTariffValue,
    toggleShowAddPrivateSectorTariffForm,
    toggleShowPrivateSectorTariffsHistory,
    toggleShowAddMultiApartmentSectorTariffForm,
    toggleShowMultiApartmentSectorTariffsHistory,
    toggleShowAddOtherSectorTariffForm,
    toggleShowOtherSectorTariffsHistory,
    multiApartmentSectorTariffs,
    privateSectorTariffs,
    otherSectorTariffs,
  };
};

export default useTariffsList;
