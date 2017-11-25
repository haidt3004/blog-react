import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import appReducer from './reducers'

const logger = createLogger({
    collapsed: true
})

const store = createStore(appReducer,
    applyMiddleware(thunkMiddleware, logger)
)

export default store