import { FC, useState } from 'react';
import { IProps } from './PayPostageModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, ContentContainer } from './PayPostageModalWin.styled';
import PeriodTitle from '@/components/PeriodTitle';
import ActionBtn from '@/components/ActionBtn';
import PaymentsFilesModalWinControls from '../PaymentsFilesModalWinControls';
import { Messages, PaymentsFilesCategories } from '@/constants';
import { BtnClickEvent, InputChangeEvent } from '@/types/types';
import accountingService from '@/services/accounting.service';
import { makeBlur, saveFileToCsv, toasts } from '@/utils';
import { AxiosError } from 'axios';
import UploadPaymentsPostageFile from '../UploadPaymentsPostageFile';

const PayPostageModalWin: FC<IProps> = ({ setModalWinState }) => {
  const [category, setCategory] = useState<string>(
    () => PaymentsFilesCategories.upload
  );
  const [isDownload, setIsDownload] = useState<boolean>(false);

  const isUploadFileCategory = category === PaymentsFilesCategories.upload;
  const isDownloadFileCategory = category === PaymentsFilesCategories.download;

  const onInputChange = (e: InputChangeEvent): void => {
    setCategory(e.currentTarget.value);
  };

  const downloadPayments = async () => {
    setIsDownload(true);

    try {
      const result = await accountingService.fetchPaymentsBySourcePostage();
      saveFileToCsv({ data: result, fileName: 'payments-postage.xlsx' });
      toasts.successToast(Messages.fetchPaymentsSuccess);
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message;
        toasts.errorToast(message);
      }
    } finally {
      setIsDownload(false);
    }
  };

  const onDownloadPaymentsBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    downloadPayments();
  };

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Оплати Пошта:' />
        <ContentContainer>
          <PeriodTitle />
          <PaymentsFilesModalWinControls
            isUploadFileCategory={isUploadFileCategory}
            isDownloadFileCategory={isDownloadFileCategory}
            onChange={onInputChange}
          />
          {isUploadFileCategory && <UploadPaymentsPostageFile />}
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

export default PayPostageModalWin;
