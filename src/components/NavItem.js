import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class NavItem extends Component {
  render() {
    let navTitle, path, alternativeLink
    let notFound = "URL Requested Is Not Found"

    switch(this.props.page) 
    {
      case 'leaderboard' : {
        navTitle = 'LeaderBoard'
        path = `/leaderboard`
        break
      }
      case 'add' : {
        navTitle = 'Add New Question'
        path = `/add`
        break
      }
      case 'unanswered' : {
        navTitle = 'Unanswered Questions'
        path = `/unanswered`
        alternativeLink = `/question/`
        break
      }
      case 'answered' : {
        navTitle = 'Answered Questions'
        path = `/answered`
        break
      }
      default : {
        navTitle = notFound
        path = `/404`
        break
      }
    }

   const active = ( this.props.location.pathname === path ) || ( this.props.location.pathname.toLowerCase().includes(alternativeLink) )
        ? 'active' : ''

    return (
      <div className={`navigation-button ${active}`}>
        <Link to={ path }>{ navTitle }</Link>
      </div>
    )
  }
}

export default withRouter(NavItem)
