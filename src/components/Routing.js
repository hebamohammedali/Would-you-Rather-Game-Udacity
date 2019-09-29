import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

class Routing extends Component {
  render() {
    const { component: Component, authenticated, path, childPath, ...rest } = this.props
    const pathname = childPath ? '../login' : 'login'
    console.log("path", path);
    return (
      <Route exact path={path} {...rest} render={props => (
        authenticated ? <Component {...props} /> : <Redirect to = {{
            pathname,
            state: { from: props.location }
          }} />
      )} />
    )
  }
}

function stateMappingToProps({ authedUser }) {
  const authenticated = authedUser !== null

  return { authenticated }
}

export default connect(stateMappingToProps)(Routing)
