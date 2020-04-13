import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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

function App() {
  const ref = React.createRef();
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <footer className="App-header">
          <Link to="/about">About</Link>
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
