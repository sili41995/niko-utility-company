import NavSections from '@/components/NavSections';
import { navSections } from '@/constants';
import { FC } from 'react';

const DashboardPage: FC = () => {
  return <NavSections navSections={navSections} />;
};

export default DashboardPage;
