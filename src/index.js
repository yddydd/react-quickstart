import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import todoApp from './models/reducers'
import mySaga from './models/sagas'
import loginSaga from './models/saga-login'
import {
  addTodo,
  // toggleTodo,
  // setVisibilityFilter,
  // VisibilityFilters
} from './models/actions'
const sagaMiddleware = createSagaMiddleware()
let store = createStore(todoApp, applyMiddleware(sagaMiddleware))
console.log('??store???', store, store.getState())
// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() =>
  console.log('=======', store.getState())
)
sagaMiddleware.run(mySaga)
sagaMiddleware.run(loginSaga)
// 发起一系列 action
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// unsubscribe()

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
