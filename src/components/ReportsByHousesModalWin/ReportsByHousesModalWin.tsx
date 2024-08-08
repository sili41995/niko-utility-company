import { FC } from 'react';
import { IProps } from './ReportsByHousesModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, Form, InputsWrap } from './ReportsByHousesModalWin.styled';
import Input from '@/components/Input';
import { InputTypes } from '@/constants';
import SubmitFormBtn from '@/components/SubmitFormBtn';
import { useReportsByHousesForm } from '@/hooks';

const ReportsByHousesModalWin: FC<IProps> = ({ setModalWinState }) => {
  const {
    handleSubmit,
    register,
    handleFormSubmit,
    isLoading,
    maxMonthDate,
    nimMonthDate,
  } = useReportsByHousesForm();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Розрахунки по будинках:' />
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <InputsWrap>
            <Input
              settings={{ ...register('from', { required: true }) }}
              label='З:'
              type={InputTypes.month}
              min={nimMonthDate}
              max={maxMonthDate}
              width={350}
            />
            <Input
              settings={{ ...register('to', { required: true }) }}
              label='По:'
              type={InputTypes.month}
              min={nimMonthDate}
              max={maxMonthDate}
              width={350}
            />
          </InputsWrap>
          <SubmitFormBtn title='Сформувати' isLoading={isLoading} />
        </Form>
      </Container>
    </ModalWin>
  );
};

export default ReportsByHousesModalWin;
