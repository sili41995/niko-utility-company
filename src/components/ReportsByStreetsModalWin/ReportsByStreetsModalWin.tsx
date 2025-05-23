import { FC } from 'react';
import { IProps } from './ReportsByStreetsModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, Form, InputsWrap } from './ReportsByStreetsModalWin.styled';
import Input from '@/components/Input';
import { InputLabels, InputTypes } from '@/constants';
import SubmitFormBtn from '@/components/SubmitFormBtn';
import { useReportsByStreetsForm } from '@/hooks';

const ReportsByStreetsModalWin: FC<IProps> = ({ setModalWinState }) => {
  const {
    handleSubmit,
    register,
    handleFormSubmit,
    isLoading,
    maxMonthDate,
    nimMonthDate,
  } = useReportsByStreetsForm();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Розрахунки по вулицях:' />
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <InputsWrap>
            <Input
              settings={{ ...register('from', { required: true }) }}
              label={`${InputLabels.from}:`}
              type={InputTypes.month}
              min={nimMonthDate}
              max={maxMonthDate}
              width={350}
            />
            <Input
              settings={{ ...register('to', { required: true }) }}
              label={`${InputLabels.to}:`}
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

export default ReportsByStreetsModalWin;
