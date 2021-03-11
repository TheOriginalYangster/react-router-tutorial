import logo, { ReactComponent } from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react';

import Header from './Components/Header/Header'
import Body from './Components/Body/Body'

import './App.css';



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    const name = window.prompt('What is your name?')
    this.setState({ name })
  }

  render() {

    const { name } = this.state

    return (
      <div className="App">
        <Router>
          <Header />
          <Body name={name} />
        </Router>
      </div>
    );
  }
}

export default App;
