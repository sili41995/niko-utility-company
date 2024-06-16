import { selectIsLoggedIn } from '@/store/auth/selectors';
import { useAuthStore } from '@/store/store';
import { IUseHeader } from '@/types/hooks.types';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { useState } from 'react';

const useHeader = (): IUseHeader => {
  const [showModalWin, setShowModalWin] = useState<boolean>(false);
  const isLoggedIn = useAuthStore(selectIsLoggedIn);

  const setModalWinState = () => {
    setShowModalWin((prevState) => !prevState);
  };

  const onSettingsBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    setModalWinState();
  };

  return { isLoggedIn, onSettingsBtnClick, showModalWin, setModalWinState };
};

export default useHeader;
