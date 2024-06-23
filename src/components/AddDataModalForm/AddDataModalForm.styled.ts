import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.serviceBG};
  margin-top: ${({ theme }) => theme.spacing(6)};
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

// export const Title = styled.h2`
//   text-transform: uppercase;

// `;
