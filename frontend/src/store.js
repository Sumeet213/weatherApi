import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension'
// import rootSaga from './sagas'
// import {userAuthenticationReducer} from './reducers/authReducer'
// import {moviesReducer} from './reducers/moviesReducer'
// import setAuthToken from './services/setToken'

const initialState = {
}

const reducers = combineReducers({
    
})


const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware];

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

// sagaMiddleware.run(rootSaga);

export default store;