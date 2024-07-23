const saveFileToPdf = (data: BlobPart): void => {
  const url = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'invoices.pdf');
  document.body.appendChild(link);
  link.click();

  link.parentNode?.removeChild(link);
};

export default saveFileToPdf;
