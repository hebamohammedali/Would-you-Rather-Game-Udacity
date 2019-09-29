import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import PageNavBar from './PageNavBar'
import AddNewQuestion from './AddNewQuestion'
import QuestionAnswered from './QuestionAnswered'
import NotFoundPage from './NotFoundPage'
import Leaderboard from './Leaderboard'
import Login from './Login'
import Routing from './Routing'
import Unanswered from './Unanswered'
import Question from './Question'

class ViewPage extends Component {
  render() {
    return (
      <div className="s">
        <PageNavBar />
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Redirect to="/unanswered" />
            )} />
          <Route
            path='/login'
            component={Login} />
          <Routing
            path='/add'
            component={AddNewQuestion} />
          <Routing
            path='/unanswered'
            component={Unanswered} />
          <Routing childPath = {true}
            path='/questions/:id'
            component={Question} />
          <Routing
            path='/answered'
            component={QuestionAnswered} />
          <Routing
            path='/leaderboard'
            component={Leaderboard} />
          <Route
            component={NotFoundPage} />
        </Switch>
      </div>
    )
  }
}

export default ViewPage
