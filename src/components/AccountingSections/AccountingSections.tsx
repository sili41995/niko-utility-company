import { FC, useState } from 'react';
import TariffsModalWin from '../TariffsModalWin';
import {
  SectionBtn,
  SectionsList,
  SectionsListItem,
} from './AccountingSections.styled';
import CalculatePricesModalWin from '../CalculatePricesModalWin';
import AddPeriodModalWin from '../AddPeriodModalWin';

const AccountingSections: FC = () => {
  const [showAddPeriodModalWin, setShowAddPeriodModalWin] =
    useState<boolean>(false);
  const [showTariffsModalWin, setShowTariffsModalWin] =
    useState<boolean>(false);
  const [showCalculatePricesModalWin, setShowCalculatePricesModalWin] =
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

  return (
    <>
      <SectionsList>
        <SectionsListItem>
          <SectionBtn type='button' onClick={setAddPeriodModalWinState}>
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
      {showAddPeriodModalWin && (
        <AddPeriodModalWin setModalWinState={setAddPeriodModalWinState} />
      )}
    </>
  );
};

export default AccountingSections;
