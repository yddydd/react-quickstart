
import { call, put, takeEvery, take, takeLatest, all, select } from 'redux-saga/effects'
// import Api from '...'
/*
 * takeEvery(ACTION.type, saga) 捕获ACTION.type每次触发时执行一个saga Generator
 * takeEvery(*, saga) 每次触发ACTION就执行一个saga Generator
 * take(ACTION.tyoe) 等待一个ACTION 未等到暂停当前saga 等到触发后再执行
 * select() 获取当前store的state
 * all([saga1, saga2...])合并多个saga
 * call(fn, params) 执行一个函数 、调用函数 
 * put(object) 创建 dispatch Effect、派发一个action
 */

// worker Saga : 将在 TOGGLE_TODO action 被 dispatch 时调用
function* modifyTodo(action) {
  console.log('saga+modifyTodo', action)
   try {
      // const user = yield call(Api.fetchUser, action.payload.userId);
      // fetch api
      yield put({type: "TODO_MODIFY_SUCCEEDED", index: action.index});
   } catch (e) {
      yield put({type: "TODO_MODIFY_FAILED", message: e.message});
   }
}

// 错误处理 try catch.... Promise call

// function fetchModify(payload) {
//   return Api.fetch('/url')
//     .then(res => res)
//     .catch(err => err)
// }

// function* modifyTodo(action) {
//   const { res, err } = yield call(fetchModify, { idx: action.index })

//   if (res) {
//     yield put({type: 'TODO_MODIFY_SUCCEEDED', index: action.index})
//   } else {
//     yield put({type: 'TODO_MODIFY_FAILED', index: action.index})
//   }
// }
function* logger(action) {
  const state = yield select()

  console.log('saga+logger', action.type, state)
}

function* watchAndLog() {
  while (true) {
    const action = yield take('TODO_MODIFY_SUCCEEDED')
    const state = yield select()

    console.log('action', action)
    console.log('state after', state)
  }
}

function* addTodoThird() {
  let action = {}
  for(let i = 0; i < 3; i++) {
    action = yield take('ADD_TODO_UI')
    console.log('点击次数', i + 1)
  }
  yield put({ type: 'ADD_TODO', text: action.text})
}

/*
  在每个 `TOGGLE_TODO` action 被 dispatch 时调用 fetchUser
  允许并发（译注：即同时处理多个相同的 action）
*/
function* mySaga() {
  yield all([takeEvery("TOGGLE_TODO", modifyTodo), takeEvery('*', logger), watchAndLog(), addTodoThird()])
  // yield takeEvery('*', logger)
}

/*
  也可以使用 takeLatest

  不允许并发，dispatch 一个 `TOGGLE_TODO` action 时，
  如果在这之前已经有一个 `TOGGLE_TODO` action 在处理中，
  那么处理中的 action 会被取消，只会执行当前的
*/
// function* mySaga() {
//   yield takeLatest("TOGGLE_TODO", fetchUser);
// }

export default mySaga;