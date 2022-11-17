import { useState } from 'react'
import './App.css'
import {Link, NavLink, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Visualisering from './components/Visualisering';
import Dashboard from './components/Dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
          <nav>
              <div className="menu">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                  <NavLink to="/visualisering">Visualisering</NavLink>
              </div>
          </nav>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/visualisering" component={Visualisering} />
          </Switch>
      </div>
  )
}

export default App
