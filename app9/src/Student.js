import React from 'react';
import ToggleStudentDetails from './ToggleStudentDetails';
import PropTypes from 'prop-types';

class Student extends React.Component {
    state = {
        showStudDetails: true
    };

    showStudentInfo = () => {
        console.log('Button Clicked  Before setState ' + this.state.showStudDetails);
        this.setState(ToggleStudentDetails.updateShowDetailsForES6);
        console.log('After setState ' + this.state.showStudDetails);
    }

    render() {
        console.log('render called  ' + this.state.showStudDetails);
        var studDetails = null;
        if (this.state.showStudDetails) {
            studDetails = <div className='border border-dark w-50 text-center text-dark'>
                <h4> Component with ES6 Style </h4>
                <br></br>Id : {this.props.sid}
                <br></br>Name : {this.props.sname}
                <br></br>Email : {this.props.email}
                <br></br>Phone : {this.props.phone}
            </div>;
        }
        return (
            <div>
                <button className='btn btn-dark' onClick={this.showStudentInfo}> {this.props.buttonValue} </button>
                <br />{studDetails}
            </div>
        );
    }
}

Student.propTypes = {
    sid: PropTypes.number.isRequired,
    sname: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.number.isRequired,
    buttonValue : PropTypes.string.isRequired
};

Student.defaultProps = {
    email: 'user@gmail.com',
    buttonValue: "Show/Hide Details"
};
  
export default Student;