import { useState } from "react";

const Student3 = () => {
    const [studState, setStudState] = useState({
        sid: 104,
        sname: 'Manoj',
        email: 'manish@gmail.com',
        phone: 6666666
    });

    return (
        <div className='border border-danger w-50 text-center text-danger'>
            <h4> Arrow Function Component </h4>
            <br></br>Id : {studState.sid}
            <br></br>Name : {studState.sname}
            <br></br>Email : {studState.email}
            <br></br>Phone : {studState.phone}
        </div>
    );
}
export default Student3;