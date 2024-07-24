import { utils, write } from 'xlsx';

const writeXlsxFile = (data: string[][]): string => {
  const workbook = utils.book_new();
  const worksheet = utils.aoa_to_sheet(data);

  for (let R = 0; R < data.length; ++R) {
    for (let C = 0; C < data[R].length; ++C) {
      const cell_address = { c: C, r: R };
      const cell_ref = utils.encode_cell(cell_address);
      const cell = worksheet[cell_ref];
      if (cell) {
        cell.t = 's';
      }
    }
  }

  utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  const xlsxData = write(workbook, {
    bookType: 'xlsx',
    type: 'binary',
  });

  return xlsxData;
};

export default writeXlsxFile;
