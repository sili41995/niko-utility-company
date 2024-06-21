import { ISubscriberAccount } from '@/types/data.types';

const filterAddSubscriberAccountData = (
  data: ISubscriberAccount
): ISubscriberAccount => {
  const filteredData = { ...data };

  const keys = Object.keys(data);

  keys.forEach((key) => {
    const isEmptyValue = data[key] === '';

    if (isEmptyValue) {
      filteredData[key] = undefined;
    } else if (data[key] === 'true') {
      filteredData[key] = true;
    } else if (data[key] === 'false') {
      filteredData[key] = false;
    } else {
      filteredData[key] = data[key];
    }
  });

  return filteredData;
};

export default filterAddSubscriberAccountData;
