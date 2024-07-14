import { SearchParamsKeys } from '@/constants';
import useSetSearchParams from './useSetSearchParams';
import { getPageNumbers, getPaginationBarSettings, makeBlur } from '@/utils';
import { BtnClickEvent, IOnPageBtnClickProps } from '@/types/types';
import { IUsePaginationBar, IUsePaginationBarProps } from '@/types/hooks.types';

const usePaginationBar = ({
  totalCount,
  step = 1,
  quantity,
}: IUsePaginationBarProps): IUsePaginationBar => {
  const { updateSearchParams, searchParams } = useSetSearchParams();
  const pageQuantity = Math.ceil(totalCount / quantity);
  const pageNumbers = getPageNumbers(pageQuantity);
  const currentPage = Number(searchParams.get(SearchParamsKeys.page) ?? 1);
  const {
    firstPage,
    lastPage,
    isBackNavBtnDisable,
    isNextNavBtnDisable,
    isShowNextTemplateBtn,
    isShowLastPageBtn,
    isShowFirstPageBtn,
    isShowPrevTemplateBtn,
    isValidPage,
    isLastPage,
  } = getPaginationBarSettings({
    pageNumbers,
    currentPage,
    step,
  });

  const setPage = ({ e, page }: IOnPageBtnClickProps): void => {
    makeBlur(e.currentTarget);
    updateSearchParams({ key: SearchParamsKeys.page, value: String(page) });
  };

  const onPrevPageBtnClick = (e: BtnClickEvent): void => {
    setPage({ e, page: currentPage - 1 });
  };

  const onNextPageBtnClick = (e: BtnClickEvent): void => {
    setPage({ e, page: currentPage + 1 });
  };

  const onFirstPageBtnClick = (e: BtnClickEvent): void => {
    setPage({ e, page: firstPage });
  };

  const onLastPageBtnClick = (e: BtnClickEvent): void => {
    setPage({ e, page: lastPage });
  };

  return {
    isBackNavBtnDisable,
    onPrevPageBtnClick,
    isShowFirstPageBtn,
    firstPage,
    onFirstPageBtnClick,
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
    isLastPage,
  };
};

export default usePaginationBar;
