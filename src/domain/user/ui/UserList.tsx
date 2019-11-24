import * as React from 'react';
import { IUser } from '../User';

export interface IUserListProps {
  users: IUser[];
}

export const UserList = (props: IUserListProps): JSX.Element => {
  return (
    <div className="card">
      <div className="card-header">Users List</div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <td>ID</td>
              <td>User Name</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>E-mail</td>
              <td>Admin User</td>
              <td>Password (encrypted)</td>
            </tr>
          </thead>
          <tbody>
            {props.users.map((user, index) =>
              <tr key={index} >
                <td>{user.id}</td>
                <td>{user.userName}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.eMail}</td>
                <td>{user.adminUser}</td>
                <td>{user.password}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
