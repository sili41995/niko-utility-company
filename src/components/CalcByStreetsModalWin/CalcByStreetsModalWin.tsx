import { FC, useEffect } from 'react';
import { IProps } from './CalcByStreetsModalWin.types';
import ModalWin from '../ModalWin';
import FormDataTitle from '../FormDataTitle';
import { Container, Form, InputsWrap } from './CalcByStreetsModalWin.styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ITimePeriodFormData } from '@/types/data.types';
import Input from '../Input';
import { InputTypes } from '@/constants';
import SubmitFormBtn from '../SubmitFormBtn';
import validateCalcByStreetsForm from '@/validators/validateCalcByStreetsForm';

const CalcByStreetsModalWin: FC<IProps> = ({ setModalWinState }) => {
  // const isLoading;
  const isLoading = false;
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ITimePeriodFormData>();

  useEffect(() => {
    const invalidFields = Object.keys(errors);

    if (invalidFields.length) {
      validateCalcByStreetsForm(errors);
    }
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<ITimePeriodFormData> = async (data) => {
    console.log(data);
  };

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Розрахунки по вулицях:' />
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <InputsWrap>
            <Input
              settings={{ ...register('from', { required: true }) }}
              label='З:'
              type={InputTypes.month}
              width={350}
            />
            <Input
              settings={{ ...register('to', { required: true }) }}
              label='По:'
              type={InputTypes.month}
              width={350}
            />
          </InputsWrap>
          <SubmitFormBtn title='Зберегти' isLoading={isLoading} />
        </Form>
      </Container>
    </ModalWin>
  );
};

export default CalcByStreetsModalWin;
