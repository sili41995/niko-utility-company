import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.headerBG};
  padding-top: ${({ theme }) => theme.padding.container}px;
  padding-bottom: ${({ theme }) => theme.padding.container}px;
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(10)};
  align-items: center;
`;

export const Nav = styled.nav`
  & > a {
    display: block;
  }
`;

export const Logo = styled.img``;

export const TitleWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: -16px;
    width: 1px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 0.5px;
  }
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 22px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  text-transform: uppercase;
`;

export const Name = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  line-height: 1.2;
`;

export const Address = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.primary};
`;

export const SettingsBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.primary}px;
  padding: ${({ theme }) => theme.spacing(2)};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc},
    color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.headerBG};
  }
`;

export const BtnTitle = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
`;
