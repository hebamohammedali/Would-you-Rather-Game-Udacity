import React, { Component } from 'react'
import { connect } from 'react-redux'

import Question from './Question'

class QuestionAnswered extends Component {
  render() {
    const { questionFiltration, history } = this.props;
      
    return (
      <div>
        {questionFiltration.map((questionID) => (
          <span key={questionID} onClick={() => history.push(`/questions/${questionID}`)}>
            <Question id={questionID} />
          </span>
        ))}
      </div>
    )
  }
}

function stateMappingToProps({ authedUser, questions, users }) {
  const questionIds = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)

  const user = ( authedUser && users.hasOwnProperty(authedUser) )
    ? users[authedUser]
    : { answers: {} }

  const questionFiltration = questionIds.filter(id => user.answers.hasOwnProperty(id))
  console.log("User ", user)
  return { questionFiltration }
}
export default connect(stateMappingToProps)(QuestionAnswered)
