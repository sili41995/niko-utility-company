import { Messages } from '@/constants';
import { IUseAttachFile } from '@/types/hooks.types';
import { InputChangeEvent } from '@/types/types';
import { toasts } from '@/utils';
import { useState } from 'react';

const useAttachCsvFile = (): IUseAttachFile => {
  const [file, setFile] = useState<File | null>(null);
  const targetFileExtension = 'csv';

  const onInputChange = (e: InputChangeEvent) => {
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

  return { file, onInputChange, targetFileExtension };
};

export default useAttachCsvFile;
