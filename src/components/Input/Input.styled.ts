import styled from '@emotion/styled';
import {
  IStyledInputWrapProps,
  IStyledLabelProps,
  IStyledInputProps,
} from './Input.types';
import { setInputFontSize, setInputHeight, setInputPadding } from '@/utils';

export const Container = styled.span`
  position: relative;

  & > svg {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  & > button {
    position: absolute;
    z-index: 10;
    top: 50%;
    right: 4px;
    transform: translateY(-50%);
  }
`;

export const StyledInput = styled.input<IStyledInputProps>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ formType }) => setInputHeight(formType)}px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme, offBorderRadius }) =>
    offBorderRadius ? 0 : theme.borderRadius.secondary}px;
  padding: ${({ formType }) => setInputPadding(formType)};
  font-family: ${({ theme }): string => theme.fontFamily.primary};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeight.other};
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

export const InputWrap = styled.label<IStyledInputWrapProps>`
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
  align-items: ${({ horizontal }) => (horizontal ? 'center' : 'flex-start')};
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing()};
`;

export const Label = styled.span<IStyledLabelProps>`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme, accent }) =>
    accent ? 700 : theme.fontWeight.primary};
`;
