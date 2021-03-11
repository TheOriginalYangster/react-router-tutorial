import logo, { ReactComponent } from './logo.svg';
import React from 'react';

import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import Home from './Components/Body/Home/Home'

import './App.css';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'NAME_HERE'
    }
  }

  render() {

    const { name } = this.state

    return (
      <div className="App">
        <Header />
        <Body name={name} />
      </div>
    );
  }
}

export default App;
