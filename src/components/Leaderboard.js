import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserDetails from './UserDetails'

class Leaderboard extends Component {

  render() {
    const userIds = Object.keys(this.props.users).sort((a,b) => this.totalScore(b) - this.totalScore(a))

    return (
      <ul className='leaderboard'>
        {userIds.map(id => (
          <li key={id}>
            <UserDetails
              NoOfQuestion={this.NoOfQuestion(id)}
              NoOfAnswers={this.NoOfAnswers(id)} id={id} />
          </li>
        ))}
      </ul>
    )
  }
  NoOfQuestion = id => {
    const questionLength = this.props.users[id].questions.length;
    return questionLength
  }

  NoOfAnswers = id => {
    const answerLength = Object.keys(this.props.users[id].answers).length
    return answerLength
  }

  totalScore = id => {
    const score = this.NoOfQuestion(id) + this.NoOfAnswers(id)
    return score
  }
}

function stateMappingToProps({ users }) {
  return {
    users: users ? users: {}
  }
}
export default connect(stateMappingToProps)(Leaderboard)
