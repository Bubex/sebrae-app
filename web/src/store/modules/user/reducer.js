import produce from 'immer';

const INITIAL_STATE = {
    profile: null,
    analysis: null,
    trail: null,
    loading: false
};

export default function user(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch(action.type) {
            case '@auth/SIGN_IN_SUCCESS': {
                draft.profile = action.payload.user;
                draft.analysis = action.payload.user.analysis;
                draft.trail = action.payload.user.trail;
                break;
            }
            case '@auth/SIGN_OUT': {
                draft.profile = null;
                draft.analysis = null;
                draft.trail = null;
                break;
            }
            case '@user/REGISTER_ANALYSIS_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@user/REGISTER_ANALYSIS_SUCCESS': {
                draft.analysis = action.payload.analysis;
                draft.trail = action.payload.trail;
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