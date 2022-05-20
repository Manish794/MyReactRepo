import { Component } from "react";
import { connect } from "react-redux";

class Student extends Component {
    state = {
        sname :''
    }

    handleChange = (event) => {
         this.setState(() => {
                return {
                    [event.target.name]: event.target.value
                }
         })   
    }
    render() {
        return (
            <div className="border bg-warning">
                <h1>Student Details</h1>
                <h4>Sid {this.props.studentInfo.studentId}</h4>
                <h4>Name {this.props.studentInfo.studentName} 
                    <input name="sname" type='text' value = {this.state.sname} onChange={this.handleChange}/>  
                    <button className="bg-light" onClick={() => this.props.dispatch({type:'UPDATE_NAME', payload:this.state.sname})}>Update Name</button>
                </h4>
                <h4>Email {this.props.studentInfo.studentEmail} 
                <input name="email" type='text' value = {this.state.email} onChange={this.handleChange}/>  
                    <button className="bg-light" onClick={() => this.props.dispatch({type:'UPDATE_EMAIL', payload:this.state.email})}>Update Email</button></h4>
                <h4>Phone {this.props.studentInfo.phone}</h4>
            </div>
        );
    }
}

const mapReduxStateToProps = (state) => {
    //console.log(state);
    return {
        studentInfo: state.studStateData
    };
}

const mapDispatchInComponent = (reduxDispatch) => {
    return {
        dispatch: reduxDispatch
    };
}

export default connect(mapReduxStateToProps, mapDispatchInComponent)(Student);