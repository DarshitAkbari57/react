import {createAction} from 'redux-actions';
import ActionType from '../types/auth.type';
import {ofType} from 'redux-observable';
import { switchMap} from 'rxjs/operators';
import {from} from 'rxjs';
import {ApiPostNoAuth} from '../../../helpers/API/ApiData';
// import {flatMap} from 'rxjs/internal/operators';
import Auth from '../../../helpers/Auth';

export const Login = createAction(ActionType.LOGIN);
export const Login_Success = createAction(ActionType.LOGIN_SUCCESS);
export const Login_Error = createAction(ActionType.LOGIN_ERROR);
export const Login_Reset = createAction(ActionType.LOGIN_RESET);
export const Register = createAction(ActionType.REGISTER);
export const Register_Success = createAction(ActionType.REGISTER_SUCCESS);
export const Register_Error = createAction(ActionType.REGISTER_ERROR);
export const Register_Reset = createAction(ActionType.REGISTER_RESET);

export function LoginEpic(action$) {
    return action$.pipe(
        ofType(ActionType.LOGIN),
        switchMap((Action) =>
            from(ApiPostNoAuth('/auth/login', Action.payload)
                .then((res) => {
                    /* Setting AUTH token */
                    if (res.data && res.data.hasOwnProperty('token')) {
                        Auth.setAuthToken(res.data.token);
                    }
                    Auth.setAuthData(res.data);

                    if (res.data.hasOwnProperty('user') && res.data.user) {
                        Auth.setUserData(res.data.user);
                    }

                    return Login_Success(res.data)
                })
                .catch((err) => {
                    return Login_Error(err)
                }))
        )
    )
}

export function RegisterEpic(action$) {
    return action$.pipe(
        ofType(ActionType.REGISTER),
        switchMap((Action) =>
            from(ApiPostNoAuth('accounts', Action.payload)
                .then((res) => {
                    return Register_Success(res.data);
                })
                .catch((err) => {
                    return Register_Error(err);
                }))
        )
    )
}
