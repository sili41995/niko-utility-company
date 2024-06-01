import styled from '@emotion/styled';

export const Container = styled.p`
  background-color: ${({ theme }) => theme.colors.headerBG};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
`;
