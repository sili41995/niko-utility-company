import styled from '@emotion/styled';
import { setInputFontSize, setInputPadding } from '@/utils';
import { IStyledProps } from './TextArea.types';

export const StyledTextArea = styled.input<IStyledProps>`
  width: 100%;
  height: 110px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.secondary}px;
  padding: ${({ formType }) => setInputPadding(formType)};
  font-family: Inter;
  color: ${({ theme }) => theme.colors.primaryFont};
  font-weight: ${({ theme }) => theme.fontWeight.other};
  font-size: ${({ formType }) => setInputFontSize(formType)}px;
  letter-spacing: 0.04em;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TextAreaWrap = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.tableData};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
`;
