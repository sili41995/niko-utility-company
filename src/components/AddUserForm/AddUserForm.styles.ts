import styled from '@emotion/styled';

export const Message = styled.p`
  color: ${({ theme }): string => theme.colors.tableData};
  font-family: ${({ theme }): string => theme.fontFamily.primary};
  font-size: ${({ theme }): number => theme.fontSize.primary}px;
  font-weight: ${({ theme }): number => theme.fontWeight.primary};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }): string => theme.spacing(2)};
`;
