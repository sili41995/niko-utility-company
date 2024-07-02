import { AccountTypes, SectorTypes } from '@/constants';
import { IAddSubscriberAccountFormData } from '@/types/subscriberAccount.types';

const getSubscriberAccountSector = (
  subscriberAccount: IAddSubscriberAccountFormData
): SectorTypes => {
  const { accountType, apartment } = subscriberAccount;
  const isLegalEntity = accountType === AccountTypes.legalEntity;

  if (isLegalEntity) {
    return SectorTypes.other;
  } else if (apartment) {
    return SectorTypes.multiApartment;
  } else {
    return SectorTypes.private;
  }
};

export default getSubscriberAccountSector;
