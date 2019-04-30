import * as React from 'react';
import './App.css';
import { UserList } from './domain/user/ui/UserList';
import { UserUpdateForm } from './domain/user/ui/UserUpdateForm';
import { IUser } from './domain/user/User';

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
          {UserUpdateForm({ user: this.state.user, onSubmit: this.onSubmit })}
        </div>
        <div>
          {UserList({ users: this.state.users })}
        </div>
      </div>
    );
  }

  private onSubmit = (event: any) => {
    // tslint:disable-next-line: no-console
    console.log(event.user);

    const postUser = {
      admin_user: event.user.adminUser,
      email: event.user.eMail,
      first_name: event.user.firstName,
      last_name: event.user.lastName,
      password: event.user.password,
      user_name: event.user.userName,
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
          this.setState({ 'users': users })
        }).catch((parseError: any) => {
          // tslint:disable-next-line: no-console
          console.log(parseError);
        })
      }).catch((reason: any) => {
        // tslint:disable-next-line: no-console
        console.log(reason);
      });
  }
}
