import styled from '@emotion/styled';

export const Container = styled.label`
  display: flex;
  align-self: start;
  justify-content: center;
  width: calc(100% / 5);
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.borderRadius.secondary}px;
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};
  cursor: pointer;

  &:is(:hover, :focus, :has(input:checked)) {
    background-color: ${({ theme }) => theme.colors.accent};

    & > span {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  & > input {
    position: absolute;
    transform: scale(0);
  }
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.other};
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};
`;
