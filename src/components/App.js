import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import ViewPage from './ViewPage'

class App extends Component {
  componentDidMount() {
    this.props.loadInitial()
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="aa">
          <ViewPage />
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadInitial: () => {
      dispatch(handleInitialData())
    }
  }
}

export default connect(null, mapDispatchToProps)(App)
