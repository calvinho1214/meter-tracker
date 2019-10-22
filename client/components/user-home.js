import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, handleSubmit, meter} = props
  return (
    <div>
      <div>
        <h3>Welcome, {email}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <small>Meters</small>
          <input type="integer" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    meter: state.score.meter
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      const meter = evt.target.meter.value
      dispatch(meter)
    }
  }
}

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
