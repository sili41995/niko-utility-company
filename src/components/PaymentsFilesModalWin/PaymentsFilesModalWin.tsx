import { FC, useState } from 'react';
import { IProps } from './PaymentsFilesModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, ContentContainer } from './PaymentsFilesModalWin.styled';
import PeriodTitle from '@/components/PeriodTitle';
import ActionBtn from '@/components/ActionBtn';
import PaymentsFilesModalWinControls from '@/components/PaymentsFilesModalWinControls';
import { PaymentsFilesCategories } from '@/constants';
import { InputChangeEvent } from '@/types/types';

import UploadPaymentsFile from '@/components/UploadPaymentsFile';

const PaymentsFilesModalWin: FC<IProps> = ({
  setModalWinState,
  title,
  file,
  isUpload,
  onAttachFileInputChange,
  onUploadPaymentsBtnClick,
  resetFile,
  targetFileExtension,
  isDownload,
  onDownloadPaymentsBtnClick,
}) => {
  const [category, setCategory] = useState<string>(
    () => PaymentsFilesCategories.upload
  );

  const isUploadFileCategory = category === PaymentsFilesCategories.upload;
  const isDownloadFileCategory = category === PaymentsFilesCategories.download;

  const onInputChange = (e: InputChangeEvent): void => {
    setCategory(e.currentTarget.value);
  };

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title={title} />
        <ContentContainer>
          <PeriodTitle />
          <PaymentsFilesModalWinControls
            isUploadFileCategory={isUploadFileCategory}
            isDownloadFileCategory={isDownloadFileCategory}
            onChange={onInputChange}
          />
          {isUploadFileCategory && (
            <UploadPaymentsFile
              file={file}
              isLoading={isUpload}
              onInputChange={onAttachFileInputChange}
              onUploadPaymentsBtnClick={onUploadPaymentsBtnClick}
              resetFile={resetFile}
              targetFileExtension={targetFileExtension}
            />
          )}
          {isDownloadFileCategory && (
            <ActionBtn
              title='Сформувати'
              isLoading={isDownload}
              onBtnClick={onDownloadPaymentsBtnClick}
            />
          )}
        </ContentContainer>
      </Container>
    </ModalWin>
  );
};

export default PaymentsFilesModalWin;
