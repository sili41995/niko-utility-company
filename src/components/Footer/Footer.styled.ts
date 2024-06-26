import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.body};
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  padding-top: ${({ theme }) => theme.padding.container}px;
  padding-bottom: ${({ theme }) => theme.padding.container}px;
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
  line-height: 1.5;
`;

export const Address = styled.address``;

export const AddressList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
  font-style: normal;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
