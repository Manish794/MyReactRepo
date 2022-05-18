
import React from 'react';

class Student extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sid: 102,
            sname: 'Rahul Kumar',
            email: 'rahul@gmail.com',
            phone: 8888888
        };
    }

    render() {
        return (
            <div className='border border-primary w-50 text-center text-primary'>
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