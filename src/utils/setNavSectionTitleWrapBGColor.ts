import { PagePaths, theme } from '@/constants';

const setNavSectionTitleWrapBGColor = (path: string): string => {
  switch (path) {
    case PagePaths.subscriberAccounts:
      return theme.colors.subscriberAccountsSection;

    case PagePaths.accounting:
      return theme.colors.accountingSection;

    case PagePaths.documents:
      return theme.colors.documentsSection;

    default:
      return theme.colors.darkGrey;
  }
};

export default setNavSectionTitleWrapBGColor;
