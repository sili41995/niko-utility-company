import { FC, useState } from 'react';
import TariffsModalWin from '../TariffsModalWin';
import {
  SectionBtn,
  SectionsList,
  SectionsListItem,
} from './AccountingSections.styled';
import CalculatePricesModalWin from '../CalculatePricesModalWin';

const AccountingSections: FC = () => {
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

  return (
    <>
      <SectionsList>
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
