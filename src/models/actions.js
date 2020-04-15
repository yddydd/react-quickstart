/*
* action 类型
*/

export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_UI = 'ADD_TODO_UI'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const TODO_MODIFY_SUCCEEDED = 'TODO_MODIFY_SUCCEEDED'

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

export function addTodoWhenThird(text) {
 return { type: ADD_TODO_UI, text }
}

export function toggleTodo(index) {
 return { type: TOGGLE_TODO, index }
}
export function setVisibilityFilter(filter) {
 return { type: SET_VISIBILITY_FILTER, filter }
}