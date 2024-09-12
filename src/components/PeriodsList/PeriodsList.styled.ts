import styled from '@emotion/styled';
import { IStyledProps } from './PeriodsList.types';

export const Container = styled.div`
  position: absolute;
  z-index: 10;
  top: 100%;
  right: 0;
  padding: ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.colors.whiteBG};
  box-shadow: ${({ theme }) => theme.shadows.primary};
  border-radius: ${({ theme }) => theme.borderRadius.other}px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};
`;

export const ListItem = styled.li``;

export const RadioBtnLabel = styled.label``;

export const RadioBtnTitle = styled.span<IStyledProps>`
  color: ${({ theme, isTargetPeriod }) =>
    isTargetPeriod ? theme.colors.accent : theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
  text-transform: capitalize;
  white-space: nowrap;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const RadioBtn = styled.input`
  position: absolute;
  transform: scale(0);

  &:is(:hover, :focus) + span {
    color: ${({ theme }) => theme.colors.accent};
    cursor: pointer;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
