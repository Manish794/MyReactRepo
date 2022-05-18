
import React from 'react';
import ToggleStudentDetails from './ToggleStudentDetails';
import PropTypes from 'prop-types';

class Student extends React.Component {
    static propTypes = {
        sid: PropTypes.number.isRequired,
        sname: PropTypes.string.isRequired,
        email: PropTypes.string,
        phone: PropTypes.number.isRequired
    };

    static defaultProps = {
        email: 'user@gmail.com'
    };

    constructor(props) {
        super(props)
        this.state = {
            showStudDetails: true
        };
    }

    showStudentInfo = () => {
        console.log('Button Clicked  Before setState ' + this.state.showStudDetails);
        this.setState(ToggleStudentDetails.updateShowDetailsForES6);
        console.log('After setState ' + this.state.showStudDetails);
    }

    render() {
        console.log('render called  ' + this.state.showStudDetails);
        var studDetails = null;
        if (this.state.showStudDetails) {
            studDetails = (<div className='border border-primary w-50 text-center text-primary'>
                <h4> Component with ES7 Style </h4>
                <br></br>Id : {this.props.sid}
                <br></br>Name : {this.props.sname}
                <br></br>Email : {this.props.email}
                <br></br>Phone : {this.props.phone}
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