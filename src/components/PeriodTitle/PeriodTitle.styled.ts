import styled from '@emotion/styled';
import { IStyledProps } from './PeriodTitle.types';

export const Text = styled.p<IStyledProps>`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme, isTitle }) =>
    isTitle ? 24 : theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: ${({ theme }) => theme.fontWeight.secondary};
  text-transform: capitalize;
`;
