import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import config from "./config"

// https://docs.particle.io/reference/cloud-apis/javascript/
import ParticleAPI from 'particle-api-js';
const api = new ParticleAPI();

function App() {
  const [count, setCount] = useState(0)

  /*
  const test = async () => {
    const devices = await api.listDevices({ auth: config.particletoken });
    console.error('MY DEVICES:', devices)
  }
  */

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
