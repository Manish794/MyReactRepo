import { Component } from 'react'

class Phone extends Component {

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

    componentDidMount() {
        console.log('Phone - componentDidMount ');
    }

    componentWillMount() {
        console.log('Phone - componentWillMount ');
    }
    componentWillUnmount() {
        console.log('Phone - componentWillUnmount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('Phone - componentWillReceiveProps ');
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Phone - componentWillUpdate ');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Phone - shouldComponentUpdate ');
        console.log('Phone - ', this.props.number);
        console.log('Phone - ', nextProps.number);
        return true;
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Phone - componentDidUpdate ');
    }
}
export default Phone;