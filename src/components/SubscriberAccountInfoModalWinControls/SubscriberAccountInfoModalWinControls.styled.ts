import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.borderRadius.secondary}px;
`;
