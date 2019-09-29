import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { setAuthenticatedUser } from '../actions/authedUser'


import Answers from './Answers'
import LognInPage from './LognInPage'
import View from './View'

class Login extends Component {
  state = {
    view: 'initial',
    redirect: false
  }

  login = user => {
    this.props.login(user)
    this.setState(() => ({
      redirect: true
    }))
  }


  loginOption = view => {
    if(view === 'initial') {
      console.log("location ", this.props.location);
      return (
        <Answers
          onLogin={this.setState(() => ({ view: 'LognInPage'}))}
       />
      )
    } else if (view === 'LognInPage') {
      return (
        <LognInPage onLogin={user => this.login(user)} />
      )
    } else {
      return <Redirect to='/login' />
    }
  }

  render() {
    const { redirect } = this.state
    const  { view } = this.state
    const { from } = this.props.location.state || {from: {pathname: '/unanswered'}}
    if (redirect) return <Redirect to={from} />

    return (
        <View> {this.loginOption(view)} </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { login: user => { dispatch(setAuthenticatedUser(user))} }
}
export default connect(null, mapDispatchToProps)(Login)
