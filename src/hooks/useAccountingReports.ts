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
  const [showAccrualAdjustmentsModalWin, setShowAccrualAdjustmentsModalWin] =
    useState<boolean>(false);
  const [
    showAccrualAdjustmentsTotalsModalWin,
    setShowAccrualAdjustmentsTotalsModalWin,
  ] = useState<boolean>(false);
  const [showAccrualsModalWin, setShowAccrualsModalWin] =
    useState<boolean>(false);
  const [showAccrualsTotalsModalWin, setShowAccrualsTotalsModalWin] =
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
  const setAccrualAdjustmentsModalWinState = () => {
    setShowAccrualAdjustmentsModalWin((prevState) => !prevState);
  };
  const setAccrualAdjustmentsTotalsModalWinState = () => {
    setShowAccrualAdjustmentsTotalsModalWin((prevState) => !prevState);
  };
  const setAccrualsModalWinState = () => {
    setShowAccrualsModalWin((prevState) => !prevState);
  };
  const setAccrualsTotalsModalWinState = () => {
    setShowAccrualsTotalsModalWin((prevState) => !prevState);
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
    showAccrualAdjustmentsModalWin,
    showAccrualAdjustmentsTotalsModalWin,
    showAccrualsModalWin,
    showAccrualsTotalsModalWin,
    showPaymentsModalWin,
    showPaymentsAdjustmentsModalWin,
    showPaymentsTotalsModalWin,
    showPaymentsTotalsByDatesModalWin,
    setCalcByStreetsModalWinState,
    setCalcByHousesModalWinState,
    setCalcBySubscribersDebtModalWinState,
    setPersonalAccountStatementsModalWinState,
    setPersonalAccountPaymentsModalWinState,
    setAccrualAdjustmentsModalWinState,
    setAccrualAdjustmentsTotalsModalWinState,
    setAccrualsModalWinState,
    setAccrualsTotalsModalWinState,
    setPaymentsModalWinState,
    setPaymentsAdjustmentsModalWinState,
    setPaymentsTotalsModalWinState,
    setPaymentsTotalsByDatesModalWinState,
  };
};

export default useAccountingReports;
