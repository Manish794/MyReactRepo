import { Component } from 'react'
import Commits from './Commits';

// Container component
class CommitsContainer extends Component {
    state = {
        // Set initial state
        commits: []
    }
    render() {
        return (
            // Pass our state commits to the presentational component
            <Commits data={this.state.commits} />
        );
    }
    componentDidMount() {
        // Make API call and update state with returned commits
        console.log('componentDidMount');
        fetch("https://api.github.com/repos/Manish794/ReactRepo/commits")
            .then(response => response.json())
            .then(data =>
                this.setState(() => {
                    return {
                        commits: data
                    }
                })
            );
    }
}
export default CommitsContainer;