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
        <button onClick={() => this.props.addTodoWhenThird('这是点了三次新增的todo')}>点三次 新增一个todo</button>
      </>
    )
  }
}