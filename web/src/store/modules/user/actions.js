export function registerAnalysisRequest(obj_analysis, user_id) {
    return {
        type: '@user/REGISTER_ANALYSIS_REQUEST',
        payload: { obj_analysis, user_id },
    };
}

export function registerAnalysisSuccess(analysis, trail) {
    return {
        type: '@user/REGISTER_ANALYSIS_SUCCESS',
        payload: { analysis, trail },
    };
}

export function registerAnalysisFailure() {
    return {
        type: '@auth/REGISTER_ANALYSIS_FAILURE'
    }
}