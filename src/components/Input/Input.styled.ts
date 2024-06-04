import styled from '@emotion/styled';
import { IStyledProps } from './Input.types';
import { setInputFontSize, setInputPadding } from '@/utils';

export const Container = styled.span`
  position: relative;
  & > svg {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const StyledInput = styled.input<IStyledProps>`
  width: 100%;
  max-width: ${({ formType }) => setInputMaxWidth(formType)};
  height: ${({ formType }) => setInputHeight(formType)};
  background-color: transparent;
  border: 1px solid ${({ formType }) => setInputBorderColor(formType)};
  border-radius: ${({ formType }) => setInputBorderRadius(formType)};
  filter: ${({ formType }) => setInputFilter(formType)};
  padding: ${({ formType }) => setInputPadding(formType)};
  font-family: Inter;
  color: ${({ theme }) => theme.colors.primaryFont};
  font-weight: 500;
  font-size: ${({ formType }) => setInputFontSize(formType)}px;
  letter-spacing: 0.04em;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus + svg {
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
