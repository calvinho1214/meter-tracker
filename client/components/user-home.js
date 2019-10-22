import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addScore} from '../store/score'

/**
 * COMPONENT
 */
class UserHome extends Component {
  constructor() {
    super()
    this.state = {
      score: 0,
      allScores: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    const {score, user} = this.props
    this.props.addScore(score, user.id)
  }

  render() {
    return (
      <div>
        <div>
          <h3>Welcome, {this.props.user.email}</h3>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <small>Meters</small>
            <input type="integer" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user,
    score: state.score.score,
    allScores: state.score.allScores
  }
}

const mapDispatch = dispatch => {
  return {
    addScore: score => dispatch(addScore(score))
  }
}

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
