import { IconSizes, PagePaths } from '@/constants';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/images/logo.png';
import { IoMdSettings } from 'react-icons/io';
import {
  Address,
  BtnTitle,
  Container,
  Content,
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

const Header: FC = () => {
  const title = 'РОЗРАХУНКОВИй ЦЕНТР';

  const onSettingsBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    console.log('onSettingsBtnClick');
  };

  return (
    <StyledHeader>
      <Container>
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
        <SettingsBtn type='button' onClick={onSettingsBtnClick}>
          <IoMdSettings size={IconSizes.primary} />
          <BtnTitle>Налаштування</BtnTitle>
        </SettingsBtn>
      </Container>
    </StyledHeader>
  );
};

export default Header;
