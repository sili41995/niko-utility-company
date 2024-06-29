import { FC, useState } from 'react';
import TariffsModalWin from '../TariffsModalWin';
import {
  SectionBtn,
  SectionsList,
  SectionsListItem,
} from './AccountingSections.styled';

const AccountingSections: FC = () => {
  const [showTariffsModalWin, setShowTariffsModalWin] =
    useState<boolean>(false);

  const setTariffsModalWinState = () => {
    setShowTariffsModalWin((prevState) => !prevState);
  };

  return (
    <>
      <SectionsList>
        <SectionsListItem>
          <SectionBtn type='button' onClick={setTariffsModalWinState}>
            Тарифи
          </SectionBtn>
        </SectionsListItem>
      </SectionsList>
      {showTariffsModalWin && (
        <TariffsModalWin setModalWinState={setTariffsModalWinState} />
      )}
    </>
  );
};

export default AccountingSections;
