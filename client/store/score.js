import axios from 'axios'

/**
 * ACTION TYPES
 */
const ADD_SCORE = 'ADD_SCORE'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = meter => ({type: ADD_SCORE, meter})

/**
 * THUNK CREATORS
 */

export const auth = meter => async dispatch => {}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case ADD_SCORE:
      return action.user
    default:
      return state
  }
}
