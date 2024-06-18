import { FC } from 'react';
import { IProps } from './Select.types';

const Select: FC<IProps> = ({ settings, label, data, defaultValue }) => {
  return (
    <label>
      <span>{label}</span>
      <select {...settings} defaultValue={defaultValue}>
        {data.map(({ value, title }) => (
          <option value={value} key={value}>
            {title}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
