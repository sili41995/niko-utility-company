import { IUseAccountingReports } from '@/types/hooks.types';
import { useState } from 'react';

const useAccountingReports = (): IUseAccountingReports => {
  const [showCalcByStreetsModalWin, setShowCalcByStreetsModalWin] =
    useState<boolean>(false);
  const [showCalcByHousesModalWin, setShowCalcByHousesModalWin] =
    useState<boolean>(false);
  const [
    showCalcBySubscribersDebtModalWin,
    setShowCalcBySubscribersDebtModalWin,
  ] = useState<boolean>(false);
  const [
    showPersonalAccountStatementsModalWin,
    setShowPersonalAccountStatementsModalWin,
  ] = useState<boolean>(false);
  const [
    showPersonalAccountPaymentsModalWin,
    setShowPersonalAccountPaymentsModalWin,
  ] = useState<boolean>(false);
  const [showPriceAdjustmentsModalWin, setShowPriceAdjustmentsModalWin] =
    useState<boolean>(false);
  const [
    showPriceAdjustmentsTotalsModalWin,
    setShowPriceAdjustmentsTotalsModalWin,
  ] = useState<boolean>(false);
  const [showPricesModalWin, setShowPricesModalWin] = useState<boolean>(false);
  const [showPricesTotalsModalWin, setShowPricesTotalsModalWin] =
    useState<boolean>(false);
  const [showPaymentsModalWin, setShowPaymentsModalWin] =
    useState<boolean>(false);
  const [showPaymentsAdjustmentsModalWin, setShowPaymentsAdjustmentsModalWin] =
    useState<boolean>(false);
  const [showPaymentsTotalsModalWin, setShowPaymentsTotalsModalWin] =
    useState<boolean>(false);
  const [
    showPaymentsTotalsByDatesModalWin,
    setShowPaymentsTotalsByDatesModalWin,
  ] = useState<boolean>(false);

  const setCalcByStreetsModalWinState = () => {
    setShowCalcByStreetsModalWin((prevState) => !prevState);
  };
  const setCalcByHousesModalWinState = () => {
    setShowCalcByHousesModalWin((prevState) => !prevState);
  };
  const setCalcBySubscribersDebtModalWinState = () => {
    setShowCalcBySubscribersDebtModalWin((prevState) => !prevState);
  };
  const setPersonalAccountStatementsModalWinState = () => {
    setShowPersonalAccountStatementsModalWin((prevState) => !prevState);
  };
  const setPersonalAccountPaymentsModalWinState = () => {
    setShowPersonalAccountPaymentsModalWin((prevState) => !prevState);
  };
  const setPriceAdjustmentsModalWinState = () => {
    setShowPriceAdjustmentsModalWin((prevState) => !prevState);
  };
  const setPriceAdjustmentsTotalsModalWinState = () => {
    setShowPriceAdjustmentsTotalsModalWin((prevState) => !prevState);
  };
  const setPricesModalWinState = () => {
    setShowPricesModalWin((prevState) => !prevState);
  };
  const setPricesTotalsModalWinState = () => {
    setShowPricesTotalsModalWin((prevState) => !prevState);
  };
  const setPaymentsModalWinState = () => {
    setShowPaymentsModalWin((prevState) => !prevState);
  };
  const setPaymentsAdjustmentsModalWinState = () => {
    setShowPaymentsAdjustmentsModalWin((prevState) => !prevState);
  };
  const setPaymentsTotalsModalWinState = () => {
    setShowPaymentsTotalsModalWin((prevState) => !prevState);
  };
  const setPaymentsTotalsByDatesModalWinState = () => {
    setShowPaymentsTotalsByDatesModalWin((prevState) => !prevState);
  };

  return {
    showCalcByStreetsModalWin,
    showCalcByHousesModalWin,
    showCalcBySubscribersDebtModalWin,
    showPersonalAccountStatementsModalWin,
    showPersonalAccountPaymentsModalWin,
    showPriceAdjustmentsModalWin,
    showPriceAdjustmentsTotalsModalWin,
    showPricesModalWin,
    showPricesTotalsModalWin,
    showPaymentsModalWin,
    showPaymentsAdjustmentsModalWin,
    showPaymentsTotalsModalWin,
    showPaymentsTotalsByDatesModalWin,
    setCalcByStreetsModalWinState,
    setCalcByHousesModalWinState,
    setCalcBySubscribersDebtModalWinState,
    setPersonalAccountStatementsModalWinState,
    setPersonalAccountPaymentsModalWinState,
    setPriceAdjustmentsModalWinState,
    setPriceAdjustmentsTotalsModalWinState,
    setPricesModalWinState,
    setPricesTotalsModalWinState,
    setPaymentsModalWinState,
    setPaymentsAdjustmentsModalWinState,
    setPaymentsTotalsModalWinState,
    setPaymentsTotalsByDatesModalWinState,
  };
};

export default useAccountingReports;
