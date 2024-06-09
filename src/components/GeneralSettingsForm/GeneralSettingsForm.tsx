import { FC } from 'react';
import Input from '../Input';
import { GeneralParams, InputLabels, InputTypes, regExp } from '@/constants';
import { Form } from './GeneralSettingsForm.styled';
import TextArea from '../TextArea';

const GeneralSettingsForm: FC = () => {
  const { handleFormSubmit, handleSubmit, register, isLoading } =
    useGeneralSettingsForm();

  return (
    <Form>
      <Input
        settings={{
          ...register('currentAccount', {
            required: true,
            pattern: regExp.currentAccount,
          }),
        }}
        type={InputTypes.text}
        label={InputLabels.currentAccount}
      />
      <Input
        settings={{
          ...register('mfi', {
            required: true,
            minLength: GeneralParams.mfiLength,
            maxLength: GeneralParams.mfiLength,
          }),
        }}
        type={InputTypes.text}
        label={InputLabels.currentAccount}
      />
      <Input
        settings={{
          ...register('helpPhone', { required: true, pattern: regExp.phone }),
        }}
        type={InputTypes.text}
        label={InputLabels.helpPhone}
      />
      <TextArea
        settings={{ ...register('adsInPayments') }}
        label={InputLabels.adsInPayments}
      />
    </Form>
  );
};

export default GeneralSettingsForm;
