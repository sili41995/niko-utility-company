import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { IProps } from './PageTitle.types';

const PageTitle: FC<IProps> = ({ title }) => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
);

export default PageTitle;
