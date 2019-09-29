import React, { Component } from 'react'

class View extends Component {
  render() {
    console.log("this.props.children ", this.props.children)
    return (
        <div className="view-box small">
          
          <div
          className='user-avatar small'
          style={{
            backgroundImage: `url(${this.props.avatarURL})`
          }} >
        </div>
          <h1 className="AppTitle">Would You Rather Game</h1>
          {this.props.children}
        </div>
    )
  }
}
export default View
