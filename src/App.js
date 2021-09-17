import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Nav from "./components/Nav";
import Form from "./components/Form";


const App = () => {

  return(
    <div>
    <BrowserRouter> 
    <Nav/>
    <Switch>
      <Route exact path='/'>
          <Home/>
      </Route>
      <Route path='/pizza'>
          <Form />
        </Route>
    </Switch>
    </BrowserRouter>

    </div>
  );
};
export default App;

