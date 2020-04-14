import React from 'react'

class Item extends React.Component {
  constructor(props) {
    // console.log('item', props)
    super(props)
    this.state = {
      added: false,
    }
    // this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e, from) {
    console.log(e, from)
    this.setState({
      added: true
    })
    this.props.onAddNum()
  }
  render() {
    return (
      <li>
        item~~~{this.props.num}
        {
          !this.state.added && <button onClick={($event) => this.handleClick($event, 'self')}>add</button>
        }
      </li>
      // <li>item~~~{this.state.num}<button onClick={this.handleClick}>add</button></li>
    )
  }
}

export default class List extends React.Component {
  constructor(props) {
    // console.log(props)
    super(props)

    this.state = {
      numbers: props.numbers,
    }

    this.handleAdd = this.handleAdd.bind(this)
  }
  handleAdd(num) {
    console.log('up', num)
    this.setState({
      numbers: this.state.numbers.map((item, i) => item + num)
    })
  }
  render() {
    return (
      <>
        {
          this.state.numbers.map((item, index) => <Item key={index} num={item} onAddNum={() => this.handleAdd(item)}/>)
        }
      </>
    )
  }
}