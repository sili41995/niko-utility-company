import React from 'react';

const PaginationBarBtn = () => {
  const onTargetPageBtnClick = (e: BtnClickEvent): void => {
    setPage({ e, page: number });
  };

  return (
    <Item key={number} page={number} currentPage={currentPage} step={step}>
      <Button
        className={number === currentPage ? 'active' : ''}
        aria-label={`${AriaLabels.pageBtn} ${number}`}
        onClick={onTargetPageBtnClick}
      >
        {number}
      </Button>
    </Item>
  );
};

export default PaginationBarBtn;
