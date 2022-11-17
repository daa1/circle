import { useState } from 'react'
import './App.css'
import {Link, NavLink, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Visualisering from './components/Visualisering';
import Dashboard from './components/Dashboard';
import NavTabs from "./NavTabs";

function App() {

  return (
    <div className="App">
      <nav>
          <NavTabs></NavTabs>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/visualisering" component={Visualisering} />
      </Switch>
    </div>
  );
}

export default App
