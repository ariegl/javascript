import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './routes/Home';
import About from './routes/About';
import Dashboard from './routes/Dashboard';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Admin } from './routes/Admin';

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(null);

  const userData = [{
    id: '1',
    name: 'Ariel',
    permissions: ['admin'],
  }]

  function Navigation() {
    return( 
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>
    )
  }

  const logout = () =>  setUser(null);
  const login = () => setUser(userData);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        
        {
          user ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <button onClick={login}>Login</button>
          )
        }

        <Routes>
          <Route path="/" element={<Home/>}></Route>
 
          <Route element={<ProtectedRoute isAllowed={!!user} />}>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
          </Route>

          
          <Route path="/admin" element={
            <ProtectedRoute 
              isAllowed={!!user}
              redirectTo='/dashboard'
              >
              <Admin/>
            </ProtectedRoute>
          }/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
