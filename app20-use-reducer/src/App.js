import { useReducer } from "react"

function App() {


    function reducer(state, action) {
        console.log('Action dispatched ', action.type);
        switch (action.type) {
            case 'ADD': return { count: state.count + action.increase }
            case 'SUB': return { count: state.count - action.decrease }
            case 'RESET': return { count: 0 }
            default: return state
        }
    }

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <div className="border border-primary">
            <h1>Count {state.count}</h1>
            <button className="btn btn-primary ms-2" onClick={() => dispatch({ type: 'ADD', increase: 1 })}>Add1</button>
            <button className="btn btn-primary ms-2" onClick={() => dispatch({ type: 'ADD', increase: 2 })}>Add2</button>
            <button className="btn btn-primary ms-2" onClick={() => dispatch({ type: 'ADD', increase: 3 })}>Add3</button>
            <button className="btn btn-primary ms-2" onClick={() => dispatch({ type: 'ADD', increase: 10 })}>Add10</button>
            <button className="btn btn-primary ms-2" onClick={() => dispatch({ type: 'SUB', decrease: 1 })}>Sub1</button>
            <button className="btn btn-primary ms-2" onClick={() => dispatch({ type: 'SUB', decrease: 2 })}>Sub2</button>
            <button className="btn btn-primary ms-2" onClick={() => dispatch({ type: 'SUB', decrease: 3 })}>Sub3</button>
            <button className="btn btn-primary ms-2" onClick={() => dispatch({ type: 'SUB', decrease: 10 })}>Sub10</button>
            <button className="btn btn-primary ms-2" onClick={() => dispatch({ type: 'RESET' })}>Reset</button>

        </div>
    );
}


export default App;