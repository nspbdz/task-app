// import './Css/Global.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { useContext } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { UserContext } from './context/userContext'

import PrivateRoute from './Components/PrivateRoute'
import NavigasiBar from './Components/Navbar'

import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product';
import Profile from './Pages/Profile'
import Class from './Pages/Hook/Class'
import Function from './Pages/Hook/Function'

import CannotAccess from './Pages/CannotAccess'

function App() {

  const [state] = useContext(UserContext)

  return(
      <Router>

        {/* <NavigasiBar/> */}

        <Switch>

          <Route exact path="/">
            {state.isLogin ? 
              <Home /> :
              <CannotAccess />
            }
          </Route>
          
          <Route path="/about">
            {state.isLogin ? 
              <About /> :
              <CannotAccess />
            }
          </Route>

          <Route path="/product" component={Product} />

          <Route path="/hook-class" component={Class} />

          <Route path="/hook-function" component={Function} />

          <PrivateRoute path="/profile" component={Profile} />

        </Switch>

      </Router>

  )
}

export default App;
