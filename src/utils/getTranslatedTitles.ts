import { Titles } from '@/types/types';

const getTranslatedTitles = (titles: Titles) => {
  const translatedTitles = {
    location: 'Нас. пункт',
    street: 'Вулиця',
    houseNumber: 'Дім',
    floors: 'Поверхів',
    exploitation: 'Експлуатація',
    houseType: 'Тип будинку',
    house: 'Будинок',
    territory: 'Територія',
    services: 'Послуги',
    rate: 'Тариф',
    rateSecondary: 'Тариф2',
  };

  return titles.map((title) => translatedTitles[title]);
};

export default getTranslatedTitles;
