// definition of a Customer interface

interface ICustomer{
  iD: number;
  userName: string;
  firstName?: string;
  lastName?: string;
  eMail?: string;
  password?: string;
  vetOrgID: number;
}

export default ICustomer;
