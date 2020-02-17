import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { registerAnalysisSuccess, registerAnalysisFailure } from './actions';

export function* registerAnalysis({ payload }) {
    try {
        const { obj_analysis, user_id } = payload;

        const response = yield call(api.post, '/analysis', { obj_analysis, user_id });

        yield put(registerAnalysisSuccess(response.data.analysis));
        
        history.push('/');
    } catch(err) {
        toast.error('Erro ao cadastrar. Verifique seus dados.')
        yield put(registerAnalysisFailure());
    }
}

export default all([
    takeLatest('@user/REGISTER_ANALYSIS_REQUEST', registerAnalysis)
]);