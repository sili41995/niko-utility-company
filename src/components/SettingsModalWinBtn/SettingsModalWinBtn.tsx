import { FC } from 'react';
import { IProps } from './SettingsModalWinBtn.types';

const SettingsModalWinBtn: FC<IProps> = ({
  type,
  checked,
  value,
  onChange,
  name,
  title,
}) => {
  return (
    <label>
      <span>{title}</span>
      <input
        type={type}
        checked={checked}
        value={value}
        onChange={onChange}
        name={name}
      />
    </label>
  );
};

export default SettingsModalWinBtn;
