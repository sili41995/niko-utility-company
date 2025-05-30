import styled from '@emotion/styled';
import { IStyledProps } from './ActionBtn.types';

export const Button = styled.button<IStyledProps>`
  min-width: 170px;
  height: 60px;
  padding: 0;
  padding-left: ${({ theme }) => theme.spacing(8)};
  padding-right: ${({ theme }) => theme.spacing(8)};
  align-self: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.primary}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }): string => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.other};
  line-height: 1.5;
  letter-spacing: 0.64px;
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};

  & svg {
    height: 40px;
    fill: ${({ theme }) => theme.colors.white};
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accent};
  }

  &:disabled {
    background-color: ${({ theme, disabledBnt }) =>
      disabledBnt && theme.colors.disabledBtn};
  }
`;
