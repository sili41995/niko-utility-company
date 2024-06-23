import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > button {
    margin-top: ${({ theme }) => theme.spacing(6)};
  }
`;

export const CurrentPeriod = styled.p`
  color: ${({ theme }) => theme.colors.tableData};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: ${({ theme }) => theme.fontWeight.secondary};
`;

export const AddressWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

export const SubscriberAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

export const TypesWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

export const ServicesWrap = styled.div`
  margin-top: ${({ theme }) => theme.spacing(6)};
`;

export const ServiceTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const SectionTitle = styled.p`
  color: ${({ theme }) => theme.colors.tableData};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondary};
`;

export const ServicesList = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

export const ServicesListTitleWrap = styled.div`
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
  background-color: ${({ theme }) => theme.colors.servicesTitle};
`;

export const ServicesListTitle = styled.p`
  color: ${({ theme }) => theme.colors.tableData};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
`;

export const ServiceListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
  background-color: ${({ theme }) => theme.colors.serviceBG};
`;

export const ServiceName = styled.p`
  color: ${({ theme }) => theme.colors.tableData};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
`;

export const PersonParametersWrap = styled.div`
  margin-top: ${({ theme }) => theme.spacing(6)};
`;

export const PersonParameters = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

export const CheckboxWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CheckboxName = styled.p`
  color: ${({ theme }) => theme.colors.tableData};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
`;
