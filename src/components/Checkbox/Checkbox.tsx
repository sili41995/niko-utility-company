import { FC } from 'react';
import { IProps } from './Checkbox.types';

const Checkbox: FC<IProps> = ({
  name,
  checked,
  onChange,
  disabled,
  settings,
}) => (
  <label>
    <input
      {...settings}
      type='checkbox'
      name={name}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
  </label>
);

export default Checkbox;
