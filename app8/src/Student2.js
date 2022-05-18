import { useState } from "react";
import ToggleStudentDetails from "./ToggleStudentDetails";

function Student1(props) {

    const [studState, setStudState] = useState({
        stud: {
            sid: 103,
            sname: 'Aadi',
            email: 'aadi@gmail.com',
            phone: 7777777
        },
        showStudDetails: true
    });

    const showStudentInfo = () => {
        console.log('Button Clicked  Before setState ' + studState.showStudDetails);
        setStudState(ToggleStudentDetails.updateShowDetailsForFuncComponent);
        console.log('After setState ' + studState.showStudDetails);
    }

    let studDetails = null;
    console.log('showDetails ' + studState.showStudDetails);
    if (studState.showStudDetails) {
        studDetails = (
            <div className='border border-success w-50 text-center text-success'>
                <p>With Function Component and useState Hooks</p>
                <br></br>Id : {props.sid}
                <br></br>Name : {props.sname}
                <br></br>Email : {props.email}
                <br></br>Phone : {props.phone}
            </div>
        );
    }

    return (
        <div>
            <button className='btn btn-success' onClick={showStudentInfo}>Student Details</button>
            <br />{studDetails}
        </div>
    );

}
export default Student1;