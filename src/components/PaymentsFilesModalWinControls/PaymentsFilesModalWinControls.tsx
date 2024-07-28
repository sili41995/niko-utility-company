import { FC } from 'react';
import { InputTypes, PaymentsFilesCategories } from '@/constants';
import { IProps } from './PaymentsFilesModalWinControls.types';
import { Form } from './PaymentsFilesModalWinControls.styled';
import PaymentsFilesModalWinBtn from '@/components/PaymentsFilesModalWinBtn';

const PaymentsFilesModalWinControls: FC<IProps> = ({
  isUploadFileCategory,
  isDownloadFileCategory,
  onChange,
}) => (
  <Form>
    <PaymentsFilesModalWinBtn
      checked={isUploadFileCategory}
      name={PaymentsFilesCategories.name}
      onChange={onChange}
      type={InputTypes.radio}
      value={PaymentsFilesCategories.upload}
      title='Завантажити файл'
    />
    <PaymentsFilesModalWinBtn
      checked={isDownloadFileCategory}
      name={PaymentsFilesCategories.name}
      onChange={onChange}
      type={InputTypes.radio}
      value={PaymentsFilesCategories.download}
      title='Сформувати файл'
    />
  </Form>
);

export default PaymentsFilesModalWinControls;
