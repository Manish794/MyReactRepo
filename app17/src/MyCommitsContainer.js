import axios from 'axios';
import { Component } from 'react'
import MyCommits from './MyCommits';

// Container component
class MyCommitsContainer extends Component {
    state = {
        // Set initial state
        commits: [],
        filteredCommits : []
    }

    showCommits = (uname) => {
        if(uname.length === 0){
            this.setState((state) => {
                return {
                    filteredCommits: state.commits
                }
            })
        } else {
            var filteredCommits = this.state.commits.filter(commit => commit.commit.author.name === uname);
            this.setState(() => {
                return {
                    filteredCommits: filteredCommits
                }
            })
        }
    }


    render() {
        return (
            // Pass our state commits to the presentational component
            <div>
                <MyCommits data={this.state.filteredCommits} />
                <button className='btn btn-info' onClick={this.showCommits.bind(this, '')}> All</button>
                <button className='btn btn-warning' onClick={this.showCommits.bind(this, 'Manish K')}> By User 1</button>
                <button className='btn btn-danger' onClick={this.showCommits.bind(this, 'Manish Ranjan')}> By User 2</button>
            </div>
        );
    }
    componentDidMount() {
        // Make API call and update state with returned commits
        console.log('componentDidMount');

        axios.get('https://api.github.com/repos/Manish794/ReactRepo/commits')
            .then(resp => {
                this.setState(() => {
                    return {
                        commits: resp.data,
                        filteredCommits: resp.data
                    }
                })
            }
            );
    }
}
export default MyCommitsContainer;