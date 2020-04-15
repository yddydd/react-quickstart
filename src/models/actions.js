/*
* action 类型
*/

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED'

/*
* 其它的常量
*/

export const VisibilityFilters = {
 SHOW_ALL: 'SHOW_ALL',
 SHOW_COMPLETED: 'SHOW_COMPLETED',
 SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
* action 创建函数
*/

export function addTodo(text) {
 return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
 return { type: TOGGLE_TODO, index }
}
export function fetchUser(id) {
  return { type: USER_FETCH_REQUESTED, id }
}

export function setVisibilityFilter(filter) {
 return { type: SET_VISIBILITY_FILTER, filter }
}