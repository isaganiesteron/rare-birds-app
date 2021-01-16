import { userConstants } from '../_constants'

export function blogs(state = {}, action) {
  console.log("action.type")
  console.log(action.type)
  switch (action.type) {
    case userConstants.GETBLOG_REQUEST:
      return {
        loading: true
      }
    case userConstants.GETBLOG_SUCCESS:
      return {
        items: action.blogs
      }
    case userConstants.GETBLOG_FAILURE:
      return {
        error: action.error
      }
    default:
      return state
  }
}