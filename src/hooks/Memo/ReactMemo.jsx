import {memo, useState} from "react";
import {Counts} from "./MemoCount.jsx";

export const ReactMemo =() => {
    const [count, setCount] = useState(0);


    return (
        <>
        <h1>{count}</h1>
            <button  onClick={()=>setCount((prev)=>prev+1)}>
                Increment
            </button>
            <Counts />
        </>

    );
};
