import { FC } from 'react';
import { IProps } from './NavSections.types';
import { Link } from 'react-router-dom';

const NavSections: FC<IProps> = ({ navSections }) => {
  return (
    <ul>
      {navSections.map(({ desc, path, title }) => (
        <li>
          <Link to={path}>
            <span>{title}</span>
            <span>{desc}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavSections;
