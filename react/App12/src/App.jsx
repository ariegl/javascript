import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Inicio from './Inicio'
import AcercaDe from './AcercaDe'
import {Router, Link, Route, Switch, useRoute} from "wouter"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/acerca-de">Acerca de</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" component={Inicio}></Route>
        <Route path="/acerca-de" component={AcercaDe}></Route>
      </Switch>
    </div>
  )
}

export default App
