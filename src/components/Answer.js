import React, { Component } from 'react'

class Answer extends Component {
  render() {
    const { ChoiceText,
      onClick,
      isActive,
      answered
    } = this.props
    
    return (
      <button disabled={answered}
        className={`ansChoice ${ isActive ? 'active' : 'inactive' } ${ answered && 'nohover' }`} onClick={onClick}>
        <span>{ ChoiceText }</span>
      </button>
      
    )
  }
}
export default Answer
