import { IconSizes } from '@/constants';
import { FC } from 'react';
import { IoMdCall, IoMdMail, IoMdPin } from 'react-icons/io';
import {
  Address,
  AddressList,
  ContentWrap,
  Link,
  ListItem,
  StyledFooter,
  Title,
} from './Footer.styled';
import Container from '../Container';

const Footer: FC = () => (
  <StyledFooter>
    <Container>
      <ContentWrap>
        <Title>
          Федерація роботодавців комунальної інфраструктури, енергетики та
          житлово-комунального господарства України
        </Title>
        <Address>
          <AddressList>
            <ListItem>
              <IoMdPin size={IconSizes.secondary} />
              <Link
                href='https://maps.app.goo.gl/zCTVQRUrXehgVJL97'
                target='_blank'
                rel='noopener noreferrer'
              >
                04080, м. Київ, вул. Турівська, 31 оф.1
              </Link>
            </ListItem>
            <ListItem>
              <IoMdCall size={IconSizes.secondary} />
              <Link href='tel:0800306969'>0800-30-69-69</Link>
            </ListItem>
            <ListItem>
              <IoMdMail size={IconSizes.secondary} />
              <Link href='mailto:adamovfrugkh@gmail.com'>
                adamovfrugkh@gmail.com
              </Link>
            </ListItem>
          </AddressList>
        </Address>
      </ContentWrap>
    </Container>
  </StyledFooter>
);

export default Footer;
