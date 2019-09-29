import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import EachQuestion from './EachQuestion'

class Unanswered extends Component {
  // state=  {
  //   redirect: false,
  //   path: ''
  // }
  // onAnswer = (id) => {
  //   this.setState({
  //     redirect: true,
  //     path: "/questions/"+id
  //   })
  // }
  render() {
    const { filteredQuestions, history } = this.props
    // if(this.state.redirect) {
    //   return <Redirect push to={this.state.path} />;
    // }
    return (
      <div className="container">
        {filteredQuestions.map(id => (
          <div key={id}>
            {//id === questionId
              //? <Question id={id} onAnswer={this.onAnswer} />
               <EachQuestion
                id={id}
                onClick={() => history.push(`/questions/${id}`)}
              />}
          </div>
        ))}
      </div>
    )
  }
}

function stateMappingToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params

  const questionIds = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)

  const user = ( authedUser && users.hasOwnProperty(authedUser) )
    ? users[authedUser]
    : { answers: {} }

  const filteredQuestions = questionIds.filter(id => !user.answers.hasOwnProperty(id))
  return {
    filteredQuestions,
    questionId: id
  }
}

export default withRouter(connect(stateMappingToProps)(Unanswered))
