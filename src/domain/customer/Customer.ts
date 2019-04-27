// definition of a Customer interface

export interface ICustomer{
  id: number;
  userName: string;
  firstName?: string;
  lastName?: string;
  eMail?: string;
  password?: string;
  vetOrgID: number;
}
