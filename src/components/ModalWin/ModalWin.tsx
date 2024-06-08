import { FC, MouseEvent, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IProps } from './ModalWin.types';
import { Backdrop, Container, Section } from './ModalWin.styled';
import CloseBtn from '../CloseBtn';

const ModalWin: FC<IProps> = ({ setModalWinState, children }) => {
  const modalRoot = document.querySelector('#modal-root');

  useEffect(() => {
    const hideModalWin = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setModalWinState();
      }
    };

    window.addEventListener('keydown', hideModalWin);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', hideModalWin);
    };
  }, [setModalWinState]);

  const hideModalWin = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setModalWinState();
    }
  };

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
