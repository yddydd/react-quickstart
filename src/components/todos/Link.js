import React from 'react'

export default class Link extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: props.active,
      children: props.children
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    console.log('filter')
  }

  render() {
    const {
      children, active,
    } = this.state
    return active ? <span>{children}</span>
      : <a href="" onClick={e => { e.preventDefault(); this.onClick()}}>{children}</a>
  }
}