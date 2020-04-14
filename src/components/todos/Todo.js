import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    console.log('click todo')
    this.props.onClick()
  }

  render() {
    const { completed, text } = this.props.item
    return (
      <>
        <li
          onClick={this.onClick}
          style={ {
            textDecoration: completed ? 'line-through' : 'none'
          }}
        >
          {text}
        </li>
      </>
    )
  }
}