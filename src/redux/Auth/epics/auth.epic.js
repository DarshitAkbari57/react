import {LoginEpic, RegisterEpic} from '../actions/auth.actions';

export const AuthEpics = [
    LoginEpic,
    RegisterEpic
]

export default { AuthEpics }
