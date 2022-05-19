import { Component } from 'react'

class Phone extends Component {
    static displayName = "PhoneComponent"
    static defaultProps = {
        number: 989898999
    }
    state = { };

    constructor(props) {
        console.log('Phone - constructor')
        super(props)
    }

    render() {
        console.log('Phone - render ')
        return (
            <div className='border border-success'>
                <h2>  Phone: {this.props.number}</h2>
            </div>
        );
    }

    static getDerivedStateFromProps(myProps, myState) {
        console.log('Phone - getDerivedStateFromProps ');
        return {};
    }
    componentDidMount() {
        console.log('Phone - componentDidMount ');
    }
    componentWillUnmount() {
        console.log('Phone - componentWillUnmount');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Phone - shouldComponentUpdate ');
        //console.log('Phone - ', this.props.number);
        //console.log('Phone - ', nextProps.number);
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Phone - getSnapshotBeforeUpdate ');
        return null;
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Phone - componentDidUpdate ');
    }
    // Below are Deprecated
    /*
    componentWillMount() {
        console.log('Phone - componentWillMount ');
    }
    componentWillReceiveProps(nextProps) {
        console.log('Phone - componentWillReceiveProps ');
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Phone - componentWillUpdate ');
    }*/
}
export default Phone;