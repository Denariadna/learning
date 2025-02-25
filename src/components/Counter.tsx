import { useState } from "react";
import * as classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            <h2 className={classes.text}>kfnejnej</h2>
            <button onClick={increment}>Increment</button>
        </div>
    );
};
