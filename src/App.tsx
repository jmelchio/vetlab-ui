import * as React from 'react';
import './App.css';
import { IUser } from './model/User';
import { UserForm } from './UserForm';
import { UserList } from './UserList';

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
          {UserForm({user: this.state.user, handleChange: this.handleChange, onSubmit: this.onSubmit})}
        </div>
        <div>
          {UserList({users: this.state.users})}
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

}
