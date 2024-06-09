import { FC } from 'react';
import { IProps } from './Checkbox.types';

const Checkbox: FC<IProps> = ({ name, checked, onChange, disabled }) => (
  <label>
    <input
      type='checkbox'
      name={name}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
  </label>
);

export default Checkbox;
