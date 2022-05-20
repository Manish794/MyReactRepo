import { Component } from "react";
import { connect } from "react-redux";

class Student extends Component {
    render() {
        return (
            <div className="border bg-warning">
                <h1>Student Details</h1>
                <h4>Sid {this.props.studentInfo.studentId}</h4>
                <h4>Name {this.props.studentInfo.studentName}</h4>
                <h4>Email {this.props.studentInfo.studentEmail}</h4>
                <h4>Phone {this.props.studentInfo.phone}</h4>
            </div>
        );
    }
}

const mapReduxStateToProps = (state) => {
    console.log(state);
    return {
        studentInfo: state.studStateData
    };
}

export default connect(mapReduxStateToProps)(Student);