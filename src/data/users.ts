import { Users } from '@/types/data';

export const users: Users = [
  {
    id: 1,
    name: 'pedro',
    login: 'pedro_1',
    token: null,
    fullAccess: true,
    houses: false,
    subscribers: true,
    accounting: false,
    documents: true,
    counters: false,
    oneOffJobs: true,
    settings: false,
    email: 'alex@mail.com',
  },
  {
    id: 2,
    name: 'pedro',
    login: 'pedro_2',
    token: null,
    fullAccess: false,
    houses: false,
    subscribers: true,
    accounting: false,
    documents: true,
    counters: false,
    oneOffJobs: true,
    settings: false,
    email: 'alex@mail.com',
  },
];
