import styled from '@emotion/styled';
import { IStyledLabelProps, IStyledProps } from './Input.types';
import { setInputFontSize, setInputHeight, setInputPadding } from '@/utils';

export const Container = styled.span`
  position: relative;
  & > svg {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const StyledInput = styled.input<IStyledProps>`
  width: 100%;
  height: ${({ formType }) => setInputHeight(formType)}px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.secondary}px;
  padding: ${({ formType }) => setInputPadding(formType)};
  font-family: Inter;
  color: ${({ theme }) => theme.colors.primaryFont};
  font-weight: 500;
  font-size: ${({ formType }) => setInputFontSize(formType)}px;
  letter-spacing: 0.04em;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus + svg {
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const InputWrap = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};
`;

export const Label = styled.span<IStyledLabelProps>`
  color: ${({ theme }) => theme.colors.tableData};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme, accent }) =>
    accent ? 700 : theme.fontWeight.primary};
`;
