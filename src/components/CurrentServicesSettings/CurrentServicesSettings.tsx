import { FC } from 'react';
import SettingsSectionTitle from '../SettingsSectionTitle';
import AddBtn from '../AddBtn';
import { BtnClickEvent } from '@/types/types';
import { Container, Title } from './CurrentServicesSettings.styled';

const CurrentServicesSettings: FC = () => {
  const onAddBntClick = (e: BtnClickEvent): void => {
    console.log(e);
    // console.log(e);
  };

  return (
    <Container>
      <SettingsSectionTitle title='Підприємство надає послуги:' />
      <AddBtn title='Нова подія' onClick={onAddBntClick} />
      <Title>Поточні послуги:</Title>
      <ul>
        <li>
          <p>Останні зміни:</p>
          <p>Введеняя в експлуатацію</p>
        </li>
        <li>
          <p>Дата:</p>
          <p>01.01.2024</p>
        </li>
        <li>
          <p>Підстава:</p>
          <p>1 від 01.01.2024 Початок експлуатації</p>
        </li>
      </ul>
      <div>
        <p>Поводження з побутовими відходами:</p>
        <ul>
          <li>
            <p>Вивезення побутових відходів (б/с)</p>
          </li>
          <li>
            <p>Вивезення побутових відходів (п/с)</p>
          </li>
          <li>
            <p>Вивезення побутових відходів (за 1м3)</p>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default CurrentServicesSettings;
