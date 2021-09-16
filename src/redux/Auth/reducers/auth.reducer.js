import ActionType from '../types/auth.type'

export const initialState = {
    isLoading: false,
    payload: {},
    error: null
};

export const Login = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOGIN_SUCCESS: {
            return {
                ...state,
                error: null,
                payload: action.payload
            };
        }
        case ActionType.LOGIN_ERROR: {
            return {
                ...state,
                error: action.payload,
                isLoading: false,
                payload: null
            }
        }
        case ActionType.LOGIN_RESET: {
            return initialState
        }
        default:
            return state;
    }
};

export const Register = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.REGISTER_SUCCESS: {
            return {
                ...state,
                error: null,
                payload: action.payload
            };
        }
        case ActionType.REGISTER_ERROR: {
            return {
                ...state,
                error: action.payload,
                payload: null
            }
        }
        case ActionType.REGISTER_RESET: {
            return initialState;
        }
        default:
            return state;
    }
};
