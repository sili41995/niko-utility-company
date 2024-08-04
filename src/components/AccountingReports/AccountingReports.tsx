import { FC } from 'react';
import { Container, List, ListItem, Title } from './AccountingReports.styled';
import useAccountingReports from '@/hooks/useAccountingReports';
import ReportBtn from '@/components/ReportBtn';
import ReportsByStreetsModalWin from '@/components/ReportsByStreetsModalWin';
import ReportsByHousesModalWin from '@/components/ReportsByHousesModalWin';
import ReportsBySubscribersModalWin from '@/components/ReportsBySubscribersModalWin';
import StatementsBySubscriberAccountModalWin from '@/components/StatementsBySubscriberAccountModalWin';
import PaymentsBySubscriberAccountModalWin from '@/components/PaymentsBySubscriberAccountModalWin';
import PriceAdjustmentsReportsModalWin from '@/components/PriceAdjustmentsReportsModalWin';
import PriceAdjustmentsReportsTotalModalWin from '@/components/PriceAdjustmentsReportsTotalModalWin';
import PricesReportsModalWin from '@/components/PricesReportsModalWin';
import PricesReportsTotalModalWin from '@/components/PricesReportsTotalModalWin';
import PaymentsReportsModalWin from '@/components/PaymentsReportsModalWin';
import PaymentsAdjustmentsReportsModalWin from '@/components/PaymentsAdjustmentsReportsModalWin';
import PaymentsReportsTotalModalWin from '@/components/PaymentsReportsTotalModalWin';
import PaymentsReportsTotalByDateModalWin from '@/components/PaymentsReportsTotalByDateModalWin';

const AccountingReports: FC = () => {
  const {
    setPriceAdjustmentsReportsModalWinState,
    setPriceAdjustmentsReportsTotalModalWinState,
    setPricesReportsModalWinState,
    setPricesReportsTotalModalWinState,
    setReportsByHousesModalWinState,
    setReportsByStreetsModalWinState,
    setReportsBySubscribersModalWinState,
    setPaymentsAdjustmentsReportsModalWinState,
    setPaymentsReportsModalWinState,
    setPaymentsReportsTotalByDateModalWinState,
    setPaymentsReportsTotalModalWinState,
    setPaymentsBySubscriberAccountModalWinState,
    setStatementsBySubscriberAccountModalWinState,
    showPriceAdjustmentsReportsModalWin,
    showPriceAdjustmentsReportsTotalModalWin,
    showPricesReportsModalWin,
    showPricesReportsTotalModalWin,
    showReportsByHousesModalWin,
    showReportsByStreetsModalWin,
    showReportsBySubscribersModalWin,
    showPaymentsAdjustmentsReportsModalWin,
    showPaymentsReportsModalWin,
    showPaymentsReportsTotalByDateModalWin,
    showPaymentsReportsTotalModalWin,
    showStatementsBySubscriberAccountModalWin,
    showPaymentsBySubscriberAccountModalWin,
  } = useAccountingReports();

  return (
    <>
      <Container>
        <Title>Звіти</Title>
        <List>
          <ListItem>
            <ReportBtn
              onClick={setReportsByStreetsModalWinState}
              title='Розрахунки по вулицях'
            />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setReportsByHousesModalWinState}
              title='Розрахунки по будинках'
            />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setReportsBySubscribersModalWinState}
              title='Розрахунки по абонентах (борг)'
            />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setStatementsBySubscriberAccountModalWinState}
              title='Виписки по особовому рахунку'
            />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setPaymentsBySubscriberAccountModalWinState}
              title='Оплати по особовому рахунку'
            />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setPriceAdjustmentsReportsModalWinState}
              title='Коригування по нарахуванням'
            />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setPriceAdjustmentsReportsTotalModalWinState}
              title='Коригування по нарахуванням (підсумки)'
            />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setPricesReportsModalWinState}
              title='Нарахування'
            />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setPricesReportsTotalModalWinState}
              title='Нарахування (підсумки)'
            />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setPaymentsReportsModalWinState}
              title='Оплати'
            />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setPaymentsAdjustmentsReportsModalWinState}
              title='Оплати (коригування)'
            />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setPaymentsReportsTotalModalWinState}
              title='Оплати (підсумки)'
            />
          </ListItem>
          <ListItem>
            <ReportBtn
              onClick={setPaymentsReportsTotalByDateModalWinState}
              title='Оплати (підсумки по датах)'
            />
          </ListItem>
        </List>
      </Container>
      {showReportsByStreetsModalWin && (
        <ReportsByStreetsModalWin
          setModalWinState={setReportsByStreetsModalWinState}
        />
      )}
      {showReportsByHousesModalWin && (
        <ReportsByHousesModalWin
          setModalWinState={setReportsByHousesModalWinState}
        />
      )}
      {showReportsBySubscribersModalWin && (
        <ReportsBySubscribersModalWin
          setModalWinState={setReportsBySubscribersModalWinState}
        />
      )}
      {showStatementsBySubscriberAccountModalWin && (
        <StatementsBySubscriberAccountModalWin
          setModalWinState={setStatementsBySubscriberAccountModalWinState}
        />
      )}
      {showPaymentsBySubscriberAccountModalWin && (
        <PaymentsBySubscriberAccountModalWin
          setModalWinState={setPaymentsBySubscriberAccountModalWinState}
        />
      )}
      {showPriceAdjustmentsReportsModalWin && (
        <PriceAdjustmentsReportsModalWin
          setModalWinState={setPriceAdjustmentsReportsModalWinState}
        />
      )}
      {showPriceAdjustmentsReportsTotalModalWin && (
        <PriceAdjustmentsReportsTotalModalWin
          setModalWinState={setPriceAdjustmentsReportsTotalModalWinState}
        />
      )}
      {showPricesReportsModalWin && (
        <PricesReportsModalWin
          setModalWinState={setPricesReportsModalWinState}
        />
      )}
      {showPricesReportsTotalModalWin && (
        <PricesReportsTotalModalWin
          setModalWinState={setPricesReportsTotalModalWinState}
        />
      )}
      {showPaymentsReportsModalWin && (
        <PaymentsReportsModalWin
          setModalWinState={setPaymentsReportsModalWinState}
        />
      )}
      {showPaymentsAdjustmentsReportsModalWin && (
        <PaymentsAdjustmentsReportsModalWin
          setModalWinState={setPaymentsAdjustmentsReportsModalWinState}
        />
      )}
      {showPaymentsReportsModalWin && (
        <PaymentsReportsModalWin
          setModalWinState={setPaymentsReportsModalWinState}
        />
      )}
      {showPaymentsReportsTotalModalWin && (
        <PaymentsReportsTotalModalWin
          setModalWinState={setPaymentsReportsTotalModalWinState}
        />
      )}
      {showPaymentsReportsTotalByDateModalWin && (
        <PaymentsReportsTotalByDateModalWin
          setModalWinState={setPaymentsReportsTotalByDateModalWinState}
        />
      )}
    </>
  );
};

export default AccountingReports;
