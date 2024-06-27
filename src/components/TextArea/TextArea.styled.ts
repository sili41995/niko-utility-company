import styled from '@emotion/styled';
import { setInputFontSize, setInputPadding } from '@/utils';
import { IStyledProps } from './TextArea.types';

export const StyledTextArea = styled.textarea<IStyledProps>`
  width: 100%;
  height: 110px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.secondary}px;
  padding: ${({ formType }) => setInputPadding(formType)};
  font-family: ${({ theme }): string => theme.fontFamily.primary};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeight.other};
  font-size: ${({ formType }) => setInputFontSize(formType)}px;
  letter-spacing: 0.04em;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};
  resize: none;

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
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
`;
