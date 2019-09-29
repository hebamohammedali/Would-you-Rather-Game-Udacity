import React, { Component } from 'react'
import { connect } from 'react-redux'

import { answerQuestionHandling } from '../actions/shared'

import Answers from './Answers'
import View from './View'
import NotFoundPage from './NotFoundPage'

class Question extends Component {

  onClickOption = (option) => {
    const {answerQuestion, id} = this.props;
    answerQuestion(id, option);
  }
  render() {
    const { optionOneText, optionTwoText, optionOneVotes, optionTwoVotes, user, id, avatarURL, isValid } = this.props
    let  activeOption, answered = false
     if (user && user.hasOwnProperty('answers')) {
      if (user.answers.hasOwnProperty(id)) {
        activeOption = user.answers[id]
        answered = true
      } 
    } 

    const name = 'question'
    const title = 'Would you rather?'
    console.log(this.props);
     if(!isValid) {
      return <NotFoundPage />;
    }

    return (
      <View
        name={name}
        title={title}
        avatarURL={avatarURL}>
        <Answers
          optionOneText={optionOneText}
          optionTwoText={optionTwoText}
          onClickOptionOne={() => this.onClickOption('optionOne')}
          onClickOptionTwo={() => this.onClickOption('optionTwo')}
          optionOneVotes={optionOneVotes}
          optionTwoVotes={optionTwoVotes}
          activeOption={activeOption}
          answered={answered} />
      </View>
    )
  }
}

function stateMappingToProps({ users, questions, authedUser }, { id , match}) {
  let queID;
  if(match) {
    queID = match.params.id;
  }
  else {
    queID = id;
  }
  let optionOne, optionTwo, optionOneText = '', optionTwoText = '', optionOneVotes = '', optionTwoVotes = ''
  if (questions.hasOwnProperty(queID)) {
    optionOne = questions[queID].optionOne
    optionTwo = questions[queID].optionTwo
    optionOneText = optionOne.text
    optionTwoText = optionTwo.text
    optionOneVotes = Object.keys(optionOne.votes).length
    optionTwoVotes = Object.keys(optionTwo.votes).length
  }

  const isValid = questions[queID] ? true : false;

  const user = users.hasOwnProperty(authedUser)
    ? users[authedUser]
    : null

  const author = questions.hasOwnProperty(queID)
    ? questions[queID].author
    : ''

  const avatarURL = users.hasOwnProperty(author)
    ? users[author].avatarURL
    : ''

  return {
    optionOneText,
    optionTwoText,
    optionOneVotes,
    optionTwoVotes,
    user,
    id: queID,
    avatarURL,
    isValid
  }
}

function mapDispatchToProps(dispatch) {
  return {
    answerQuestion: (qid, answer) => {
      console.log("qid, answer ", qid, answer)
     return dispatch(answerQuestionHandling(qid, answer))
    }
  }
}

export default connect(stateMappingToProps,mapDispatchToProps)(Question)
