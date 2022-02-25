import { createStore } from 'redux';
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
// Create Store for Redux
const store = createStore(
    // import Reducers with CombineReducers 
    rootReducer,
    // Import DevTools , devDependencies Mode
    composeWithDevTools())

export default store