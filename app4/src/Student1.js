
import React from 'react';

class Student extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stud: {
                sid: 102,
                sname: 'Rahul Kumar',
                email: 'rahul@gmail.com',
                phone: 88888888
            },
            showStudDetails: true
        };
    }

    showStudentInfo = () => {
        console.log('Button Clicked  Before setState ' + this.state.showStudDetails);
        this.setState(
            {
                showStudDetails: !this.state.showStudDetails                
            }
        );
        console.log('After setState ' + this.state.showStudDetails);
    }

    render() {
        console.log('render called  ' + this.state.showStudDetails);
        var studDetails = null;
        if (this.state.showStudDetails) {
            studDetails = (<div className='border border-primary w-50 text-center text-primary'>
                <h4> Component with ES6 Style </h4>
                <br></br>Id : {this.state.stud.sid}
                <br></br>Name : {this.state.stud.sname}
                <br></br>Email : {this.state.stud.email}
                <br></br>Phone : {this.state.stud.phone}
            </div>);
        }
        return (
            <div>
                <button className='btn btn-primary' onClick={this.showStudentInfo}>Student Details</button>
                <br />{studDetails}
            </div>
        );
    }
}
export default Student;