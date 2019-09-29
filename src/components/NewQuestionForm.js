import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class NewQuestionForm extends Component {
  state = {
    AnsOne: '',
    AnsTwo: '',
    redirectToUnanswered: false
  }

  handleChange = e => {
    const name = e.target.name
    const text = e.target.value
    this.setState(() => ({
      [name]: text
    }))
  }

  submit = e => {
    const { addNewQuestionHandling } = this.props
    const { AnsOne, AnsTwo } = this.state
    addNewQuestionHandling(AnsOne, AnsTwo)
    this.setState(() => ({
      redirectToUnanswered: true
    }))
  }

  render() {
    const { AnsOne, AnsTwo, redirectToUnanswered } = this.state

    if (redirectToUnanswered) {
      return <Redirect to='/unanswered' />
    }

    return (
      <form className='ask-form' onSubmit={this.submit}>
        <textarea name='AnsOne' required
          onChange={this.handleChange}
          value={AnsOne} />
        <textarea name='AnsTwo' required
          onChange={this.handleChange}
          value={AnsTwo} />
        <button>Submit New Question</button>
      </form>
    )
  }
}

export default NewQuestionForm
