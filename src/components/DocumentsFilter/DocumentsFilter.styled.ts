import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(5)};

  & > label :is(input, select) {
    flex-grow: 1;
    background-color: ${({ theme }) => theme.colors.whiteBG};
  }

  & > label:first-of-type :is(input, select) {
    border-top-left-radius: ${({ theme }) => theme.borderRadius.secondary}px;
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.secondary}px;
  }

  & > label:last-of-type :is(input, select) {
    border-top-right-radius: ${({ theme }) => theme.borderRadius.secondary}px;
    border-bottom-right-radius: ${({ theme }) =>
      theme.borderRadius.secondary}px;
  }
`;
