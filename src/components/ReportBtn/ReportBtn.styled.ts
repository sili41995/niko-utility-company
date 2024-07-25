import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
