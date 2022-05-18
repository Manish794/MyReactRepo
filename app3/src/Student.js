
import React from 'react';

class Student extends React.Component {
    state = {
        sid : 101,
        sname : 'Manish Kumar',
        email : 'manish@gmail.com',
        phone : 9999999
    };

    render() {
        return (
            <div className='border border-dark w-50 text-center text-dark'>
                <h4> Component with ES6 Style </h4>
                <br></br>Id : {this.state.sid}
                <br></br>Name : {this.state.sname}
                <br></br>Email : {this.state.email}
                <br></br>Phone : {this.state.phone}
            </div>
        );
    }
}
export default Student;