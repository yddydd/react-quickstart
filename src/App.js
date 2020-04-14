import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import FunctionComp from './components/functionComp'
import ClassComp from './components/classComp'
import ListComp from './components/listComp'
import FormComp from './components/formComp'
import RefComp from './components/refComp'
import StateHook from './components/stateHook'
import About from './pages/About'
import Home from './pages/Home'

function App() {
  const ref = React.createRef();
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/about/:id">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
        <footer className="App-header">
          <NavLink to="/about/222" exact activeClassName="selected">About</NavLink>
          <NavLink to="/home" strict>Home</NavLink>
          <img src={logo} className="App-logo" alt="logo" />
          <FunctionComp from="app"/>
          <ClassComp />
          <ListComp numbers={[1, 2, 3]}/>
          <FormComp />
          <RefComp ref={ref} />
          <StateHook />
        </footer>
      </div>
    </Router>
  );
}

export default App;
