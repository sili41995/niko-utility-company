import Container from '@/components/Container';
import ModalForm from '@/components/ModalForm';
import Section from '@/components/Section';
import SignInForm from '@/components/SignInForm';
import { FormTypes } from '@/constants';
import { FC } from 'react';

const SignInPage: FC = () => (
  <Section paddingBottom={48} paddingTop={48}>
    <Container>
      <ModalForm formType={FormTypes.auth}>
        <SignInForm />
      </ModalForm>
    </Container>
  </Section>
);

export default SignInPage;
