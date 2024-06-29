import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }): string => theme.spacing(2)};
`;
