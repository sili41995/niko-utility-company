import { FC } from 'react';
import SettingsSectionTitle from '../SettingsSectionTitle';
import { FcPlus } from 'react-icons/fc';
import { IconSizes } from '@/constants';

const CurrentServicesSettings: FC = () => {
  return (
    <>
      <SettingsSectionTitle title='Підприємство надає послуги:' />
      <button type='button'>
        <span>Нова подія</span>
        <FcPlus size={IconSizes.secondary} />
      </button>
      <p>Поточні послуги:</p>
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
            <li>
              <p>Вивезення побутових відходів (за 1м3)</p>
            </li>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CurrentServicesSettings;
