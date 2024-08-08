import { FC } from 'react';
import ActionBtn from '@/components/ActionBtn';
import AttachFileInput from '@/components/AttachFileInput';
import { IProps } from './UploadPaymentsFile.types';

const UploadPaymentsFile: FC<IProps> = ({
  targetFileExtension,
  onInputChange,
  file,
  resetFile,
  isLoading,
  onUploadPaymentsBtnClick,
}) => {
  const disabledActionBtn = Boolean(!file);

  return (
    <>
      <AttachFileInput
        targetFileExtension={targetFileExtension}
        onInputChange={onInputChange}
        file={file}
        resetFile={resetFile}
      />
      <ActionBtn
        title='Завантажити'
        isLoading={isLoading}
        onBtnClick={onUploadPaymentsBtnClick}
        disabled={disabledActionBtn}
      />
    </>
  );
};

export default UploadPaymentsFile;
