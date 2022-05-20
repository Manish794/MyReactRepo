import { Component } from "react";

class Hello extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    componentDidMount() {
        console.log('Hello - componentDidMount ', this.state.count);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Hello - componentDidUpdate ', this.state.count);
    }
    componentWillUnmount() {
        console.log('Hello - componentWillUnmount', this.state.count);
    }

    render() {
        //console.log('Hello - render', this.state.count);
        return (
            <div className="border border-danger mt-5">
                <h3>This is hello component</h3>
                <h4>Count {this.state.count}</h4>
                <h4><button className="" onClick={() => this.setState({count : this.state.count + 1})}>Increase</button></h4>
            </div>
        );
    }
}

export default Hello;