import * as React from 'react';

export interface IUserLoginProps {
  userName: string;
  password: string;
  onSubmit: (event: any) => void;
  handleChange: (event: any) => void;
}

export function UserLoginForm(props: IUserLoginProps): JSX.Element {
  return (
    <div className="card">
      <div className="card-header">Login User</div>
      <div className="card-body">
        <form onSubmit={props.onSubmit}>
          <div className="form-group">
            <label>User Name:
            <input className="form-control" type="text" value={props.userName} onChange={props.handleChange} name="userName" />
            </label>
          </div>
          <div className="form-group">
            <label>Password:
            <input className="form-control" type="password" value={props.password} onChange={props.handleChange} name="password" />
            </label>
          </div>
          <div>
            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
