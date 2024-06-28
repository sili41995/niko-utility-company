import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const StatisticsWrap = styled.div`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;
