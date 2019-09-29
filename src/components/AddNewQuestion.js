import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewQuestionForm from './NewQuestionForm'
import { addNewQuestionHandling } from '../actions/shared'

class AddNewQuestion extends Component {
  render() {
    const { 
      authed, 
      addQuestion 
    } = this.props


    let addNewQuestionHandling = () => {}
    if (authed) 
      addNewQuestionHandling = addQuestion
    

    return (
        <NewQuestionForm addNewQuestionHandling={addNewQuestionHandling} />
    )
  }
}

function stateMappingToProps({ users, authedUser }) {
  const authed = !!authedUser

  const avatarURL = users.hasOwnProperty(authedUser)
    ? users[authedUser].avatarURL
    : ''

  return { avatarURL, authed }
}

function mapDispatchToProps(dispatch) {
  return {
    addQuestion: (choiceOne, choiceTwo) => {
      dispatch(addNewQuestionHandling(choiceOne, choiceTwo))
    }
  }
}

export default connect(stateMappingToProps, mapDispatchToProps)(AddNewQuestion)
