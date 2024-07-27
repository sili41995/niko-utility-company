import { FC } from 'react';
import { Container, List, ListItem, Title } from './AccountingReports.styled';
import useAccountingReports from '@/hooks/useAccountingReports';
import ReportBtn from '@/components/ReportBtn';
import CalcByStreetsModalWin from '@/components/CalcByStreetsModalWin';
import CalcByHousesModalWin from '@/components/CalcByHousesModalWin';
import CalcBySubscribersDebtModalWin from '@/components/CalcBySubscribersDebtModalWin';
import PersonalAccountStatementsModalWin from '@/components/PersonalAccountStatementsModalWin';
import PersonalAccountPaymentsModalWin from '@/components/PersonalAccountPaymentsModalWin';
import PriceAdjustmentsModalWin from '@/components/PriceAdjustmentsModalWin';
import PriceAdjustmentsTotalsModalWin from '@/components/PriceAdjustmentsTotalsModalWin';
import PricesModalWin from '@/components/PricesModalWin';
import PricesTotalsModalWin from '@/components/PricesTotalsModalWin';
import ReportsPaymentsModalWin from '@/components/ReportsPaymentsModalWin';
import ReportsPaymentsAdjustmentsModalWin from '@/components/ReportsPaymentsAdjustmentsModalWin';
import ReportsPaymentsTotalsModalWin from '@/components/ReportsPaymentsTotalsModalWin';
import ReportsPaymentsTotalsByDatesModalWin from '@/components/ReportsPaymentsTotalsByDatesModalWin';

const AccountingReports: FC = () => {
  const {
    setPriceAdjustmentsModalWinState,
    setPriceAdjustmentsTotalsModalWinState,
    setPricesModalWinState,
    setPricesTotalsModalWinState,
    setCalcByHousesModalWinState,
    setCalcByStreetsModalWinState,
    setCalcBySubscribersDebtModalWinState,
    setPaymentsAdjustmentsModalWinState,
    setPaymentsModalWinState,
    setPaymentsTotalsByDatesModalWinState,
    setPaymentsTotalsModalWinState,
    setPersonalAccountPaymentsModalWinState,
    setPersonalAccountStatementsModalWinState,
    showPriceAdjustmentsModalWin,
    showPriceAdjustmentsTotalsModalWin,
    showPricesModalWin,
    showPricesTotalsModalWin,
    showCalcByHousesModalWin,
    showCalcByStreetsModalWin,
    showCalcBySubscribersDebtModalWin,
    showPaymentsAdjustmentsModalWin,
    showPaymentsModalWin,
    showPaymentsTotalsByDatesModalWin,
    showPaymentsTotalsModalWin,
    showPersonalAccountPaymentsModalWin,
    showPersonalAccountStatementsModalWin,
  } = useAccountingReports();

  return (
    <>
      <Container>
        <Title>Звіти</Title>
        <List>
          <ListItem>
            <ReportBtn
              onClick={setCalcByStreetsModalWinState}
              title='Розрахунки по вулицях'
            />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setCalcByHousesModalWinState}
              title='Розрахунки по будинках'
            />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setCalcBySubscribersDebtModalWinState}
              title='Розрахунки по абонентах (борг)'
            />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setPersonalAccountStatementsModalWinState}
              title='Виписки по особовому рахунку'
            />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setPersonalAccountPaymentsModalWinState}
              title='Оплати по особовому рахунку'
            />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setPriceAdjustmentsModalWinState}
              title='Коригування по нарахуванням'
            />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setPriceAdjustmentsTotalsModalWinState}
              title='Коригування по нарахуванням (підсумки)'
            />
          </ListItem>
          <ListItem>
            <ReportBtn onClick={setPricesModalWinState} title='Нарахування' />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setPricesTotalsModalWinState}
              title='Нарахування (підсумки)'
            />
          </ListItem>
          <ListItem>
            <ReportBtn onClick={setPaymentsModalWinState} title='Оплати' />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setPaymentsAdjustmentsModalWinState}
              title='Оплати (коригування)'
            />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setPaymentsTotalsModalWinState}
              title='Оплати (підсумки)'
            />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setPaymentsTotalsByDatesModalWinState}
              title='Оплати (підсумки по датах)'
            />
          </ListItem>
        </List>
      </Container>
      {showCalcByStreetsModalWin && (
        <CalcByStreetsModalWin
          setModalWinState={setCalcByStreetsModalWinState}
        />
      )}
      {showCalcByHousesModalWin && (
        <CalcByHousesModalWin setModalWinState={setCalcByHousesModalWinState} />
      )}
      {showCalcBySubscribersDebtModalWin && (
        <CalcBySubscribersDebtModalWin
          setModalWinState={setCalcBySubscribersDebtModalWinState}
        />
      )}
      {showPersonalAccountStatementsModalWin && (
        <PersonalAccountStatementsModalWin
          setModalWinState={setPersonalAccountStatementsModalWinState}
        />
      )}
      {showPersonalAccountPaymentsModalWin && (
        <PersonalAccountPaymentsModalWin
          setModalWinState={setPersonalAccountPaymentsModalWinState}
        />
      )}
      {showPriceAdjustmentsModalWin && (
        <PriceAdjustmentsModalWin
          setModalWinState={setPriceAdjustmentsModalWinState}
        />
      )}
      {showPriceAdjustmentsTotalsModalWin && (
        <PriceAdjustmentsTotalsModalWin
          setModalWinState={setPriceAdjustmentsTotalsModalWinState}
        />
      )}
      {showPricesModalWin && (
        <PricesModalWin setModalWinState={setPricesModalWinState} />
      )}
      {showPricesTotalsModalWin && (
        <PricesTotalsModalWin setModalWinState={setPricesTotalsModalWinState} />
      )}
      {showPaymentsModalWin && (
        <ReportsPaymentsModalWin setModalWinState={setPaymentsModalWinState} />
      )}
      {showPaymentsAdjustmentsModalWin && (
        <ReportsPaymentsAdjustmentsModalWin
          setModalWinState={setPaymentsAdjustmentsModalWinState}
        />
      )}
      {showPaymentsAdjustmentsModalWin && (
        <ReportsPaymentsAdjustmentsModalWin
          setModalWinState={setPaymentsAdjustmentsModalWinState}
        />
      )}
      {showPaymentsTotalsModalWin && (
        <ReportsPaymentsTotalsModalWin
          setModalWinState={setPaymentsTotalsModalWinState}
        />
      )}
      {showPaymentsTotalsByDatesModalWin && (
        <ReportsPaymentsTotalsByDatesModalWin
          setModalWinState={setPaymentsTotalsByDatesModalWinState}
        />
      )}
    </>
  );
};

export default AccountingReports;
