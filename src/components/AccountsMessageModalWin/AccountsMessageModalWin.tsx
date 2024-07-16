import { FC, useState } from 'react';
import { IProps } from './AccountsMessageModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, ContentContainer } from './AccountsMessageModalWin.styled';
import PeriodTitle from '../PeriodTitle';
import ActionBtn from '../ActionBtn';
import { BtnClickEvent } from '@/types/types';
import { makeBlur, saveInvoicesToPdf, toasts } from '@/utils';
import accountingService from '@/services/accounting.service';
import { Messages } from '@/constants';
import { AxiosError } from 'axios';

const PayPostageModalWin: FC<IProps> = ({ setModalWinState }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchInvoices = async () => {
    setIsLoading(true);

    try {
      const result = await accountingService.fetchInvoices();
      saveInvoicesToPdf(result);
      toasts.successToast(Messages.fetchInvoicesSuccess);
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message;
        const isNotFoundErr = message.toLowerCase() === 'file was not found';
        const errorMessage = isNotFoundErr ? Messages.fileNotFoundErr : message;
        toasts.errorToast(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onActionBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    fetchInvoices();
  };

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Рахунки-повідомлення:' />
        <ContentContainer>
          <PeriodTitle />
          <ActionBtn
            title='Сформувати'
            isLoading={isLoading}
            onBtnClick={onActionBtnClick}
          />
        </ContentContainer>
      </Container>
    </ModalWin>
  );
};

export default PayPostageModalWin;
