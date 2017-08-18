import { combineReducers } from 'redux'
import me from './me'
import entities from './entities/reducer'

export default combineReducers({
  me: me,
  entities: entities
})
