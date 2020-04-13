import React from 'react'

class Item extends React.Component {
  constructor(props) {
    console.log('item', props)
    super(props)
    this.state = {
      num: props.num,
    }
    // this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e, from) {
    console.log(e, from)
    this.setState({
      num: this.state.num + 1
    })
  }
  render() {
    return (
      <li>item~~~{this.state.num}<button onClick={($event) => this.handleClick($event, 'self')}>add</button></li>
      // <li>item~~~{this.state.num}<button onClick={this.handleClick}>add</button></li>
    )
  }
}

export default class List extends React.Component {
  constructor(props) {
    console.log(props)
    super(props)
  }
  render() {
    return (
      <div>
        {
          this.props.numbers.map((item, index) => <Item key={index} num={item}/>)
        }
      </div>
    )
  }
}