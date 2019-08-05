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
        adminUser: false,
        eMail: '',
        firstName: '',
        id: 0,
        lastName: '',
        password: '',
        userName: '',
      },
      users: [],
    };
  }

  public render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1 className="App-title">Vetlab UI</h1>
        </div>
        <div>
          {UserUpdateForm({ user: this.state.user, onSubmit: this.createUser })}
        </div>
        <div>
          {UserList({ users: this.state.users })}
        </div>
      </div>
    );
  }

  private createUser = (user: IUser, actions: any) => {
    // alert(event.user);

    const postUser = {
      admin_user: user.adminUser,
      email: user.eMail,
      first_name: user.firstName,
      last_name: user.lastName,
      password: user.password,
      user_name: user.userName,
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
          const newUser: IUser = {
            adminUser: rjson.admin_user,
            eMail: rjson.email,
            firstName: rjson.first_name,
            id: rjson.id,
            lastName: rjson.last_name,
            password: rjson.password,
            userName: rjson.user_name,
          };
          const users = this.state.users.concat([newUser]);
          this.setState({ 'users': users });
          actions.setSubmitting(false);
        }).catch((parseError: any) => {
          alert(parseError);
        })
      }).catch((reason: any) => {
        alert(reason);
      });
  }
}
