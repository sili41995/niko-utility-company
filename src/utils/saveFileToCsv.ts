const saveFileToCsvCopy = ({
  data,
  fileName,
}: {
  data: string;
  fileName: string;
}): void => {
  const blob = new Blob(['\uFEFF' + data], {
    type: 'text/csv;charset=utf-8;',
  });

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
};

export default saveFileToCsvCopy;
