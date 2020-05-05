import { ADD_PLAYER, DELETE_PLAYER, SCORE_PLUS, SCORE_MINUS, NEXT_ROUND, CLEAR_STORE } from '../actions/index'

const initialState = []

const players = (state = initialState, action) => {
  const { newPlayer, id, scoreValue } = action
    switch (action.type) {
        case ADD_PLAYER:
          return [...state, newPlayer]
        case CLEAR_STORE:
          return initialState
        case DELETE_PLAYER:
          return state.filter(item => item.id !== id)
        case SCORE_PLUS:
          return state.map(item => {
            if (item.id === id)
              return {
                ...item,
                currentScore: item.currentScore + scoreValue,
                acc: item.acc + scoreValue
              }
            return item
          })
        case SCORE_MINUS:
          return state.map(item => {
            if (item.id === id)
              return {
                ...item,
                currentScore: item.currentScore - scoreValue,
                acc: item.acc - scoreValue
              }
            return item
          })
        case NEXT_ROUND:
          return state.map(item => {
            return {
              ...item,
              prevRound: item.acc,
              acc: 0
            }
          })
        default:
          return state
    }
}

export default players