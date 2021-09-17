import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Nav from "./components/Nav";

const App = () => {
  return(
    <div>
    <BrowserRouter> 
    <Nav/>
    <Switch>
      <Route exact path='/'>
          <Home/>
      </Route>
    </Switch>
    </BrowserRouter>

    </div>
  );
};
export default App;

