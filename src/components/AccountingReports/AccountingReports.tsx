import { FC } from 'react';
import { Container, List, ListItem, Title } from './AccountingReports.styled';
import useAccountingReports from '@/hooks/useAccountingReports';
import ReportBtn from '../ReportBtn';
import CalcByStreetsModalWin from '../CalcByStreetsModalWin';
import CalcByHousesModalWin from '../CalcByHousesModalWin';
import CalcBySubscribersDebtModalWin from '../CalcBySubscribersDebtModalWin';
import PersonalAccountStatementsModalWin from '../PersonalAccountStatementsModalWin';
import PersonalAccountPaymentsModalWin from '../PersonalAccountPaymentsModalWin';
import AccrualAdjustmentsModalWin from '../AccrualAdjustmentsModalWin';
import AccrualAdjustmentsTotalsModalWin from '../AccrualAdjustmentsTotalsModalWin';
import AccrualsModalWin from '../AccrualsModalWin';
import AccrualsTotalsModalWin from '../AccrualsTotalsModalWin';
import ReportsPaymentsModalWin from '../ReportsPaymentsModalWin';
import ReportsPaymentsAdjustmentsModalWin from '../ReportsPaymentsAdjustmentsModalWin';
import ReportsPaymentsTotalsModalWin from '../ReportsPaymentsTotalsModalWin';
import ReportsPaymentsTotalsByDatesModalWin from '../ReportsPaymentsTotalsByDatesModalWin';

const AccountingReports: FC = () => {
  const {
    setAccrualAdjustmentsModalWinState,
    setAccrualAdjustmentsTotalsModalWinState,
    setAccrualsModalWinState,
    setAccrualsTotalsModalWinState,
    setCalcByHousesModalWinState,
    setCalcByStreetsModalWinState,
    setCalcBySubscribersDebtModalWinState,
    setPaymentsAdjustmentsModalWinState,
    setPaymentsModalWinState,
    setPaymentsTotalsByDatesModalWinState,
    setPaymentsTotalsModalWinState,
    setPersonalAccountPaymentsModalWinState,
    setPersonalAccountStatementsModalWinState,
    showAccrualAdjustmentsModalWin,
    showAccrualAdjustmentsTotalsModalWin,
    showAccrualsModalWin,
    showAccrualsTotalsModalWin,
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
              onClick={setAccrualAdjustmentsModalWinState}
              title='Коригування по нарахуванням'
            />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setAccrualAdjustmentsTotalsModalWinState}
              title='Коригування по нарахуванням (підсумки)'
            />
          </ListItem>
          <ListItem>
            <ReportBtn onClick={setAccrualsModalWinState} title='Нарахування' />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setAccrualsTotalsModalWinState}
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
      {showAccrualAdjustmentsModalWin && (
        <AccrualAdjustmentsModalWin
          setModalWinState={setAccrualAdjustmentsModalWinState}
        />
      )}
      {showAccrualAdjustmentsTotalsModalWin && (
        <AccrualAdjustmentsTotalsModalWin
          setModalWinState={setAccrualAdjustmentsTotalsModalWinState}
        />
      )}
      {showAccrualsModalWin && (
        <AccrualsModalWin setModalWinState={setAccrualsModalWinState} />
      )}
      {showAccrualsTotalsModalWin && (
        <AccrualsTotalsModalWin
          setModalWinState={setAccrualsTotalsModalWinState}
        />
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
