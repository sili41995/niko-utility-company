import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 1px;

  & > p {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.blue};
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};

  & > button {
    position: static;

    & > svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Title = styled.p`
  color: ${({ theme }): string => theme.colors.white};
  font-family: ${({ theme }): string => theme.fontFamily.primary};
  font-size: ${({ theme }): number => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondary};
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const TariffWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const PriceWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.other};
`;

export const Units = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.primary};
`;

export const PeriodWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
