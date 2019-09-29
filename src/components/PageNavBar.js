import React, { Component } from 'react'
import Welcoming from './Welcoming'
import NavItem from './NavItem'

class PageNavBar extends Component {
  render() {
    return (
      <div className='navigation-bar'>
        <div className="welcome">
          <Welcoming />
        </div>
        <div className="nav">
          <NavItem page={'leaderboard'} />
          <NavItem page={'answered'} />
          <NavItem page={'unanswered'} />
          <NavItem page={'add'} />
        </div>
      </div>
    )
  }
}
export default PageNavBar
