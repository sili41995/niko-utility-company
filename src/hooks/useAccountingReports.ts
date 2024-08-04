import { IUseAccountingReports } from '@/types/hooks.types';
import { useState } from 'react';

const useAccountingReports = (): IUseAccountingReports => {
  const [showReportsByStreetsModalWin, setShowReportsByStreetsModalWin] =
    useState<boolean>(false);
  const [showReportsByHousesModalWin, setShowReportsByHousesModalWin] =
    useState<boolean>(false);
  const [
    showReportsBySubscribersModalWin,
    setShowReportsBySubscribersModalWin,
  ] = useState<boolean>(false);
  const [
    showStatementsBySubscriberAccountModalWin,
    setShowStatementsBySubscriberAccountModalWin,
  ] = useState<boolean>(false);
  const [
    showPaymentsBySubscriberAccountModalWin,
    setShowPaymentsBySubscriberAccountModalWin,
  ] = useState<boolean>(false);
  const [
    showPriceAdjustmentsReportsModalWin,
    setShowPriceAdjustmentsReportsModalWin,
  ] = useState<boolean>(false);
  const [
    showPriceAdjustmentsReportsTotalModalWin,
    setShowPriceAdjustmentsReportsTotalModalWin,
  ] = useState<boolean>(false);
  const [showPricesReportsModalWin, setShowPricesReportsModalWin] =
    useState<boolean>(false);
  const [showPricesReportsTotalModalWin, setShowPricesReportsTotalModalWin] =
    useState<boolean>(false);
  const [showPaymentsReportsModalWin, setShowPaymentsReportsModalWin] =
    useState<boolean>(false);
  const [
    showPaymentsAdjustmentsReportsModalWin,
    setShowPaymentsAdjustmentsReportsModalWin,
  ] = useState<boolean>(false);
  const [
    showPaymentsReportsTotalModalWin,
    setShowPaymentsReportsTotalModalWin,
  ] = useState<boolean>(false);
  const [
    showPaymentsReportsTotalByDateModalWin,
    setShowPaymentsReportsTotalByDateModalWin,
  ] = useState<boolean>(false);

  const setReportsByStreetsModalWinState = () => {
    setShowReportsByStreetsModalWin((prevState) => !prevState);
  };
  const setReportsByHousesModalWinState = () => {
    setShowReportsByHousesModalWin((prevState) => !prevState);
  };
  const setReportsBySubscribersModalWinState = () => {
    setShowReportsBySubscribersModalWin((prevState) => !prevState);
  };
  const setStatementsBySubscriberAccountModalWinState = () => {
    setShowStatementsBySubscriberAccountModalWin((prevState) => !prevState);
  };
  const setPaymentsBySubscriberAccountModalWinState = () => {
    setShowPaymentsBySubscriberAccountModalWin((prevState) => !prevState);
  };
  const setPriceAdjustmentsReportsModalWinState = () => {
    setShowPriceAdjustmentsReportsModalWin((prevState) => !prevState);
  };
  const setPriceAdjustmentsReportsTotalModalWinState = () => {
    setShowPriceAdjustmentsReportsTotalModalWin((prevState) => !prevState);
  };
  const setPricesReportsModalWinState = () => {
    setShowPricesReportsModalWin((prevState) => !prevState);
  };
  const setPricesReportsTotalModalWinState = () => {
    setShowPricesReportsTotalModalWin((prevState) => !prevState);
  };
  const setPaymentsReportsModalWinState = () => {
    setShowPaymentsReportsModalWin((prevState) => !prevState);
  };
  const setPaymentsAdjustmentsReportsModalWinState = () => {
    setShowPaymentsAdjustmentsReportsModalWin((prevState) => !prevState);
  };
  const setPaymentsReportsTotalModalWinState = () => {
    setShowPaymentsReportsTotalModalWin((prevState) => !prevState);
  };
  const setPaymentsReportsTotalByDateModalWinState = () => {
    setShowPaymentsReportsTotalByDateModalWin((prevState) => !prevState);
  };

  return {
    showReportsByStreetsModalWin,
    showReportsByHousesModalWin,
    showReportsBySubscribersModalWin,
    showStatementsBySubscriberAccountModalWin,
    showPaymentsBySubscriberAccountModalWin,
    showPriceAdjustmentsReportsModalWin,
    showPriceAdjustmentsReportsTotalModalWin,
    showPricesReportsModalWin,
    showPricesReportsTotalModalWin,
    showPaymentsReportsModalWin,
    showPaymentsAdjustmentsReportsModalWin,
    showPaymentsReportsTotalModalWin,
    showPaymentsReportsTotalByDateModalWin,
    setReportsByStreetsModalWinState,
    setReportsByHousesModalWinState,
    setReportsBySubscribersModalWinState,
    setStatementsBySubscriberAccountModalWinState,
    setPaymentsBySubscriberAccountModalWinState,
    setPriceAdjustmentsReportsModalWinState,
    setPriceAdjustmentsReportsTotalModalWinState,
    setPricesReportsModalWinState,
    setPricesReportsTotalModalWinState,
    setPaymentsReportsModalWinState,
    setPaymentsAdjustmentsReportsModalWinState,
    setPaymentsReportsTotalModalWinState,
    setPaymentsReportsTotalByDateModalWinState,
  };
};

export default useAccountingReports;
