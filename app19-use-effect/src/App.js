import { Component } from "react";
import Hello from "./Hello";
import Hello1 from "./Hello1";

class App extends Component {
    state = {
        showHello : true,
        showHello1 : true
    }
    render() {
            var helloElement = null;
            var hello1Element = null;
            if(this.state.showHello){
                helloElement = <Hello/>;
            }
            if(this.state.showHello1){
                hello1Element = <Hello1/>;
            }
        return (
              <div className="border border-primary">
                <button className="btn btn-primary" onClick={() => this.setState({showHello : !this.state.showHello})}>Show/Hide Hello</button>
                <button className="btn btn-dark" onClick={() => this.setState({showHello1 : !this.state.showHello1})}>Show/Hide Hello1</button>
                {helloElement}

                {hello1Element}
            </div>
        );
    }
}

export default App;