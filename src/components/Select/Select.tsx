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
}) => {
  return (
    <SelectWrap>
      <Title>{label}</Title>
      <StyledSelect
        {...settings}
        defaultValue={defaultValue}
        width={width}
        formType={formType}
      >
        {data.map(({ value, title }) => (
          <Option value={value} key={value}>
            {title}
          </Option>
        ))}
      </StyledSelect>
    </SelectWrap>
  );
};

export default Select;
