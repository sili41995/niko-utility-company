import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 280px;
  left: 16px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};

  & > a,
  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.green};
    transition: background-color
      ${({ theme }) => theme.transitionDurationAndFunc};

    &:is(:hover, :focus) {
      background-color: ${({ theme }) => theme.colors.greenAccent};
    }

    & > svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Button = styled.button`
  border: none;
  padding: 0;
`;
