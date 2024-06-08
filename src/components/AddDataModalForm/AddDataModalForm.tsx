import { FC } from 'react';
import { IProps } from './AddDataModalForm.types';
import CloseBtn from '../CloseBtn';
import {
  Container,
  FormWrap,
  Title,
  TitleWrap,
} from './AddDataModalForm.styled';

const AddDataModalForm: FC<IProps> = ({ title, children, onCloseBtnClick }) => (
  <Container>
    <TitleWrap>
      <Title>{title}</Title>
      <CloseBtn onClick={onCloseBtnClick} />
    </TitleWrap>
    <FormWrap>{children}</FormWrap>
  </Container>
);

export default AddDataModalForm;
