
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import Api from '...'
/*
 * take()
 * call(fn, params) 执行一个函数 、调用函数 
 * put(object) 创建 dispatch Effect、派发一个action
 */

// worker Saga : 将在 TOGGLE_TODO action 被 dispatch 时调用
function* modifyTodo(action) {
  console.log('???saga???', action)
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

/*
  在每个 `TOGGLE_TODO` action 被 dispatch 时调用 fetchUser
  允许并发（译注：即同时处理多个相同的 action）
*/
function* mySaga() {
  yield takeEvery("TOGGLE_TODO", modifyTodo);
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