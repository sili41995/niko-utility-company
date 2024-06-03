import ModalForm from '@/components/ModalForm';
import { FormTypes } from '@/constants';
import { FC } from 'react';

const SignInPage: FC = () => (
  <ModalForm formType={FormTypes.authForm}>
    <SignInForm />
  </ModalForm>
);

export default SignInPage;
