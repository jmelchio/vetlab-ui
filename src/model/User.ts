// definition of a User interface

interface IUser{
  iD: number;
  userName: string;
  firstName?: string;
  lastName?: string;
  eMail?: string;
  password?: string;
  adminUser: boolean;
}

export default IUser;
