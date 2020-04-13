import React from 'react'

export default class formComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(val) {
    this.setState({
      value: val.target.value
    })
  }
  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange}/>
        {this.state.value.trim() && <button onClick={() => this.setState({value: ''})}>清空</button>}
      </div>
    )
  }
}