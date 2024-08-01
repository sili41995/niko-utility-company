import { FC } from 'react';
import { Form, Message, Title } from './SignInForm.styles';
import {
  AuthParams,
  FormTypes,
  IconSizes,
  InputTypes,
  Messages,
} from '@/constants';
import AuthFormBtn from '@/components/SubmitFormBtn';
import Input from '@/components/Input';
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
          settings={{ ...register('login', { required: true }) }}
          type={InputTypes.text}
          placeholder='Логін'
          formType={FormTypes.auth}
          icon={<FaUser size={IconSizes.secondary} />}
        />
        <Input
          settings={{
            ...register('password', {
              required: true,
              minLength: Number(AuthParams.passMinLength),
              maxLength: Number(AuthParams.passMaxLength),
            }),
          }}
          type={InputTypes.password}
          placeholder='Пароль'
          formType={FormTypes.auth}
          icon={<FaLock size={IconSizes.secondary} />}
        />
        <AuthFormBtn title='Увійти' isLoading={isLoading} />
      </Form>
    </>
  );
};

export default SignInForm;
