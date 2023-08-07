import { legacy_createStore as createStore, combineReducers } from 'redux'
import stateReducer from '../reducer'

const rootReducer = combineReducers({
  data: stateReducer
})

const store = createStore(rootReducer)
export default store
