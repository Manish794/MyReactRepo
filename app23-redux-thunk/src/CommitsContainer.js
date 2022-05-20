
import { useSelector, useDispatch } from 'react-redux';

import React, { useEffect } from "react";
import Commits from './Commits.js'
import { getCommitsFromServer } from './redux/commits/CommitsActionCreator'

const CommitsContainer = () => {
    const commitState = useSelector(state => state.commitStateData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCommitsFromServer());
    }, [dispatch]);

    let messageToDisplay = "";
    if (commitState.loading) {
        messageToDisplay = "Loading .....Please Wait.... ";
    } else if (commitState.error) {
        messageToDisplay = commitState.error.message;
    }
    //console.log(commitState);
    return (
        <Commits data={commitState.allCommits} message={messageToDisplay} />
    );
}

export default CommitsContainer;