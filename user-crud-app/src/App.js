import React, { Component } from 'react';
import './App.css';

import User from './User';


const users = [
  {
    name: 'Jane Doe',
    memberType: 'Basic'
  },
  {
    name: 'John Smith',
    memberType: 'Basic'
  },
  {
    name: 'Riley Thomas',
    memberType: 'Pro'
  }
];

localStorage.setItem('users', JSON.stringify(users));

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: 'User Manager',
      users: JSON.parse(localStorage.getItem('users')),
    };
  }

  componentWillMount(){
    const users = this.state.users;

    this.setState({users});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.title}</h1>
        </header>
        <div className="App-intro">
        {
          this.state.users.map(user => {
            return(
              <User
                key={user.name}
                {...user}
              />
            )}
          )
        }
        </div>
      </div>
    );
  }
}

export default App;