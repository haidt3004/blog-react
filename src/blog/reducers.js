import { handleActions } from 'redux-actions'
import * as actions from './actions'

const blog = handleActions({
  [actions.setPosts](state, {payload}) {
    return { ...state, posts: payload }
  },
}, {
  posts: []
})

export default blog