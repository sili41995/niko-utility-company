import { AriaLabels, ClassNames } from '@/constants';
import { FC } from 'react';
import { Button, Item } from '@/components/PaginationBar/PaginationBar.styled';
import { BtnClickEvent } from '@/types/types';
import { IProps } from './PaginationBarBtn.types';

const PaginationBarBtn: FC<IProps> = ({
  number,
  currentPage,
  step,
  setPage,
}) => {
  const btnClassName = number === currentPage ? ClassNames.active : '';
  const btnAriaLabel = `${AriaLabels.pageBtn} ${number}`;

  const onTargetPageBtnClick = (e: BtnClickEvent): void => {
    setPage({ e, page: number });
  };

  return (
    <Item key={number} page={number} currentPage={currentPage} step={step}>
      <Button
        className={btnClassName}
        aria-label={btnAriaLabel}
        onClick={onTargetPageBtnClick}
      >
        {number}
      </Button>
    </Item>
  );
};

export default PaginationBarBtn;
