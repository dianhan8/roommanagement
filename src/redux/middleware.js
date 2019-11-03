<<<<<<< HEAD
import promise from 'redux-promise-middleware'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'

const middleware = []

const reactNavigation = createReactNavigationReduxMiddleware(
    state => state.router,
    "root"
)

// if (__DEV__) {
//     middleware.push(createLogger())
// }


middleware.push(reactNavigation)
middleware.push(promise)

=======
import promise from 'redux-promise-middleware'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'

const middleware = []

const reactNavigation = createReactNavigationReduxMiddleware(
    state => state.router,
    "root"
)

// if (__DEV__) {
//     middleware.push(createLogger())
// }


middleware.push(reactNavigation)
middleware.push(promise)

>>>>>>> 07401726b62b74ead77bd4eb6f04c3e3146034c4
export default middleware;