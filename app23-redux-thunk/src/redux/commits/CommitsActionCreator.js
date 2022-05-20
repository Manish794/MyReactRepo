
// getCommitsFromServer is the "thunk action creator"
export const getCommitsFromServer = () => {
    // It is the "thunk function"
    return (dispatch, getState, axios) => {
        //console.log('useEffect')
        dispatch({ type: 'FETCHING_ALL_COMMITS' });
        // Just to deplay we use setTimeout. In real application, we will call the api using axios directly
        setTimeout(() => {
            axios.get("https://api.github.com/repos/Manish794/ReactRepo/commits")
                .then((myresponse) => {
                    //console.log(myresponse);
                    dispatch({ type: 'GET_ALL_COMMITS_SUCCESS', payload: myresponse.data });
                }).catch(myerror => {
                    //console.log(myerror);
                    dispatch({ type: 'GET_ALL_COMMITS_FAILED', payload: myerror });
                });
        }, 5000);
    }
}