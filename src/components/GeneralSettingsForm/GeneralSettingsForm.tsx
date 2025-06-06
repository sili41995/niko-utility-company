import { FC } from 'react';
import Input from '@/components/Input';
import { InputLabels, InputTypes, regExp } from '@/constants';
import { Form } from './GeneralSettingsForm.styled';
import TextArea from '@/components/TextArea';
import { useGeneralSettingsForm } from '@/hooks';
import SubmitFormBtn from '@/components/SubmitFormBtn';
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
        defaultValue={currentAccount}
      />
      <Input
        settings={{
          ...register('mfi', {
            required: true,
            pattern: regExp.mfi,
          }),
        }}
        type={InputTypes.text}
        label={InputLabels.mfi}
        defaultValue={mfi}
      />
      <Input
        settings={{
          ...register('helpPhone', {
            required: true,
            pattern: regExp.phone,
          }),
        }}
        type={InputTypes.text}
        label={InputLabels.helpPhone}
        defaultValue={helpPhone}
      />
      <TextArea
        settings={{ ...register('adsInPayments') }}
        label={InputLabels.adsInPayments}
        defaultValue={adsInPayments}
      />
      <SubmitFormBtn isLoading={isLoading} title='Зберегти' />
    </Form>
  );
};

export default GeneralSettingsForm;
