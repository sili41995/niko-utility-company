import { PagePaths, theme } from '@/constants';
import { IPathes } from '@/types/types';

const setNavSectionTitleWrapBGColor = (path: string): string => {
  const pathes: IPathes = {
    [PagePaths.houses]: theme.colors.housesSection,
    [PagePaths.enterprises]: theme.colors.body,
    [PagePaths.subscribers]: theme.colors.subscribersSection,
    [PagePaths.counters]: theme.colors.body,
    [PagePaths.accounting]: theme.colors.accountingSection,
    [PagePaths.oneOffJobs]: theme.colors.body,
    [PagePaths.materials]: theme.colors.body,
    [PagePaths.documents]: theme.colors.documentsSection,
  };

  return pathes[path] ?? theme.colors.body;
};

export default setNavSectionTitleWrapBGColor;
