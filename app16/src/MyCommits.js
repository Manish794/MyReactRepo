import { Component } from 'react'

// Presentational Component
class MyCommits extends Component {
    render() {
        return (
            <table className='table table-success'>
                <thead>
                    <tr>
                        <th>Commit Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map
                            (
                                (commitData) =>
                                (<tr key={commitData.sha}>
                                    <td>{commitData.sha}</td>
                                    <td>{commitData.commit.author.name}</td>
                                    <td>{commitData.commit.author.email}</td>
                                    <td>{commitData.commit.author.date}</td>
                                    <td>{commitData.commit.message}</td>
                                </tr>
                                )
                            )}
                </tbody>
            </table>
        );
    }
}
export default MyCommits;