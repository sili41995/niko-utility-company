import styled from '@emotion/styled';

export const Container = styled.div`
  & > button {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }
`;

export const Title = styled.p`
  margin-top: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.colors.tableData};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: 700;
  line-height: 1.2;
`;

export const ServicesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

export const ServicesListItem = styled.li`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
  background-color: ${({ theme }) => theme.colors.serviceBG};
`;

export const ServiceText = styled.p`
  color: ${({ theme }) => theme.colors.tableData};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};

  &:first-of-type {
    width: 35%;
  }
`;

export const InstructionWrap = styled.div`
  margin-top: 1px;
`;

export const InstructionTitle = styled.p`
  background-color: ${({ theme }) => theme.colors.servicesTitle};
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
  color: ${({ theme }) => theme.colors.tableData};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: 700;
`;

export const Instruction = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const InstructionItem = styled.li`
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
  background-color: ${({ theme }) => theme.colors.serviceBG};
`;

export const InstructionText = styled.p`
  color: ${({ theme }) => theme.colors.tableData};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
`;
