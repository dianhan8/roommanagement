<<<<<<< HEAD
import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'

//Navigasi
import RootNavigator from './../../navigator'

const reducerRouter = createNavigationReducer(RootNavigator)
//Login
import reducerUser from './../reducers/reducersUser'
//Room
import reducerRoom from './../reducers/reducersRoom'
//Customer
import reducersCustomer from './../reducers/reducersCustomer'
//Orders
import reducersOrders from './../reducers/reducersOrder'

const appReducer = combineReducers({
    router: reducerRouter,
    users: reducerUser,
    room: reducerRoom,
    customer: reducersCustomer,
    order: reducersOrders
})

=======
import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'

//Navigasi
import RootNavigator from './../../navigator'

const reducerRouter = createNavigationReducer(RootNavigator)
//Login
import reducerUser from './../reducers/reducersUser'
//Room
import reducerRoom from './../reducers/reducersRoom'
//Customer
import reducersCustomer from './../reducers/reducersCustomer'
//Orders
import reducersOrders from './../reducers/reducersOrder'

const appReducer = combineReducers({
    router: reducerRouter,
    users: reducerUser,
    room: reducerRoom,
    customer: reducersCustomer,
    order: reducersOrders
})

>>>>>>> 07401726b62b74ead77bd4eb6f04c3e3146034c4
export default appReducer