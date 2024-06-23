import { BtnTypes, IconSizes, PagePaths } from '@/constants';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/images/logo.png';
import { IoMdSettings } from 'react-icons/io';
import {
  Address,
  BtnTitle,
  Content,
  ContentWrap,
  Logo,
  Name,
  Nav,
  SettingsBtn,
  StyledHeader,
  Title,
  TitleWrap,
} from './Header.styled';
import Container from '../Container';
import SettingsModalWin from '../SettingsModalWin';
import { useHeader } from '@/hooks';

const Header: FC = () => {
  const title = 'РОЗРАХУНКОВИй ЦЕНТР';
  const { isLoggedIn, onSettingsBtnClick, showModalWin, setModalWinState } =
    useHeader();

  return (
    <>
      <StyledHeader>
        <Container>
          <ContentWrap>
            <Content>
              <Nav>
                <Link to={PagePaths.root}>
                  <Logo src={logo} alt='logo' width={86} height={86} />
                </Link>
              </Nav>
              <TitleWrap>
                <Title>{title}</Title>
                <Name>КП "Міське паркове господарство"</Name>
                <Address>Дніпропетровська область, м. Нікополь</Address>
              </TitleWrap>
            </Content>
            {isLoggedIn && (
              <SettingsBtn type={BtnTypes.button} onClick={onSettingsBtnClick}>
                <IoMdSettings size={IconSizes.primary} />
                <BtnTitle>Налаштування</BtnTitle>
              </SettingsBtn>
            )}
          </ContentWrap>
        </Container>
      </StyledHeader>
      {showModalWin && <SettingsModalWin setModalWinState={setModalWinState} />}
    </>
  );
};

export default Header;
