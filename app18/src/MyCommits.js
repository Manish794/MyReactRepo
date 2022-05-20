import { Component } from 'react'

// Presentational Component
class MyCommits extends Component {
    
    handleDelete = (sha) => {
        this.props.onDeleteButtonClick(sha);
    }

    handleFilter = (uname) => {
        this.props.onFilterClick(uname);
    }
    
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
                        <th>Action</th>
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
                                    <td><button className='btn bg-info' onClick={this.handleDelete.bind(this,commitData.sha)} > Delete</button></td>
                                </tr>
                                )
                            )}
                </tbody>
                <tfoot className='table-light'>
                    <tr><td> </td>
                        <td> <button className='btn bg-info' onClick={this.handleFilter.bind(this,'')}> All</button></td>
                        <td> <button className='btn bg-warning' onClick={this.handleFilter.bind(this,'Manish K')}> Manish K</button></td>
                        <td> <button className='btn bg-danger' onClick={this.handleFilter.bind(this,'Manish Ranjan')}> Manish Ranjan</button></td>
                        <td> <button className='btn bg-primary' onClick={this.handleFilter.bind(this,'Manish794')}> Manish794</button></td>
                    </tr>
                </tfoot>
            </table>
        );
    }
}
export default MyCommits;