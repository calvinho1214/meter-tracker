import axios from 'axios'
import {taggedTemplateExpression} from '@babel/types'

/**
 * ACTION TYPES
 */
const ADDED_SCORE = 'ADDED_SCORE'
const GET_SCORES = 'GET_SCORES'
const GET_TOTAL_SCORE = 'GET_TOTAL_SCORE'

/**
 * INITIAL STATE
 */
const initialState = {
  allScores: [],
  score: 0
}

/**
 * ACTION CREATORS
 */
const addedScore = score => ({type: ADDED_SCORE, score})
const getScores = score => ({type: GET_SCORES, score})
const getTotalScore = score => ({type: GET_TOTAL_SCORE})

/**
 * THUNK CREATORS
 */

export const addScore = (score, userId) => async dispatch => {
  try {
    if (userId) {
      const {data} = await axios.put(`/api/users/${userId}/totalScore`, {score})
      dispatch(addedScore(data))
    }
  } catch (error) {
    console.error(error)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case ADDED_SCORE:
      return {...state}
    default:
      return state
  }
}
