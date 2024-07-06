import { FC } from 'react';
import { createPortal } from 'react-dom';
import { IProps } from './ModalWin.types';
import { Backdrop, Container, Section } from './ModalWin.styled';
import CloseBtn from '@/components/CloseBtn';
import { useModalWin } from '@/hooks';

const ModalWin: FC<IProps> = ({ setModalWinState, children }) => {
  const { modalRoot, hideModalWin } = useModalWin(setModalWinState);

  return (
    modalRoot &&
    createPortal(
      <Section>
        <Backdrop onClick={hideModalWin}>
          <Container>
            <CloseBtn onClick={setModalWinState} />
            {children}
          </Container>
        </Backdrop>
      </Section>,
      modalRoot
    )
  );
};

export default ModalWin;
