import { InputTypes } from '@/constants';
import { useAttachCsvFile } from '@/hooks';
import {
  convertStringsToPaymentsPostage,
  readPaymentsDataFromCsv,
} from '@/utils';
import { FC, useEffect } from 'react';

const UploadPaymentsPostageFile: FC = () => {
  const { file, onInputChange, targetFileExtension } = useAttachCsvFile();

  useEffect(() => {
    const uploadPayments = async (file: File) => {
      try {
        const strings = await readPaymentsDataFromCsv(file);
        const payments = convertStringsToPaymentsPostage(strings);
      } catch (error) {
        console.log(error);
      }
    };

    file && uploadPayments(file);
  }, [file]);

  return (
    <form>
      <input
        type={InputTypes.file}
        accept={`.${targetFileExtension}`}
        onChange={onInputChange}
      />
    </form>
  );
};

export default UploadPaymentsPostageFile;
