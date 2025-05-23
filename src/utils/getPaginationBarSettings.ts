import {
  IGetPaginationBarSettings,
  IGetPaginationBarSettingsProps,
} from '@/types/types';

const getPaginationBarSettings = ({
  pageNumbers,
  currentPage,
  step,
}: IGetPaginationBarSettingsProps): IGetPaginationBarSettings => {
  const firstPage = pageNumbers[0];
  const lastPage = pageNumbers[pageNumbers.length - 1];
  const isFirstPage = currentPage === firstPage;
  const isLastPage = currentPage === lastPage;
  const isValidPage = currentPage >= firstPage && currentPage <= lastPage;
  const isBackNavBtnDisable = !isValidPage || isFirstPage;
  const isNextNavBtnDisable = !isValidPage || isLastPage;
  const isShowPrevTemplateBtn =
    isValidPage && currentPage - step - 1 > firstPage;
  const isShowNextTemplateBtn =
    isValidPage && currentPage + step + 1 < lastPage;
  const isShowFirstPageBtn = isValidPage && currentPage - step > firstPage;
  const isShowLastPageBtn = isValidPage && currentPage + step < lastPage;

  return {
    isValidPage,
    firstPage,
    lastPage,
    isBackNavBtnDisable,
    isNextNavBtnDisable,
    isShowNextTemplateBtn,
    isShowLastPageBtn,
    isShowFirstPageBtn,
    isShowPrevTemplateBtn,
    isLastPage,
  };
};

export default getPaginationBarSettings;
