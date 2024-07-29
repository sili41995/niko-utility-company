import { ClassNames } from '@/constants';
import { setBtnDisplayProp } from '@/utils';
import styled from '@emotion/styled';
import { IStyledProps } from './PaginationBar.types';

export const List = styled.ul`
  display: flex;
  margin-left: auto;
`;

export const Item = styled.li<IStyledProps>`
  display: ${({ currentPage, page, step }) =>
    setBtnDisplayProp({ currentPage, page, step })};

  &:first-of-type button {
    border-bottom-left-radius: ${({ theme }): number =>
      theme.borderRadius.secondary}px;
    border-top-left-radius: ${({ theme }): number =>
      theme.borderRadius.secondary}px;
  }

  &:last-of-type button {
    border-bottom-right-radius: ${({ theme }): number =>
      theme.borderRadius.secondary}px;
    border-top-right-radius: ${({ theme }): number =>
      theme.borderRadius.secondary}px;
  }
`;

export const TemplateItem = styled.li`
  & button {
    cursor: auto;

    &:is(:hover, :focus) {
      box-shadow: none;
    }
  }
`;

export const Button = styled.button`
  min-width: 30px;
  padding: ${({ theme }): string => theme.spacing(2)};
  background-color: ${({ theme }): string => theme.colors.white};
  border: none;
  border-color: transparent;
  color: ${({ theme }): string => theme.colors.accent};
  font-family: ${({ theme }): string => theme.fontFamily.primary};
  font-size: ${({ theme }): number => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.other};
  transition: box-shadow
    ${({ theme }): string => theme.transitionDurationAndFunc};

  &.${ClassNames.active} {
    background-color: ${({ theme }): string => theme.colors.accent};
    color: ${({ theme }): string => theme.colors.white};
  }

  &:is(:hover, :focus, :active) {
    outline: none;
    box-shadow: ${({ theme }): string => theme.shadows.primary};
  }
`;
