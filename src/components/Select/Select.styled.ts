import styled from '@emotion/styled';
import { IStyledProps, IStyledSelectWrapProps } from './Select.types';
import { setInputFontSize, setInputHeight, setInputPadding } from '@/utils';

export const SelectWrap = styled.label<IStyledSelectWrapProps>`
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
  align-items: ${({ horizontal }) => (horizontal ? 'center' : 'flex-start')};
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing()};
`;

export const Title = styled.span`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.tableData};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
`;

export const StyledSelect = styled.select<IStyledProps>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ formType }) => setInputHeight(formType)}px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme, offBorderRadius }) =>
    offBorderRadius ? 0 : theme.borderRadius.secondary}px;
  padding: ${({ formType }) => setInputPadding(formType)};
  font-family: Inter;
  color: ${({ theme }) => theme.colors.primaryFont};
  font-weight: 500;
  font-size: ${({ formType }) => setInputFontSize(formType)}px;
  letter-spacing: 0.04em;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:is(:hover, :focus) + svg {
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Option = styled.option``;
