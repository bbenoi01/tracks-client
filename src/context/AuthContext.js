import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/trackerApi';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case('ADD_ERROR'): {
            return {
                ...state,
                errorMessage: payload
            }
        }
        case('SIGNIN'): {
            return {
                token: payload,
                errorMessage: ''
            }
        }
        case('CLEAR_ERROR_MESSAGE'): {
            return {
                ...state,
                errorMessage: ''
            }
        }
        case('SIGNOUT'): {
            return {
                token: null,
                errorMessage: ''
            }
        }
        default:
            return state;
    }
};

const tryLocalSignin = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem('token');

        if (token) {
            dispatch({
                type: 'SIGNIN',
                payload: token
            });
            navigate('TrackList');
        } else {
            navigate('Signin');
        }
    }
};

const clearErrorMessage = (dispatch) => {
    return () => {
        dispatch({ type: 'CLEAR_ERROR_MESSAGE' })
    }
};

const signin = (dispatch) => {
    return async ({ email, password }) => {
        try {
            // try to sign in
            const res = await trackerApi.post('/signin', { email, password });
            // on success, update state and say that we are authenticated
            await AsyncStorage.setItem('token', res.data.token);
            dispatch({
                type: 'SIGNIN',
                payload: res.data.token
            });
            // navigate to main flow
            navigate('TrackList');
            // on failure, show error message
        } catch (err) {
            dispatch({
                type: 'ADD_ERROR',
                payload: err.response.data.error
            });
        }
    };
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
        try {
            // make api request to sign up with email and password
            const res = await trackerApi.post('/signup', { email, password });
            // on success, modify state and say that we are authenticated
            await AsyncStorage.setItem('token', res.data.token);
            dispatch({
                type: 'SIGNIN',
                payload: res.data.token
            });
            // navigate to main flow
            navigate('TrackList');
            // on failure, show error message
        } catch (err) {
            dispatch({
                type: 'ADD_ERROR',
                payload: err.response.data.error
            })
        }
    };
};

const signout = (dispatch) => {
    return async () => {
        // sign out
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'SIGNOUT' });
        navigate('Signin');
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signup, signout, tryLocalSignin, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
)