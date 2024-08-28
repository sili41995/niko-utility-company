import { FC } from 'react';
import SubmitFormBtn from '../SubmitFormBtn';
import Select from '../Select';
import { useReportsBySubscribersForm } from '@/hooks';
import { Form, InputsWrap } from './ReportsBySubscribersForm.styled';
import { InputTypes } from '@/constants';
import Input from '../Input';

const ReportsBySubscribersForm: FC = () => {
  const {
    handleSubmit,
    register,
    handleFormSubmit,
    isLoading,
    houses,
    streets,
    periods,
    streetDefaultValue,
  } = useReportsBySubscribersForm();

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <InputsWrap>
        <Select
          settings={{ ...register('periodId', { required: true }) }}
          data={periods}
          label='Період'
          width={500}
          capitalize
        />
        <Input
          settings={{ ...register('minDebt', { required: true }) }}
          label='Мінімальний борг, грн.:'
          type={InputTypes.number}
          defaultValue='0'
          min={0}
          width={250}
        />
      </InputsWrap>
      <InputsWrap>
        <Select
          settings={{ ...register('streetId') }}
          data={streets}
          label='Вулиця'
          defaultValue={streetDefaultValue}
          width={500}
        />
        <Select
          settings={{ ...register('houseId') }}
          data={houses}
          label='Будинок'
          width={250}
        />
      </InputsWrap>
      <SubmitFormBtn title='Сформувати' isLoading={isLoading} />
    </Form>
  );
};

export default ReportsBySubscribersForm;
