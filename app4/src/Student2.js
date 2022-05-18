import { useState } from "react";

function Student1() {

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
        setStudState(
            {
                showStudDetails: !studState.showStudDetails,
                stud: studState.stud
            }
        );
        console.log('After setState ' + studState.showStudDetails);
    }

    let studDetails = null;
    console.log('showDetails ' + studState.showStudDetails);
    console.log('showDetails ', studState);
    if (studState.showStudDetails) {
        studDetails = (
            <div className='border border-success w-50 text-center text-success'>
                <p>With Function Component and useState Hooks</p>
                <br></br>Id : {studState.stud.sid}
                <br></br>Name : {studState.stud.sname}
                <br></br>Email : {studState.stud.email}
                <br></br>Phone : {studState.stud.phone}
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