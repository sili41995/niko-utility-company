import { FC } from 'react';
import TariffsModalWin from '@/components/TariffsModalWin';
import { SectionsList, SectionsListItem } from './AccountingSections.styled';
import CalculatePricesModalWin from '@/components/CalculatePricesModalWin';
import AddPeriodModalWin from '@/components/AddPeriodModalWin';
import { useAccountingSections } from '@/hooks';
import AccountingSectionsBtn from '../AccountingSectionsBtn';
// import PayAbankModalWin from '@/components./PayAbankModalWin';
// import PayOshchadbankModalWin from '@/components/PayOshchadbankModalWin';
// import PayPrivateModalWin from '@/components/PayPrivateModalWin';
// import PayPostageModalWin from '@/components/PayPostageModalWin';
// import AccountsMessageModalWin from '@/components/AccountsMessageModalWin';
// import BenefitsAdjustmentModalWin from '@/components/BenefitsAdjustmentModalWin';
// import PaymentsModalWin from '@/components/PaymentsModalWin';
// import PaymentsAdjustmentModalWin from '@/components/PaymentsAdjustmentModalWin';
// import AccrualsAdjustmentModalWin from '@/components/AccrualsAdjustmentModalWin';

const AccountingSections: FC = () => {
  const {
    setAddPeriodModalWinState,
    setCalculatePricesModalWinState,
    // setAccrualsAdjustmentModalWinState,
    // setPaymentsAdjustmentModalWinState,
    // setPaymentsModalWinState,
    // setBenefitsAdjustmentModalWinState,
    setTariffsModalWinState,
    // setAccountsMessageModalWinState,
    // setPayPostageModalWinState,
    // setPayPrivateModalWinState,
    // setPayOshchadbankModalWinState,
    // setPayAbankModalWinState,
    showTariffsModalWin,
    showCalculatePricesModalWin,
    showAddPeriodModalWin,
    // showAccrualsAdjustmentModalWin,
    // showPaymentsAdjustmentModalWin,
    // showPaymentsModalWin,
    // showBenefitsAdjustmentModalWin,
    // showAccountsMessageModalWin,
    // showPayPostageModalWin,
    // showPayPrivateModalWin,
    // showPayOshchadbankModalWin,
    // showPayOAbankModalWin,
  } = useAccountingSections();

  return (
    <>
      <SectionsList>
        <SectionsListItem>
          <AccountingSectionsBtn
            onClick={setAddPeriodModalWinState}
            title='Новий період'
          />
        </SectionsListItem>
        <SectionsListItem>
          <AccountingSectionsBtn
            onClick={setCalculatePricesModalWinState}
            title='Розрахунок'
          />
        </SectionsListItem>
        {/* <SectionsListItem>
            <AccountingSectionsBtn
            onClick={setAccrualsAdjustmentModalWinState}
            title='Коригування нарахувань'
          />
        </SectionsListItem> */}
        {/* <SectionsListItem>
            <AccountingSectionsBtn
            onClick={setPaymentsAdjustmentModalWinState}
            title='Коригування оплат'
          />
        </SectionsListItem> */}
        {/* <SectionsListItem>
            <AccountingSectionsBtn
            onClick={setPaymentsModalWinState}
            title='Оплати (стрічка)'
          />
        </SectionsListItem> */}
        {/* <SectionsListItem>
                    <AccountingSectionsBtn
            onClick={setBenefitsAdjustmentModalWinState}
            title='Коригування пільг'
          />
        </SectionsListItem> */}
        <SectionsListItem>
          <AccountingSectionsBtn
            onClick={setTariffsModalWinState}
            title='Тарифи'
          />
        </SectionsListItem>
        {/* <SectionsListItem>
        <AccountingSectionsBtn
            onClick={setAccountsMessageModalWinState}
            title='Рахунки-повідомлення'
          />
        </SectionsListItem> */}
        {/* <SectionsListItem>
        <AccountingSectionsBtn
            onClick={setPayPostageModalWinState}
            title='Оплати Пошта'
          />
        </SectionsListItem> */}
        {/* <SectionsListItem>
                    <AccountingSectionsBtn
            onClick={setPayPrivateModalWinState}
            title='Оплати Приватбанк'
          />
        </SectionsListItem> */}
        {/* <SectionsListItem>
                            <AccountingSectionsBtn
            onClick={setPayOshchadbankModalWinState}
            title='Оплати Ощадбанк'
          />
        </SectionsListItem> */}
        {/* <SectionsListItem>
                            <AccountingSectionsBtn
            onClick={setPayAbankModalWinState}
            title='Оплати Абанк'
          />
        </SectionsListItem> */}
      </SectionsList>
      {showTariffsModalWin && (
        <TariffsModalWin setModalWinState={setTariffsModalWinState} />
      )}
      {showCalculatePricesModalWin && (
        <CalculatePricesModalWin
          setModalWinState={setCalculatePricesModalWinState}
        />
      )}
      {showAddPeriodModalWin && (
        <AddPeriodModalWin setModalWinState={setAddPeriodModalWinState} />
      )}
      {/* {showAccrualsAdjustmentModalWin && (
        <AccrualsAdjustmentModalWin
          setModalWinState={setAccrualsAdjustmentModalWinState}
        />
      )} */}
      {/* {showPaymentsAdjustmentModalWin && (
        <PaymentsAdjustmentModalWin
          setModalWinState={setPaymentsAdjustmentModalWinState}
        />
      )} */}
      {/* {showPaymentsModalWin && (
        <PaymentsModalWin setModalWinState={setPaymentsModalWinState} />
      )} */}
      {/* {showBenefitsAdjustmentModalWin && (
        <BenefitsAdjustmentModalWin
          setModalWinState={setBenefitsAdjustmentModalWinState}
        />
      )} */}
      {/* {showAccountsMessageModalWin && (
        <AccountsMessageModalWin
          setModalWinState={setAccountsMessageModalWinState}
        />
      )} */}
      {/* {showPayPostageModalWin && (
        <PayPostageModalWin setModalWinState={setPayPostageModalWinState} />
      )} */}
      {/* {showPayPrivateModalWin && (
        <PayPrivateModalWin setModalWinState={setPayPrivateModalWinState} />
      )} */}
      {/* {showPayOshchadbankModalWin && (
        <PayOshchadbankModalWin
          setModalWinState={setPayOshchadbankModalWinState}
        />
      )} */}
      {/* {showPayOAbankModalWin && (
        <PayAbankModalWin setModalWinState={setPayAbankModalWinState} />
      )} */}
    </>
  );
};

export default AccountingSections;
