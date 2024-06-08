import styled from '@emotion/styled';

export const Button = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;
  border: 0;
  background-color: transparent;

  &:is(:hover, :focus) svg {
    color: ${({ theme }) => theme.colors.accent};
  }

  & svg {
    display: block;
    color: #121417;
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
  }
`;
