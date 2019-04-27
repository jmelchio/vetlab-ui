import * as React from 'react';
import { IUser } from '../User';

export interface IUserFormProps {
  onSubmit: (event: any) => void;
  handleChange: (event: any) => void;
  user: IUser;
}

export function UserForm(props: IUserFormProps): JSX.Element {
  return (
    <>
      <div className="card">
        <div className="card-header">Submit User</div>
        <div className="card-body">
          <form onSubmit={props.onSubmit}>
            <div className="form-group">
              <label>
                User Name:
                    <input className="form-control" type="text" value={props.user.userName} onChange={props.handleChange} name="userName" />
              </label>
            </div>
            <div className="form-group">
              <label>
                First Name:
                    <input className="form-control" type="text" value={props.user.firstName} onChange={props.handleChange} name="firstName" />
              </label>
            </div>
            <div className="form-group">
              <label>
                Last Name:
                    <input className="form-control" type="text" value={props.user.lastName} onChange={props.handleChange} name="lastName" />
              </label>
            </div>
            <div className="form-group">
              <label>
                E-mail:
                    <input className="form-control" type="text" value={props.user.eMail} onChange={props.handleChange} name="eMail" />
              </label>
            </div>
            <div className="form-group">
              <label>
                Password:
                    <input className="form-control" type="password" value={props.user.password} onChange={props.handleChange} name="password" />
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" checked={props.user.adminUser} onChange={props.handleChange} name="adminUser" />
                Admin User
                </label>
            </div>
            <div>
              <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
