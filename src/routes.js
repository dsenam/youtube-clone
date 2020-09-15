import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
// import { Container } from './styles';

function Routes() {
  return (
      <BrowserRouter>
        <Switch>
            <Route exact path = "/" component={Home}/>    
        </Switch>  
    </BrowserRouter>
  );
}

export default Routes;