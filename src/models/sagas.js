
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import Api from '...'
/*
 * take()
 * put() 创建 dispatch Effect
 */

// worker Saga : 将在 TOGGLE_TODO action 被 dispatch 时调用
function* modifyTodo(action) {
  console.log('???saga???', action)
   try {
      // const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "TODO_MODIFY_SUCCEEDED", index: action.index});
   } catch (e) {
      yield put({type: "TODO_MODIFY_FAILED", message: e.message});
   }
}

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