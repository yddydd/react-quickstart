import React from 'react'
import { connect } from 'react-redux'
import { login, logout } from '../models/actions'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    const { login, logout, isLogin } = this.props

    if (isLogin) {
      logout()
      return
    }
    login({
      username: 'ys', password: '12345'
    })
  }
  render() {
    const { isLogin } = this.props
    return (
      <button onClick={this.handleClick}>{isLogin ? '登出' : '登录'}</button>
    )
  }
}

export default connect(
  state => ({ user: state.user, isLogin: !!state.user.token}),
  dispatch => ({
    login: (payload) => dispatch(login(payload)),
    logout: () => dispatch(logout())
  }),
)(Login)

