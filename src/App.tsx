import * as React from 'react';
import './App.css';
import { IUser } from './model/User';

export interface IAppState {
  users: IUser[],
  user: IUser;
}

export class App extends React.Component<any, IAppState> {

  constructor(props: any) {
    super(props);

    this.state = {
      user: {
        adminUser: props.adminUser || false,
        eMail: props.eMail || '',
        firstName: props.firstName || '',
        id: props.id || 0,
        lastName: props.lastName || '',
        password: props.password || '',
        userName: props.userName || '',
      },
      users: [],
    };
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          {this.RenderForm()}
        </div>
        <div>
          {this.RenderUser(this.state.users)}
        </div>
      </div>
    );
  }

  private handleChange = (event: any) => {
// tslint:disable-next-line: no-console
    // console.log(event.target.name + ' ' + event.target.value);
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({'user': user});
  }

  private onSubmit = (event: any) => {
// tslint:disable-next-line: no-console
    console.log(this.state.user);
    const user: IUser = {
        adminUser: this.state.user.adminUser,
        eMail: this.state.user.eMail,
        firstName: this.state.user.firstName,
        id: this.state.user.id,
        lastName: this.state.user.lastName,
        password: this.state.user.password,
        userName: this.state.user.userName,
    };
    const users = this.state.users.concat([user]);
    this.setState({'users': users})
// tslint:disable-next-line: no-console
    console.log(users);
    event.preventDefault();

    const postUser = {
      admin_user: this.state.user.adminUser,
      email: this.state.user.eMail,
      first_name: this.state.user.firstName,
      last_name: this.state.user.lastName,
      password: this.state.user.password,
      user_name: this.state.user.userName,
    };

// tslint:disable-next-line: no-console
    console.log(JSON.stringify(postUser));

    const url = 'http://localhost:8080/user';

    const fetchData: RequestInit = {
      body: JSON.stringify(postUser),
      headers: new Headers(),
      method: 'POST',
    };

    fetch(url, fetchData).then(
      (result: any) => {
 // tslint:disable-next-line: no-console
       console.log(result);
      }).catch((reason: any) => {
 // tslint:disable-next-line: no-console
       console.log(reason);
      });
  }

  private RenderForm = () => {
    return (
      <>
        <div>
          <form onSubmit={this.onSubmit}>
            <div>
              <label>
                User Name:
                <input type="text" value={this.state.user.userName} onChange={this.handleChange} name="userName" />
              </label>
            </div>
            <div>
              <label>
                First Name:
                <input type="text" value={this.state.user.firstName} onChange={this.handleChange} name="firstName" />
              </label>
            </div>
            <div>
              <label>
                Last Name:
                <input type="text" value={this.state.user.lastName} onChange={this.handleChange} name="lastName" />
              </label>
            </div>
            <div>
              <label>
                E-mail:
                <input type="text" value={this.state.user.eMail} onChange={this.handleChange} name="eMail" />
              </label>
            </div>
            <div>
              <label>
                Password:
                <input type="password" value={this.state.user.password} onChange={this.handleChange} name="password" />
              </label>
            </div>
            <div>
              <label>
                Admin User:
                <input type="checkbox" checked={this.state.user.adminUser} onChange={this.handleChange} name="adminUser" />
              </label>
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </>
    );
  }

  private RenderUser = (users: IUser[]) => {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>User Name</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>E-mail</td>
              <td>Admin User</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) =>
              <tr key={index} >
                <td>{user.id}</td>
                <td>{user.userName}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.eMail}</td>
                <td>{user.adminUser}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
