import { Component } from 'react'

class Commits extends Component {

    render() {
        return (
        <div className='border border-success'>
            <h2 className='text-danger text-center'>{this.props.message}</h2>
            <table className='table table-striped table-primary'>
                <thead>
                    <tr>
                        <th>Commit Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody className='table-striped'>
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
        </div>
        );
    }
}
export default Commits;