import { SearchParamsKeys } from '@/constants';
import { BtnClickEvent, InputChangeEvent } from '@/types/types';
import useSetSearchParams from './useSetSearchParams';
import useFilterSearchParams from './useFilterSearchParams';
import { useRef } from 'react';
import { makeBlur } from '@/utils';
import { IUseDocumentsFilter } from '@/types/hooks.types';

const useDocumentsFilter = (): IUseDocumentsFilter => {
  const { updateSearchParams } = useSetSearchParams();
  const { comment, name } = useFilterSearchParams();
  const documentInputRef = useRef<HTMLInputElement>(null);
  const commentInputRef = useRef<HTMLInputElement>(null);
  const showClearDocumentFilterBtn = Boolean(name);
  const showClearCommentFilterBtn = Boolean(comment);

  const onFilterChange = (e: InputChangeEvent): void => {
    const { value, name: key } = e.target;
    updateSearchParams({ key, value });
    updateSearchParams({ key: SearchParamsKeys.page, value: '' });
  };

  const clearDocumentFilter = (e: BtnClickEvent) => {
    if (documentInputRef.current) {
      documentInputRef.current.value = '';
    }

    makeBlur(e.currentTarget);
    updateSearchParams({ key: SearchParamsKeys.name, value: '' });
  };

  const clearCommentFilter = (e: BtnClickEvent) => {
    if (commentInputRef.current) {
      commentInputRef.current.value = '';
    }

    makeBlur(e.currentTarget);
    updateSearchParams({ key: SearchParamsKeys.comment, value: '' });
  };

  return {
    onFilterChange,
    name,
    comment,
    documentInputRef,
    commentInputRef,
    clearDocumentFilter,
    clearCommentFilter,
    showClearDocumentFilterBtn,
    showClearCommentFilterBtn,
  };
};

export default useDocumentsFilter;
