import { Component } from 'react'
import Phone from './Phone'

class Student extends Component {

    static defaultProps = {
        showPhone: false,
        phone: 12121212
    }
    static displayName = "StudentComponent"

    constructor(props) {
        console.log('Student - constructor')
        super(props)
        this.state = {
            message: 'Hello Guys'
        };
    }

    changeMessage = () => {
        this.setState(
            () => {
                return {
                    message: 'Thanks Guys'
                }
            }
        );
    }

    showHidePhone = () => {
        this.setState(
            (prevState) => {
                return {
                    showPhone: !prevState.showPhone
                }
            }
        );
    }

    changePhone = () => {
        this.setState(
            () => {
                return {
                    pnumber: 98989898
                }
            }
        );
    }

    render() {
        console.log('Student - render ')
        var phoneComp = null;
        if (this.state.showPhone) {
            phoneComp = <Phone number={this.state.pnumber} />
        }
        return (
            <div className='border border-success'>
                <h2>  {this.state.message}</h2>
                <button className='btn btn-success' onClick={this.changeMessage}> Change Message</button>
                <button className='btn btn-info' onClick={this.showHidePhone}> Show Phone</button>
                <button className='btn btn-warning' onClick={this.changePhone}> Change Phone</button>
                <br />
                {phoneComp}
            </div>
        );
    }
    static getDerivedStateFromProps(myProps, myState) {
        console.log('Student - getDerivedStateFromProps ');
        //console.log('myProps ', myProps);
        //console.log('myState ', myState);
        if(!myState.pnumber){
            return {
                showPhone: myProps.showPhone,
                pnumber: myProps.phone
            };
        }
        return myState;
    }
    componentDidMount() {
        console.log('Student - componentDidMount ');
    }
    componentWillUnmount() {
        console.log('Student - componentWillUnmount');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Student - shouldComponentUpdate ');
        //console.log(this.state);
        //console.log(nextState);
        return this.state.message !== nextState.message || this.state.showPhone !== nextState.showPhone || this.state.pnumber !== nextState.pnumber;
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Student - componentDidUpdate ');
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Student - getSnapshotBeforeUpdate ');
        //console.log('prevProps - ', prevProps);
        //console.log('prevState - ', prevState);
        return null;
    }
    /*
    componentWillMount() { // Not to be used
        console.log('Student - componentWillMount ', this.state.message);
    }
    componentWillReceiveProps(nextProps) { // Not to be used
        console.log('Student - componentWillReceiveProps ');
    }
    componentWillUpdate(nextProps, nextState) { // Not to be used
        console.log('Student - componentWillUpdate ');
    }
    */
}
export default Student;