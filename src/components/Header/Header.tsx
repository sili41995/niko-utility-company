import { BtnTypes, IconSizes, PagePaths } from '@/constants';
import { FC, useState } from 'react';
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
} from './Headr.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import Container from '../Container';
import SettingsModalWin from '../SettingsModalWin';
import { useAuthStore } from '@/store/store';
import { selectIsLoggedIn } from '@/store/auth/selectors';

const Header: FC = () => {
  const [showModalWin, setShowModalWin] = useState<boolean>(false);
  const isLoggedIn = useAuthStore(selectIsLoggedIn);
  const title = 'РОЗРАХУНКОВИй ЦЕНТР';

  const setModalWinState = () => {
    setShowModalWin((prevState) => !prevState);
  };

  const onSettingsBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    setModalWinState();
  };

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
