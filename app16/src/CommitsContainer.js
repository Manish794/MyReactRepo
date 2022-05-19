import { Component } from 'react'
import Commits from './Commits';

class CommitsContainer extends Component {
    state = {
        commits: []
    }
    render() {
        return (
            <Commits data={this.state.commits} />
        );
    }
    componentDidMount() {
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