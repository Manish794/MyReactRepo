import { useEffect, useState } from "react";

function Hello1() {

    const [count, setCount] = useState(0);
    const [className, setClassName] = useState("border bg-success mt-5");

    useEffect(() => {
        console.log('Hello1 - useEffect - mounting');

        // Cleanu code will go here
        return function cleanup(){
            console.log('Hello1 - useEffect - unmounting');
        }
    },[]);

    useEffect(() => {
        console.log('Hello1 - useEffect - updating count', count);
    }, [count]);

    useEffect(() => {
        console.log('Hello1 - useEffect - updating class', className);
    }, [className]);

    //console.log('Hello1 - render', count);
    return (
        <div className={className}>
            <h2 className="text-warning">This is hello1 component</h2>
            <h4 className="text-warning">Count {count}</h4>
            <h4><button onClick={() => setCount(count + 1)}>Increase</button></h4>
            <h4><button onClick={() => setClassName("border bg-danger mt-5")}>Change Color</button></h4>
        </div>
    );
}


export default Hello1;