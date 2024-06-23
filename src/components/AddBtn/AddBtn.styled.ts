import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing()};
  padding: 0;
  border: none;
  background-color: transparent;
  margin-left: auto;

  &:is(:hover, :focus) > span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const BtnTitle = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondary};
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};
`;
