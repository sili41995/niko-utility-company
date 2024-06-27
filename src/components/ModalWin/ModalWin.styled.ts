import styled from '@emotion/styled';

export const Section = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing(7)};
  background-color: rgba(18, 20, 23, 0.5);
`;

export const Container = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.secondary}px;
  background-color: #ffffff;
  overflow: hidden;
`;
