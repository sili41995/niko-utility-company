import { FC } from 'react';
import TariffsModalWin from '@/components/TariffsModalWin';
import { SectionsList, SectionsListItem } from './AccountingSections.styled';
import CalculatePricesModalWin from '@/components/CalculatePricesModalWin';
import AddPeriodModalWin from '@/components/AddPeriodModalWin';
import { useAccountingSections } from '@/hooks';
import AccountingSectionsBtn from '@/components/AccountingSectionsBtn';
import PayAbankModalWin from '@/components/PayAbankModalWin';
import PayOshchadbankModalWin from '@/components/PayOshchadbankModalWin';
import PaymentsFilesPrivatbankModalWin from '@/components/PaymentsFilesPrivatbankModalWin';
import PaymentsFilesPostageModalWin from '@/components/PaymentsFilesPostageModalWin';
import AccountsMessageModalWin from '@/components/AccountsMessageModalWin';
import PaymentsModalWin from '@/components/PaymentsModalWin';
import PriceAdjustmentModalWin from '@/components/PriceAdjustmentModalWin';

const AccountingSections: FC = () => {
  const {
    setAddPeriodModalWinState,
    setCalculatePricesModalWinState,
    setPriceAdjustmentModalWinState,
    setPaymentsModalWinState,
    setTariffsModalWinState,
    setAccountsMessageModalWinState,
    setPayPostageModalWinState,
    setPayPrivatbankModalWinState,
    setPayOshchadbankModalWinState,
    setPayAbankModalWinState,
    showTariffsModalWin,
    showCalculatePricesModalWin,
    showAddPeriodModalWin,
    showPriceAdjustmentModalWin,
    showPaymentsModalWin,
    showAccountsMessageModalWin,
    showPayPostageModalWin,
    showPayPrivatbankModalWin,
    showPayOshchadbankModalWin,
    showPayAbankModalWin,
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
        <SectionsListItem>
          <AccountingSectionsBtn
            onClick={setPriceAdjustmentModalWinState}
            title='Коригування нарахувань'
          />
        </SectionsListItem>
        <SectionsListItem>
          <AccountingSectionsBtn
            onClick={setPaymentsModalWinState}
            title='Оплати (стрічка)'
          />
        </SectionsListItem>
        <SectionsListItem>
          <AccountingSectionsBtn
            onClick={setTariffsModalWinState}
            title='Тарифи'
          />
        </SectionsListItem>
        <SectionsListItem>
          <AccountingSectionsBtn
            onClick={setAccountsMessageModalWinState}
            title='Рахунки-повідомлення'
          />
        </SectionsListItem>
        <SectionsListItem>
          <AccountingSectionsBtn
            onClick={setPayPostageModalWinState}
            title='Оплати Пошта'
          />
        </SectionsListItem>
        <SectionsListItem>
          <AccountingSectionsBtn
            onClick={setPayPrivatbankModalWinState}
            title='Оплати Приватбанк'
          />
        </SectionsListItem>
        <SectionsListItem>
          <AccountingSectionsBtn
            onClick={setPayOshchadbankModalWinState}
            title='Оплати Ощадбанк'
          />
        </SectionsListItem>
        <SectionsListItem>
          <AccountingSectionsBtn
            onClick={setPayAbankModalWinState}
            title='Оплати Абанк'
          />
        </SectionsListItem>
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
      {showPriceAdjustmentModalWin && (
        <PriceAdjustmentModalWin
          setModalWinState={setPriceAdjustmentModalWinState}
        />
      )}
      {showPaymentsModalWin && (
        <PaymentsModalWin setModalWinState={setPaymentsModalWinState} />
      )}
      {showAccountsMessageModalWin && (
        <AccountsMessageModalWin
          setModalWinState={setAccountsMessageModalWinState}
        />
      )}
      {showPayPostageModalWin && (
        <PaymentsFilesPostageModalWin
          setModalWinState={setPayPostageModalWinState}
        />
      )}
      {showPayPrivatbankModalWin && (
        <PaymentsFilesPrivatbankModalWin
          setModalWinState={setPayPrivatbankModalWinState}
        />
      )}
      {showPayOshchadbankModalWin && (
        <PayOshchadbankModalWin
          setModalWinState={setPayOshchadbankModalWinState}
        />
      )}
      {showPayAbankModalWin && (
        <PayAbankModalWin setModalWinState={setPayAbankModalWinState} />
      )}
    </>
  );
};

export default AccountingSections;
