import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Write from './pages/write/Write';
import Setting from './pages/settings/Settings';
import Single from './pages/single/Single';
import { Context } from "./context/Context";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useContext } from 'react';





export default  function App() {
  const {user} = useContext(Context);
  return ( 
    <Router>
        <TopBar/>
        <Switch>

          <Route exact path='/'>
            <Home/>
          </Route>

          <Route exact path='/register'>
            {user ? <Home/>:<Register/>}
          </Route>

          <Route exact path='/login'>
            {user ?<Home/>:<Login/>}
          </Route>

          <Route exact path='/write'>
            {user ? <Write/>:<Register/>}
          </Route>

          <Route exact path='/settings'>
            {user ? <Setting/>:<Register/>}
          </Route>

          <Route exact path='/post/:postId'>
            <Single/>
          </Route>

        </Switch>
    
    </Router>
  );
};


