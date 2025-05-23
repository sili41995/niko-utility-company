import styled from '@emotion/styled';

export const Container = styled.label`
  padding: ${({ theme }) => theme.spacing(2)};
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};
  cursor: pointer;

  &:is(:hover, :focus, :has(input:checked)) {
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }

  & > input {
    position: absolute;
    transform: scale(0);
  }
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
`;
