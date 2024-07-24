const csvToArray = (csvData: string): string[][] => {
  const rows = csvData.split('\n');
  return rows.map((row) => row.split(';'));
};

export default csvToArray;
