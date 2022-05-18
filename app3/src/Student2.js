import { useState } from "react";

function Student1(){

    const [studState, setStudState] = useState({
            sid: 103,
            sname: 'Aadi',
            email: 'aadi@gmail.com',
            phone: 7777777
    });
    return (
        <div className='border border-success w-50 text-center text-success'>
            <h4> Functional Component </h4>
            <br></br>Id : {studState.sid}
            <br></br>Name : {studState.sname}
            <br></br>Email : {studState.email}
            <br></br>Phone : {studState.phone}
        </div>
    );
}
export default Student1;