import { NavSections } from '@/types/types';
import PagePaths from './pagePaths';

const navSections: NavSections = [
  {
    title: 'Абонентські рахунки',
    path: PagePaths.subscriberAccounts,
    desc: 'Тип приміщення, характеристики, послуги. Стан рахунку, інформація про споживачів',
  },
  {
    title: 'Бухгалтерія',
    path: PagePaths.accounting,
    desc: 'Нарахування, тарифи. Оплата і коригування. Звіти',
  },
];

export default navSections;
