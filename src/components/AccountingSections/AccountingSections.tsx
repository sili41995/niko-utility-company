import { FC, useState } from 'react';
import TariffsModalWin from '../TariffsModalWin';
import {
  SectionBtn,
  SectionsList,
  SectionsListItem,
} from './AccountingSections.styled';
import CalculatePricesModalWin from '../CalculatePricesModalWin';
import { usePeriodsStore } from '@/store/store';
import { selectAddPeriod } from '@/store/periods/selectors';
import { BtnClickEvent } from '@/types/types';
import { makeBlur, toasts } from '@/utils';
import { Messages } from '@/constants';

const AccountingSections: FC = () => {
  const [showTariffsModalWin, setShowTariffsModalWin] =
    useState<boolean>(false);
  const [showCalculatePricesModalWin, setShowCalculatePricesModalWin] =
    useState<boolean>(false);
  const addPeriod = usePeriodsStore(selectAddPeriod);

  const setTariffsModalWinState = () => {
    setShowTariffsModalWin((prevState) => !prevState);
  };

  const setCalculatePricesModalWinState = () => {
    setShowCalculatePricesModalWin((prevState) => !prevState);
  };

  const onAddPeriodBtnClick = async (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    try {
      await addPeriod();
      toasts.successToast(Messages.periodAddSuccess);
    } catch (error) {
      if (error instanceof Error) {
        const isDuplicatePeriodErr =
          error.message.toLowerCase() === 'period already use';
        const errorMessage = isDuplicatePeriodErr
          ? Messages.duplicatePeriodErr
          : error.message;
        toasts.errorToast(errorMessage);
      }
    }
  };

  return (
    <>
      <SectionsList>
        <SectionsListItem>
          <SectionBtn type='button' onClick={onAddPeriodBtnClick}>
            Новий період
          </SectionBtn>
        </SectionsListItem>
        <SectionsListItem>
          <SectionBtn type='button' onClick={setTariffsModalWinState}>
            Тарифи
          </SectionBtn>
        </SectionsListItem>
        <SectionsListItem>
          <SectionBtn type='button' onClick={setCalculatePricesModalWinState}>
            Розрахунок
          </SectionBtn>
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
    </>
  );
};

export default AccountingSections;
