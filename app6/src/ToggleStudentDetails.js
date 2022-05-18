class ToggleStudentDetails {
    static updateShowDetailsForES6(state, props) {
        return {
            showStudDetails: !state.showStudDetails,
        };
    }

    static updateShowDetailsForFuncComponent(state, props) {
        return {
            showStudDetails: !state.showStudDetails,
            stud : state.stud
        };
    }
}
export default ToggleStudentDetails;
