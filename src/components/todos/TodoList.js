import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick(idx) {
    this.props.onTodoClick(idx)
  }

  render() {
    return (
      <>
        {
          this.props.todos.map((item, index) => <Todo key={index} item={item} onClick={() => this.onClick(index)} />)
        }
      </>
    )
  }
}