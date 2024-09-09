import { NewUser } from './user.types';

export type Login = Pick<NewUser, 'login'>;

export type Email = Pick<NewUser, 'email'>;

export type Name = Pick<NewUser, 'name'>;

export type Password = Pick<NewUser, 'password'>;
