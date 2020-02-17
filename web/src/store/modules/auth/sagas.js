import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;

        const response = yield call(api.post, 'sessions', {
            email, password
        });
    
        const { token, user, analysis_id } = response.data;

        api.defaults.headers['Authorization'] = `Bearer ${token}`;
    
        yield put(signInSuccess(token, user));

        console.log(response.data)
    
        if(!user.analysis_id){
            history.push('/analise');
        } else {
            history.push('/dashboard');
        }
    } catch(err) {
        toast.error('Falha na autenticação, verifique seus dados.')
        yield put(signFailure());
    }
}

export function* signUp({ payload }) {
    try {
        const { name, email, password } = payload;

        const register = yield call(api.post, 'users', {
            name, email, password
        });

        if(register) {
            const login = yield call(api.post, 'sessions', {
                email, password
            });

            const { token, user } = login.data;

            if(login) {
                api.defaults.headers['Authorization'] = `Bearer ${token}`;
    
                yield put(signInSuccess(token, user));
            }
        }
        
        history.push('/analise');
    } catch(err) {
        toast.error('Erro ao cadastrar. Verifique seus dados.')
        yield put(signFailure());
    }
}

export function setToken({ payload }) {
    if(!payload) return;

    const { token } = payload.auth;

    if(token) {
        api.defaults.headers.Authorization = `Bearer ${token}`
    }
}

export function signOut() {
    history.push('/');
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('@auth/SIGN_OUT', signOut)
]);