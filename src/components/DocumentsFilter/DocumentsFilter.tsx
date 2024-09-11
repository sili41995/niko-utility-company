import { FC } from 'react';
import Input from '@/components/Input';
import {
  FormTypes,
  InputLabels,
  InputTypes,
  SearchParamsKeys,
} from '@/constants';
import { useDocumentsFilter } from '@/hooks';
import { Container } from './DocumentsFilter.styled.ts';
import ClearFilterBtn from '@/components/ClearFilterBtn';

const DocumentsFilter: FC = () => {
  const {
    onFilterChange,
    name,
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
        label={InputLabels.documentName}
        type={InputTypes.text}
        formType={FormTypes.filter}
        name={SearchParamsKeys.name}
        onChange={onFilterChange}
        defaultValue={name}
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
        label={InputLabels.comment}
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
