import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionComp from './components/functionComp'
import ClassComp from './components/classComp'
import ListComp from './components/listComp'
import FormComp from './components/formComp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FunctionComp from="app"/>
        <ClassComp />
        <ListComp numbers={[1, 2, 3]}/>
        <FormComp />
      </header>
    </div>
  );
}

export default App;
