import { ISaveFileProps } from '@/types/types';

const saveFileToPdf = ({ data, fileName }: ISaveFileProps): void => {
  console.log(data);
  const url = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();

  link.parentNode?.removeChild(link);
};

export default saveFileToPdf;
