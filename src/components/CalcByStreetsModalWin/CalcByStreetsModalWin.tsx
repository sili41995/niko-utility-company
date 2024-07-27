import { FC } from 'react';
import { IProps } from './CalcByStreetsModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, Form, InputsWrap } from './CalcByStreetsModalWin.styled';
import Input from '@/components/Input';
import { InputTypes } from '@/constants';
import SubmitFormBtn from '@/components/SubmitFormBtn';
import { useCalcByStreetsForm } from '@/hooks';

const CalcByStreetsModalWin: FC<IProps> = ({ setModalWinState }) => {
  const { handleSubmit, register, handleFormSubmit, isLoading } =
    useCalcByStreetsForm();

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
