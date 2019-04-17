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
        <div className="jumbotron">
          <h1 className="App-title">Welcome to React</h1>
        </div>
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
    if(event.target.type === 'checkbox') {
      user[event.target.name] = !user[event.target.name];
    } else {
      user[event.target.name] = event.target.value;
    }
    this.setState({'user': user});
  }

  private onSubmit = (event: any) => {
// tslint:disable-next-line: no-console
    console.log(this.state.user);
    event.preventDefault();

    const postUser = {
      admin_user: this.state.user.adminUser,
      email: this.state.user.eMail,
      first_name: this.state.user.firstName,
      last_name: this.state.user.lastName,
      password: this.state.user.password,
      user_name: this.state.user.userName,
    };

    const url = 'http://localhost:8080/user';

    const fetchData: RequestInit = {
      body: JSON.stringify(postUser),
      headers: new Headers(),
      method: 'POST',
    };

    fetch(url, fetchData).then(
      (result: any) => {
        result.json().then((rjson: any) => {
 // tslint:disable-next-line: no-console
          console.log(rjson);
          const user: IUser = {
            adminUser: rjson.admin_user,
            eMail: rjson.email,
            firstName: rjson.first_name,
            id: rjson.id,
            lastName: rjson.last_name,
            password: rjson.password,
            userName: rjson.user_name,
          };
          const users = this.state.users.concat([user]);
          this.setState({'users': users})
        }).catch((parseError: any) => {
 // tslint:disable-next-line: no-console
          console.log(parseError);
        })
      }).catch((reason: any) => {
 // tslint:disable-next-line: no-console
       console.log(reason);
      });
  }

  private RenderForm = () => {
    return (
      <>
        <div className="card">
          <div className="card-header">Submit User</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>
                  User Name:
                  <input className="form-control" type="text" value={this.state.user.userName} onChange={this.handleChange} name="userName" />
                </label>
              </div>
              <div className="form-group">
                <label>
                  First Name:
                  <input className="form-control" type="text" value={this.state.user.firstName} onChange={this.handleChange} name="firstName" />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Last Name:
                  <input className="form-control" type="text" value={this.state.user.lastName} onChange={this.handleChange} name="lastName" />
                </label>
              </div>
              <div className="form-group">
                <label>
                  E-mail:
                  <input className="form-control" type="text" value={this.state.user.eMail} onChange={this.handleChange} name="eMail" />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Password:
                  <input className="form-control" type="password" value={this.state.user.password} onChange={this.handleChange} name="password" />
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" checked={this.state.user.adminUser} onChange={this.handleChange} name="adminUser" />
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


  private RenderUser = (users: IUser[]) => {
    return (
      <div className="card">
        <div className="card-header">Users Created</div>
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
              {users.map((user, index) =>
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
}
