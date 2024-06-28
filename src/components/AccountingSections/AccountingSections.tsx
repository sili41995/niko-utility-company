import { FC, useState } from 'react';
import TariffsModalWin from '../TariffsModalWin';
import {
  SectionBtn,
  SectionsList,
  SectionsListItem,
} from './AccountingSections.styled';
import ModalWin from '../ModalWin';

const AccountingSections: FC = () => {
  const [showTariffsModalWin, setShowTariffsModalWin] =
    useState<boolean>(false);
  const [showPrivateSectorTariffModalWin, setShowPrivateSectorTariffModalWin] =
    useState<boolean>(false);

  const setTariffsModalWinState = () => {
    setShowTariffsModalWin((prevState) => !prevState);
  };

  const setPrivateSectorTariffModalWinState = () => {
    setShowPrivateSectorTariffModalWin((prevState) => !prevState);
  };

  const onAddPrivateSectorTariffBtnClick = () => {
    setTariffsModalWinState();
    setPrivateSectorTariffModalWinState();
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
        <TariffsModalWin
          onAddPrivateSectorTariffBtnClick={onAddPrivateSectorTariffBtnClick}
          setModalWinState={setTariffsModalWinState}
        />
      )}
      {showPrivateSectorTariffModalWin && (
        <ModalWin setModalWinState={setPrivateSectorTariffModalWinState}>
          <div>showAddPrivateSectorTariff</div>
        </ModalWin>
      )}
    </>
  );
};

export default AccountingSections;
