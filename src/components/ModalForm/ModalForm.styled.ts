import styled from '@emotion/styled';
import { IStyledProps } from './ModalForm.types';
import {
  setModalFormBGColor,
  setModalFormBorderRadius,
  setModalFormBoxShadow,
  setModalFormMargin,
  setModalFormPadding,
  setModalFormWidth,
} from '@/utils';

export const Container = styled.div<IStyledProps>`
  display: flex;
  width: ${({ formType }) => setModalFormWidth(formType)};
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  padding: ${({ formType }) => setModalFormPadding(formType)}px;
  background-color: ${({ formType }) => setModalFormBGColor(formType)};
  border-radius: ${({ formType }) => setModalFormBorderRadius(formType)}px;
  box-shadow: ${({ formType }) => setModalFormBoxShadow(formType)};
  margin: ${({ formType }) => setModalFormMargin(formType)};
`;
