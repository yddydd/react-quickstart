import { take, call, put, fork, cancel, cancelled } from 'redux-saga/effects'
/*
 * fork(fn, params) 参数和call一样 另起线程执行 无阻塞调用 
 * cancel(task) 参数为fork的返回值 取消掉正在进行的任务
 * take([ACTION.type,...]) 监听两个并发的ACTION 匹配其一就执行
 */

function* authorize(payload) {
  try {
    // const token = yield call(API.checkc, payload)
    const token = yield 'sdgabsjcduygcdbs'
    yield put({ type: 'LOGIN_SUCCESS', payload: {
      token, ...payload,
    }})

    return token
  } catch(err) {
    put({type: 'LOGIN_ERROR', err})
  } finally {
    if (yield cancelled()) {
      console.log('oops i was canceled')
    }
  }
}


function* saga() {
  while(true) {
    const action = yield take('LOGIN_REQUEST')
    const { username, password } = action.payload
    const token = yield call(authorize, { username, password })
    // authorize没验证完之前 收到了LOGOUT怎么办？ 登出后 又突然登陆成功 岂不是有问题
    if(token) {
      console.log('===存写===', token)
    }
  }
}

//改造

function* saga2() {
  while(true) {
    const action = yield take('LOGIN_REQUEST')
    const { username, password } = action.payload

    const task = yield fork(authorize, {username, password})
    const block = yield take(['LOGOUT', 'LOGIN_ERROR'])
    if (block.type === 'LOGOUT') {
      yield cancel(task)
    }
    // 
  }
}

export default saga2