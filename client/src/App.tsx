import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Homepage from './Pages/Homepage';
import Admin from './Pages/AdminPage';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import './main.css';
import { myContext } from './Pages/Context';

function App() {
  const ctx = useContext(myContext);
  let routes;
  if (ctx) {
    routes = (
      <>
        <Route path='/' exact component={Homepage}></Route>
        {ctx.isAdmin ? (<Route path='/admin' exact component={Admin}></Route>) : ''}
        <Route path='/profile' exact component={Profile}></Route>
      </>
    )
  } else {
    routes = (
      <>
        <Route path='/' exact component={Homepage}></Route>
        <Route path='/login' exact component={Login}></Route>
        <Route path='/register' exact component={Register}></Route>
      </>
    )
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {routes}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
