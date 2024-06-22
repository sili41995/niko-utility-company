import { FC } from 'react';
import { IProps } from './Select.types';
import { Option, SelectWrap, StyledSelect, Title } from './Select.styled';

const Select: FC<IProps> = ({
  settings,
  label,
  data,
  defaultValue,
  width,
  formType,
  horizontal = false,
  offBorderRadius = false,
}) => {
  const styledSelect = (
    <StyledSelect
      {...settings}
      defaultValue={defaultValue}
      width={width}
      formType={formType}
      offBorderRadius={offBorderRadius}
    >
      {data.map(({ value, title }) => (
        <Option value={value} key={value}>
          {title}
        </Option>
      ))}
    </StyledSelect>
  );

  return label ? (
    <SelectWrap horizontal={horizontal}>
      <Title>{label}</Title>
      {styledSelect}
    </SelectWrap>
  ) : (
    styledSelect
  );
};

export default Select;
