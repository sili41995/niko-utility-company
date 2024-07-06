import { FC } from 'react';
import TariffsModalWin from '../TariffsModalWin';
import {
  SectionBtn,
  SectionsList,
  SectionsListItem,
} from './AccountingSections.styled';
import CalculatePricesModalWin from '../CalculatePricesModalWin';
import AddPeriodModalWin from '../AddPeriodModalWin';
import { useAccountingSections } from '@/hooks';
// import PayAbankModalWin from '../PayAbankModalWin';
// import PayOshchadbankModalWin from '../PayOshchadbankModalWin';
// import PayPrivateModalWin from '../PayPrivateModalWin';
// import PayPostageModalWin from '../PayPostageModalWin';
// import AccountsMessageModalWin from '../AccountsMessageModalWin';
// import BenefitsAdjustmentModalWin from '../BenefitsAdjustmentModalWin';
// import PaymentsModalWin from '../PaymentsModalWin';
// import PaymentsAdjustmentModalWin from '../PaymentsAdjustmentModalWin';
// import AccrualsAdjustmentModalWin from '../AccrualsAdjustmentModalWin';

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
          <SectionBtn type='button' onClick={setAddPeriodModalWinState}>
            Новий період
          </SectionBtn>
        </SectionsListItem>
        <SectionsListItem>
          <SectionBtn type='button' onClick={setCalculatePricesModalWinState}>
            Розрахунок
          </SectionBtn>
        </SectionsListItem>
        {/* <SectionsListItem>
          <SectionBtn
            type='button'
            onClick={setAccrualsAdjustmentModalWinState}
          >
            Коригування нарахувань
          </SectionBtn>
        </SectionsListItem> */}
        {/* <SectionsListItem>
          <SectionBtn
            type='button'
            onClick={setPaymentsAdjustmentModalWinState}
          >
            Коригування оплат
          </SectionBtn>
        </SectionsListItem> */}
        {/* <SectionsListItem>
          <SectionBtn type='button' onClick={setPaymentsModalWinState}>
            Оплати (стрічка)
          </SectionBtn>
        </SectionsListItem> */}
        {/* <SectionsListItem>
          <SectionBtn
            type='button'
            onClick={setBenefitsAdjustmentModalWinState}
          >
            Коригування пільг
          </SectionBtn>
        </SectionsListItem> */}
        <SectionsListItem>
          <SectionBtn type='button' onClick={setTariffsModalWinState}>
            Тарифи
          </SectionBtn>
        </SectionsListItem>
        {/* <SectionsListItem>
          <SectionBtn type='button' onClick={setAccountsMessageModalWinState}>
            Рахунки-повідомлення
          </SectionBtn>
        </SectionsListItem> */}
        {/* <SectionsListItem>
          <SectionBtn type='button' onClick={setPayPostageModalWinState}>
            Оплати Пошта
          </SectionBtn>
        </SectionsListItem> */}
        {/* <SectionsListItem>
          <SectionBtn type='button' onClick={setPayPrivateModalWinState}>
            Оплати Приватбанк
          </SectionBtn>
        </SectionsListItem> */}
        {/* <SectionsListItem>
          <SectionBtn type='button' onClick={setPayOshchadbankModalWinState}>
            Оплати Ощадбанк
          </SectionBtn>
        </SectionsListItem> */}
        {/* <SectionsListItem>
          <SectionBtn type='button' onClick={setPayAbankModalWinState}>
            Оплати Абанк
          </SectionBtn>
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
