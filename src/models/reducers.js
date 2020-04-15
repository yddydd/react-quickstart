import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  LOGIN_SUCCESS,
  LOGIN_OUT,
  TODO_MODIFY_SUCCEEDED,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'
const { SHOW_ALL } = VisibilityFilters

// reducer第一个参数 是本修改前的state的值 之前没有创建 那么就是取默认值
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TODO_MODIFY_SUCCEEDED:
      console.log('???', action)
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

function user(state = {}, action) {
  switch(action.type) {
    case LOGIN_SUCCESS: 
      return {
        ...state,
        ...action.payload
      }
    case LOGIN_OUT:
      return {}
    default: 
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
  user,
})

export default todoApp