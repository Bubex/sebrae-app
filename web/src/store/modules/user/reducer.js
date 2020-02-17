import produce from 'immer';

const INITIAL_STATE = {
    profile: null,
    analysis: null,
    loading: false
};

export default function user(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch(action.type) {
            case '@auth/SIGN_IN_SUCCESS': {
                draft.profile = action.payload.user;
                break;
            }
            case '@auth/SIGN_OUT': {
                draft.profile = null;
                draft.analysis = null;
                break;
            }
            case '@user/REGISTER_ANALYSIS_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@user/REGISTER_ANALYSIS_SUCCESS': {
                draft.analysis = action.payload.analysis;
                break;
            }
            case '@user/REGISTER_ANALYSIS_FAILURE': {
                draft.loading = false;
                break;
            }
            default:
        }
    });
}