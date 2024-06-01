import { DisplayProp } from '@/constants';
import { ISetBtnDisplayProps } from '@/types/types';

const setBtnDisplayProp = ({
  currentPage,
  page,
  step,
}: ISetBtnDisplayProps): string | undefined => {
  if (!currentPage || !page) {
    return;
  }

  return page - Number(step) > currentPage || page + Number(step) < currentPage
    ? DisplayProp.none
    : DisplayProp.block;
};

export default setBtnDisplayProp;
