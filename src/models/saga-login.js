import { take, call, put } from 'redux-saga/effects'

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
  }
}


function* saga() {
  while(true) {
    const action = yield take('LOGIN_REQUEST')
    const { username, password } = action.payload
    const token = yield call(authorize, { username, password })
    if(token) {
      console.log('===存写===', token)
    }
  }
}

export default saga