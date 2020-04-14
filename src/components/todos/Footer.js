import React from 'react'
import Link from './Link'

export default class Footer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }

    this.onClick = this.onClick.bind(this)
  }

  onClick() {}

  render() {
    return (
      <>
        <Link>SHOW_ALL</Link>
        <Link>SHOW_ACTIVE</Link>
        <Link>SHOW_COMPLETED</Link>
      </>
    )
  }
}