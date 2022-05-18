import { useState } from "react";
import ToggleStudentDetails from "./ToggleStudentDetails";

const Student3 = () => {

    const [studState, setStudState] = useState({
        stud: {
            sid: 104,
            sname: 'Manoj',
            email: 'manoj@gmail.com',
            phone: 6666666
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
    console.log('showDetails ', studState);
    if (studState.showStudDetails) {
        studDetails = (
            <div className='border border-danger w-50 text-center text-danger'>
                <p>With Arrow Component and useState Hooks</p>
                <br></br>Id : {studState.stud.sid}
                <br></br>Name : {studState.stud.sname}
                <br></br>Email : {studState.stud.email}
                <br></br>Phone : {studState.stud.phone}
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