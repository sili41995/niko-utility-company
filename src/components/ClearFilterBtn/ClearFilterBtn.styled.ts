import styled from '@emotion/styled';
import { IStyledProps } from './ClearFilterBtn.types';

export const Button = styled.button<IStyledProps>`
  background-color: transparent;
  padding: 0;
  border: none;
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'all' : 'none')};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  & > svg {
    display: block;
    color: ${({ theme }) => theme.colors.black};
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
  }

  &:is(:hover, :focus) > svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
