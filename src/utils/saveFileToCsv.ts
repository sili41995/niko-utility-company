import csvToArray from './csvToArray';
import getArrayBuffer from './getArrayBuffer';
import writeXlsxFile from './writeXlsxFile';

const saveFileToCsv = ({
  data,
  fileName,
}: {
  data: string;
  fileName: string;
}): void => {
  const strings = csvToArray(data);
  const xlsxData = writeXlsxFile(strings);
  const arrayBuffer = getArrayBuffer(xlsxData);

  const blob = new Blob([arrayBuffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
};

export default saveFileToCsv;
