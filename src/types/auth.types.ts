import { IUser } from './user.types';

export type Credentials = Pick<IUser, 'login' | 'password'>;
