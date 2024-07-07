import styled from '@emotion/styled';
import { IStyledProps } from './AccountingTitle.types';

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const PeriodsListWrap = styled.div`
  position: relative;
`;

export const ShowPeriodsListBtn = styled.button<IStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: transparent;

  & > svg {
    color: ${({ theme }) => theme.colors.black};
    transform: rotate(
      ${({ showPeriodsList }) => (showPeriodsList ? 180 : 0)}deg
    );
    transition: color ${({ theme }) => theme.transitionDurationAndFunc},
      transform ${({ theme }) => theme.transitionDurationAndFunc};
  }

  &:is(:hover, :focus) > svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
