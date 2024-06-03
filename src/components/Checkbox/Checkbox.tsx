import { FC } from 'react';
import { IProps } from './Checkbox.types';

const Checkbox: FC<IProps> = ({ name, checked, onChange }) => (
  <label>
    <input type='checkbox' name={name} checked={checked} onChange={onChange} />
  </label>
);

export default Checkbox;
