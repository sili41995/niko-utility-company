import { FC } from 'react';
import { Form } from './AddUserForm.styles';
import { AuthParams, FormTypes, IconSizes, InputTypes } from '@/constants';
import AuthFormBtn from '../AuthFormBtn';
import Input from '../Input';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { useAddUserForm } from '@/hooks';

const AddUserForm: FC = () => {
  const { handleFormSubmit, handleSubmit, register, isLoading } =
    useAddUserForm();

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        settings={{ ...register('login', { required: true }) }}
        type={InputTypes.text}
        placeholder='Логін'
        formType={FormTypes.addUser}
        icon={<FaUser size={IconSizes.secondary} />}
        autoFocus
      />
      <Input
        settings={{
          ...register('password', {
            required: true,
            minLength: Number(AuthParams.passMinLength),
            maxLength: Number(AuthParams.passMaxLength),
          }),
        }}
        type={InputTypes.text}
        placeholder='Пароль'
        formType={FormTypes.addUser}
        icon={<FaLock size={IconSizes.secondary} />}
      />
      <Input
        settings={{ ...register('name', { required: true }) }}
        type={InputTypes.text}
        placeholder='ПІБ'
        formType={FormTypes.addUser}
        icon={<FaUser size={IconSizes.secondary} />}
      />
      <Input
        settings={{ ...register('email', { required: true }) }}
        type={InputTypes.email}
        placeholder='Email'
        formType={FormTypes.addUser}
        icon={<FaEnvelope size={IconSizes.secondary} />}
      />
      <AuthFormBtn title='Здерегти' disabled={isLoading} />
    </Form>
  );
};

export default AddUserForm;
