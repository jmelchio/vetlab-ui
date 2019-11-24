// definition of a User

export interface IUser {
  id: number;
  userName: string;
  firstName?: string;
  lastName?: string;
  eMail?: string;
  password?: string;
  adminUser: boolean;
}
