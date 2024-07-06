import styled from '@emotion/styled';

export const Button = styled.button`
  min-width: 350px;
  height: 44px;
  padding: 6px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.secondary}px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }): string => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.other};
  line-height: 1.5;
  letter-spacing: 0.64px;
  transition: ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
