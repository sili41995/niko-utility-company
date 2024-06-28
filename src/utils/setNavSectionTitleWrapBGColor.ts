import { PagePaths, theme } from '@/constants';

const setNavSectionTitleWrapBGColor = (path: string): string => {
  switch (path) {
    case PagePaths.subscriberAccounts:
      return theme.colors.subscriberAccountsSection;

    case PagePaths.accounting:
      return theme.colors.accountingSection;

    default:
      return theme.colors.grey;
  }
};

export default setNavSectionTitleWrapBGColor;
