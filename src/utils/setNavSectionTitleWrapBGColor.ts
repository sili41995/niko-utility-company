import { PagePaths, theme } from '@/constants';
import { IPathes } from '@/types/types';

const setNavSectionTitleWrapBGColor = (path: string): string => {
  const pathes: IPathes = {
    [PagePaths.subscriberAccounts]: theme.colors.subscriberAccountsSection,
    [PagePaths.accounting]: theme.colors.accountingSection,
    [PagePaths.documents]: theme.colors.documentsSection,
  };

  return pathes[path] ?? theme.colors.body;
};

export default setNavSectionTitleWrapBGColor;
