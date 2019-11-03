<<<<<<< HEAD
import {createStore, applyMiddleware} from 'redux'

import appReducer from './reducers'
import middleware from './middleware'

const store = createStore(appReducer,{}, applyMiddleware(...middleware))

=======
import {createStore, applyMiddleware} from 'redux'

import appReducer from './reducers'
import middleware from './middleware'

const store = createStore(appReducer,{}, applyMiddleware(...middleware))

>>>>>>> 07401726b62b74ead77bd4eb6f04c3e3146034c4
export {store}