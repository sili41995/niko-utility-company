import { FC } from 'react';
import { Form, Message, Title } from './SignInForm.styles';
import { FormTypes, IconSizes, InputTypes, Messages } from '@/constants';
import AuthFormBtn from '../AuthFormBtn';
import Input from '../Input';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useSignInForm } from '@/hooks';

const SignInForm: FC = () => {
  const { handleFormSubmit, handleSubmit, register, isLoading } =
    useSignInForm();

  return (
    <>
      <Title>sign in</Title>
      <Message>{Messages.greetings}!</Message>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          settings={{ ...register('username', { required: true }) }}
          type={InputTypes.text}
          placeholder='Username'
          formType={FormTypes.authForm}
          icon={<FaEnvelope size={IconSizes.secondary} />}
          autoFocus
        />
        <Input
          settings={{
            ...register('password', { required: true, minLength: 6 }),
          }}
          type={InputTypes.password}
          placeholder='Password'
          formType={FormTypes.authForm}
          icon={<FaLock size={IconSizes.secondary} />}
        />
        <AuthFormBtn title='Sign in' disabled={isLoading} />
      </Form>
    </>
  );
};

export default SignInForm;
