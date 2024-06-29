import { FC } from 'react';
import Input from '../Input';
import { FormTypes, InputTypes, SearchParamsKeys } from '@/constants';
import { useDocumentsFilter } from '@/hooks';
import { Container } from './DocumentsFilter.styled.ts';
import ClearFilterBtn from '../ClearFilterBtn';

const DocumentsFilter: FC = () => {
  const {
    onFilterChange,
    document,
    comment,
    documentInputRef,
    commentInputRef,
    clearDocumentFilter,
    clearCommentFilter,
    showClearDocumentFilterBtn,
    showClearCommentFilterBtn,
  } = useDocumentsFilter();

  return (
    <Container>
      <Input
        label='Документ'
        type={InputTypes.text}
        formType={FormTypes.filter}
        name={SearchParamsKeys.document}
        onChange={onFilterChange}
        defaultValue={document}
        inputRef={documentInputRef}
        width={300}
        offBorderRadius
        btn={
          <ClearFilterBtn
            onClick={clearDocumentFilter}
            show={showClearDocumentFilterBtn}
          />
        }
      />
      <Input
        label='Коментар'
        type={InputTypes.text}
        formType={FormTypes.filter}
        name={SearchParamsKeys.comment}
        onChange={onFilterChange}
        defaultValue={comment}
        inputRef={commentInputRef}
        width={300}
        offBorderRadius
        btn={
          <ClearFilterBtn
            onClick={clearCommentFilter}
            show={showClearCommentFilterBtn}
          />
        }
      />
    </Container>
  );
};

export default DocumentsFilter;
