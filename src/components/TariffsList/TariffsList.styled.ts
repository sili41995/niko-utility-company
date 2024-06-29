import styled from '@emotion/styled';

export const Container = styled.div``;

export const TitleWrap = styled.div`
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
  background-color: ${({ theme }) => theme.colors.servicesTitle};
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-top: 1px;
`;

export const ListItem = styled.li``;

export const TariffWrap = styled.div`
  display: flex;
  align-self: start;
  gap: ${({ theme }) => theme.spacing(5)};
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
  background-color: ${({ theme }) => theme.colors.serviceBG};
`;

export const ControlsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const EditBtn = styled.button`
  align-self: center;
  padding: 0;
  border: none;
  background-color: transparent;

  & > svg {
    display: block;
    color: ${({ theme }) => theme.colors.primary};
    transition: ${({ theme }) => theme.transitionDurationAndFunc};
  }

  &:is(:hover, :focus) > svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const ShowHistoryBtn = styled.button`
  align-self: center;
  padding: 0;
  border: none;
  background-color: transparent;

  & > svg {
    display: block;
    color: ${({ theme }) => theme.colors.primary};
    transition: ${({ theme }) => theme.transitionDurationAndFunc};
  }

  &:is(:hover, :focus) > svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing()};
  width: 100%;
`;

export const ServiceWrap = styled.div`
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

export const PriceWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
