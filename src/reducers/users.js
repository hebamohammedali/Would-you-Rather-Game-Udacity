import { GET_USERS } from '../actions/users'
import { ADD_NEW_QUESTION, ANSWER_QUESTION, DELETE_ANSWER_QUESTION } from '../actions/shared'

export default function users(state = {}, action) {
  switch(action.type) {
    case ADD_NEW_QUESTION : {
      const { id, author } = action.question

      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id])
        }
      }
    }
    case ANSWER_QUESTION : {
      const { user, qid, answer } = action

      return {
        ...state,
        [user]: {
          ...state[user],
          answers: {
            ...state[user].answers,
            [qid]: answer
          }
        }
      }
    }
    case DELETE_ANSWER_QUESTION : {
      const { user, qid } = action

      return {
        ...state,
        [user]: {
          ...state[user],
          answers: Object.keys(state[user].answers).filter(question => question !== qid).reduce((newState, question) => {
            return {
              ...newState,
              [question]: state[user].answers[question]
            }
          }, {})
        }
      }
    }
    case GET_USERS :
      return {
        ...state,
        ...action.users
      }
    default :
      return state
  }
}
