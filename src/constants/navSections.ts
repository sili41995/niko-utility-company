import { NavSections } from '@/types/types';
import PagePaths from './pagePaths';

const navSections: NavSections = [
  {
    title: 'Абонентські рахунки',
    path: PagePaths.subscribers,
    desc: 'Тип приміщення, характеристики, послуги. Стан рахунку, шнформація про споживачів',
  },
  {
    title: 'Бухгалтерія',
    path: PagePaths.accounting,
    desc: 'Нарахування, тарифи. Оплата і коригування. Звіти',
  },
  {
    title: 'Документи',
    path: PagePaths.documents,
    desc: 'Документообіг по підприємству',
  },
];

export default navSections;
