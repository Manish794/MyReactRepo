
const allCommitsInitialState = {
    loading: false,
    allCommits: [],
    error: {}
}

const CommitsReducer = (currentState = allCommitsInitialState, action) => {
    switch (action.type) {
        case 'FETCHING_ALL_COMMITS':
            return {
                ...currentState,
                allCommits: [],
                loading: true
            };
        case 'GET_ALL_COMMITS_SUCCESS':
            return {
                loading: false,
                allCommits: action.payload,
                error : {}
            };
        case 'GET_ALL_COMMITS_FAILED':
            return {
                loading: false,
                allCommits: [],
                error :action.payload
            };
        default:
            return allCommitsInitialState;
    }
}

export default CommitsReducer;