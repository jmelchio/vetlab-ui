import * as React from 'react';
import './App.css';
import IUser from './model/User';

class App extends React.Component {
  private user: IUser = {iD: 12345, userName: 'userOne', adminUser: false};

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        {this.renderUser(this.user)}
      </div>
    );
  }

  private renderUser = (user: IUser) => {
    return (
      <div>
        <table>
          <tr>
            <td>ID</td>
            <td>{user.iD}</td>
          </tr>
          <tr>
            <td>User Name</td>
            <td>{user.userName}</td>
          </tr>
          <tr>
            <td>First Name</td>
            <td>{user.firstName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{user.lastName}</td>
          </tr>
          <tr>
            <td>E-mail</td>
            <td>{user.eMail}</td>
          </tr>
          <tr>
            <td>Admin User</td>
            <td>{user.adminUser}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
