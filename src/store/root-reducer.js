import { combineReducers } from 'redux'
import { positionReducer } from './positions/position-reducer'
import { filtersReducer } from './filters/filters-reducer'

export const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filtersReducer
})
