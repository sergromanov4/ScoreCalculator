import { createStore, combineReducers } from 'redux'

import players from './reducers/players.js'
import gameSettings from './reducers/gameSettings.js'

const initialStore = {
	players: [],
	gameSettings: {}
}

const currentReducer = combineReducers(
	{
		players,
		gameSettings
	}
)

const store = createStore(currentReducer, initialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store