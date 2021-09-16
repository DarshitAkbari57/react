import {combineEpics} from 'redux-observable';
import {AuthEpics} from './Auth/epics/auth.epic';

// import {productEpics} from './Products/epic'; // demo purpose

export default combineEpics(
    ...AuthEpics,
    // ...productEpics
);
