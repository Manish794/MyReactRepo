import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Employee() {
    const employeeInfo = useSelector(state => state.empStateData)

    var dispatch = useDispatch();
    const [empState, setEmpState] = useState({ ename: '', email: '' })

    const handleChange = (event) => {
        setEmpState((state) => {
            return {
                ...state,
                [event.target.name]: event.target.value
            }
        }
        );
    }

    return (
        <div className="border bg-success">
            <h1>Employee Details</h1>
            <h4>Eid {employeeInfo.employeeId}</h4>
            <h4>Name {employeeInfo.employeeName}
                <input name="ename" type='text' value={empState.ename} onChange={handleChange} />
                <button className="bg-light" onClick={() => dispatch({ type: 'UPDATE_ENAME', payload: empState.ename})}>Update Name</button>

            </h4>
            <h4>Email {employeeInfo.employeeEmail}</h4>
            <h4>Phone {employeeInfo.phone}</h4>
        </div>
    );
}
export default Employee;