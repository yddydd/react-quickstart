import React from 'react'

const FancyButton = React.forwardRef((props, ref) => {
  // console.log('?????', props, ref)
  return (<button ref={ref} className="FancyButton">
    sss
    {props.children}
  </button>)
})

function transClass() {
  class Fancy extends React.Component {
    render() {
      const { forwardedRef } = this.props
      return <button ref={forwardedRef} className="FancyButton">ccc</button>
    }
  }

  return React.forwardRef((props, ref) => {
    return <Fancy forwardedRef={ref} />
  })
}

export default transClass()