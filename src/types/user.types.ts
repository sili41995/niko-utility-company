export interface IUser {
  id: number;
  name: string;
  login: string;
  email: string;
  password: string;
  token: string | null;
}

// export type UserData = Pick<IUser, 'id' | 'name' | 'email' | 'login'>;

// export type Users = UserData[];

export type NewUser = Pick<IUser, 'login' | 'name' | 'password' | 'email'>;

// export type UserEmail = Pick<IUser, 'email'>;

// export type Password = Pick<IUser, 'password'>;

// export type Login = Pick<IUser, 'login'>;

// export type UserName = Pick<IUser, 'name'>;
