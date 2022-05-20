import { useSelector } from "react-redux";

function Employee() {
    const employeeInfo = useSelector(state => state.empStateData)
    const studentInfo = useSelector(state => state.studStateData)
    return (
        <div className="border bg-success">
            <h1>Employee Details</h1>
            <h4>Eid {employeeInfo.employeeId}</h4>
            <h4>Name {employeeInfo.employeeName}</h4>
            <h4>Email {employeeInfo.employeeEmail}</h4>
            <h4>Phone {employeeInfo.phone}</h4>

            <h1>Student Details</h1>
            <h1>Sid {studentInfo.studentId}</h1>
        </div>
    );
}
export default Employee;