import React, { FC } from 'react';

const AddBtn: FC<IProps> = ({ title, onClick }) => (
  <button type='button' onClick={onClick}>
    <span>{title}</span>
    <FcPlus size={IconSizes.secondary} />
  </button>
);

export default AddBtn;
