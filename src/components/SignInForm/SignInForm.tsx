import { FC } from 'react';
import { Form, Message, Title } from './SignInForm.styles';
import {
  AuthParams,
  FormTypes,
  IconSizes,
  InputTypes,
  Messages,
} from '@/constants';
import AuthFormBtn from '../AuthFormBtn';
import Input from '../Input';
import { FaLock, FaUser } from 'react-icons/fa';
import { useSignInForm } from '@/hooks';

const SignInForm: FC = () => {
  const { handleFormSubmit, handleSubmit, register, isLoading } =
    useSignInForm();

  return (
    <>
      <Title>sign in</Title>
      <Message>{Messages.greetings}</Message>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          settings={{ ...register('username', { required: true }) }}
          type={InputTypes.text}
          placeholder='Username'
          formType={FormTypes.auth}
          icon={<FaUser size={IconSizes.secondary} />}
          autoFocus
        />
        <Input
          settings={{
            ...register('password', {
              required: true,
              minLength: AuthParams.passMinLength,
              maxLength: AuthParams.passMaxLength,
            }),
          }}
          type={InputTypes.password}
          placeholder='Password'
          formType={FormTypes.auth}
          icon={<FaLock size={IconSizes.secondary} />}
        />
        <AuthFormBtn title='Sign in' disabled={isLoading} />
      </Form>
    </>
  );
};

export default SignInForm;
