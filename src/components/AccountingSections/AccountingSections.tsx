import { FC } from 'react';
import TariffsModalWin from '@/components/TariffsModalWin';
import { SectionsList, SectionsListItem } from './AccountingSections.styled';
import PricesModalWin from '@/components/PricesModalWin';
import AddPeriodModalWin from '@/components/AddPeriodModalWin';
import { useAccountingSections } from '@/hooks';
import AccountingSectionsBtn from '@/components/AccountingSectionsBtn';
import PayAbankModalWin from '@/components/PayAbankModalWin';
import PaymentsFilesOshchadbankModalWin from '@/components/PaymentsFilesOshchadbankModalWin';
import PaymentsFilesPrivatbankModalWin from '@/components/PaymentsFilesPrivatbankModalWin';
import PaymentsFilesPostageModalWin from '@/components/PaymentsFilesPostageModalWin';
import AccountsMessageModalWin from '@/components/InvoicesModalWin';
import PaymentsModalWin from '@/components/PaymentsModalWin';
import PriceAdjustmentsModalWin from '@/components/PriceAdjustmentsModalWin';

const AccountingSections: FC = () => {
  const {
    setAddPeriodModalWinState,
    setPricesModalWinState,
    setPriceAdjustmentsModalWinState,
    setPaymentsModalWinState,
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
            onClick={setPricesModalWinState}
            title='Розрахунок'
          />
        </SectionsListItem>
        <SectionsListItem>
          <AccountingSectionsBtn
            onClick={setPriceAdjustmentsModalWinState}
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
      {showPricesModalWin && (
        <PricesModalWin setModalWinState={setPricesModalWinState} />
      )}
      {showAddPeriodModalWin && (
        <AddPeriodModalWin setModalWinState={setAddPeriodModalWinState} />
      )}
      {showPriceAdjustmentsModalWin && (
        <PriceAdjustmentsModalWin
          setModalWinState={setPriceAdjustmentsModalWinState}
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
        <PaymentsFilesOshchadbankModalWin
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
