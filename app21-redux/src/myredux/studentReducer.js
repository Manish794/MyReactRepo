
const initialState = {
    studentId: "S-001",
    studentName: "Manish",
    studentEmail: "manish@gmail.com",
    phone: 9999888877
}

const studentReducer = (currentState = initialState, action) => {
    switch (action.type) {
        default:
            return currentState;
    }
}
export default studentReducer;
