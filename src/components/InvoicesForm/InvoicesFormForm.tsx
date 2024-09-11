import { FC } from 'react';
import { Form, InputsWrap } from './InvoicesForm.styled';
import Select from '../Select';
import SubmitFormBtn from '../SubmitFormBtn';
import { useInvoicesForm } from '@/hooks';
import { InputLabels } from '@/constants';

const InvoicesForm: FC = () => {
  const {
    handleSubmit,
    register,
    handleFormSubmit,
    isLoading,
    houses,
    streets,
  } = useInvoicesForm();

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <InputsWrap>
        <Select
          settings={{ ...register('streetId', { required: true }) }}
          data={streets}
          label={InputLabels.street}
          width={500}
        />
        <Select
          settings={{ ...register('houseId') }}
          data={houses}
          label={InputLabels.house}
          width={250}
        />
      </InputsWrap>
      <SubmitFormBtn title='Сформувати' isLoading={isLoading} />
    </Form>
  );
};

export default InvoicesForm;
