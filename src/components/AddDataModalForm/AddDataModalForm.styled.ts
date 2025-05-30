import styled from '@emotion/styled';
import { IStyledProps } from './AddDataModalForm.types';

export const Container = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  margin-top: ${({ marginTop, theme }) =>
    marginTop ? `${marginTop}px` : theme.spacing(6)};
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.green};
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

export const FormWrap = styled.div`
  padding: ${({ theme }) => theme.spacing(4)};
`;
