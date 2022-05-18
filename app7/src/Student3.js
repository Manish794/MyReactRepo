import { useState } from "react";
import ToggleStudentDetails from "./ToggleStudentDetails";

const Student3 = (props) => {

    const [studState, setStudState] = useState({
        showStudDetails: true
    });

    const showStudentInfo = () => {
        console.log('Button Clicked  Before setState ' + studState.showStudDetails);
        setStudState(ToggleStudentDetails.updateShowDetailsForFuncComponent);
        console.log('After setState ' + studState.showStudDetails);
    }

    let studDetails = null;
    console.log('showDetails ' + studState.showStudDetails);
    console.log('showDetails ', studState);
    if (studState.showStudDetails) {
        studDetails = (
            <div className='border border-danger w-50 text-center text-danger'>
                <p>With Arrow Component and useState Hooks</p>
                <br></br>Id : {props.sid}
                <br></br>Name : {props.sname}
                <br></br>Email : {props.email}
                <br></br>Phone : {props.phone}
            </div>
        );
    }

    return (
        <div>
            <button className='btn btn-danger' onClick={showStudentInfo}>Student Details</button>
            <br />{studDetails}
        </div>
    );

}
export default Student3;