import { Component } from 'react'
import Phone from './Phone'

class Student extends Component {

    constructor(props) {
        console.log('Student - constructor')
        super(props)
        this.state = {
            message: 'Hello Guys',
            showPhone: false,
            pnumber: 12121212
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
                <br/>
                {phoneComp}
            </div>
        );
    }

    componentDidMount() {
        console.log('Student - componentDidMount ');
    }

    componentWillMount() { // Not to be used
        console.log('Student - componentWillMount ', this.state.message);
    }
    componentWillUnmount() {
        console.log('Student - componentWillUnmount');
    }

    componentWillReceiveProps(nextProps) { // Not to be used
        console.log('Student - componentWillReceiveProps ');
    }
    componentWillUpdate(nextProps, nextState) { // Not to be used
        console.log('Student - componentWillUpdate ');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Student - shouldComponentUpdate ');
        console.log(this.state.message);
        console.log(nextState.message);
        return this.state.message !== nextState.message || this.state.showPhone !== nextState.showPhone || this.state.pnumber !== nextState.pnumber;
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Student - componentDidUpdate ');
    }
}
export default Student;