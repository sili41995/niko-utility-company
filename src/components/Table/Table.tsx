import { FC } from 'react';
import { IProps } from './Table.types';
import { getTranslatedTitles } from '@/utils';
import { Titles } from '@/types/types';
import { StyledTable } from './Table.styled';

const Table: FC<IProps> = ({ data }) => {
  const titles = Object.keys(data[0]) as Titles;
  const translatedTitles = getTranslatedTitles(titles);

  return (
    <StyledTable>
      <thead>
        <tr>
          {translatedTitles.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
    </StyledTable>
  );
};

export default Table;
