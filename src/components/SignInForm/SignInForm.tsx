import { FC } from 'react';
import { Form, Message, Title } from './SignInForm.styles';
import { FormTypes, InputTypes, Messages } from '@/constants';
import AuthFormBtn from '../AuthFormBtn';

const SignInForm: FC = () => {
  const { handleFormSubmit, handleSubmit, register, isLoading } =
    useSignInForm();

  return (
    <>
      <Title>sign in</Title>
      <Message>{Messages.greetings}!</Message>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          settings={{ ...register('email', { required: true }) }}
          type={InputTypes.email}
          placeholder='Email'
          formType={FormTypes.authForm}
          autoFocus
        />
        <Input
          settings={{
            ...register('password', { required: true, minLength: 6 }),
          }}
          type={InputTypes.password}
          placeholder='Password'
          formType={FormTypes.authForm}
        />
        <AuthFormBtn title='Sign in' disabled={isLoading} />
      </Form>
    </>
  );
};

export default SignInForm;
