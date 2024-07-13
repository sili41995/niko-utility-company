import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { FC, useState } from 'react';
import {
  ShowPeriodsListBtn,
  TitleWrap,
  PeriodsListWrap,
} from './AccountingTitle.styled';
import PeriodTitle from '@/components/PeriodTitle';
import { IoIosArrowDown } from 'react-icons/io';
import { IconSizes } from '@/constants';
import PeriodsList from '@/components/PeriodsList';
import { useTargetPeriod } from '@/hooks';

const AccountingTitle: FC = () => {
  const [showPeriodsList, setShowPeriodsList] = useState(false);
  const targetPeriod = useTargetPeriod();

  const setPeriodsListState = () => {
    setShowPeriodsList((prevState) => !prevState);
  };

  const onShowPeriodsListBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    setPeriodsListState();
  };

  return (
    <TitleWrap>
      <PeriodTitle targetPeriod={targetPeriod} isTitle />
      <PeriodsListWrap>
        <ShowPeriodsListBtn
          type='button'
          onClick={onShowPeriodsListBtnClick}
          showPeriodsList={showPeriodsList}
        >
          <IoIosArrowDown size={IconSizes.title} />
        </ShowPeriodsListBtn>
        {showPeriodsList && (
          <PeriodsList setPeriodsListState={setPeriodsListState} />
        )}
      </PeriodsListWrap>
    </TitleWrap>
  );
};

export default AccountingTitle;
