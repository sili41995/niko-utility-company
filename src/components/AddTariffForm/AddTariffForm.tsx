import { FC } from 'react';
import { IProps } from './AddTariffForm.types';
import { FormTypes, InputLabels, InputTypes } from '@/constants';
import SubmitFormBtn from '@/components/SubmitFormBtn';
import Input from '@/components/Input';
import { Form } from './AddTariffForm.styled';
import { useAddTariffForm } from '@/hooks';

const AddTariffForm: FC<IProps> = ({ sector, tariff }) => {
  const { tariffLabel, isLoading, register, handleSubmit, handleFormSubmit } =
    useAddTariffForm(sector);

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        settings={{
          ...register('price', { required: true }),
        }}
        defaultValue={String(tariff)}
        type={InputTypes.number}
        label={tariffLabel}
        placeholder={InputLabels.price}
        formType={FormTypes.addTariff}
        step={0.01}
        width={500}
        horizontal
      />
      <Input
        settings={{ ...register('start', { required: true }) }}
        type={InputTypes.date}
        label={`${InputLabels.start}:`}
        placeholder={InputLabels.start}
        formType={FormTypes.addTariff}
        width={500}
        horizontal
      />
      <SubmitFormBtn title='Зберегти' isLoading={isLoading} />
    </Form>
  );
};

export default AddTariffForm;
