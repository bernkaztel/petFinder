import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import Finder from './components/finder'
import Navbar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom";



class App extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/finder" exact component={Finder}/>
      </Switch>
      </div>
    );
  }
}

export default App;
