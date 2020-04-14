import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  NavLink,
} from "react-router-dom";
import { createStore } from 'redux'
import todoApp from './models/reducers'
import {
  addTodo,
  // toggleTodo,
  // setVisibilityFilter,
  // VisibilityFilters
} from './models/actions'
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
          <Redirect from="/old-home" to="/home"></Redirect>
          <Route path="*">
            <h1>oops no match</h1>
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
let store = createStore(todoApp)
console.log('??store???', store.getState())
// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() =>
  console.log('=======', store.getState())
)

// 发起一系列 action
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

unsubscribe()
export default App;
