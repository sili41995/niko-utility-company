import styled from '@emotion/styled';

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.servicesTitle};
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.tableData};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: 400;
`;

export const AddServiceBtn = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;

  & > svg {
    display: block;
    color: ${({ theme }) => theme.colors.addBntIcon};
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
  }

  &:is(:hover, :focus) > svg {
    color: ${({ theme }) => theme.colors.addBtnIconAccent};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.serviceBG};
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
`;
