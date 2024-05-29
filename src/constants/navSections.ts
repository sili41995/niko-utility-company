import { NavSections } from '@/types/types';
import PagePaths from './pagePaths';

const navSections: NavSections = [
  {
    title: 'Характеристики будинків',
    path: PagePaths.houses,
    desc: 'Характеристики будинків і прилеглих територій. Послуги, що надаються',
  },
  {
    title: 'Підприємства',
    path: PagePaths.enterprises,
    desc: 'Підприємства, споживачі послуг',
  },
  {
    title: 'Абонентські рахунки',
    path: PagePaths.subscribers,
    desc: 'Тип приміщення, характеристики, послуги. Стан рахунку, шнформація про споживачів',
  },
  {
    title: 'Лічильники',
    path: PagePaths.counters,
    desc: 'Лічильники',
  },
  {
    title: 'Бухгалтерія',
    path: PagePaths.accounting,
    desc: 'Нарахування, тарифи. Оплата і коригування. Звіти',
  },
  {
    title: 'Разові роботи та послуги',
    path: PagePaths.oneOffJobs,
    desc: 'Облік робіт та виконавців',
  },
  {
    title: 'Матеріали',
    path: PagePaths.materials,
    desc: 'Облік матеріалів',
  },
  {
    title: 'Документи',
    path: PagePaths.documents,
    desc: 'Документообіг по підприємству',
  },
];

export default navSections;
