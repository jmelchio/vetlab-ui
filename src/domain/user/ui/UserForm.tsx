import * as React from 'react';
import { IUser } from '../User';

export interface IUserFormProps {
  onSubmit: (event: any) => void;
  handleChange: (event: any) => void;
  user: IUser;
}

export function UserForm(props: IUserFormProps): JSX.Element {
  return (
    <div className="card">
      <div className="card-header">Submit User</div>
      <div className="card-body">
        <form onSubmit={props.onSubmit}>
          <div className="form-group">
            <label>User Name:</label>
            <input className="form-control" type="text" value={props.user.userName} onChange={props.handleChange} name="userName" />
          </div>
          <div className="form-group">
            <label>First Name:</label>
            <input className="form-control" type="text" value={props.user.firstName} onChange={props.handleChange} name="firstName" />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input className="form-control" type="text" value={props.user.lastName} onChange={props.handleChange} name="lastName" />
          </div>
          <div className="form-group">
            <label>E-mail:</label>
            <input className="form-control" type="text" value={props.user.eMail} onChange={props.handleChange} name="eMail" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input className="form-control" type="password" value={props.user.password} onChange={props.handleChange} name="password" />
          </div>
          <div className="checkbox">
            <input type="checkbox" checked={props.user.adminUser} onChange={props.handleChange} name="adminUser" />
            <label>Admin User</label>
          </div>
          <div>
            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
