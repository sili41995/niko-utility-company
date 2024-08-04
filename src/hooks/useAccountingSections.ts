import { IUseAccountingSections } from '@/types/hooks.types';
import { useState } from 'react';

const useAccountingSections = (): IUseAccountingSections => {
  const [showAddPeriodModalWin, setShowAddPeriodModalWin] =
    useState<boolean>(false);
  const [showTariffsModalWin, setShowTariffsModalWin] =
    useState<boolean>(false);
  const [showPricesModalWin, setShowPricesModalWin] = useState<boolean>(false);
  const [showPriceAdjustmentsModalWin, setShowPriceAdjustmentsModalWin] =
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
  const [showPayPrivatbankModalWin, setShowPayPrivatbankModalWin] =
    useState<boolean>(false);
  const [showPayOshchadbankModalWin, setShowPayOshchadbankModalWin] =
    useState<boolean>(false);
  const [showPayAbankModalWin, setShowPayAbankModalWin] =
    useState<boolean>(false);

  const setTariffsModalWinState = () => {
    setShowTariffsModalWin((prevState) => !prevState);
  };

  const setPricesModalWinState = () => {
    setShowPricesModalWin((prevState) => !prevState);
  };

  const setAddPeriodModalWinState = () => {
    setShowAddPeriodModalWin((prevState) => !prevState);
  };

  const setPriceAdjustmentsModalWinState = () => {
    setShowPriceAdjustmentsModalWin((prevState) => !prevState);
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

  const setPayPrivatbankModalWinState = () => {
    setShowPayPrivatbankModalWin((prevState) => !prevState);
  };

  const setPayOshchadbankModalWinState = () => {
    setShowPayOshchadbankModalWin((prevState) => !prevState);
  };

  const setPayAbankModalWinState = () => {
    setShowPayAbankModalWin((prevState) => !prevState);
  };

  return {
    setAddPeriodModalWinState,
    setPricesModalWinState,
    setPriceAdjustmentsModalWinState,
    setPaymentsAdjustmentModalWinState,
    setPaymentsModalWinState,
    setBenefitsAdjustmentModalWinState,
    setTariffsModalWinState,
    setAccountsMessageModalWinState,
    setPayPostageModalWinState,
    setPayPrivatbankModalWinState,
    setPayOshchadbankModalWinState,
    setPayAbankModalWinState,
    showTariffsModalWin,
    showPricesModalWin,
    showAddPeriodModalWin,
    showPriceAdjustmentsModalWin,
    showPaymentsAdjustmentModalWin,
    showPaymentsModalWin,
    showBenefitsAdjustmentModalWin,
    showAccountsMessageModalWin,
    showPayPostageModalWin,
    showPayPrivatbankModalWin,
    showPayOshchadbankModalWin,
    showPayAbankModalWin,
  };
};

export default useAccountingSections;
