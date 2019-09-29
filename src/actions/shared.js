import { showLoading, hideLoading } from 'react-redux-loading'

import { getQuestions } from './questions'
import { getUsers } from './users'
import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api'

export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const DELETE_ANSWER_QUESTION = 'DELETE_ANSWER_QUESTION'


export function answerQuestion({ user, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    user,
    qid,
    answer
  }
}

export function addQuestion(question) {
  return {
    type: ADD_NEW_QUESTION,
    question
  }
}

function removingAnsweredQuestion({ qid, answer, user}) {
  return {
    type: DELETE_ANSWER_QUESTION,
    qid,
    answer,
    user
  }
}

export function addNewQuestionHandling(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    }).then(question => dispatch(addQuestion(question))).finally(() => dispatch(hideLoading()))
  }
}

export function answerQuestionHandling(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())
    dispatch(answerQuestion({ user: authedUser, qid, answer }))
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
        .catch(() => dispatch(removingAnsweredQuestion({ user: authedUser, qid, answer })))
        .finally(() => dispatch(hideLoading()))
  }
}

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading())
    return getInitialData()
        .then(({ users, questions }) => {
          dispatch(getUsers(users))
          dispatch(getQuestions(questions))
          dispatch(hideLoading())
        })
  }
}
