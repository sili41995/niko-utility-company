import { Messages } from '@/constants';
import { IUseAttachFile } from '@/types/hooks.types';
import { BtnClickEvent, InputChangeEvent } from '@/types/types';
import { makeBlur, toasts } from '@/utils';
import { useState } from 'react';

const useAttachCsvFile = (): IUseAttachFile => {
  const [file, setFile] = useState<File | null>(null);
  const targetFileExtension = 'csv';

  const onAttachFileInputChange = (e: InputChangeEvent) => {
    const { files } = e.target;

    if (!files?.length) {
      return;
    }

    const isTargetFileExtension = files[0].type.endsWith(targetFileExtension);

    if (isTargetFileExtension) {
      setFile(files[0]);
    } else {
      setFile(null);
      toasts.errorToast(Messages.csvFileExtensionErr);
    }
  };

  const resetFile = (e: BtnClickEvent): void => {
    makeBlur(e.currentTarget);
    setFile(null);
  };

  return { file, onAttachFileInputChange, resetFile, targetFileExtension };
};

export default useAttachCsvFile;
