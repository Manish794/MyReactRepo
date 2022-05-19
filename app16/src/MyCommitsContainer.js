import axios from 'axios';
import { Component } from 'react'
import MyCommits from './MyCommits';

// Container component
class MyCommitsContainer extends Component {
    state = {
        // Set initial state
        commits: []
    }
    render() {
        return (
            // Pass our state commits to the presentational component
            <MyCommits data={this.state.commits} />
        );
    }
    componentDidMount() {
        // Make API call and update state with returned commits
        console.log('componentDidMount');

        axios.get('https://api.github.com/repos/Manish794/ReactRepo/commits')
            .then(resp => {
                this.setState(() => {
                    return {
                        commits: resp.data
                    }
                })
            }
            );
    }
}
export default MyCommitsContainer;