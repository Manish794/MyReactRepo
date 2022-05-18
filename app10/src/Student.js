import React from 'react';

class Student extends React.Component {

    showMoreInfo = (selectedValue)  =>{
        console.log(' Show More Info Called ', selectedValue);
    }
    render() {
        var student = this.props.data;
        return (
            <div className='border border-dark text-center'>
                <h3 className='text-primary'> Simple Type Data</h3>
                {student.sid}
                <br />{student.sname}
                <br />{student.email}
                <br />{student.dob.getFullYear()}
                <br />{student.active ? 'Active' : 'Inactive'}
                <h3 className='text-primary'> Arrays</h3>
                <ul className='list-group'>
                    {student.phones.map((phone, index) => (<li className='list-group-item' key={index}>{phone}</li>))}
                </ul>
                <h3 className='text-primary'> Object </h3>
                {student.course.cid}
                <br />{student.course.cname}
                <br />{student.course.trainer}
                <br />{student.course.virtual ? 'Online' : 'Offline'}
                <h3 className='text-primary'>Array of Object </h3>
                <table className='table table-primary'>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Aid</th>
                            <th>Street</th>
                            <th>City</th>
                            <th>Pin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            student.addresses.map
                                (
                                    (address) =>
                                    (<tr key={address.aid}>
                                        <td>{address.type}</td>
                                        <td>{address.aid}</td>
                                        <td>{address.street}</td>
                                        <td>{address.city}</td>
                                        <td>{address.pin}</td>
                                        <td>
                                            <button className='bt btn-dark' onClick={this.showMoreInfo.bind(this, address)}>Details</button>    
                                        </td>
                                    </tr>
                                    )
                                )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Student;