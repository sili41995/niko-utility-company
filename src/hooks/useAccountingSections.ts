import { IUseAccountingSections } from '@/types/hooks.types';
import { useState } from 'react';

const useAccountingSections = (): IUseAccountingSections => {
  const [showAddPeriodModalWin, setShowAddPeriodModalWin] =
    useState<boolean>(false);
  const [showTariffsModalWin, setShowTariffsModalWin] =
    useState<boolean>(false);
  const [showCalculatePricesModalWin, setShowCalculatePricesModalWin] =
    useState<boolean>(false);
  const [showAccrualsAdjustmentModalWin, setShowAccrualsAdjustmentModalWin] =
    useState<boolean>(false);
  const [showPaymentsAdjustmentModalWin, setShowPaymentsAdjustmentModalWin] =
    useState<boolean>(false);
  const [showPaymentsModalWin, setShowPaymentsModalWin] =
    useState<boolean>(false);
  const [showBenefitsAdjustmentModalWin, setShowBenefitsAdjustmentModalWin] =
    useState<boolean>(false);
  const [showAccountsMessageModalWin, setShowAccountsMessageModalWin] =
    useState<boolean>(false);
  const [showPayPostageModalWin, setShowPayPostageModalWin] =
    useState<boolean>(false);
  const [showPayPrivateModalWin, setShowPayPrivateModalWin] =
    useState<boolean>(false);
  const [showPayOshchadbankModalWin, setShowPayOshchadbankModalWin] =
    useState<boolean>(false);
  const [showPayOAbankModalWin, setShowPayAbankModalWin] =
    useState<boolean>(false);

  const setTariffsModalWinState = () => {
    setShowTariffsModalWin((prevState) => !prevState);
  };

  const setCalculatePricesModalWinState = () => {
    setShowCalculatePricesModalWin((prevState) => !prevState);
  };

  const setAddPeriodModalWinState = () => {
    setShowAddPeriodModalWin((prevState) => !prevState);
  };

  const setAccrualsAdjustmentModalWinState = () => {
    setShowAccrualsAdjustmentModalWin((prevState) => !prevState);
  };

  const setPaymentsAdjustmentModalWinState = () => {
    setShowPaymentsAdjustmentModalWin((prevState) => !prevState);
  };

  const setPaymentsModalWinState = () => {
    setShowPaymentsModalWin((prevState) => !prevState);
  };

  const setBenefitsAdjustmentModalWinState = () => {
    setShowBenefitsAdjustmentModalWin((prevState) => !prevState);
  };

  const setAccountsMessageModalWinState = () => {
    setShowAccountsMessageModalWin((prevState) => !prevState);
  };

  const setPayPostageModalWinState = () => {
    setShowPayPostageModalWin((prevState) => !prevState);
  };

  const setPayPrivateModalWinState = () => {
    setShowPayPrivateModalWin((prevState) => !prevState);
  };

  const setPayOshchadbankModalWinState = () => {
    setShowPayOshchadbankModalWin((prevState) => !prevState);
  };

  const setPayAbankModalWinState = () => {
    setShowPayAbankModalWin((prevState) => !prevState);
  };

  return {
    setAddPeriodModalWinState,
    setCalculatePricesModalWinState,
    setAccrualsAdjustmentModalWinState,
    setPaymentsAdjustmentModalWinState,
    setPaymentsModalWinState,
    setBenefitsAdjustmentModalWinState,
    setTariffsModalWinState,
    setAccountsMessageModalWinState,
    setPayPostageModalWinState,
    setPayPrivateModalWinState,
    setPayOshchadbankModalWinState,
    setPayAbankModalWinState,
    showTariffsModalWin,
    showCalculatePricesModalWin,
    showAddPeriodModalWin,
    showAccrualsAdjustmentModalWin,
    showPaymentsAdjustmentModalWin,
    showPaymentsModalWin,
    showBenefitsAdjustmentModalWin,
    showAccountsMessageModalWin,
    showPayPostageModalWin,
    showPayPrivateModalWin,
    showPayOshchadbankModalWin,
    showPayOAbankModalWin,
  };
};

export default useAccountingSections;
