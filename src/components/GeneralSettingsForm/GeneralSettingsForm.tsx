import { FC } from 'react';
import Input from '../Input';
import { GeneralParams, InputLabels, InputTypes, regExp } from '@/constants';
import { Form } from './GeneralSettingsForm.styled';
import TextArea from '../TextArea';
import { useGeneralSettingsForm } from '@/hooks';
import SubmitFormBtn from '../SubmitFormBtn';
import { IProps } from './GeneralSettingsForm.types';

const GeneralSettingsForm: FC<IProps> = ({ id }) => {
  const {
    handleFormSubmit,
    handleSubmit,
    register,
    isLoading,
    adsInPayments,
    mfi,
    currentAccount,
    helpPhone,
  } = useGeneralSettingsForm(id);

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        settings={{
          ...register('currentAccount', {
            required: true,
            pattern: regExp.currentAccount,
          }),
        }}
        type={InputTypes.text}
        label={InputLabels.currentAccount}
        defaultValue={currentAccountDefaultValue}
      />
      <Input
        settings={{
          ...register('mfi', {
            required: true,
            minLength: Number(GeneralParams.mfiLength),
            maxLength: Number(GeneralParams.mfiLength),
          }),
        }}
        type={InputTypes.text}
        label={InputLabels.mfi}
        defaultValue={mfiDefaultValue}
      />
      <Input
        settings={{
          ...register('helpPhone', { required: true, pattern: regExp.phone }),
        }}
        type={InputTypes.text}
        label={InputLabels.helpPhone}
        defaultValue={helpPhoneDefaultValue}
      />
      <TextArea
        settings={{ ...register('adsInPayments') }}
        label={InputLabels.adsInPayments}
        defaultValue={adsInPaymentsDefaultValue}
      />
      <SubmitFormBtn disabled={isLoading} title='Зберегти' />
    </Form>
  );
};

export default GeneralSettingsForm;
