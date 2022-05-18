import React from 'react';

class StudentList extends React.Component {
    state = {

    };

    showAddressInfo = (stid) => {
        console.log(' Show More Info Called ', stid);
        let student = this.props.data.filter(stud => stud.sid === stid)[0];
        this.setState((prevState, currProps) => {
            return {
                addresses: student.addresses,
                showAddress: true,
                tableClass: 'table table-info' 
            }
        });
    }

    showAddress = (student) => {
        console.log(' Show More Info Called ', student);
        this.setState((prevState, currProps) => {
            return {
                addresses: student.addresses,
                showAddress: true,
                tableClass: 'table table-success' 
            }
        });
    }

    renderAddress = () => {
        if (this.state.showAddress) {
            return (
                <table className={this.state.tableClass}>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Aid</th>
                            <th>Street</th>
                            <th>City</th>
                            <th>Pin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.addresses.map
                                (
                                    (address) =>
                                    (<tr key={address.aid}>
                                        <td>{address.type}</td>
                                        <td>{address.aid}</td>
                                        <td>{address.street}</td>
                                        <td>{address.city}</td>
                                        <td>{address.pin}</td>
                                    </tr>
                                    )
                                )}
                    </tbody>
                </table>
            );
        }
    }


    render() {
        var students = this.props.data;
        return (
            <div className='border border-dark text-center'>
                <table className='table table-primary'>
                    <thead>
                        <tr>
                            <th>Sid</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>O Phone</th>
                            <th>H Phome</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map
                                (
                                    (student) =>
                                    (<tr key={student.sid}>
                                        <td>{student.sid}</td>
                                        <td>{student.sname}</td>
                                        <td>{student.email}</td>
                                        <td>{student.phone.office}</td>
                                        <td>{student.phone.home}</td>
                                        <td>
                                            <button className='bt btn-success' onClick={this.showAddress.bind(this, student)}>Details</button>
                                        </td>
                                        <td>
                                            <button className='bt btn-info' onClick={this.showAddressInfo.bind(this, student.sid)}>Details</button>
                                        </td>
                                    </tr>
                                    )
                                )}
                    </tbody>
                </table>
                {this.renderAddress()}
            </div>
        );
    }
}

export default StudentList;