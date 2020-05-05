import { CHANGE_SCORE_TYPE, NEXT_ROUND, CLEAR_STORE } from '../actions/index'

const initialState = {
  scoreType: 'custom',
  round: 0
}

const gameSettings = (state = initialState, action) => {
  const { scoreType, round } = action
    switch (action.type) {
        case CHANGE_SCORE_TYPE:
          return {...state,
            scoreType
          }
        case NEXT_ROUND:
          return {
            ...state,
            round: round + 1
          }
        case CLEAR_STORE:
          return initialState
        default:
          return state
    }
}

export default gameSettings