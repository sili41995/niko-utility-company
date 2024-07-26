import styled from '@emotion/styled';

export const Container = styled.div`
  width: 800px;
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(6)};
  margin-top: ${({ theme }) => theme.spacing(6)};
`;

export const InputsWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
