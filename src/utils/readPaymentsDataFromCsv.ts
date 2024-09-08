import { PaymentsDataFromCsv } from '@/types/payment.types';

const readPaymentsDataFromCsv = (file: File): Promise<PaymentsDataFromCsv> => {
  const reader = new FileReader();

  return new Promise((resolve) => {
    reader.onload = function (e) {
      if (!e.target || !(e.target.result instanceof ArrayBuffer)) {
        return;
      }

      const arrayBuffer = e.target.result;
      const textDecoder = new TextDecoder('windows-1251');
      const text = textDecoder.decode(new Uint8Array(arrayBuffer));
      const data = text
        .split('\n')
        .map((item) => item.split(';'))
        .filter((item) => item.length > 1);

      resolve(data);
    };

    reader.readAsArrayBuffer(file);
  });
};

export default readPaymentsDataFromCsv;
