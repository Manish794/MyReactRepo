
const initialState = {
    studentId: "S-001",
    studentName: "Manish",
    studentEmail: "manish@gmail.com",
    phone: 9999888877
}

const studentReducer = (currentState = initialState, action) => {
    console.log('Dispatched ', action);
    switch (action.type) {
        case 'UPDATE_NAME':
            return {
                ...currentState,
                studentName: action.payload
            }
        case 'UPDATE_EMAIL':
            return {
                ...currentState,
                studentEmail: action.payload
            }
        default:
            return currentState;
    }
}
export default studentReducer;
