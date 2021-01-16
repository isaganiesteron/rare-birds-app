import { combineReducers } from 'redux'

import { authentication } from './authentication.reducer'
import { registration } from './registration.reducer'
import { users } from './users.reducer'
import { blogs } from './blogs.reducer'
import { alert } from './alert.reducer'

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  blogs,
  alert
})

export default rootReducer