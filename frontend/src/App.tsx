import { useState } from 'react'
import './App.css'
import {Link, NavLink, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Visualisering from './components/Visualisering';
import Dashboard from './components/Dashboard';
import config from "./config"

// https://docs.particle.io/reference/cloud-apis/javascript/
//import ParticleAPI from 'particle-api-js';
//const api = new ParticleAPI();
import NavTabs from "./NavTabs";

function App() {

  /*
  const test = async () => {
    const devices = await api.listDevices({ auth: config.particletoken });
    console.error('MY DEVICES:', devices)
  }
  */

  return (
    <div className="App">
      <nav>
          <NavTabs></NavTabs>
      </nav>
    </div>
  );
}

export default App
