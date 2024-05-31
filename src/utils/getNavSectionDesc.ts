import { GeneralParams } from '@/constants';

const getNavSectionDesc = (desc: string): string[] =>
  desc.split(GeneralParams.descDelimiter).map((item, index, array) => {
    const isLastIndex = array.length - 1 === index;

    return isLastIndex ? item : `${item}.`;
  });

export default getNavSectionDesc;
