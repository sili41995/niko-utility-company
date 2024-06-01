import { usePaginationBar } from '@/hooks';
import { FC } from 'react';
import PaginationBarBtn from '../PaginationBarBtn';

const PaginationBar: FC = () => {
  const {
    isBackNavBtnDisable,
    onPrevPageBtnClick,
    isShowFirstPageBtn,
    onFirstPageBtnClick,
    firstPage,
    isShowPrevTemplateBtn,
    isValidPage,
    pageNumbers,
    currentPage,
    setPage,
    isShowNextTemplateBtn,
    isShowLastPageBtn,
    onLastPageBtnClick,
    lastPage,
    isNextNavBtnDisable,
    onNextPageBtnClick,
    step,
  } = usePaginationBar({});

  return (
    <List>
      <Item>
        <Button disabled={isBackNavBtnDisable} onClick={onPrevPageBtnClick}>
          {'Попередня'}
        </Button>
      </Item>
      {isShowFirstPageBtn && (
        <Item>
          <Button onClick={onFirstPageBtnClick}>{firstPage}</Button>
        </Item>
      )}
      {isShowPrevTemplateBtn && (
        <TemplateItem>
          <Button disabled>...</Button>
        </TemplateItem>
      )}
      {isValidPage && pageNumbers.map((number) => <PaginationBarBtn />)}
      {isShowNextTemplateBtn && (
        <TemplateItem>
          <Button disabled>...</Button>
        </TemplateItem>
      )}
      {isShowLastPageBtn && (
        <Item>
          <Button onClick={onLastPageBtnClick}>{lastPage}</Button>
        </Item>
      )}
      <Item>
        <Button disabled={isNextNavBtnDisable} onClick={onNextPageBtnClick}>
          {'Наступна'}
        </Button>
      </Item>
    </List>
  );
};

export default PaginationBar;
