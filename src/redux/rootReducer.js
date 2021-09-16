import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../history';
import { Login, Register } from './Auth/reducers/auth.reducer';

// import productsReducer from './Products/reducers/index';

export default combineReducers({
    router: connectRouter(history),
    Login,
    Register,
    // ...productsReducer
});
