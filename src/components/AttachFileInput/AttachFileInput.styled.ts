import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)};
`;

export const Label = styled.label``;

export const AltElemWrap = styled.span`
  cursor: pointer;

  & > svg {
    width: 100px;
    border-radius: ${({ theme }) => theme.borderRadius.secondary}px;
    transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
  }

  &:is(:hover, :focus) > svg {
    box-shadow: ${({ theme }) => theme.shadows.primary};
  }
`;

export const ResetBtn = styled.button`
  position: absolute;
  top: 0;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.secondary}px;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc},
    background-color ${({ theme }) => theme.transitionDurationAndFunc};

  & > svg {
    color: ${({ theme }) => theme.colors.red};
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
  }

  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.red};
    box-shadow: ${({ theme }) => theme.shadows.primary};
  }

  &:is(:hover, :focus) > svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Title = styled.span`
  align-self: center;
  width: 200px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
  ${({ theme }) => theme.trimText}
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: ${({ theme }) => theme.fontWeight.secondary};
`;

export const Input = styled.input`
  position: absolute;
  transform: scale(0);
`;
